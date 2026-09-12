> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/constant(_:shape:datatype:)-ylr4](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/constant(_:shape:datatype:)-ylr4)

# constant(\_:shape:dataType:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a constant op with a given shape and data, and returns the result tensor.

## Declaration

```swift
func constant(_ data: Data, shape: [NSNumber], dataType: MPSDataType) -> MPSGraphTensor
```

## Parameters

- `data`: The data for the tensor. The number of bytes should be sizeof(dataType)numberOfElements.
- `shape`: The shape of the output tensor. This has to be statically shaped.
- `dataType`: The dataType of theconstant tensor.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# constantWithData:shape:dataType: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a constant op with a given shape and data, and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) constantWithData:(NSData *) data shape:(MPSShape *) shape dataType:(MPSDataType) dataType;
```

## Parameters

- `data`: The data for the tensor. The number of bytes should be sizeof(dataType)numberOfElements.
- `shape`: The shape of the output tensor. This has to be statically shaped.
- `dataType`: The dataType of theconstant tensor.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
