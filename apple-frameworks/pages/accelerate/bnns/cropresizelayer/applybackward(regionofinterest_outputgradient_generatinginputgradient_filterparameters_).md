> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/cropresizelayer/applybackward(regionofinterest:outputgradient:generatinginputgradient:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/cropresizelayer/applybackward(regionofinterest:outputgradient:generatinginputgradient:filterparameters:))

# applyBackward(regionOfInterest:outputGradient:generatingInputGradient:filterParameters:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Applies a crop-resize filter backward to generate an input gradient.

> Use the BNNSGraph API instead.

## Declaration

```swift
func applyBackward(regionOfInterest: BNNSNDArrayDescriptor, outputGradient: BNNSNDArrayDescriptor, generatingInputGradient inputGradient: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters? = nil) throws
```

## See Also

### Applying a Crop-Resize Layer

- [apply(input:regionOfInterest:output:filterParameters:)](apply%28input_regionofinterest_output_filterparameters_%29.md): Deprecated. Applies the layer to a set of input objects, writing the result to a set of output objects.
