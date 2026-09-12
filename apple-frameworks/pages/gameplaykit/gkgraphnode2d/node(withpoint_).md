> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgraphnode2d/node(withpoint:)](https://developer.apple.com/documentation/gameplaykit/gkgraphnode2d/node(withpoint:))

# node(withPoint:) (Swift)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a graph node with the specified point.

## Declaration

```swift
class func node(withPoint point: vector_float2) -> Self
```

## Parameters

- `point`: The position for the node in continuous 2D space.

<a id="return-value"></a>

## Return Value

A new graph node representing the specified point.

## See Also

### Creating a Graph Node

- [init(point:)](init%28point_%29.md): Initializes a graph node with the specified point.

# nodeWithPoint: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a graph node with the specified point.

## Declaration

```objectivec
+ (instancetype) nodeWithPoint:(vector_float2) point;
```

## Parameters

- `point`: The position for the node in continuous 2D space.

<a id="return-value"></a>

## Return Value

A new graph node representing the specified point.

## See Also

### Creating a Graph Node

- [initWithPoint:](init%28point_%29.md): Initializes a graph node with the specified point.
