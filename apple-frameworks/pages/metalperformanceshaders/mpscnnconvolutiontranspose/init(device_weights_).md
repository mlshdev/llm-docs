> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiontranspose/init(device:weights:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontranspose/init(device:weights:))

# init(device:weights:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a transposed convolution kernel.

## Declaration

```swift
init(device: any MTLDevice, weights: any MPSCNNConvolutionDataSource)
```

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md): Initializes a transposed convolution kernel.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

# initWithDevice:weights: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a transposed convolution kernel.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device weights:(id<MPSCNNConvolutionDataSource>) weights;
```

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md): Initializes a transposed convolution kernel.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
