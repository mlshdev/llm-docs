> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/keyboardspecialeventcallback

# KeyboardSpecialEventCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef void (*KeyboardSpecialEventCallback)(OSObject *target, unsigned int eventType, unsigned int flags, unsigned int key, unsigned int flavor, UInt64 guid, bool repeat, AbsoluteTime ts, OSObject *sender, void *refcon);
```
