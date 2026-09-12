> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodetailedtiminginformationv2/1386950-scalerflags](https://developer.apple.com/documentation/kernel/iodetailedtiminginformationv2/1386950-scalerflags)

# scalerFlags

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.1+

If the mode is scaled, kIOScaleStretchToFit may be set to allow stretching. kIOScaleRotateFlags is mask which may have the value given by kIOScaleRotate90, kIOScaleRotate180, kIOScaleRotate270 to display a rotated framebuffer.

## Declaration

```objectivec
UInt32 scalerFlags;
```
