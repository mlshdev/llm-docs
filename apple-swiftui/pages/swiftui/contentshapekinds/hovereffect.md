> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contentshapekinds/hovereffect](https://developer.apple.com/documentation/swiftui/contentshapekinds/hovereffect)

# hoverEffect

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 18.0+ · visionOS 1.0+

The kind for hover effects.

## Declaration

```swift
static let hoverEffect: ContentShapeKinds
```

<a id="discussion"></a>

## Discussion

When using this kind, only the preview shape is affected. To control the shape used to hit-test and start the effect, use the `interaction` kind.

On tvOS, this is used to define the shape of any hover effect applied to focusable and hoverable controls, for example button border or clipping shapes.

This kind does not affect the `onHover` modifier.

## See Also

### Getting shape kinds

- [interaction](interaction.md): The kind for hit-testing and accessibility.
- [dragPreview](dragpreview.md): The kind for drag and drop previews.
- [contextMenuPreview](contextmenupreview.md): The kind for context menu previews.
- [focusEffect](focuseffect.md): The kind for the focus effect.
- [accessibility](accessibility.md): The kind for accessibility visuals and sorting.
