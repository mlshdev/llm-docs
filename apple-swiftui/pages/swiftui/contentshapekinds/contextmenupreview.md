> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/contentshapekinds/contextmenupreview

# contextMenuPreview

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 17.0+ · visionOS 1.0+

The kind for context menu previews.

## Declaration

```swift
static let contextMenuPreview: ContentShapeKinds
```

<a id="discussion"></a>

## Discussion

When using this kind, only the preview shape will be affected. To control the shape used to hit-test and start the context menu presentation, use the `.interaction` kind.

## See Also

### Getting shape kinds

- [interaction](interaction.md): The kind for hit-testing and accessibility.
- [dragPreview](dragpreview.md): The kind for drag and drop previews.
- [focusEffect](focuseffect.md): The kind for the focus effect.
- [hoverEffect](hovereffect.md): The kind for hover effects.
- [accessibility](accessibility.md): The kind for accessibility visuals and sorting.
