> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skregion/contains(_:)](https://developer.apple.com/documentation/spritekit/skregion/contains(_:))

# contains(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether a particular point is contained in the region.

## Declaration

```swift
func contains(_ point: CGPoint) -> Bool
```

## Parameters

- `point`: A point.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the point is contained in the region; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Interacting with a Region

- [path](path.md): Returns a Core Graphics path that defines the region.

# containsPoint: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether a particular point is contained in the region.

## Declaration

```objectivec
- (BOOL) containsPoint:(CGPoint) point;
```

## Parameters

- `point`: A point.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the point is contained in the region; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Interacting with a Region

- [path](path.md): Returns a Core Graphics path that defines the region.
