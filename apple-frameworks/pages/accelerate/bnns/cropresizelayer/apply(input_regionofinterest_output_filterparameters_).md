> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/cropresizelayer/apply(input:regionofinterest:output:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/cropresizelayer/apply(input:regionofinterest:output:filterparameters:))

# apply(input:regionOfInterest:output:filterParameters:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Applies the layer to a set of input objects, writing the result to a set of output objects.

> Use the BNNSGraph API instead.

## Declaration

```swift
func apply(input: BNNSNDArrayDescriptor, regionOfInterest: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters? = nil) throws
```

## See Also

### Applying a Crop-Resize Layer

- [applyBackward(regionOfInterest:outputGradient:generatingInputGradient:filterParameters:)](applybackward%28regionofinterest_outputgradient_generatinginputgradient_filterparameters_%29.md): Deprecated. Applies a crop-resize filter backward to generate an input gradient.
