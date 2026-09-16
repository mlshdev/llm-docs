> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/arrangementviewstyle(_:)

# arrangementViewStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Sets the style for arrangement views within this view.

## Declaration

```swift
nonisolated func arrangementViewStyle(_ style: some ArrangementViewStyle) -> some View

```

<a id="Overview"></a>

## Overview

Use this modifier to set a specific style for all arrangement views within a view:

```swift
ArrangementView {
    PrimaryContent()
} secondary: {
    SecondaryContent()
}
.arrangementViewStyle(.split)
```

## See Also

### Dynamically arranging a primary and secondary view

- [ArrangementView](../arrangementview.md): Beta. A view that arranges primary and secondary content using an adaptive layout that responds to the environment.
- [ArrangementViewStyle](../arrangementviewstyle.md): Beta. A style that configures an `ArrangementView` with an arrangement.
- [overlayArrangementEdge(\_:)](overlayarrangementedge%28__%29.md): Beta. The horizontal edge a view in an overlay arrangement occupies when the arrangement transitions to a horizontal layout.
- [splitArrangementFixedLayoutSize(horizontal:vertical:)](splitarrangementfixedlayoutsize%28horizontal_vertical_%29.md): Beta. Sets the preferred size constraint for an arrangement view in a split style to the ideal size of the view within its container. The arrangement view will prefer this size, but may resize to a smaller size depending on the priority of the view.
- [splitArrangementLayoutRatio(\_:)](splitarrangementlayoutratio%28__%29.md): Beta. Sets the preferred size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.
- [splitArrangementLayoutRatio(minHorizontal:idealHorizontal:maxHorizontal:minVertical:idealVertical:maxVertical:)](splitarrangementlayoutratio%28minhorizontal_idealhorizontal_maxhorizontal_minvertical_idealvertical_maxvertical_%29.md): Beta. Sets the size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.
- [splitArrangementLayoutSize(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:)](splitarrangementlayoutsize%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_%29.md): Beta. Sets the size constraints for an arrangement view in a split style.
