> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofbcursorcontrolcallouts/1397514-setcursorstate

# setCursorState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

## Declaration

```objectivec
IOReturn (*setCursorState)(void *target, void *ref, SInt32 x, SInt32 y, bool visible);
```
