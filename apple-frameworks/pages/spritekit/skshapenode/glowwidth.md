> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/glowwidth](https://developer.apple.com/documentation/spritekit/skshapenode/glowwidth)

# glowWidth (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A glow that extends outward from the stroked line.

## Declaration

```swift
var glowWidth: CGFloat { get set }
```

## Mentioned In

- [Getting Started with Shape Nodes](../getting-started-with-shape-nodes.md)

<a id="Discussion"></a>

## Discussion

The default value is `0.0`, which means no glow is added. The glow color is determined by [strokeColor](strokecolor.md).

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [isAntialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.

# glowWidth (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A glow that extends outward from the stroked line.

## Declaration

```objectivec
@property (nonatomic) CGFloat glowWidth;
```

## Mentioned In

- [Getting Started with Shape Nodes](../getting-started-with-shape-nodes.md)

<a id="Discussion"></a>

## Discussion

The default value is `0.0`, which means no glow is added. The glow color is determined by [strokeColor](strokecolor.md).

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [antialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.
