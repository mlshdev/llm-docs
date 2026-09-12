> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcheckerboardtexture/divisions](https://developer.apple.com/documentation/modelio/mdlcheckerboardtexture/divisions)

# divisions (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of squares along each dimension in the checkerboard pattern.

## Declaration

```swift
var divisions: Float { get set }
```

<a id="Discussion"></a>

## Discussion

For example, a value of 2 creates a checkerboard pattern of four squares (a 2 x 2 grid), where the top-left and bottom-right squares use the [color1](color1.md) color and the other two squares use the [color2](color2.md) color. A value of 4 creates a pattern of 16 squares (a 4 x 4 grid), and so on.

Changing the [divisions](divisions.md), [color1](color1.md), or [color2](color2.md) properties invalidates the cache, causing Model I/O to regenerate texel data the next time it is needed.

## See Also

### Configuring the Checkerboard Pattern

- [color1](color1.md): The color for half of the squares in the checkerboard pattern.
- [color2](color2.md): The color for the other half of the squares in the checkerboard pattern.

# divisions (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of squares along each dimension in the checkerboard pattern.

## Declaration

```objectivec
@property (nonatomic, assign) float divisions;
```

<a id="Discussion"></a>

## Discussion

For example, a value of 2 creates a checkerboard pattern of four squares (a 2 x 2 grid), where the top-left and bottom-right squares use the [color1](color1.md) color and the other two squares use the [color2](color2.md) color. A value of 4 creates a pattern of 16 squares (a 4 x 4 grid), and so on.

Changing the [divisions](divisions.md), [color1](color1.md), or [color2](color2.md) properties invalidates the cache, causing Model I/O to regenerate texel data the next time it is needed.

## See Also

### Configuring the Checkerboard Pattern

- [color1](color1.md): The color for half of the squares in the checkerboard pattern.
- [color2](color2.md): The color for the other half of the squares in the checkerboard pattern.
