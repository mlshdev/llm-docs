> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/absolutepointereventcallback](https://developer.apple.com/documentation/kernel/absolutepointereventcallback)

# AbsolutePointerEventCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef void (*AbsolutePointerEventCallback)(OSObject *target, int buttons, IOGPoint *newLoc, IOGBounds *bounds, bool proximity, int pressure, int stylusAngle, AbsoluteTime ts, OSObject *sender, void *refcon);
```
