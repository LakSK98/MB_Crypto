import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../Core/theme';
import {TextInput, Button} from 'react-native-paper';
import PaymentsScreen from './PaymentScreen';

function CryptoScreen({navigation}) {
  const [confirmMassage, setConfirmMassage] = React.useState('');
  const [coin, setCoin] = React.useState('');
  const [coinValue, setCoinValue] = React.useState('');

  function bitCoinPressed() {
    setCoin('Bitcoin');
    setCoinValue(21628.0);
  }

  function cardanoPressed() {
    setCoin('Cardano');
    setCoinValue(0.52);
  }

  function ethereumPressed() {
    setCoin('Ethereum');
    setCoinValue(1267.86);
  }

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        {confirmMassage ? (
          <Text style={styles.confirmMassage}>
            {' '}
            success! Plase check your email.
          </Text>
        ) : null}
        <Text style={styles.coinTitle}>Selected : {coin}</Text>
        <Text style={styles.priceTitle}>Current Price : $ {coinValue}</Text>
        <TextInput
          label="Your amount"
          underlineColor={theme.colors.primary}
          backgroundColor={theme.colors.white}
          // value={text}
          // onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.cryptoContainer}>
        <TouchableOpacity
          style={
            coin == 'Bitcoin'
              ? styles.focusedCoinConteiner
              : styles.coinContainer
          }
          onPress={bitCoinPressed}>
          <Image
            style={styles.image}
            source={require('../Assets/Bitcoin.png')}
          />
          <Text style={styles.coinName}>BitCoin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            coin == 'Cardano'
              ? styles.focusedCoinConteiner
              : styles.coinContainer
          }
          onPress={cardanoPressed}>
          <Image
            style={styles.image}
            source={require('../Assets/Cardano.png')}
          />
          <Text style={styles.coinName}>Cardano</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            coin == 'Ethereum'
              ? styles.focusedCoinConteiner
              : styles.coinContainer
          }
          onPress={ethereumPressed}>
          <Image
            style={styles.image}
            source={require('../Assets/Ethereum.png')}
          />
          <Text style={styles.coinName}>Ethereum</Text>
        </TouchableOpacity>
      </View>
      {/* <Button
        style={styles.publishButton}
        mode="outlined"
        uppercase={false}
        labelStyle={styles.publishButtonlabelStyle}
        // onPress={() => setOpen(true)}
      >
        Publish Event
      </Button> */}
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          mode="outlined"
          uppercase={false}
          labelStyle={styles.publishButtonlabelStyle}
          onPress={() =>
            setConfirmMassage(1)
          }>
          Submit
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.white,
    // marginBottom: 100,
  },
  cryptoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 80,
  },
  image: {
    width: 100,
    height: 100,
  },
  coinName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.dark,
  },
  focusedCoinConteiner: {
    width: '30%',
    height: '110%',
    alignItems: 'center',
    backgroundColor: theme.colors.cardbackgroundLight,
    borderRadius: 10,
    marginHorizontal: '1%',
    borderColor: theme.colors.medium,
    borderWidth: 1,
  },
  coinContainer: {
    width: '30%',
    height: '110%',
    alignItems: 'center',
    backgroundColor: theme.colors.cardbackgroundDark,
    borderRadius: 10,
    marginHorizontal: '1%',
  },
  detailsContainer: {
    width: '92%',
    height: '20%',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  coinTitle: {
    fontSize: 25,
    color: theme.colors.dark,
    fontFamily: 'serif',
    fontWeight: 'bold',
    marginVertical: '2%',
    marginLeft: '1%',
  },
  priceTitle: {
    fontSize: 20,
    color: theme.colors.dark,
    marginBottom: '5%',
    marginLeft: '1%',
  },
  button: {
    width: '70%',
    alignSelf: 'center',
    backgroundColor: theme.colors.primary,
    height: 44,
  },
  publishButtonlabelStyle: {
    color: theme.colors.white,
    marginTop: '4%',
    fontSize: 17,
  },
  buttonContainer: {
    width: '100%',
    marginTop: '15%',
    marginBottom: '15%',
  },
  confirmMassage: {
    color: theme.colors.primary,
    color: theme.colors.primary,
    marginLeft: 2,
    alignItems: 'center',
    marginBottom: '3%',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CryptoScreen;
