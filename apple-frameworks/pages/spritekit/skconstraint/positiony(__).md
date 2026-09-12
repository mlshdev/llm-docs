> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skconstraint/positiony(_:)](https://developer.apple.com/documentation/spritekit/skconstraint/positiony(_:))

# positionY(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that restricts the y-coordinate of a node’s position.

## Declaration

```swift
class func positionY(_ range: SKRange) -> Self
```

## Parameters

- `range`: The range to restrict the coordinate to.

<a id="return-value"></a>

## Return Value

A new constraint.

## Mentioned In

- [Creating Position Constraints](../creating-position-constraints.md)

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, the y-coordinate of the node’s [position](../sknode/position.md) property is clamped so that it lies inside the specified range.

## See Also

### Creating Position Constraints

- [Creating Position Constraints](../creating-position-constraints.md): Create a position constraint and add it to a node.
- [positionX(\_:y:)](positionx%28__y_%29.md): Creates a constraint that restricts both coordinates of a node’s position.
- [positionX(\_:)](positionx%28__%29.md): Creates a constraint that restricts the x-coordinate of a node’s position.

# positionY: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that restricts the y-coordinate of a node’s position.

## Declaration

```objectivec
+ (instancetype) positionY:(SKRange *) range;
```

## Parameters

- `range`: The range to restrict the coordinate to.

<a id="return-value"></a>

## Return Value

A new constraint.

## Mentioned In

- [Creating Position Constraints](../creating-position-constraints.md)

<a id="Discussion"></a>

## Discussion

Each time when constraints are applied, the y-coordinate of the node’s [position](../sknode/position.md) property is clamped so that it lies inside the specified range.

## See Also

### Creating Position Constraints

- [Creating Position Constraints](../creating-position-constraints.md): Create a position constraint and add it to a node.
- [positionX:Y:](positionx%28__y_%29.md): Creates a constraint that restricts both coordinates of a node’s position.
- [positionX:](positionx%28__%29.md): Creates a constraint that restricts the x-coordinate of a node’s position.
