> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutionnode/init(source:weights:)

# init(source:weights:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init(source sourceNode: MPSNNImageNode, weights: any MPSCNNConvolutionDataSource)
```

## See Also

### Initializers

- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

# initWithSource:weights: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSource:(MPSNNImageNode *) sourceNode weights:(id<MPSCNNConvolutionDataSource>) weights;
```

## See Also

### Initializers

- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
