> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscompositesourceover](https://developer.apple.com/documentation/appkit/nscompositesourceover)

# NSCompositeSourceOver

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.12)

Source image wherever source image is opaque, and destination image elsewhere. (`R = S + D*(1 - Sa)`)

> Use [NSCompositingOperationSourceOver](nscompositingoperation/sourceover.md) instead.

## Declaration

```objectivec
static const NSCompositingOperation NSCompositeSourceOver;
```

## See Also

### Deprecated Compositing Modes

- [NSCompositeClear](nscompositeclear.md): Deprecated. Transparent. (`R = 0`)
- [NSCompositeCopy](nscompositecopy.md): Deprecated. Source image. (`R = S`)
- [NSCompositeSourceIn](nscompositesourcein.md): Deprecated. Source image wherever both images are opaque, and transparent elsewhere. (`R = S*Da`)
- [NSCompositeSourceOut](nscompositesourceout.md): Deprecated. Source image wherever source image is opaque but destination image is transparent, and transparent elsewhere. (`R = S*(1 - Da)`)
- [NSCompositeSourceAtop](nscompositesourceatop.md): Deprecated. Source image wherever both images are opaque, destination image wherever destination image is opaque but source image is transparent, and transparent elsewhere. (`R = S*Da + D*(1 - Sa)`)
- [NSCompositeDestinationOver](nscompositedestinationover.md): Deprecated. Destination image wherever destination image is opaque, and source image elsewhere. (`R = S*(1 - Da) + D`)
- [NSCompositeDestinationIn](nscompositedestinationin.md): Deprecated. Destination image wherever both images are opaque, and transparent elsewhere. (`R = D*Sa`)
- [NSCompositeDestinationOut](nscompositedestinationout.md): Deprecated. Destination image wherever destination image is opaque but source image is transparent, and transparent elsewhere. (`R = D*(1 - Sa)`)
- [NSCompositeDestinationAtop](nscompositedestinationatop.md): Deprecated. Destination image wherever both images are opaque, source image wherever source image is opaque but destination image is transparent, and transparent elsewhere. (`R = S*(1 - Da) + D*Sa`)
- [NSCompositeXOR](nscompositexor.md): Deprecated. Exclusive OR of source and destination images. (`R = S*(1 - Da) + D*(1 - Sa)`)
- [NSCompositePlusDarker](nscompositeplusdarker.md): Deprecated. Sum of source and destination images, with color values approaching 0 as a limit. (`R = MAX(0, (1 - D) + (1 - S))`)
- [NSCompositePlusLighter](nscompositepluslighter.md): Deprecated. Sum of source and destination images, with color values approaching 1 as a limit. (`R = MIN(1, S + D)`)
- [NSCompositeMultiply](nscompositemultiply.md): Deprecated. The source color is multiplied by the destination color.
- [NSCompositeScreen](nscompositescreen.md): Deprecated. Multiplies the complement of the destination and source color values, and then complements the result.
- [NSCompositeOverlay](nscompositeoverlay.md): Deprecated. Source colors overlay the destination.
