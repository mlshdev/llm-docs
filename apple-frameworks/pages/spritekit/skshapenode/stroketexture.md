> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/stroketexture](https://developer.apple.com/documentation/spritekit/skshapenode/stroketexture)

# strokeTexture (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The texture used to stroke the shape.

## Declaration

```swift
var strokeTexture: SKTexture? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a stroke texture is specified, the [strokeColor](strokecolor.md) property is ignored and the stroked portion of the shape node is rendered using the texture instead.

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [isAntialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.

# strokeTexture (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The texture used to stroke the shape.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKTexture * strokeTexture;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If a stroke texture is specified, the [strokeColor](strokecolor.md) property is ignored and the stroked portion of the shape node is rendered using the texture instead.

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeColor](strokecolor.md): The color used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [antialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.
