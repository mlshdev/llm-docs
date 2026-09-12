> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidsystem/1646031-keyboardspecialevent](https://developer.apple.com/documentation/kernel/iohidsystem/1646031-keyboardspecialevent)

# keyboardSpecialEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual void keyboardSpecialEvent(unsigned int eventType, unsigned int flags, unsigned int key, unsigned int flavor, UInt64 guid, bool repeat, AbsoluteTime ts);
```
