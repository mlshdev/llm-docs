> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/maxpooling2d(withsourcetensor:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/maxpooling2d(withsourcetensor:descriptor:name:))

# maxPooling2D(withSourceTensor:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D max-pooling operation and returns the result tensor.

## Declaration

```swift
func maxPooling2D(withSourceTensor source: MPSGraphTensor, descriptor: MPSGraphPooling2DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `source`: A 2D Image source as tensor - must be of rank=4. The layout is defined by `descriptor.dataLayout`.
- `descriptor`: A pooling operation descriptor that specifies pooling window sizes, strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# maxPooling2DWithSourceTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D max-pooling operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) maxPooling2DWithSourceTensor:(MPSGraphTensor *) source descriptor:(MPSGraphPooling2DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `source`: A 2D Image source as tensor - must be of rank=4. The layout is defined by `descriptor.dataLayout`.
- `descriptor`: A pooling operation descriptor that specifies pooling window sizes, strides, dilation rates, paddings and layouts.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
