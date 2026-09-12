> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/spatialoverlay(alignment:content:)](https://developer.apple.com/documentation/swiftui/view/spatialoverlay(alignment:content:))

# spatialOverlay(alignment:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Adds secondary views within the 3D bounds of this view.

## Declaration

```swift
@export(implementation) nonisolated func spatialOverlay<V>(alignment: Alignment3D = .center, @ContentBuilder content: () -> V) -> some View where V : View

```

## Parameters

- `alignment`: The alignment with a default value of [center](../alignment3d/center.md) that you use to position the secondary view.
- `content`: The content builder which produces views to occupy the same 3D space as this view. Multiple views provided by content are organized into a [SpatialContainer](../spatialcontainer.md).

<a id="return-value"></a>

## Return Value

A view that adds `content` within the view’s 3D bounds.

<a id="discussion"></a>

## Discussion

Multiple views provided by `content` are stacked depthwise.

## See Also

### Foreground elements

- [border(\_:width:)](border%28__width_%29.md): Adds a border to this view with the specified style and width.
- [overlay(alignment:content:)](overlay%28alignment_content_%29.md): Layers the views that you specify in front of this view.
- [overlay(\_:ignoresSafeAreaEdges:)](overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [overlay(\_:in:fillStyle:)](overlay%28__in_fillstyle_%29.md): Layers a shape that you specify in front of this view.
- [spatialOverlayPreferenceValue(\_:alignment:\_:)](spatialoverlaypreferencevalue%28__alignment___%29.md): Uses the specified preference value from the view to produce another view occupying the same 3D space of the first view.
