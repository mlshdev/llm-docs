> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/renderingoptions](https://developer.apple.com/documentation/paperkit/renderingoptions)

# RenderingOptions

**Framework:** PaperKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The rendering options for drawing paper data models.

## Declaration

```swift
struct RenderingOptions
```

## Topics

### Creating rendering options

- [init(darkUserInterfaceStyle:layoutRightToLeft:)](renderingoptions/init%28darkuserinterfacestyle_layoutrighttoleft_%29.md): Creates a new rendering options value.
- [init(traitCollection:)](renderingoptions/init%28traitcollection_%29.md): Creates the most suitable options for rendering on a device with the specified traits.

### Configuring style

- [darkUserInterfaceStyle](renderingoptions/darkuserinterfacestyle.md): Use a dark user interface style for rendering.
- [rightToLeftLayoutDirection](renderingoptions/righttoleftlayoutdirection.md): Use a right to left layout direction for rendering.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuration

- [FeatureSet](featureset.md): The features PaperKit supports in its UI and data models.
- [ShapeConfiguration](shapeconfiguration.md): A configuration that specifies the appearance of a shape.
- [MarkupAutoresizing](markupautoresizing.md): Automatic sizing behaviors for this markup.
