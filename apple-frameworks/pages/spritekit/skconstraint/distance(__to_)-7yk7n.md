> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skconstraint/distance(_:to:)-7yk7n](https://developer.apple.com/documentation/spritekit/skconstraint/distance(_:to:)-7yk7n)

# distance(\_:to:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that keeps a node within a certain distance of a point.

## Declaration

```swift
class func distance(_ range: SKRange, to point: CGPoint) -> Self
```

## Parameters

- `range`: The range of allowed distances between the node and the point.
- `point`: A point in the coordinate system of the node’s parent that is used to calculate the distance.

<a id="return-value"></a>

## Return Value

A new constraint.

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, a line is projected between the node’s position and the target point. The distance between the two points is calculated, and if it lies outside the specified range, the node is pushed or pulled along this line until it lies within the range.

## See Also

### Creating Distance Constraints

- [distance(\_:to:)](distance%28__to_%29-6507j.md): Creates a constraint that keeps a node within a certain distance of another node.
- [distance(\_:to:in:)](distance%28__to_in_%29.md): Creates a constraint that keeps a node within a certain distance of a point in another node’s coordinate system.

# distance:toPoint: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that keeps a node within a certain distance of a point.

## Declaration

```objectivec
+ (instancetype) distance:(SKRange *) range toPoint:(CGPoint) point;
```

## Parameters

- `range`: The range of allowed distances between the node and the point.
- `point`: A point in the coordinate system of the node’s parent that is used to calculate the distance.

<a id="return-value"></a>

## Return Value

A new constraint.

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, a line is projected between the node’s position and the target point. The distance between the two points is calculated, and if it lies outside the specified range, the node is pushed or pulled along this line until it lies within the range.

## See Also

### Creating Distance Constraints

- [distance:toNode:](distance%28__to_%29-6507j.md): Creates a constraint that keeps a node within a certain distance of another node.
- [distance:toPoint:inNode:](distance%28__to_in_%29.md): Creates a constraint that keeps a node within a certain distance of a point in another node’s coordinate system.
