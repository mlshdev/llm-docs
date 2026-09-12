> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1558555-dispatchdigitizereventwithpolaro](https://developer.apple.com/documentation/kernel/iohideventservice/1558555-dispatchdigitizereventwithpolaro)

# dispatchDigitizerEventWithPolarOrientation

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void dispatchDigitizerEventWithPolarOrientation(AbsoluteTime timeStamp, UInt32 transducerID, DigitizerTransducerType type, bool inRange, UInt32 buttonState, IOFixed x, IOFixed y, IOFixed z, IOFixed tipPressure, IOFixed tanPressure, IOFixed twist, IOFixed altitude, IOFixed azimuth, IOOptionBits options);
```
