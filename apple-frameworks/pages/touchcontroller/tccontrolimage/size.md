> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/touchcontroller/tccontrolimage/size

# size (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The size of the image in points.

## Declaration

```swift
var size: CGSize { get set }
```

## See Also

### Inspecting the control image

- [highlightTexture](highlighttexture.md): The Metal texture to use for the image when highlighted. May be `nil`.
- [offset](offset.md): The offset from the center of the parent control in points.
- [texture](texture.md): The Metal texture to use for the image.
- [tintColor](tintcolor.md): The color tint to apply to the texture. The color ref is retained.

# size (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The size of the image in points.

## Declaration

```objectivec
@property (nonatomic, assign) CGSize size;
```

## See Also

### Inspecting the control image

- [highlightTexture](highlighttexture.md): The Metal texture to use for the image when highlighted. May be `nil`.
- [offset](offset.md): The offset from the center of the parent control in points.
- [texture](texture.md): The Metal texture to use for the image.
- [tintColor](tintcolor.md): The color tint to apply to the texture. The color ref is retained.
