> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/creating-a-shape-node-from-an-array-of-points](https://developer.apple.com/documentation/spritekit/creating-a-shape-node-from-an-array-of-points)

# Creating a Shape Node from an Array of Points (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Create jagged or smooth shapes from the same array of points.

<a id="overview"></a>

## Overview

An [SKShapeNode](skshapenode.md) object can be initialized with an array of points describing a path. The [init(splinePoints:count:)](skshapenode/init%28splinepoints_count_%29.md) method can smoothly interpolate between these points to create a curve rather than the series of straight lines created by [init(points:count:)](skshapenode/init%28points_count_%29.md). The following Swift code shows how to create two shape nodes using the same array of points for both initializers.

```swift
var points = [CGPoint(x: 0, y: 0),               
              CGPoint(x: 100, y: 100),               
              CGPoint(x: 200, y: -50),               
              CGPoint(x: 300, y: 30),               
              CGPoint(x: 400, y: 20)]         
let linearShapeNode = SKShapeNode(points: &points,                                   
                                  count: points.count)          
let splineShapeNode = SKShapeNode(splinePoints: &points,                                   
                                  count: points.count)
```

The following image shows `linearShapeNode` in blue and `splineShapeNode` in red.

![Shape nodes created from points](https://developer.apple.com/images/com.apple.spritekit/media-2975239@2x.png)

## See Also

### Creating a Shape from an Array of Points

- [init(points:count:)](skshapenode/init%28points_count_%29.md): Creates a shape node from a series of points.
- [init(splinePoints:count:)](skshapenode/init%28splinepoints_count_%29.md): Creates a shape node from a series of spline points.

# Creating a Shape Node from an Array of Points (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Create jagged or smooth shapes from the same array of points.

<a id="overview"></a>

## Overview

An [SKShapeNode](skshapenode.md) object can be initialized with an array of points describing a path. The [shapeNodeWithSplinePoints:count:](skshapenode/init%28splinepoints_count_%29.md) method can smoothly interpolate between these points to create a curve rather than the series of straight lines created by [shapeNodeWithPoints:count:](skshapenode/init%28points_count_%29.md). The following Swift code shows how to create two shape nodes using the same array of points for both initializers.

```swift
var points = [CGPoint(x: 0, y: 0),               
              CGPoint(x: 100, y: 100),               
              CGPoint(x: 200, y: -50),               
              CGPoint(x: 300, y: 30),               
              CGPoint(x: 400, y: 20)]         
let linearShapeNode = SKShapeNode(points: &points,                                   
                                  count: points.count)          
let splineShapeNode = SKShapeNode(splinePoints: &points,                                   
                                  count: points.count)
```

The following image shows `linearShapeNode` in blue and `splineShapeNode` in red.

![Shape nodes created from points](https://developer.apple.com/images/com.apple.spritekit/media-2975239@2x.png)

## See Also

### Creating a Shape from an Array of Points

- [shapeNodeWithPoints:count:](skshapenode/init%28points_count_%29.md): Creates a shape node from a series of points.
- [shapeNodeWithSplinePoints:count:](skshapenode/init%28splinepoints_count_%29.md): Creates a shape node from a series of spline points.
