> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupadornment/imageconfiguration-swift.struct/systemimage(_:tint:size:alignmentanchor:)-24032](https://developer.apple.com/documentation/paperkit/markupadornment/imageconfiguration-swift.struct/systemimage(_:tint:size:alignmentanchor:)-24032)

# systemImage(\_:tint:size:alignmentAnchor:)

**Framework:** PaperKit  
**Kind:** Type Method

Creates an image configuration using a system image.

## Declaration

```swift
static func systemImage(_ name: String, tint: UIColor = .tintColor, size: CGSize? = nil, alignmentAnchor: CGPoint = .zero) -> MarkupAdornment.ImageConfiguration
```

## Parameters

- `name`: The SF Symbol name for the system image.
- `tint`: The color to apply to the image. Defaults to the system tint color.
- `size`: The size of the rendered image in points. Defaults to 48x48.
- `alignmentAnchor`: The offset from the image center for positioning. Defaults to zero.

<a id="return-value"></a>

## Return Value

An `ImageConfiguration` for the system image.

## See Also

### Creating an image configuration

- [default](default.md): The default image configuration using a pin-shaped system image.
- [systemImage(\_:tint:size:alignmentAnchor:)](systemimage%28__tint_size_alignmentanchor_%29-4itb9.md): Creates an image configuration using a system image.
- [image(\_:alignmentAnchor:)](image%28__alignmentanchor_%29-6ds45.md): Creates an image configuration using a custom image.
- [image(\_:alignmentAnchor:)](image%28__alignmentanchor_%29-6nbjc.md): Creates an image configuration using a custom image.
