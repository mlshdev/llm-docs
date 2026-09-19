> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/relativepointereventcallback

# RelativePointerEventCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef void (*RelativePointerEventCallback)(OSObject *target, int buttons, int dx, int dy, AbsoluteTime ts, OSObject *sender, void *refcon);
```
