> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contentshapekinds/dragpreview](https://developer.apple.com/documentation/swiftui/contentshapekinds/dragpreview)

# dragPreview

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The kind for drag and drop previews.

## Declaration

```swift
static let dragPreview: ContentShapeKinds
```

## Mentioned In

- [Making a view into a drag source](../making-a-view-into-a-drag-source.md)

<a id="discussion"></a>

## Discussion

When using this kind, only the preview shape is affected. To control the shape used to hit-test and start the drag preview, use the `interaction` kind.

## See Also

### Getting shape kinds

- [interaction](interaction.md): The kind for hit-testing and accessibility.
- [contextMenuPreview](contextmenupreview.md): The kind for context menu previews.
- [focusEffect](focuseffect.md): The kind for the focus effect.
- [hoverEffect](hovereffect.md): The kind for hover effects.
- [accessibility](accessibility.md): The kind for accessibility visuals and sorting.
