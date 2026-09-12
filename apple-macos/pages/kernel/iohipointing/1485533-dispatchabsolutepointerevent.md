> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohipointing/1485533-dispatchabsolutepointerevent](https://developer.apple.com/documentation/kernel/iohipointing/1485533-dispatchabsolutepointerevent)

# dispatchAbsolutePointerEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void dispatchAbsolutePointerEvent(IOGPoint *newLoc, IOGBounds *bounds, UInt32 buttonState, bool proximity, int pressure, int pressureMin, int pressureMax, int stylusAngle, AbsoluteTime ts);
```
