> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidsystem/3516599-keyboardspecialevent

# keyboardSpecialEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
void keyboardSpecialEvent(unsigned int eventType, unsigned int flags, unsigned int key, unsigned int flavor, UInt64 guid, bool repeat, AbsoluteTime ts, OSObject *sender);
```
