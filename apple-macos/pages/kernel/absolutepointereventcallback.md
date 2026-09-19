> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/absolutepointereventcallback

# AbsolutePointerEventCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef void (*AbsolutePointerEventCallback)(OSObject *target, int buttons, IOGPoint *newLoc, IOGBounds *bounds, bool proximity, int pressure, int stylusAngle, AbsoluteTime ts, OSObject *sender, void *refcon);
```
