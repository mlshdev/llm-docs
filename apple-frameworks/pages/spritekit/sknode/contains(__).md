> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/contains(_:)](https://developer.apple.com/documentation/spritekit/sknode/contains(_:))

# contains(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a point lies inside the parent’s coordinate system.

## Declaration

```swift
@MainActor func contains(_ p: CGPoint) -> Bool
```

```swift
func contains(_ p: CGPoint) -> Bool
```

## Parameters

- `p`: A `CGPoint` to test against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the point lies inside the parent’s coordinate system; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Hit Testing

- [Understanding Hit-Testing](../understanding-hit-testing.md): Learn how find child nodes at a given point by using hit-testing.
- [atPoint(\_:)](atpoint%28__%29.md): Returns the deepest visible descendant that intersects a point.
- [nodes(at:)](nodes%28at_%29.md): Returns an array of all visible descendants that intersect a point.

# containsPoint: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a point lies inside the parent’s coordinate system.

## Declaration

```objectivec
- (BOOL) containsPoint:(CGPoint) p;
```

## Parameters

- `p`: A `CGPoint` to test against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the point lies inside the parent’s coordinate system; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Hit Testing

- [Understanding Hit-Testing](../understanding-hit-testing.md): Learn how find child nodes at a given point by using hit-testing.
- [nodeAtPoint:](atpoint%28__%29.md): Returns the deepest visible descendant that intersects a point.
- [nodesAtPoint:](nodes%28at_%29.md): Returns an array of all visible descendants that intersect a point.
