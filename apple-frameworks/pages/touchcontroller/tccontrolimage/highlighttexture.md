> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolimage/highlighttexture](https://developer.apple.com/documentation/touchcontroller/tccontrolimage/highlighttexture)

# highlightTexture (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The Metal texture to use for the image when highlighted. May be `nil`.

## Declaration

```swift
var highlightTexture: (any MTLTexture)? { get set }
```

## See Also

### Inspecting the control image

- [offset](offset.md): The offset from the center of the parent control in points.
- [size](size.md): The size of the image in points.
- [texture](texture.md): The Metal texture to use for the image.
- [tintColor](tintcolor.md): The color tint to apply to the texture. The color ref is retained.

# highlightTexture (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The Metal texture to use for the image when highlighted. May be `nil`.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<MTLTexture> highlightTexture;
```

## See Also

### Inspecting the control image

- [offset](offset.md): The offset from the center of the parent control in points.
- [size](size.md): The size of the image in points.
- [texture](texture.md): The Metal texture to use for the image.
- [tintColor](tintcolor.md): The color tint to apply to the texture. The color ref is retained.
