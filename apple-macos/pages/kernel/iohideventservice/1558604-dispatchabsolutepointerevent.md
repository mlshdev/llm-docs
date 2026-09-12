> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1558604-dispatchabsolutepointerevent](https://developer.apple.com/documentation/kernel/iohideventservice/1558604-dispatchabsolutepointerevent)

# dispatchAbsolutePointerEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void dispatchAbsolutePointerEvent(AbsoluteTime timeStamp, SInt32 x, SInt32 y, IOGBounds *bounds, UInt32 buttonState, bool inRange, SInt32 tipPressure, SInt32 tipPressureMin, SInt32 tipPressureMax, IOOptionBits options);
```
