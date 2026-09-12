> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehavior/mode](https://developer.apple.com/documentation/uikit/uicollisionbehavior/mode)

# UICollisionBehavior.Mode (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The types of edges that participate in collisions for a collision behavior.

## Declaration

```swift
struct Mode
```

## Topics

### Constants

- [items](mode/items.md): Specifies that the dynamic items, associated with the collision behavior, collide only with each other and not with specified collision boundaries.
- [boundaries](mode/boundaries.md): Specifies that the dynamic items, associated with the collision behavior, collide only with specified collision boundaries and don’t collide with each other.
- [everything](mode/everything.md): Specifies that the dynamic items, associated with the collision behavior, collide with each other *and* with specified collision boundaries.

### Initializers

- [init(rawValue:)](mode/init%28rawvalue_%29.md): Creates a collision behavior mode structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# UICollisionBehaviorMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The types of edges that participate in collisions for a collision behavior.

## Declaration

```objectivec
enum UICollisionBehaviorMode : NSUInteger;
```

## Topics

### Constants

- [UICollisionBehaviorModeItems](mode/items.md): Specifies that the dynamic items, associated with the collision behavior, collide only with each other and not with specified collision boundaries.
- [UICollisionBehaviorModeBoundaries](mode/boundaries.md): Specifies that the dynamic items, associated with the collision behavior, collide only with specified collision boundaries and don’t collide with each other.
- [UICollisionBehaviorModeEverything](mode/everything.md): Specifies that the dynamic items, associated with the collision behavior, collide with each other *and* with specified collision boundaries.
