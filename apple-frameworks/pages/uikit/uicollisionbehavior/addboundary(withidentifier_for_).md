> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehavior/addboundary(withidentifier:for:)](https://developer.apple.com/documentation/uikit/uicollisionbehavior/addboundary(withidentifier:for:))

# addBoundary(withIdentifier:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a collision boundary, specified as a Bezier path, to the collision behavior.

## Declaration

```swift
func addBoundary(withIdentifier identifier: any NSCopying, for bezierPath: UIBezierPath)
```

## Parameters

- `identifier`: An arbitrary identifier for the boundary you are adding.
- `bezierPath`: An arbitrary Bezier path that specifies the collision boundary you are adding.

  The coordinate system and origin point for the path depend on how you’ve initialized the dynamic animator (that you’re adding the behavior to). See the overview in [UIDynamicAnimator](../uidynamicanimator.md) for more information.

## See Also

### Configuring a collision behavior

- [addBoundary(withIdentifier:from:to:)](addboundary%28withidentifier_from_to_%29.md): Adds a collision boundary, specified as a line segment, to the collision behavior.
- [boundaryIdentifiers](boundaryidentifiers.md): The set of boundary identifiers that you’ve added to the collision behavior.
- [boundary(withIdentifier:)](boundary%28withidentifier_%29.md): Returns a specified Bezier-path boundary.
- [collisionMode](collisionmode.md): The type of edges that participate in collisions for the collision behavior.
- [removeAllBoundaries()](removeallboundaries%28%29.md): Removes all previously-specified collision boundaries from the collision behavior.
- [removeBoundary(withIdentifier:)](removeboundary%28withidentifier_%29.md): Removes a specific collision boundary from the collision behavior.
- [setTranslatesReferenceBoundsIntoBoundary(with:)](settranslatesreferenceboundsintoboundary%28with_%29.md): Specifies a collision boundary based on the bounds of the animation reference system, with optional insets.
- [translatesReferenceBoundsIntoBoundary](translatesreferenceboundsintoboundary.md): Specifies whether a boundary based on the reference system is active.

# addBoundaryWithIdentifier:forPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a collision boundary, specified as a Bezier path, to the collision behavior.

## Declaration

```objectivec
- (void) addBoundaryWithIdentifier:(id<NSCopying>) identifier forPath:(UIBezierPath *) bezierPath;
```

## Parameters

- `identifier`: An arbitrary identifier for the boundary you are adding.
- `bezierPath`: An arbitrary Bezier path that specifies the collision boundary you are adding.

  The coordinate system and origin point for the path depend on how you’ve initialized the dynamic animator (that you’re adding the behavior to). See the overview in [UIDynamicAnimator](../uidynamicanimator.md) for more information.

## See Also

### Configuring a collision behavior

- [addBoundaryWithIdentifier:fromPoint:toPoint:](addboundary%28withidentifier_from_to_%29.md): Adds a collision boundary, specified as a line segment, to the collision behavior.
- [boundaryIdentifiers](boundaryidentifiers.md): The set of boundary identifiers that you’ve added to the collision behavior.
- [boundaryWithIdentifier:](boundary%28withidentifier_%29.md): Returns a specified Bezier-path boundary.
- [collisionMode](collisionmode.md): The type of edges that participate in collisions for the collision behavior.
- [removeAllBoundaries](removeallboundaries%28%29.md): Removes all previously-specified collision boundaries from the collision behavior.
- [removeBoundaryWithIdentifier:](removeboundary%28withidentifier_%29.md): Removes a specific collision boundary from the collision behavior.
- [setTranslatesReferenceBoundsIntoBoundaryWithInsets:](settranslatesreferenceboundsintoboundary%28with_%29.md): Specifies a collision boundary based on the bounds of the animation reference system, with optional insets.
- [translatesReferenceBoundsIntoBoundary](translatesreferenceboundsintoboundary.md): Specifies whether a boundary based on the reference system is active.
