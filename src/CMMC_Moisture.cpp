/******************************************************************
 * Moisture sensor library for KB-IDE by chiang mai maker club
 *****************************************************************/

#include "CMMC_Moisture.h"

MOISTURE::MOISTURE() {}
MOISTURE::~MOISTURE() {}

void MOISTURE::begin(uint8_t _pin) {
  pinAnalog = _pin;
}

bool MOISTURE::readDigitalValue() {
  pinMode(pinAnalog, INPUT_PULLUP);
  return digitalRead(pinAnalog);
}

unsigned int MOISTURE::readAnalogValue() {
   return analogRead(pinAnalog);
}

unsigned int MOISTURE::mapValue(int _value, int _fromLow, int _fromHigh, int _toLow, int _toHigh) {
  // map(value, fromLow, fromHigh, toLow, toHigh)
  return map(_value, _fromLow, _fromHigh, _toLow, _toHigh);
}

unsigned int MOISTURE::waterLevel() {
  return map(analogRead(pinAnalog), 4095, 0, 0, 100);
}