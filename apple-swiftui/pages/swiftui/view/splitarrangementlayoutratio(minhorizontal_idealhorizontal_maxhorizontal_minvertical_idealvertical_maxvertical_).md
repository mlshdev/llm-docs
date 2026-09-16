> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/splitarrangementlayoutratio(minhorizontal:idealhorizontal:maxhorizontal:minvertical:idealvertical:maxvertical:)

# splitArrangementLayoutRatio(minHorizontal:idealHorizontal:maxHorizontal:minVertical:idealVertical:maxVertical:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Sets the size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.

## Declaration

```swift
nonisolated func splitArrangementLayoutRatio(minHorizontal: CGFloat? = nil, idealHorizontal: CGFloat? = nil, maxHorizontal: CGFloat? = nil, minVertical: CGFloat? = nil, idealVertical: CGFloat? = nil, maxVertical: CGFloat? = nil) -> some View

```

## Parameters

- `minHorizontal`: The minimum ratio for horizontal splits.
- `idealHorizontal`: The ideal ratio for horizontal splits.
- `maxHorizontal`: The maximum ratio for horizontal splits.
- `minVertical`: The minimum ratio for vertical splits.
- `idealVertical`: The ideal ratio for vertical splits.
- `maxVertical`: The maximum ratio for vertical splits.

<a id="discussion"></a>

## Discussion

```swift
ArrangementView {
    NumpadView()
        .splitArrangementLayoutRatio(
            minHorizontal: 0.2,
            idealHorizontal: 0.3,
            maxHorizontal: 0.5,
            idealVertical: 0.4)
} secondary: {
    HistoryView()
}
.arrangementViewStyle(.split)
```

## See Also

### Dynamically arranging a primary and secondary view

- [ArrangementView](../arrangementview.md): Beta. A view that arranges primary and secondary content using an adaptive layout that responds to the environment.
- [arrangementViewStyle(\_:)](arrangementviewstyle%28__%29.md): Beta. Sets the style for arrangement views within this view.
- [ArrangementViewStyle](../arrangementviewstyle.md): Beta. A style that configures an `ArrangementView` with an arrangement.
- [overlayArrangementEdge(\_:)](overlayarrangementedge%28__%29.md): Beta. The horizontal edge a view in an overlay arrangement occupies when the arrangement transitions to a horizontal layout.
- [splitArrangementFixedLayoutSize(horizontal:vertical:)](splitarrangementfixedlayoutsize%28horizontal_vertical_%29.md): Beta. Sets the preferred size constraint for an arrangement view in a split style to the ideal size of the view within its container. The arrangement view will prefer this size, but may resize to a smaller size depending on the priority of the view.
- [splitArrangementLayoutRatio(\_:)](splitarrangementlayoutratio%28__%29.md): Beta. Sets the preferred size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.
- [splitArrangementLayoutSize(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:)](splitarrangementlayoutsize%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_%29.md): Beta. Sets the size constraints for an arrangement view in a split style.
