> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skconstraint/distance(_:to:in:)](https://developer.apple.com/documentation/spritekit/skconstraint/distance(_:to:in:))

# distance(\_:to:in:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that keeps a node within a certain distance of a point in another node’s coordinate system.

## Declaration

```swift
class func distance(_ range: SKRange, to point: CGPoint, in node: SKNode) -> Self
```

## Parameters

- `range`: The range of allowed distances.
- `point`: The point to use as the target point.
- `node`: The node whose coordinate system the point is specified in.

<a id="return-value"></a>

## Return Value

A new constraint.

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, a line is projected between the node’s position and the target point. The distance between the two points is calculated, and if it lies outside the specified range, the node is pushed or pulled along this line until it lies within the range.

## See Also

### Creating Distance Constraints

- [distance(\_:to:)](distance%28__to_%29-6507j.md): Creates a constraint that keeps a node within a certain distance of another node.
- [distance(\_:to:)](distance%28__to_%29-7yk7n.md): Creates a constraint that keeps a node within a certain distance of a point.

# distance:toPoint:inNode: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that keeps a node within a certain distance of a point in another node’s coordinate system.

## Declaration

```objectivec
+ (instancetype) distance:(SKRange *) range toPoint:(CGPoint) point inNode:(SKNode *) node;
```

## Parameters

- `range`: The range of allowed distances.
- `point`: The point to use as the target point.
- `node`: The node whose coordinate system the point is specified in.

<a id="return-value"></a>

## Return Value

A new constraint.

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, a line is projected between the node’s position and the target point. The distance between the two points is calculated, and if it lies outside the specified range, the node is pushed or pulled along this line until it lies within the range.

## See Also

### Creating Distance Constraints

- [distance:toNode:](distance%28__to_%29-6507j.md): Creates a constraint that keeps a node within a certain distance of another node.
- [distance:toPoint:](distance%28__to_%29-7yk7n.md): Creates a constraint that keeps a node within a certain distance of a point.
