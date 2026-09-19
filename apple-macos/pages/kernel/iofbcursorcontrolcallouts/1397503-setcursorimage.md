> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofbcursorcontrolcallouts/1397503-setcursorimage

# setCursorImage

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

## Declaration

```objectivec
IOReturn (*setCursorImage)(void *target, void *ref, IOHardwareCursorDescriptor *description, IOFBCursorRef cursorImage);
```
