import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Game() {
  const limitTime = 300;

  let interval = null;

  const [display, setDisplay] = useState('');
  const [chances, setChances] = useState(0);
  const [points, setPoints] = useState(0);
  const [result, setResult] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [timer, setTimer] = useState(0);

  const initGame = async () => {
    selectEquation();
    setChances(3);
  };

  const selectEquation = async () => {
    const numbers = [];

    const maxNumber = Math.round(`${Math.floor(points)}`.length / 4);

    if (points < 1000) {
      numbers[2] = 1;
    } else if (points < 10000) {
      numbers[2] = Math.round(Math.random() * 1) + 1;
    } else if (points < 1000000) {
      numbers[2] = Math.round(Math.random() * 2) + 1;
    } else {
      numbers[2] = Math.round(Math.random() * 3) + 1;
    }

    const decimal =
      maxNumber - (numbers[2] - 1) > 4 ? 4 : maxNumber - (numbers[2] - 1);

    numbers[0] = Math.round(Math.random() * 10 ** decimal);
    numbers[1] = Math.round(Math.random() * 10 ** decimal);

    if (numbers[0] === 0 && numbers[1] === 0) {
      selectEquation();
      return;
    }

    if (numbers[2] === 2) {
      if (numbers[0] < numbers[1]) {
        const tmp = numbers[0];
        numbers[0] = numbers[1];
        numbers[1] = tmp;
      }
    }

    if (numbers[2] === 4) {
      if (numbers[0] === 0 || numbers[1] === 0) {
        selectEquation();
        return;
      }
      if (numbers[0] < numbers[1]) {
        const tmp = numbers[0];
        numbers[0] = numbers[1];
        numbers[1] = tmp;
      }
      numbers[0] = numbers[0] * numbers[1];
    }

    setResult(
      numbers[2] === 1
        ? numbers[0] + numbers[1]
        : numbers[2] === 2
        ? numbers[0] - numbers[1]
        : numbers[2] === 3
        ? numbers[0] * numbers[1]
        : numbers[0] / numbers[1],
    );

    setDisplay(
      `${numbers[0]} ${
        numbers[2] === 1
          ? '+'
          : numbers[2] === 2
          ? '-'
          : numbers[2] === 3
          ? '*'
          : '/'
      } ${numbers[1]}`,
    );
  };

  const reply = number => {
    if (!(result && result > 0)) {
      return;
    }

    const response = parseInt(`${answer}${number}`, 10);

    if (`${response}`.length < `${result}`.length) {
      setAnswer(response);
    } else {
      if (response === result) {
        setPoints(points => {
          return points + (((limitTime - timer) / 100) * (points + 1)) / 2;
        });
      } else {
        loseTurn();
      }
      setTimer(0);
      skip();
    }
  };

  const skip = () => {
    setAnswer(0);
    selectEquation();
  };

  const loseTurn = () => {
    if (chances <= 1) {
      gameOver();
      return;
    }

    setChances(chances => chances - 1);
  };

  const gameOver = () => {
    setDisplay('');
    setChances(0);
    setAnswer(0);
    setResult(0);
  };

  useEffect(() => {
    if (chances > 0) {
      if (timer >= limitTime) {
        clearInterval(interval);
        setTimer(0);
        skip();
        loseTurn();
      } else {
        interval = setInterval(() => {
          setTimer(timer => timer + 1);
        }, 100);
      }
    } else if (chances < 0 && timer !== 0) {
      clearInterval(interval);
      setTimer(0);
    }

    return () => clearInterval(interval);
  }, [chances, timer]);

  return (
    <View style={[styles.col, {backgroundColor: '#F3FCF0'}]}>
      <View style={[styles.row, {flex: 1, padding: 7, maxHeight: 140}]}>
        <View style={[styles.col, {flex: 8, padding: 8}]}>
          <View
            style={[
              styles.col,
              {
                backgroundColor: '#DBE7DE',
                alignSelf: 'stretch',
                borderRadius: 8,
              },
            ]}>
            <Text style={[styles.text, {fontSize: 52}]}>{display}</Text>
          </View>
        </View>
        <View style={[styles.col, styles.button, {flex: 5}]}>
          <TouchableOpacity
            onPress={() => (chances === 0 ? initGame() : initGame())}
            style={[styles.buttonContain, {borderRadius: 8}]}>
            <Text style={[styles.text, styles.buttonText]}>
              {chances > 0 ? chances : 'começar'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styles.row,
          {
            flex: undefined,
            alignSelf: 'stretch',

            height: 8,
          },
        ]}>
        <View style={{flex: limitTime - timer, backgroundColor: 'red'}}></View>
        <View style={{flex: timer}}></View>
      </View>
      <View style={[styles.col, {flex: 4, maxHeight: 380}]}>
        <View style={[styles.row, {marginTop: 8}]}>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity
              style={styles.buttonContain}
              onPress={() => reply(7)}>
              <Text style={[styles.text, styles.buttonText]}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity
              style={styles.buttonContain}
              onPress={() => reply(8)}>
              <Text style={[styles.text, styles.buttonText]}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity
              style={styles.buttonContain}
              onPress={() => reply(9)}>
              <Text style={[styles.text, styles.buttonText]}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <Text style={[styles.text, styles.buttonText]}></Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity
              style={styles.buttonContain}
              onPress={() => reply(4)}>
              <Text style={[styles.text, styles.buttonText]}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity
              style={styles.buttonContain}
              onPress={() => reply(5)}>
              <Text style={[styles.text, styles.buttonText]}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity
              style={styles.buttonContain}
              onPress={() => reply(6)}>
              <Text style={[styles.text, styles.buttonText]}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <Text style={[styles.text, styles.buttonText]}></Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity
              style={styles.buttonContain}
              onPress={() => reply(1)}>
              <Text style={[styles.text, styles.buttonText]}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity
              style={styles.buttonContain}
              onPress={() => reply(2)}>
              <Text style={[styles.text, styles.buttonText]}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity
              style={styles.buttonContain}
              onPress={() => reply(3)}>
              <Text style={[styles.text, styles.buttonText]}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity
              style={[styles.buttonContain, {backgroundColor: '#CE212C'}]}
              onPress={() => setAnswer(0)}>
              <Text style={[styles.text, styles.buttonText]}>del</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.col, styles.button, {flex: 1 / 4}]}>
            <TouchableOpacity
              style={[styles.buttonContain, {marginRight: 8}]}
              onPress={() => reply(0)}>
              <Text style={[styles.text, styles.buttonText]}>0</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[styles.col, styles.button, {flex: 3 / 4, paddingLeft: 0}]}>
            <TouchableOpacity
              style={[styles.buttonContain, {backgroundColor: '#EFA647'}]}
              onPress={() => skip()}>
              <Text style={[styles.text, styles.buttonText]}>pular</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.col}>
        <Text style={[styles.text, {fontSize: 24}]}>
          {answer > 0 ? `Resposta: ${answer}` : ''}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.text, {fontSize: 24}]}>
          {points > 0 ? Math.floor(points) : ''}
        </Text>
        <Text
          style={[styles.text, {fontSize: 12, marginTop: 12, marginLeft: 4}]}>
          {points > 0 ? `Pontos` : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  col: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },

  button: {
    flex: 1,

    padding: 8,
  },
  buttonContain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',

    borderRadius: 16,

    backgroundColor: '#3E7F4C',
  },
  buttonText: {
    fontSize: 24,

    color: '#EDF3EE',
  },

  text: {
    // fontFamily: 'ComicNeue-Bold',
    fontFamily: 'KGWhYYouGoTtABeSoMeAn',
  },
});
