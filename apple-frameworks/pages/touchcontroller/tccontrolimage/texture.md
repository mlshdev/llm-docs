> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolimage/texture](https://developer.apple.com/documentation/touchcontroller/tccontrolimage/texture)

# texture (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The Metal texture to use for the image.

## Declaration

```swift
var texture: any MTLTexture { get set }
```

## See Also

### Inspecting the control image

- [highlightTexture](highlighttexture.md): The Metal texture to use for the image when highlighted. May be `nil`.
- [offset](offset.md): The offset from the center of the parent control in points.
- [size](size.md): The size of the image in points.
- [tintColor](tintcolor.md): The color tint to apply to the texture. The color ref is retained.

# texture (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The Metal texture to use for the image.

## Declaration

```objectivec
@property (nonatomic, strong) id<MTLTexture> texture;
```

## See Also

### Inspecting the control image

- [highlightTexture](highlighttexture.md): The Metal texture to use for the image when highlighted. May be `nil`.
- [offset](offset.md): The offset from the center of the parent control in points.
- [size](size.md): The size of the image in points.
- [tintColor](tintcolor.md): The color tint to apply to the texture. The color ref is retained.
