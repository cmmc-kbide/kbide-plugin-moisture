/******************************************************************
 * Moisture sensor library for KB-IDE by chiang mai maker club
 ******************************************************************/

#ifndef cmmc_moisture_h
#define cmmc_moisture_h

#include <Arduino.h>


#if ARDUINO < 100
  #include <WProgram.h>
#else
  #include <Arduino.h>
#endif

class MOISTURE
{
public:
  MOISTURE();
  ~MOISTURE();

  void begin(uint8_t _pin);
  bool readDigitalValue();
  unsigned int readAnalogValue();
  unsigned int mapValue(int _value, int _fromLow, int _fromHigh, int _toLow, int _toHigh);
  unsigned int waterLevel();
  
protected:

private:
  int pinAnalog;
  
};

#endif /*cmmc_moisture_h*/
