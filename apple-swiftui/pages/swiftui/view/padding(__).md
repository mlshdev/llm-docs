> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/padding(_:)](https://developer.apple.com/documentation/swiftui/view/padding(_:))

# padding(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a different padding amount to each edge of this view.

## Declaration

```swift
nonisolated func padding(_ insets: EdgeInsets) -> some View

```

## Parameters

- `insets`: An [EdgeInsets](../edgeinsets.md) instance that contains padding amounts for each edge.

<a id="return-value"></a>

## Return Value

A view that’s padded by different amounts on each edge.

<a id="discussion"></a>

## Discussion

Use this modifier to add a different amount of padding on each edge of a view:

```swift
VStack {
    Text("Text padded by different amounts on each edge.")
        .padding(EdgeInsets(top: 10, leading: 20, bottom: 40, trailing: 0))
        .border(.gray)
    Text("Unpadded text for comparison.")
        .border(.yellow)
}
```

The order in which you apply modifiers matters. The example above applies the padding before applying the border to ensure that the border encompasses the padded region:

![A screenshot of two text strings arranged vertically, each surrounded](https://developer.apple.com/images/com.apple.SwiftUI/View-padding-3-iOS@2x.png)

To pad a view on specific edges with equal padding for all padded edges, use [padding(\_:\_:)](padding%28____%29.md). To pad all edges of a view equally, use [padding(\_:)](padding%28__%29.md).

## See Also

### Adding padding around a view

- [padding(\_:\_:)](padding%28____%29.md): Adds an equal padding amount to specific edges of this view.
- [padding3D(\_:)](padding3d%28__%29.md): Pads this view using the edge insets you specify.
- [padding3D(\_:\_:)](padding3d%28____%29.md): Pads this view using the edge insets you specify.
- [scenePadding(\_:)](scenepadding%28__%29.md): Adds padding to the specified edges of this view using an amount that’s appropriate for the current scene.
- [scenePadding(\_:edges:)](scenepadding%28__edges_%29.md): Adds a specified kind of padding to the specified edges of this view using an amount that’s appropriate for the current scene.
- [ScenePadding](../scenepadding.md): The padding used to space a view from its containing scene.
