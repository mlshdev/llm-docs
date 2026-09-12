> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrolimage/tintcolor](https://developer.apple.com/documentation/touchcontroller/tccontrolimage/tintcolor)

# tintColor (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The color tint to apply to the texture. The color ref is retained.

## Declaration

```swift
unowned(unsafe) var tintColor: CGColor { get set }
```

## See Also

### Inspecting the control image

- [highlightTexture](highlighttexture.md): The Metal texture to use for the image when highlighted. May be `nil`.
- [offset](offset.md): The offset from the center of the parent control in points.
- [size](size.md): The size of the image in points.
- [texture](texture.md): The Metal texture to use for the image.

# tintColor (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The color tint to apply to the texture. The color ref is retained.

## Declaration

```objectivec
@property (nonatomic, assign) CGColorRef tintColor;
```

## See Also

### Inspecting the control image

- [highlightTexture](highlighttexture.md): The Metal texture to use for the image when highlighted. May be `nil`.
- [offset](offset.md): The offset from the center of the parent control in points.
- [size](size.md): The size of the image in points.
- [texture](texture.md): The Metal texture to use for the image.
