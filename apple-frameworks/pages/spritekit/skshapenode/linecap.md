> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/linecap](https://developer.apple.com/documentation/spritekit/skshapenode/linecap)

# lineCap (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The style used to render the endpoints of the stroked portion of the shape node.

## Declaration

```swift
var lineCap: CGLineCap { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [CGLineCap.butt](../../coregraphics/cglinecap/butt.md). See [CGLineCap](../../coregraphics/cglinecap.md).

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [isAntialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.

# lineCap (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The style used to render the endpoints of the stroked portion of the shape node.

## Declaration

```objectivec
@property (nonatomic) CGLineCap lineCap;
```

<a id="Discussion"></a>

## Discussion

The default value is [kCGLineCapButt](../../coregraphics/cglinecap/butt.md). See [CGLineCap](../../coregraphics/cglinecap.md).

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [antialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.
