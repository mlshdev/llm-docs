> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventservice/1558596-dispatchdigitizereventwithorient

# dispatchDigitizerEventWithOrientation

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
void dispatchDigitizerEventWithOrientation(AbsoluteTime timeStamp, UInt32 transducerID, DigitizerTransducerType type, bool inRange, UInt32 buttonState, IOFixed x, IOFixed y, IOFixed z, IOFixed tipPressure, IOFixed auxPressure, IOFixed twist, DigitizerOrientationType orientationType, IOFixed *orientationParams, UInt32 orientationParamCount, IOOptionBits options);
```
