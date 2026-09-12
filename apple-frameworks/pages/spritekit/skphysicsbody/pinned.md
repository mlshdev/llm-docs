> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/pinned](https://developer.apple.com/documentation/spritekit/skphysicsbody/pinned)

# pinned (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the physics body’s node is pinned to its parent node.

## Declaration

```swift
var pinned: Bool { get set }
```

## Mentioned In

- [Pinning and Rotating Physics Bodies](../pinning-and-rotating-physics-bodies.md)
- [Getting Started with Physics](../getting-started-with-physics.md)

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), the node’s position is fixed relative to its parent. The node’s position cannot be changed by actions or physics forces. The node can freely rotate around its position in response to collisions or other forces. If the parent node has a physics body, the two physics bodies are treated as if they are connected with a pin joint.

## See Also

### Pinning a Physics Body to a Node’s Parent

- [Pinning and Rotating Physics Bodies](../pinning-and-rotating-physics-bodies.md): Pin a node so it’s free to rotate about a certain point on its parent node.

# pinned (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the physics body’s node is pinned to its parent node.

## Declaration

```objectivec
@property (nonatomic) BOOL pinned;
```

## Mentioned In

- [Pinning and Rotating Physics Bodies](../pinning-and-rotating-physics-bodies.md)
- [Getting Started with Physics](../getting-started-with-physics.md)

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If [true](https://developer.apple.com/documentation/swift/true), the node’s position is fixed relative to its parent. The node’s position cannot be changed by actions or physics forces. The node can freely rotate around its position in response to collisions or other forces. If the parent node has a physics body, the two physics bodies are treated as if they are connected with a pin joint.

## See Also

### Pinning a Physics Body to a Node’s Parent

- [Pinning and Rotating Physics Bodies](../pinning-and-rotating-physics-bodies.md): Pin a node so it’s free to rotate about a certain point on its parent node.
