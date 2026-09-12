> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/l2normpooling4d(_:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/l2normpooling4d(_:descriptor:name:))

# L2NormPooling4D(\_:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a 4D L2-norm pooling operation and returns the result tensor.

## Declaration

```swift
func L2NormPooling4D(_ source: MPSGraphTensor, descriptor: MPSGraphPooling4DOpDescriptor, name: String?) -> MPSGraphTensor
```

## Parameters

- `source`: A source tensor.
- `descriptor`: A pooling operation descriptor that specifies pooling window sizes, strides, dilation rates and paddings.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

# L2NormPooling4DWithSourceTensor:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a 4D L2-norm pooling operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) L2NormPooling4DWithSourceTensor:(MPSGraphTensor *) source descriptor:(MPSGraphPooling4DOpDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `source`: A source tensor.
- `descriptor`: A pooling operation descriptor that specifies pooling window sizes, strides, dilation rates and paddings.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object
