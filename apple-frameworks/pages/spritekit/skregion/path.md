> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skregion/path](https://developer.apple.com/documentation/spritekit/skregion/path)

# path (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Core Graphics path that defines the region.

## Declaration

```swift
var path: CGPath? { get }
```

## See Also

### Interacting with a Region

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a particular point is contained in the region.

# path (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Core Graphics path that defines the region.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CGPathRef path;
```

## See Also

### Interacting with a Region

- [containsPoint:](contains%28__%29.md): Returns a Boolean value that indicates whether a particular point is contained in the region.
