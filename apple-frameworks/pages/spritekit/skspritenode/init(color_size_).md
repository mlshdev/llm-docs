> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/init(color:size:)](https://developer.apple.com/documentation/spritekit/skspritenode/init(color:size:))

# init(color:size:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a single-color sprite node.

## Declaration

```swift
convenience init(color: UIColor, size: CGSize)
```

```swift
convenience init(color: NSColor, size: CGSize)
```

## Parameters

- `color`: The color for the resulting sprite node.
- `size`: The size of the sprite node in points.

<a id="return-value"></a>

## Return Value

A newly initialized sprite node.

<a id="Discussion"></a>

## Discussion

Although textured nodes are the most common way to use the [SKSpriteNode](../skspritenode.md) class, you can also create sprite nodes without a texture. The behavior of the class changes when the node lacks a texture:

- The sprite node that is returned from this method has its [texture](texture.md) property set to `nil`.
- There is no texture to stretch, so the [centerRect](centerrect.md) parameter is ignored.
- There is no colorization step; the [color](color.md) property is used as the sprite’s color.
- The sprite node’s [alpha](../sknode/alpha.md) component is used to determine how it is blended into the buffer.

Listing 1 shows how to create a red sprite node `100 x 100` points in size.

Listing 1. Creating a non-textured sprite node

```swift
let node = SKSpriteNode(color: .red,
                        size: CGSize(width: 100, height: 100))
```

# initWithColor:size: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a single-color sprite node.

## Declaration

```objectivec
- (instancetype) initWithColor:(UIColor *) color size:(CGSize) size;
```

```objectivec
- (instancetype) initWithColor:(NSColor *) color size:(CGSize) size;
```

## Parameters

- `color`: The color for the resulting sprite node.
- `size`: The size of the sprite node in points.

<a id="return-value"></a>

## Return Value

A newly initialized sprite node.

<a id="Discussion"></a>

## Discussion

Although textured nodes are the most common way to use the [SKSpriteNode](../skspritenode.md) class, you can also create sprite nodes without a texture. The behavior of the class changes when the node lacks a texture:

- The sprite node that is returned from this method has its [texture](texture.md) property set to `nil`.
- There is no texture to stretch, so the [centerRect](centerrect.md) parameter is ignored.
- There is no colorization step; the [color](color.md) property is used as the sprite’s color.
- The sprite node’s [alpha](../sknode/alpha.md) component is used to determine how it is blended into the buffer.

Listing 1 shows how to create a red sprite node `100 x 100` points in size.

Listing 1. Creating a non-textured sprite node

```swift
let node = SKSpriteNode(color: .red,
                        size: CGSize(width: 100, height: 100))
```
