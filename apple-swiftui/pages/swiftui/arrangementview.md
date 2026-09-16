> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/arrangementview

# ArrangementView

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A view that arranges primary and secondary content using an adaptive layout that responds to the environment.

## Declaration

```swift
nonisolated struct ArrangementView<Primary, Secondary> where Primary : View, Secondary : View
```

<a id="overview"></a>

## Overview

You create an arrangement view with a primary and secondary view. The arrangement view computes a layout for its content based on the context it is presented in, including the available size, size class, and hardware features.

Use the [arrangementViewStyle(\_:)](view/arrangementviewstyle%28__%29.md) modifier to choose how the arrangement view lays out its content. The default style is [AutomaticArrangementViewStyle](automaticarrangementviewstyle.md), which resolves to a split arrangement. The other built-in styles are [OverlayArrangementViewStyle](overlayarrangementviewstyle.md) and [SplitArrangementViewStyle](splitarrangementviewstyle.md).

<a id="Overlay-arrangements"></a>

### Overlay arrangements

An overlay arrangement layers the primary view on top of the secondary view in z-order. This layout is well-suited for full screen experiences like media players, where playback controls overlay a video surface:

```swift
ArrangementView {
    PlayerControls()
} secondary: {
    VideoPlayer()
}
.arrangementViewStyle(.overlay)
```

When the environment changes, such as when a foldable device is folded, the overlay arrangement can transition its views from a layered layout into a side-by-side layout. Use [axes(\_:)](overlayarrangementviewstyle/axes%28__%29.md) to control which axes are supported.

<a id="Split-arrangements"></a>

### Split arrangements

A split arrangement places the primary and secondary views side by side along one or more axes. Use this layout for experiences that display two distinct pieces of content simultaneously, such as a music player alongside its lyrics:

```swift
ArrangementView {
    NowPlayingView()
} secondary: {
    LyricsView()
}
.arrangementViewStyle(.split)
```

The split arrangement adapts its axis based on the available size and size class. You can constrain which axes the split supports using [axes(\_:)](splitarrangementviewstyle/axes%28__%29.md).

## Topics

### Creating an arrangement view

- [init(primary:secondary:)](arrangementview/init%28primary_secondary_%29.md): Beta. Creates an arrangement view with a primary and secondary view.
- [init(\_:)](arrangementview/init%28__%29.md): Beta. Conforms when `Primary` is `ArrangementViewStyleConfiguration.Primary` and `Secondary` is `ArrangementViewStyleConfiguration.Secondary`. Creates an arrangement view from a style configuration.
- [ArrangementViewStyleConfiguration](arrangementviewstyleconfiguration.md): Beta. The properties of an arrangement view used to create its custom style.

### Configuring an arrangement view

- [arrangementViewStyle(\_:)](view/arrangementviewstyle%28__%29.md): Beta. Sets the style for arrangement views within this view.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Dynamically arranging a primary and secondary view

- [arrangementViewStyle(\_:)](view/arrangementviewstyle%28__%29.md): Beta. Sets the style for arrangement views within this view.
- [ArrangementViewStyle](arrangementviewstyle.md): Beta. A style that configures an `ArrangementView` with an arrangement.
- [overlayArrangementEdge(\_:)](view/overlayarrangementedge%28__%29.md): Beta. The horizontal edge a view in an overlay arrangement occupies when the arrangement transitions to a horizontal layout.
- [splitArrangementFixedLayoutSize(horizontal:vertical:)](view/splitarrangementfixedlayoutsize%28horizontal_vertical_%29.md): Beta. Sets the preferred size constraint for an arrangement view in a split style to the ideal size of the view within its container. The arrangement view will prefer this size, but may resize to a smaller size depending on the priority of the view.
- [splitArrangementLayoutRatio(\_:)](view/splitarrangementlayoutratio%28__%29.md): Beta. Sets the preferred size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.
- [splitArrangementLayoutRatio(minHorizontal:idealHorizontal:maxHorizontal:minVertical:idealVertical:maxVertical:)](view/splitarrangementlayoutratio%28minhorizontal_idealhorizontal_maxhorizontal_minvertical_idealvertical_maxvertical_%29.md): Beta. Sets the size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.
- [splitArrangementLayoutSize(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:)](view/splitarrangementlayoutsize%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_%29.md): Beta. Sets the size constraints for an arrangement view in a split style.
