> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/init(splinepoints:count:)](https://developer.apple.com/documentation/spritekit/skshapenode/init(splinepoints:count:))

# init(splinePoints:count:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node from a series of spline points.

## Declaration

```swift
convenience init(splinePoints points: UnsafeMutablePointer<CGPoint>, count numPoints: Int)
```

## Parameters

- `points`: An array of Core Graphics points.
- `numPoints`: The number of points in the array.

<a id="return-value"></a>

## Return Value

A new shape node is created. The node is created with a path that starts at the first point in the array, joining each pair of points with a quadratic curve. The control points are calculated automatically based on previous points in the array.

## Mentioned In

- [Creating a Shape Node from an Array of Points](../creating-a-shape-node-from-an-array-of-points.md)

## See Also

### Creating a Shape from an Array of Points

- [Creating a Shape Node from an Array of Points](../creating-a-shape-node-from-an-array-of-points.md): Create jagged or smooth shapes from the same array of points.
- [init(points:count:)](init%28points_count_%29.md): Creates a shape node from a series of points.

# shapeNodeWithSplinePoints:count: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a shape node from a series of spline points.

## Declaration

```objectivec
+ (instancetype) shapeNodeWithSplinePoints:(CGPoint *) points count:(size_t) numPoints;
```

## Parameters

- `points`: An array of Core Graphics points.
- `numPoints`: The number of points in the array.

<a id="return-value"></a>

## Return Value

A new shape node is created. The node is created with a path that starts at the first point in the array, joining each pair of points with a quadratic curve. The control points are calculated automatically based on previous points in the array.

## Mentioned In

- [Creating a Shape Node from an Array of Points](../creating-a-shape-node-from-an-array-of-points.md)

## See Also

### Creating a Shape from an Array of Points

- [Creating a Shape Node from an Array of Points](../creating-a-shape-node-from-an-array-of-points.md): Create jagged or smooth shapes from the same array of points.
- [shapeNodeWithPoints:count:](init%28points_count_%29.md): Creates a shape node from a series of points.
