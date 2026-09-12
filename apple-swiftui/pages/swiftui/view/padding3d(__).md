> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/padding3d(_:)](https://developer.apple.com/documentation/swiftui/view/padding3d(_:))

# padding3D(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Pads this view using the edge insets you specify.

## Declaration

```swift
@export(implementation) nonisolated func padding3D(_ insets: EdgeInsets3D) -> some View

```

## Parameters

- `insets`: The edges to inset.

<a id="return-value"></a>

## Return Value

A view that pads this view using edge the insets you specify.

## See Also

### Adding padding around a view

- [padding(\_:)](padding%28__%29.md): Adds a different padding amount to each edge of this view.
- [padding(\_:\_:)](padding%28____%29.md): Adds an equal padding amount to specific edges of this view.
- [padding3D(\_:\_:)](padding3d%28____%29.md): Pads this view using the edge insets you specify.
- [scenePadding(\_:)](scenepadding%28__%29.md): Adds padding to the specified edges of this view using an amount that’s appropriate for the current scene.
- [scenePadding(\_:edges:)](scenepadding%28__edges_%29.md): Adds a specified kind of padding to the specified edges of this view using an amount that’s appropriate for the current scene.
- [ScenePadding](../scenepadding.md): The padding used to space a view from its containing scene.
