> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontranspose/init(coder:device:)

# init(coder:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a transposed convolution kernel.

## Declaration

```swift
init?(coder aDecoder: NSCoder, device: any MTLDevice)
```

## See Also

### Initializers

- [init(device:weights:)](init%28device_weights_%29.md): Initializes a transposed convolution kernel.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.

# initWithCoder:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a transposed convolution kernel.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder device:(id<MTLDevice>) device;
```

## See Also

### Initializers

- [initWithDevice:weights:](init%28device_weights_%29.md): Initializes a transposed convolution kernel.
- [MPSCNNConvolutionDataSource](../mpscnnconvolutiondatasource.md): The protocol that provides convolution filter weights and bias terms.
