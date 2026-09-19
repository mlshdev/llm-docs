> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/absolutepointereventaction

# AbsolutePointerEventAction

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*AbsolutePointerEventAction)(OSObject *target, int buttons, IOGPoint *newLoc, IOGBounds *bounds, bool proximity, int pressure, int stylusAngle, AbsoluteTime ts);
```
