> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1558594-dispatchmultiaxispointerevent](https://developer.apple.com/documentation/kernel/iohideventservice/1558594-dispatchmultiaxispointerevent)

# dispatchMultiAxisPointerEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void dispatchMultiAxisPointerEvent(AbsoluteTime timeStamp, UInt32 buttonState, IOFixed x, IOFixed y, IOFixed z, IOFixed rX, IOFixed rY, IOFixed rZ, IOOptionBits options);
```
