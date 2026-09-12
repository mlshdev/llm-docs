> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1558562-dispatchtabletpointerevent](https://developer.apple.com/documentation/kernel/iohideventservice/1558562-dispatchtabletpointerevent)

# dispatchTabletPointerEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void dispatchTabletPointerEvent(AbsoluteTime timeStamp, UInt32 transducerID, SInt32 x, SInt32 y, SInt32 z, IOGBounds *bounds, UInt32 buttonState, SInt32 tipPressure, SInt32 tipPressureMin, SInt32 tipPressureMax, SInt32 barrelPressure, SInt32 barrelPressureMin, SInt32 barrelPressureMax, SInt32 tiltX, SInt32 tiltY, UInt32 twist, IOOptionBits options);
```
