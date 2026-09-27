> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/scrollwheeleventaction

# ScrollWheelEventAction

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*ScrollWheelEventAction)(OSObject *target, short deltaAxis1, short deltaAxis2, short deltaAxis3, AbsoluteTime ts);
```
