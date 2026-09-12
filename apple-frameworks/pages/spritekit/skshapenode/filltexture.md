> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/filltexture](https://developer.apple.com/documentation/spritekit/skshapenode/filltexture)

# fillTexture (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The texture used to fill the shape.

## Declaration

```swift
var fillTexture: SKTexture? { get set }
```

## Mentioned In

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a fill texture is specified, the shape node is rendered using that texture blended with the [fillColor](fillcolor.md).

> **Important**

>  The default fill color of a [SKShapeNode](../skshapenode.md) is `SKColor.clear`. Since the fill texture is blended with the fill color, [fillColor](fillcolor.md) needs to be set to a non-clear color for it to display. For example, to display the texture without any color blend effects, set [fillColor](fillcolor.md) to `SKColor.white`.

## See Also

### Filling a Shape

- [fillColor](fillcolor.md): The color used to fill the shape.

# fillTexture (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The texture used to fill the shape.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKTexture * fillTexture;
```

## Mentioned In

- [Controlling Shape Drawing with Shaders](../controlling-shape-drawing-with-shaders.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a fill texture is specified, the shape node is rendered using that texture blended with the [fillColor](fillcolor.md).

> **Important**

>  The default fill color of a [SKShapeNode](../skshapenode.md) is `SKColor.clear`. Since the fill texture is blended with the fill color, [fillColor](fillcolor.md) needs to be set to a non-clear color for it to display. For example, to display the texture without any color blend effects, set [fillColor](fillcolor.md) to `SKColor.white`.

## See Also

### Filling a Shape

- [fillColor](fillcolor.md): The color used to fill the shape.
