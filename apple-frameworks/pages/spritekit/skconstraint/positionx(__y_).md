> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skconstraint/positionx(_:y:)](https://developer.apple.com/documentation/spritekit/skconstraint/positionx(_:y:))

# positionX(\_:y:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that restricts both coordinates of a node’s position.

## Declaration

```swift
class func positionX(_ xRange: SKRange, y yRange: SKRange) -> Self
```

## Parameters

- `xRange`: The range to restrict the x-coordinate to.
- `yRange`: The range to restrict the y-coordinate to.

<a id="return-value"></a>

## Return Value

A new constraint.

## Mentioned In

- [Creating Position Constraints](../creating-position-constraints.md)

<a id="Discussion"></a>

## Discussion

Each time constraints are applied, the node’s [position](../sknode/position.md) property is clamped so that both coordinates lie inside the specified ranges.

## See Also

### Creating Position Constraints

- [Creating Position Constraints](../creating-position-constraints.md): Create a position constraint and add it to a node.
- [positionX(\_:)](positionx%28__%29.md): Creates a constraint that restricts the x-coordinate of a node’s position.
- [positionY(\_:)](positiony%28__%29.md): Creates a constraint that restricts the y-coordinate of a node’s position.

# positionX:Y: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a constraint that restricts both coordinates of a node’s position.

## Declaration

```objectivec
+ (instancetype) positionX:(SKRange *) xRange Y:(SKRange *) yRange;
```

## Parameters

- `xRange`: The range to restrict the x-coordinate to.
- `yRange`: The range to restrict the y-coordinate to.

<a id="return-value"></a>

## Return Value

A new constraint.

## Mentioned In

- [Creating Position Constraints](../creating-position-constraints.md)

<a id="Discussion"></a>

## Discussion

Each time constraints are applied, the node’s [position](../sknode/position.md) property is clamped so that both coordinates lie inside the specified ranges.

## See Also

### Creating Position Constraints

- [Creating Position Constraints](../creating-position-constraints.md): Create a position constraint and add it to a node.
- [positionX:](positionx%28__%29.md): Creates a constraint that restricts the x-coordinate of a node’s position.
- [positionY:](positiony%28__%29.md): Creates a constraint that restricts the y-coordinate of a node’s position.
