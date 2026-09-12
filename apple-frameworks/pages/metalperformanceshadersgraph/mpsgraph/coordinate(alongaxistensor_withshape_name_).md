> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/coordinate(alongaxistensor:withshape:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/coordinate(alongaxistensor:withshape:name:))

# coordinate(alongAxisTensor:withShape:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a get-coordindate operation and returns the result tensor.

## Declaration

```swift
func coordinate(alongAxisTensor axisTensor: MPSGraphTensor, withShape shape: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `axisTensor`: A Scalar tensor of type `MPSDataTypeInt32`, that specifies the coordinate axis an element’s value is set to. Negative values wrap around.
- `shape`: The shape of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

See [coordinate(alongAxis:withShape:name:)](coordinate%28alongaxis_withshape_name_%29.md).

# coordinateAlongAxisTensor:withShape:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a get-coordindate operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) coordinateAlongAxisTensor:(MPSGraphTensor *) axisTensor withShape:(MPSShape *) shape name:(NSString *) name;
```

## Parameters

- `axisTensor`: A Scalar tensor of type `MPSDataTypeInt32`, that specifies the coordinate axis an element’s value is set to. Negative values wrap around.
- `shape`: The shape of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

See [coordinateAlongAxis:withShape:name:](coordinate%28alongaxis_withshape_name_%29.md).
