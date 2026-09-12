> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode/init(viewportsize:)](https://developer.apple.com/documentation/spritekit/sk3dnode/init(viewportsize:))

# init(viewportSize:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a new 3D node.

## Declaration

```swift
init(viewportSize: CGSize)
```

## Parameters

- `viewportSize`: The size of the node’s rendered image.

<a id="return-value"></a>

## Return Value

An initialized [SK3DNode](../sk3dnode.md) object.

## See Also

### Creating 3D Nodes

- [init(coder:)](init%28coder_%29.md): Tells you when to initialize a 3D node that has been unarchived.

# initWithViewportSize: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes a new 3D node.

## Declaration

```objectivec
- (instancetype) initWithViewportSize:(CGSize) viewportSize;
```

## Parameters

- `viewportSize`: The size of the node’s rendered image.

<a id="return-value"></a>

## Return Value

An initialized [SK3DNode](../sk3dnode.md) object.

## See Also

### Creating 3D Nodes

- [nodeWithViewportSize:](nodewithviewportsize_.md): Creates and initializes a new 3D node.
- [initWithCoder:](init%28coder_%29.md): Tells you when to initialize a 3D node that has been unarchived.
