> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns/convolutionpadding/asymmetric(left:right:up:down:)

# BNNS.ConvolutionPadding.asymmetric(left:right:up:down:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A padding mode that supports individual padding values for each side.

> Use the BNNSGraph API instead.

## Declaration

```swift
case asymmetric(left: Int, right: Int, up: Int, down: Int)
```

## See Also

### Convolution Padding Modes

- [BNNS.ConvolutionPadding.symmetric(x:y:)](symmetric%28x_y_%29.md): Deprecated. A padding mode that provides symmetric padding.
