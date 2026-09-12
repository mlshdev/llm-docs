> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode/nodewithviewportsize:](https://developer.apple.com/documentation/spritekit/sk3dnode/nodewithviewportsize:)

# nodeWithViewportSize:

**Interface language:** Objective-C

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new 3D node.

## Declaration

```objectivec
+ (instancetype) nodeWithViewportSize:(CGSize) viewportSize;
```

## Parameters

- `viewportSize`: The size of the node’s rendered image.

<a id="return-value"></a>

## Return Value

A newly created and initialized [SK3DNode](../sk3dnode.md) object.

<a id="Discussion"></a>

## Discussion

The node must be configured with a SceneKit scene before it renders anything.

## See Also

### Creating 3D Nodes

- [initWithViewportSize:](init%28viewportsize_%29.md): Initializes a new 3D node.
- [initWithCoder:](init%28coder_%29.md): Tells you when to initialize a 3D node that has been unarchived.
