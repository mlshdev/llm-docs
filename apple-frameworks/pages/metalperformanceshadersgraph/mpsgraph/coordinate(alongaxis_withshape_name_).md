> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/coordinate(alongaxis:withshape:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/coordinate(alongaxis:withshape:name:))

# coordinate(alongAxis:withShape:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a get-coordindate operation and returns the result tensor.

## Declaration

```swift
func coordinate(alongAxis axis: Int, withShape shape: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `axis`: The coordinate axis an element’s value is set to. Negative values wrap around.
- `shape`: The shape of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Creates a tensor of specified shape with value at index `[i_0, i_1, ... , i_N] = i_axis` For example,

```md
coordinateAlongAxis(0, withShape=[5]) = [0, 1, 2, 3, 4] 
coordinateAlongAxis(0, withShape=[3,2]) = [[0, 0],
                                           [1, 1],
                                           [2, 2]]
```

# coordinateAlongAxis:withShape:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a get-coordindate operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) coordinateAlongAxis:(NSInteger) axis withShape:(MPSShape *) shape name:(NSString *) name;
```

## Parameters

- `axis`: The coordinate axis an element’s value is set to. Negative values wrap around.
- `shape`: The shape of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

<a id="discussion"></a>

## Discussion

Creates a tensor of specified shape with value at index `[i_0, i_1, ... , i_N] = i_axis` For example,

```md
coordinateAlongAxis(0, withShape=[5]) = [0, 1, 2, 3, 4] 
coordinateAlongAxis(0, withShape=[3,2]) = [[0, 0],
                                           [1, 1],
                                           [2, 2]]
```
