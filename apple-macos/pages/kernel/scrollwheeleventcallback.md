> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/scrollwheeleventcallback](https://developer.apple.com/documentation/kernel/scrollwheeleventcallback)

# ScrollWheelEventCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef void (*ScrollWheelEventCallback)(OSObject *target, short deltaAxis1, short deltaAxis2, short deltaAxis3, IOFixed fixedDelta1, IOFixed fixedDelta2, IOFixed fixedDelta3, SInt32 pointDelta1, SInt32 pointDelta2, SInt32 pointDelta3, SInt32 options, AbsoluteTime ts, OSObject *sender, void *refcon);
```
