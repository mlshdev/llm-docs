> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/spatialoverlaypreferencevalue(_:alignment:_:)](https://developer.apple.com/documentation/swiftui/view/spatialoverlaypreferencevalue(_:alignment:_:))

# spatialOverlayPreferenceValue(\_:alignment:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Uses the specified preference value from the view to produce another view occupying the same 3D space of the first view.

## Declaration

```swift
@export(implementation) nonisolated func spatialOverlayPreferenceValue<K, V>(_ key: K.Type, alignment: Alignment3D = .center, @ContentBuilder _ transform: @escaping (K.Value) -> V) -> some View where K : PreferenceKey, V : View

```

## See Also

### Foreground elements

- [border(\_:width:)](border%28__width_%29.md): Adds a border to this view with the specified style and width.
- [overlay(alignment:content:)](overlay%28alignment_content_%29.md): Layers the views that you specify in front of this view.
- [overlay(\_:ignoresSafeAreaEdges:)](overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [overlay(\_:in:fillStyle:)](overlay%28__in_fillstyle_%29.md): Layers a shape that you specify in front of this view.
- [spatialOverlay(alignment:content:)](spatialoverlay%28alignment_content_%29.md): Adds secondary views within the 3D bounds of this view.
