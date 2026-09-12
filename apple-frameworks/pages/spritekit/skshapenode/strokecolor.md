> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode/strokecolor](https://developer.apple.com/documentation/spritekit/skshapenode/strokecolor)

# strokeColor (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The color used to stroke the shape.

## Declaration

```swift
var strokeColor: UIColor { get set }
```

```swift
var strokeColor: NSColor { get set }
```

## Mentioned In

- [Getting Started with Shape Nodes](../getting-started-with-shape-nodes.md)

<a id="Discussion"></a>

## Discussion

The default stroke color is `[SKColor whiteColor]`. If you do not want to stroke the shape, use `[SKColor clearColor].`

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [isAntialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.

# strokeColor (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The color used to stroke the shape.

## Declaration

```objectivec
@property (nonatomic, retain) UIColor * strokeColor;
```

```objectivec
@property (nonatomic, retain) NSColor * strokeColor;
```

## Mentioned In

- [Getting Started with Shape Nodes](../getting-started-with-shape-nodes.md)

<a id="Discussion"></a>

## Discussion

The default stroke color is `[SKColor whiteColor]`. If you do not want to stroke the shape, use `[SKColor clearColor].`

## See Also

### Stroking a Shape

- [lineWidth](linewidth.md): The width used to stroke the path.
- [strokeTexture](stroketexture.md): The texture used to stroke the shape.
- [glowWidth](glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [antialiased](isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.
