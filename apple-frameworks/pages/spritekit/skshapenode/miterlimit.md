> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/miterlimit](https://developer.apple.com/documentation/spritekit/skshapenode/miterlimit)

# miterLimit (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The miter limit to use when the line is stroked using a miter join style.

## Declaration

```swift
var miterLimit: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the line join style is set to [CGLineJoin.miter](../../coregraphics/cglinejoin/miter.md), SpriteKit uses the miter limit to determine whether the lines should be joined with a bevel instead of a miter. SpriteKit divides the length of the miter by the line width. If the result is greater than the miter limit, SpriteKit converts the style to a bevel.

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [isAntialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.

# miterLimit (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The miter limit to use when the line is stroked using a miter join style.

## Declaration

```objectivec
@property (nonatomic) CGFloat miterLimit;
```

<a id="Discussion"></a>

## Discussion

If the line join style is set to [kCGLineJoinMiter](../../coregraphics/cglinejoin/miter.md), SpriteKit uses the miter limit to determine whether the lines should be joined with a bevel instead of a miter. SpriteKit divides the length of the miter by the line width. If the result is greater than the miter limit, SpriteKit converts the style to a bevel.

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [antialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.
