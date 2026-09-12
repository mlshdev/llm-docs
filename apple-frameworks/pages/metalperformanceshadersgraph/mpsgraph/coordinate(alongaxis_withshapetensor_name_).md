> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/coordinate(alongaxis:withshapetensor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/coordinate(alongaxis:withshapetensor:name:))

# coordinate(alongAxis:withShapeTensor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a get-coordindate operation and returns the result tensor.

## Declaration

```swift
func coordinate(alongAxis axis: Int, withShapeTensor shapeTensor: MPSGraphTensor, name: String?) -> MPSGraphTensor
```

## Parameters

- `axis`: The coordinate axis an element’s value is set to. Negative values wrap around.
- `shapeTensor`: A rank-1 tensor of type `MPSDataTypeInt32` or `MPSDataTypeInt64` that defines the shape of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

See [coordinate(alongAxis:withShape:name:)](coordinate%28alongaxis_withshape_name_%29.md).

# coordinateAlongAxis:withShapeTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a get-coordindate operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) coordinateAlongAxis:(NSInteger) axis withShapeTensor:(MPSGraphTensor *) shapeTensor name:(NSString *) name;
```

## Parameters

- `axis`: The coordinate axis an element’s value is set to. Negative values wrap around.
- `shapeTensor`: A rank-1 tensor of type `MPSDataTypeInt32` or `MPSDataTypeInt64` that defines the shape of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

See [coordinateAlongAxis:withShape:name:](coordinate%28alongaxis_withshape_name_%29.md).
