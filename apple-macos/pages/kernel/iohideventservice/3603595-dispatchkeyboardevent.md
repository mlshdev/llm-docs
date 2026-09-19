> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventservice/3603595-dispatchkeyboardevent

# dispatchKeyboardEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ (deprecated in 11.0)

## Declaration

```objectivec
virtual void dispatchKeyboardEvent(AbsoluteTime timeStamp, UInt32 usagePage, UInt32 usage, UInt32 value, UInt8 pressCount, UInt8 longPress, UInt8 clickSpeed, IOOptionBits options);
```
