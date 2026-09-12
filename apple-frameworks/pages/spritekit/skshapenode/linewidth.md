> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/linewidth](https://developer.apple.com/documentation/spritekit/skshapenode/linewidth)

# lineWidth (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The width used to stroke the path.

## Declaration

```swift
var lineWidth: CGFloat { get set }
```

## Mentioned In

- [Getting Started with Shape Nodes](../getting-started-with-shape-nodes.md)

<a id="Discussion"></a>

## Discussion

A line width larger than `2.0` may cause rendering artifacts in the final rendered image. The default value is `1.0`.

## See Also

### Stroking a Shape

- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [isAntialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.

# lineWidth (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The width used to stroke the path.

## Declaration

```objectivec
@property (nonatomic) CGFloat lineWidth;
```

## Mentioned In

- [Getting Started with Shape Nodes](../getting-started-with-shape-nodes.md)

<a id="Discussion"></a>

## Discussion

A line width larger than `2.0` may cause rendering artifacts in the final rendered image. The default value is `1.0`.

## See Also

### Stroking a Shape

- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [antialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.
