> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/avgpooling2dgradient(withgradienttensor:sourcetensor:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/avgpooling2dgradient(withgradienttensor:sourcetensor:descriptor:name:))

# avgPooling2DGradient(withGradientTensor:sourceTensor:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D average pooling gradient operation and returns the result tensor.

## Declaration

```swift
func avgPooling2DGradient(withGradientTensor gradient: MPSGraphTensor, sourceTensor source: MPSGraphTensor, descriptor: MPSGraphPooling2DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `gradient`: A 2D input gradient tensor - must be of rank=4. The layout is defined by `descriptor.dataLayout`.
- `source`: The input tensor for the forward pass.
- `descriptor`: A pooling operation descriptor that specifies pooling window sizes, strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# avgPooling2DGradientWithGradientTensor:sourceTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D average pooling gradient operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) avgPooling2DGradientWithGradientTensor:(MPSGraphTensor *) gradient sourceTensor:(MPSGraphTensor *) source descriptor:(MPSGraphPooling2DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `gradient`: A 2D input gradient tensor - must be of rank=4. The layout is defined by `descriptor.dataLayout`.
- `source`: The input tensor for the forward pass.
- `descriptor`: A pooling operation descriptor that specifies pooling window sizes, strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
