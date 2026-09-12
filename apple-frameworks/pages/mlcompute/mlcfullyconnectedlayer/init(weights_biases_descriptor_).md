> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcfullyconnectedlayer/init(weights:biases:descriptor:)](https://developer.apple.com/documentation/mlcompute/mlcfullyconnectedlayer/init(weights:biases:descriptor:))

# init(weights:biases:descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a fully connected layer with the weights, biases, and convolution descriptor you specify.

## Declaration

```swift
convenience init?(weights: MLCTensor, biases: MLCTensor?, descriptor: MLCConvolutionDescriptor)
```

## Parameters

- `weights`: The weights tensor.
- `biases`: The biases tensor.
- `descriptor`: An object you use to configure the fully connected layer.

## See Also

### Creating Fully Connected Layers

- [MLCConvolutionDescriptor](../mlcconvolutiondescriptor.md): Deprecated. A configuration object you use to create a convolution or fully connected layer.

# layerWithWeights:biases:descriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a fully connected layer with the weights, biases, and convolution descriptor you specify.

## Declaration

```objectivec
+ (instancetype) layerWithWeights:(MLCTensor *) weights biases:(MLCTensor *) biases descriptor:(MLCConvolutionDescriptor *) descriptor;
```

## Parameters

- `weights`: The weights tensor.
- `biases`: The biases tensor.
- `descriptor`: An object you use to configure the fully connected layer.

## See Also

### Creating Fully Connected Layers

- [MLCConvolutionDescriptor](../mlcconvolutiondescriptor.md): Deprecated. A configuration object you use to create a convolution or fully connected layer.
