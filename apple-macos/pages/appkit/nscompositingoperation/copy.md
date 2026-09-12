> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscompositingoperation/copy](https://developer.apple.com/documentation/appkit/nscompositingoperation/copy)

# NSCompositingOperation.copy (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

The source image.

## Declaration

```swift
case copy
```

<a id="Discussion"></a>

## Discussion

The source image replaces the pixels of the destination with the formula `R = S`.

## See Also

### Operations for Compositing

- [NSCompositingOperation.clear](clear.md): Transparency everywhere.
- [NSCompositingOperation.sourceOver](sourceover.md): The source image wherever it is opaque, and the destination image elsewhere.
- [NSCompositingOperation.sourceIn](sourcein.md): The source image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperation.sourceOut](sourceout.md): The source image wherever it is opaque and the destination image is transparent, and transparent elsewhere.
- [NSCompositingOperation.sourceAtop](sourceatop.md): The source image wherever both images are opaque, the destination image wherever it is opaque but the source image is transparent, and transparent elsewhere
- [NSCompositingOperation.destinationOver](destinationover.md): The destination image wherever it is opaque, and the source image elsewhere.
- [NSCompositingOperation.destinationIn](destinationin.md): The destination image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperation.destinationOut](destinationout.md): The destination image wherever it is opaque and the source image is transparent, and transparent elsewhere.
- [NSCompositingOperation.destinationAtop](destinationatop.md): The destination image wherever both images are opaque, the source image wherever it is opaque and the destination image is transparent, and transparent elsehwere.
- [NSCompositingOperation.xor](xor.md): Exclusive OR of the source and destination images.
- [NSCompositingOperation.plusDarker](plusdarker.md): The sum of the source and destination images, with color values approach 0 as a limit.
- [NSCompositingOperation.plusLighter](pluslighter.md): The sum of the source and destination images, with color values approach 1 as a limit.
- [NSCompositingOperation.multiply](multiply.md): The source color is multiplied by the destination color.
- [NSCompositingOperation.screen](screen.md): Multiplies the complement of the destination and source color values, and then complements the result.
- [NSCompositingOperation.overlay](overlay.md): Source colors overlay the destination.

# NSCompositingOperationCopy (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The source image.

## Declaration

```objectivec
NSCompositingOperationCopy
```

<a id="Discussion"></a>

## Discussion

The source image replaces the pixels of the destination with the formula `R = S`.

## See Also

### Operations for Compositing

- [NSCompositingOperationClear](clear.md): Transparency everywhere.
- [NSCompositingOperationSourceOver](sourceover.md): The source image wherever it is opaque, and the destination image elsewhere.
- [NSCompositingOperationSourceIn](sourcein.md): The source image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperationSourceOut](sourceout.md): The source image wherever it is opaque and the destination image is transparent, and transparent elsewhere.
- [NSCompositingOperationSourceAtop](sourceatop.md): The source image wherever both images are opaque, the destination image wherever it is opaque but the source image is transparent, and transparent elsewhere
- [NSCompositingOperationDestinationOver](destinationover.md): The destination image wherever it is opaque, and the source image elsewhere.
- [NSCompositingOperationDestinationIn](destinationin.md): The destination image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperationDestinationOut](destinationout.md): The destination image wherever it is opaque and the source image is transparent, and transparent elsewhere.
- [NSCompositingOperationDestinationAtop](destinationatop.md): The destination image wherever both images are opaque, the source image wherever it is opaque and the destination image is transparent, and transparent elsehwere.
- [NSCompositingOperationXOR](xor.md): Exclusive OR of the source and destination images.
- [NSCompositingOperationPlusDarker](plusdarker.md): The sum of the source and destination images, with color values approach 0 as a limit.
- [NSCompositingOperationPlusLighter](pluslighter.md): The sum of the source and destination images, with color values approach 1 as a limit.
- [NSCompositingOperationMultiply](multiply.md): The source color is multiplied by the destination color.
- [NSCompositingOperationScreen](screen.md): Multiplies the complement of the destination and source color values, and then complements the result.
- [NSCompositingOperationOverlay](overlay.md): Source colors overlay the destination.
