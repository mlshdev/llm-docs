> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/avgpooling4dgradient(_:source:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/avgpooling4dgradient(_:source:descriptor:name:))

# avgPooling4DGradient(\_:source:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates an average pooling gradient operation and returns the result tensor.

## Declaration

```swift
func avgPooling4DGradient(_ gradient: MPSGraphTensor, source: MPSGraphTensor, descriptor: MPSGraphPooling4DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: An input gradient tensor.
- `source`: The input tensor for the forward pass.
- `descriptor`: A pooling operation descriptor that specifies pooling window sizes, strides, dilation rates and paddings.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# avgPooling4DGradientWithGradientTensor:sourceTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates an average pooling gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) avgPooling4DGradientWithGradientTensor:(MPSGraphTensor *) gradient sourceTensor:(MPSGraphTensor *) source descriptor:(MPSGraphPooling4DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `gradient`: An input gradient tensor.
- `source`: The input tensor for the forward pass.
- `descriptor`: A pooling operation descriptor that specifies pooling window sizes, strides, dilation rates and paddings.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
