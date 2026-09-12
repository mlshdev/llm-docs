> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehavior/boundaryidentifiers](https://developer.apple.com/documentation/uikit/uicollisionbehavior/boundaryidentifiers)

# boundaryIdentifiers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The set of boundary identifiers that you’ve added to the collision behavior.

## Declaration

```swift
var boundaryIdentifiers: [any NSCopying]? { get }
```

<a id="Discussion"></a>

## Discussion

If you haven’t added any boundary identifiers to the collision behavior, this property’s value is `nil`.

## See Also

### Configuring a collision behavior

- [addBoundary(withIdentifier:for:)](addboundary%28withidentifier_for_%29.md): Adds a collision boundary, specified as a Bezier path, to the collision behavior.
- [addBoundary(withIdentifier:from:to:)](addboundary%28withidentifier_from_to_%29.md): Adds a collision boundary, specified as a line segment, to the collision behavior.
- [boundary(withIdentifier:)](boundary%28withidentifier_%29.md): Returns a specified Bezier-path boundary.
- [collisionMode](collisionmode.md): The type of edges that participate in collisions for the collision behavior.
- [removeAllBoundaries()](removeallboundaries%28%29.md): Removes all previously-specified collision boundaries from the collision behavior.
- [removeBoundary(withIdentifier:)](removeboundary%28withidentifier_%29.md): Removes a specific collision boundary from the collision behavior.
- [setTranslatesReferenceBoundsIntoBoundary(with:)](settranslatesreferenceboundsintoboundary%28with_%29.md): Specifies a collision boundary based on the bounds of the animation reference system, with optional insets.
- [translatesReferenceBoundsIntoBoundary](translatesreferenceboundsintoboundary.md): Specifies whether a boundary based on the reference system is active.

# boundaryIdentifiers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The set of boundary identifiers that you’ve added to the collision behavior.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<id<NSCopying>> * boundaryIdentifiers;
```

<a id="Discussion"></a>

## Discussion

If you haven’t added any boundary identifiers to the collision behavior, this property’s value is `nil`.

## See Also

### Configuring a collision behavior

- [addBoundaryWithIdentifier:forPath:](addboundary%28withidentifier_for_%29.md): Adds a collision boundary, specified as a Bezier path, to the collision behavior.
- [addBoundaryWithIdentifier:fromPoint:toPoint:](addboundary%28withidentifier_from_to_%29.md): Adds a collision boundary, specified as a line segment, to the collision behavior.
- [boundaryWithIdentifier:](boundary%28withidentifier_%29.md): Returns a specified Bezier-path boundary.
- [collisionMode](collisionmode.md): The type of edges that participate in collisions for the collision behavior.
- [removeAllBoundaries](removeallboundaries%28%29.md): Removes all previously-specified collision boundaries from the collision behavior.
- [removeBoundaryWithIdentifier:](removeboundary%28withidentifier_%29.md): Removes a specific collision boundary from the collision behavior.
- [setTranslatesReferenceBoundsIntoBoundaryWithInsets:](settranslatesreferenceboundsintoboundary%28with_%29.md): Specifies a collision boundary based on the bounds of the animation reference system, with optional insets.
- [translatesReferenceBoundsIntoBoundary](translatesreferenceboundsintoboundary.md): Specifies whether a boundary based on the reference system is active.
