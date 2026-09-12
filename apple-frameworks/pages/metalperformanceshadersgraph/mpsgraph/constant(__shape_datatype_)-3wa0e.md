> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/constant(_:shape:datatype:)-3wa0e](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/constant(_:shape:datatype:)-3wa0e)

# constant(\_:shape:dataType:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a constant op with a given shape and returns the result tensor.

## Declaration

```swift
func constant(_ scalar: Double, shape: [NSNumber], dataType: MPSDataType) -> MPSGraphTensor
```

## Parameters

- `scalar`: The scalar value to fill the entire tensor values with.
- `shape`: The shape of the output tensor.
- `dataType`: The dataType of the constant tensor.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# constantWithScalar:shape:dataType: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a constant op with a given shape and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) constantWithScalar:(double) scalar shape:(MPSShape *) shape dataType:(MPSDataType) dataType;
```

## Parameters

- `scalar`: The scalar value to fill the entire tensor values with.
- `shape`: The shape of the output tensor.
- `dataType`: The dataType of the constant tensor.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
