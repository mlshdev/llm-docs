> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbox](https://developer.apple.com/documentation/gameplaykit/gkbox)

# GKBox (Swift)

**Framework:** GameplayKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The definition of an axis-aligned rectangular bounding volume addressed by the tree.

## Declaration

```swift
struct GKBox
```

## Topics

### Initializers

- [init()](gkbox/init%28%29.md)
- [init(boxMin:boxMax:)](gkbox/init%28boxmin_boxmax_%29.md)

### Instance Properties

- [boxMax](gkbox/boxmax.md): The corner of the box with the highest coordinate values (in most coordinate systems, the near-upper-right corner).
- [boxMin](gkbox/boxmin.md): The corner of the box with the lowest coordinate values (in most coordinate systems, the far-lower-left corner).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# GKBox (Objective-C)

**Framework:** GameplayKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The definition of an axis-aligned rectangular bounding volume addressed by the tree.

## Declaration

```objectivec
struct GKBox;
```

## Topics

### Instance Properties

- [boxMax](gkbox/boxmax.md): The corner of the box with the highest coordinate values (in most coordinate systems, the near-upper-right corner).
- [boxMin](gkbox/boxmin.md): The corner of the box with the lowest coordinate values (in most coordinate systems, the far-lower-left corner).
