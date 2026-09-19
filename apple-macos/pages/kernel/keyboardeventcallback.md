> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/keyboardeventcallback

# KeyboardEventCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef void (*KeyboardEventCallback)(OSObject *target, unsigned int eventType, unsigned int flags, unsigned int key, unsigned int charCode, unsigned int charSet, unsigned int origCharCode, unsigned int origCharSet, unsigned int keyboardType, bool repeat, AbsoluteTime ts, OSObject *sender, void *refcon);
```
