> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/3603595-dispatchkeyboardevent](https://developer.apple.com/documentation/kernel/iohideventservice/3603595-dispatchkeyboardevent)

# dispatchKeyboardEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ (deprecated in 11.0)

## Declaration

```objectivec
virtual void dispatchKeyboardEvent(AbsoluteTime timeStamp, UInt32 usagePage, UInt32 usage, UInt32 value, UInt8 pressCount, UInt8 longPress, UInt8 clickSpeed, IOOptionBits options);
```
