> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehavior/collisionmode](https://developer.apple.com/documentation/uikit/uicollisionbehavior/collisionmode)

# collisionMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The type of edges that participate in collisions for the collision behavior.

## Declaration

```swift
var collisionMode: UICollisionBehavior.Mode { get set }
```

<a id="Discussion"></a>

## Discussion

To specify `collisionMode`, use one of the values in the [UICollisionBehavior.Mode](mode.md) enum. The default value is [everything](mode/everything.md).

## See Also

### Configuring a collision behavior

- [addBoundary(withIdentifier:for:)](addboundary%28withidentifier_for_%29.md): Adds a collision boundary, specified as a Bezier path, to the collision behavior.
- [addBoundary(withIdentifier:from:to:)](addboundary%28withidentifier_from_to_%29.md): Adds a collision boundary, specified as a line segment, to the collision behavior.
- [boundaryIdentifiers](boundaryidentifiers.md): The set of boundary identifiers that you’ve added to the collision behavior.
- [boundary(withIdentifier:)](boundary%28withidentifier_%29.md): Returns a specified Bezier-path boundary.
- [removeAllBoundaries()](removeallboundaries%28%29.md): Removes all previously-specified collision boundaries from the collision behavior.
- [removeBoundary(withIdentifier:)](removeboundary%28withidentifier_%29.md): Removes a specific collision boundary from the collision behavior.
- [setTranslatesReferenceBoundsIntoBoundary(with:)](settranslatesreferenceboundsintoboundary%28with_%29.md): Specifies a collision boundary based on the bounds of the animation reference system, with optional insets.
- [translatesReferenceBoundsIntoBoundary](translatesreferenceboundsintoboundary.md): Specifies whether a boundary based on the reference system is active.

# collisionMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The type of edges that participate in collisions for the collision behavior.

## Declaration

```objectivec
@property (nonatomic, readwrite) UICollisionBehaviorMode collisionMode;
```

<a id="Discussion"></a>

## Discussion

To specify `collisionMode`, use one of the values in the [UICollisionBehaviorMode](mode.md) enum. The default value is [UICollisionBehaviorModeEverything](mode/everything.md).

## See Also

### Configuring a collision behavior

- [addBoundaryWithIdentifier:forPath:](addboundary%28withidentifier_for_%29.md): Adds a collision boundary, specified as a Bezier path, to the collision behavior.
- [addBoundaryWithIdentifier:fromPoint:toPoint:](addboundary%28withidentifier_from_to_%29.md): Adds a collision boundary, specified as a line segment, to the collision behavior.
- [boundaryIdentifiers](boundaryidentifiers.md): The set of boundary identifiers that you’ve added to the collision behavior.
- [boundaryWithIdentifier:](boundary%28withidentifier_%29.md): Returns a specified Bezier-path boundary.
- [removeAllBoundaries](removeallboundaries%28%29.md): Removes all previously-specified collision boundaries from the collision behavior.
- [removeBoundaryWithIdentifier:](removeboundary%28withidentifier_%29.md): Removes a specific collision boundary from the collision behavior.
- [setTranslatesReferenceBoundsIntoBoundaryWithInsets:](settranslatesreferenceboundsintoboundary%28with_%29.md): Specifies a collision boundary based on the bounds of the animation reference system, with optional insets.
- [translatesReferenceBoundsIntoBoundary](translatesreferenceboundsintoboundary.md): Specifies whether a boundary based on the reference system is active.
