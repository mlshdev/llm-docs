> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/updateeventflagscallback

# UpdateEventFlagsCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef void (*UpdateEventFlagsCallback)(OSObject *target, unsigned int flags, OSObject *sender, void *refcon);
```
