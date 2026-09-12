> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/relativepointereventcallback](https://developer.apple.com/documentation/kernel/relativepointereventcallback)

# RelativePointerEventCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef void (*RelativePointerEventCallback)(OSObject *target, int buttons, int dx, int dy, AbsoluteTime ts, OSObject *sender, void *refcon);
```
