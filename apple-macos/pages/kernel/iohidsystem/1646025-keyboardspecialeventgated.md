> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidsystem/1646025-keyboardspecialeventgated](https://developer.apple.com/documentation/kernel/iohidsystem/1646025-keyboardspecialeventgated)

# keyboardSpecialEventGated

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void keyboardSpecialEventGated(unsigned int eventType, unsigned int flags, unsigned int key, unsigned int flavor, UInt64 guid, bool repeat, AbsoluteTime ts, OSObject *sender);
```
