> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markupadornment/imageconfiguration-swift.struct/image(_:alignmentanchor:)-6ds45](https://developer.apple.com/documentation/paperkit/markupadornment/imageconfiguration-swift.struct/image(_:alignmentanchor:)-6ds45)

# image(\_:alignmentAnchor:)

**Framework:** PaperKit  
**Kind:** Type Method

Creates an image configuration using a custom image.

## Declaration

```swift
static func image(_ image: UIImage, alignmentAnchor: CGPoint = .zero) -> MarkupAdornment.ImageConfiguration
```

## Parameters

- `image`: The `UIImage` to display.
- `alignmentAnchor`: The offset from the image center for positioning. Defaults to zero.

<a id="return-value"></a>

## Return Value

An `ImageConfiguration` for the custom image.

## See Also

### Creating an image configuration

- [default](default.md): The default image configuration using a pin-shaped system image.
- [systemImage(\_:tint:size:alignmentAnchor:)](systemimage%28__tint_size_alignmentanchor_%29-24032.md): Creates an image configuration using a system image.
- [systemImage(\_:tint:size:alignmentAnchor:)](systemimage%28__tint_size_alignmentanchor_%29-4itb9.md): Creates an image configuration using a system image.
- [image(\_:alignmentAnchor:)](image%28__alignmentanchor_%29-6nbjc.md): Creates an image configuration using a custom image.
