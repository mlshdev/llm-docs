> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1558617-dispatchdigitizereventwithtiltor](https://developer.apple.com/documentation/kernel/iohideventservice/1558617-dispatchdigitizereventwithtiltor)

# dispatchDigitizerEventWithTiltOrientation

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void dispatchDigitizerEventWithTiltOrientation(AbsoluteTime timeStamp, UInt32 ID, DigitizerTransducerType type, bool inRange, UInt32 buttonState, IOFixed x, IOFixed y, IOFixed z, IOFixed tipPressure, IOFixed auxPressure, IOFixed twist, IOFixed tiltX, IOFixed tiltY, IOOptionBits options);
```
