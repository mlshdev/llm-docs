> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/convolutionpadding](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/convolutionpadding)

# BNNSGraph.Builder.ConvolutionPadding

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The padding that you use for convolution operations to specify zero-padding.

## Declaration

```swift
enum ConvolutionPadding
```

## Topics

### Enumeration Cases

- [BNNSGraph.Builder.ConvolutionPadding.custom(padding:)](convolutionpadding/custom%28padding_%29.md): Custom padding
- [BNNSGraph.Builder.ConvolutionPadding.lower](convolutionpadding/lower.md): Pad the output to look like the input but prefer padding on the top and left.
- [BNNSGraph.Builder.ConvolutionPadding.same](convolutionpadding/same.md): Pad the output to look like the input
- [BNNSGraph.Builder.ConvolutionPadding.valid](convolutionpadding/valid.md): No padding

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
