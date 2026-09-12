> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/linejoin](https://developer.apple.com/documentation/spritekit/skshapenode/linejoin)

# lineJoin (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The junction type used when the stroked portion of the shape node is rendered.

## Declaration

```swift
var lineJoin: CGLineJoin { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [CGLineJoin.bevel](../../coregraphics/cglinejoin/bevel.md). See [CGLineJoin](../../coregraphics/cglinejoin.md).

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [isAntialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.

# lineJoin (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The junction type used when the stroked portion of the shape node is rendered.

## Declaration

```objectivec
@property (nonatomic) CGLineJoin lineJoin;
```

<a id="Discussion"></a>

## Discussion

The default value is [kCGLineJoinBevel](../../coregraphics/cglinejoin/bevel.md). See [CGLineJoin](../../coregraphics/cglinejoin.md).

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [antialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.
