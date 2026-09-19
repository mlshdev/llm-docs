> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidsystem/1646017-doregisterscreen

# doRegisterScreen

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
static IOReturn doRegisterScreen(IOHIDSystem *self, IOGraphicsDevice *io_gd, IOGBounds *bp, IOGBounds *vbp, void *arg3);
```
