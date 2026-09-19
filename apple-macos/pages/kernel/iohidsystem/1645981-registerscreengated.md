> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidsystem/1645981-registerscreengated

# registerScreenGated

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
IOReturn registerScreenGated(IOGraphicsDevice *io_gd, IOGBounds *bp, IOGBounds *vbp, SInt32 *index);
```
