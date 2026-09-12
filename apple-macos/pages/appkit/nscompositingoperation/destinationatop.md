> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscompositingoperation/destinationatop](https://developer.apple.com/documentation/appkit/nscompositingoperation/destinationatop)

# NSCompositingOperation.destinationAtop (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

The destination image wherever both images are opaque, the source image wherever it is opaque and the destination image is transparent, and transparent elsehwere.

## Declaration

```swift
case destinationAtop
```

<a id="Discussion"></a>

## Discussion

The source image is applied using the formula `R = S*(1 - Da) + D*Sa`.

## See Also

### Operations for Compositing

- [NSCompositingOperation.clear](clear.md): Transparency everywhere.
- [NSCompositingOperation.copy](copy.md): The source image.
- [NSCompositingOperation.sourceOver](sourceover.md): The source image wherever it is opaque, and the destination image elsewhere.
- [NSCompositingOperation.sourceIn](sourcein.md): The source image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperation.sourceOut](sourceout.md): The source image wherever it is opaque and the destination image is transparent, and transparent elsewhere.
- [NSCompositingOperation.sourceAtop](sourceatop.md): The source image wherever both images are opaque, the destination image wherever it is opaque but the source image is transparent, and transparent elsewhere
- [NSCompositingOperation.destinationOver](destinationover.md): The destination image wherever it is opaque, and the source image elsewhere.
- [NSCompositingOperation.destinationIn](destinationin.md): The destination image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperation.destinationOut](destinationout.md): The destination image wherever it is opaque and the source image is transparent, and transparent elsewhere.
- [NSCompositingOperation.xor](xor.md): Exclusive OR of the source and destination images.
- [NSCompositingOperation.plusDarker](plusdarker.md): The sum of the source and destination images, with color values approach 0 as a limit.
- [NSCompositingOperation.plusLighter](pluslighter.md): The sum of the source and destination images, with color values approach 1 as a limit.
- [NSCompositingOperation.multiply](multiply.md): The source color is multiplied by the destination color.
- [NSCompositingOperation.screen](screen.md): Multiplies the complement of the destination and source color values, and then complements the result.
- [NSCompositingOperation.overlay](overlay.md): Source colors overlay the destination.

# NSCompositingOperationDestinationAtop (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The destination image wherever both images are opaque, the source image wherever it is opaque and the destination image is transparent, and transparent elsehwere.

## Declaration

```objectivec
NSCompositingOperationDestinationAtop
```

<a id="Discussion"></a>

## Discussion

The source image is applied using the formula `R = S*(1 - Da) + D*Sa`.

## See Also

### Operations for Compositing

- [NSCompositingOperationClear](clear.md): Transparency everywhere.
- [NSCompositingOperationCopy](copy.md): The source image.
- [NSCompositingOperationSourceOver](sourceover.md): The source image wherever it is opaque, and the destination image elsewhere.
- [NSCompositingOperationSourceIn](sourcein.md): The source image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperationSourceOut](sourceout.md): The source image wherever it is opaque and the destination image is transparent, and transparent elsewhere.
- [NSCompositingOperationSourceAtop](sourceatop.md): The source image wherever both images are opaque, the destination image wherever it is opaque but the source image is transparent, and transparent elsewhere
- [NSCompositingOperationDestinationOver](destinationover.md): The destination image wherever it is opaque, and the source image elsewhere.
- [NSCompositingOperationDestinationIn](destinationin.md): The destination image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperationDestinationOut](destinationout.md): The destination image wherever it is opaque and the source image is transparent, and transparent elsewhere.
- [NSCompositingOperationXOR](xor.md): Exclusive OR of the source and destination images.
- [NSCompositingOperationPlusDarker](plusdarker.md): The sum of the source and destination images, with color values approach 0 as a limit.
- [NSCompositingOperationPlusLighter](pluslighter.md): The sum of the source and destination images, with color values approach 1 as a limit.
- [NSCompositingOperationMultiply](multiply.md): The source color is multiplied by the destination color.
- [NSCompositingOperationScreen](screen.md): Multiplies the complement of the destination and source color values, and then complements the result.
- [NSCompositingOperationOverlay](overlay.md): Source colors overlay the destination.
