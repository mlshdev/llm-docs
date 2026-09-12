> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehavior/settranslatesreferenceboundsintoboundary(with:)](https://developer.apple.com/documentation/uikit/uicollisionbehavior/settranslatesreferenceboundsintoboundary(with:))

# setTranslatesReferenceBoundsIntoBoundary(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies a collision boundary based on the bounds of the animation reference system, with optional insets.

## Declaration

```swift
func setTranslatesReferenceBoundsIntoBoundary(with insets: UIEdgeInsets)
```

## Parameters

- `insets`: Insets to apply to the reference system’s bounds when defining the collision boundary.

<a id="Discussion"></a>

## Discussion

The result of using this method depends on how you’ve initialized the dynamic animator (of class [UIDynamicAnimator](../uidynamicanimator.md)) that you’ve added the collision behavior to. See the overview in [UIDynamicAnimator](../uidynamicanimator.md) for a discussion of initialization options and modes for animators.

Here is how the dynamic animator’s initialization impacts use of this method:

- For a view-only dynamic animator, the reference bounds are those of the reference view
- For a collection-view dynamic animator, the reference bounds are those of the collection view layout
- For a dynamic-item dynamic animator, there are no reference bounds.

For a collision behavior added to a view-only or collection-view dynamic animator, activate a reference-system-based collision boundary by setting the [translatesReferenceBoundsIntoBoundary](translatesreferenceboundsintoboundary.md) property to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring a collision behavior

- [addBoundary(withIdentifier:for:)](addboundary%28withidentifier_for_%29.md): Adds a collision boundary, specified as a Bezier path, to the collision behavior.
- [addBoundary(withIdentifier:from:to:)](addboundary%28withidentifier_from_to_%29.md): Adds a collision boundary, specified as a line segment, to the collision behavior.
- [boundaryIdentifiers](boundaryidentifiers.md): The set of boundary identifiers that you’ve added to the collision behavior.
- [boundary(withIdentifier:)](boundary%28withidentifier_%29.md): Returns a specified Bezier-path boundary.
- [collisionMode](collisionmode.md): The type of edges that participate in collisions for the collision behavior.
- [removeAllBoundaries()](removeallboundaries%28%29.md): Removes all previously-specified collision boundaries from the collision behavior.
- [removeBoundary(withIdentifier:)](removeboundary%28withidentifier_%29.md): Removes a specific collision boundary from the collision behavior.
- [translatesReferenceBoundsIntoBoundary](translatesreferenceboundsintoboundary.md): Specifies whether a boundary based on the reference system is active.

# setTranslatesReferenceBoundsIntoBoundaryWithInsets: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies a collision boundary based on the bounds of the animation reference system, with optional insets.

## Declaration

```objectivec
- (void) setTranslatesReferenceBoundsIntoBoundaryWithInsets:(UIEdgeInsets) insets;
```

## Parameters

- `insets`: Insets to apply to the reference system’s bounds when defining the collision boundary.

<a id="Discussion"></a>

## Discussion

The result of using this method depends on how you’ve initialized the dynamic animator (of class [UIDynamicAnimator](../uidynamicanimator.md)) that you’ve added the collision behavior to. See the overview in [UIDynamicAnimator](../uidynamicanimator.md) for a discussion of initialization options and modes for animators.

Here is how the dynamic animator’s initialization impacts use of this method:

- For a view-only dynamic animator, the reference bounds are those of the reference view
- For a collection-view dynamic animator, the reference bounds are those of the collection view layout
- For a dynamic-item dynamic animator, there are no reference bounds.

For a collision behavior added to a view-only or collection-view dynamic animator, activate a reference-system-based collision boundary by setting the [translatesReferenceBoundsIntoBoundary](translatesreferenceboundsintoboundary.md) property to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring a collision behavior

- [addBoundaryWithIdentifier:forPath:](addboundary%28withidentifier_for_%29.md): Adds a collision boundary, specified as a Bezier path, to the collision behavior.
- [addBoundaryWithIdentifier:fromPoint:toPoint:](addboundary%28withidentifier_from_to_%29.md): Adds a collision boundary, specified as a line segment, to the collision behavior.
- [boundaryIdentifiers](boundaryidentifiers.md): The set of boundary identifiers that you’ve added to the collision behavior.
- [boundaryWithIdentifier:](boundary%28withidentifier_%29.md): Returns a specified Bezier-path boundary.
- [collisionMode](collisionmode.md): The type of edges that participate in collisions for the collision behavior.
- [removeAllBoundaries](removeallboundaries%28%29.md): Removes all previously-specified collision boundaries from the collision behavior.
- [removeBoundaryWithIdentifier:](removeboundary%28withidentifier_%29.md): Removes a specific collision boundary from the collision behavior.
- [translatesReferenceBoundsIntoBoundary](translatesreferenceboundsintoboundary.md): Specifies whether a boundary based on the reference system is active.
