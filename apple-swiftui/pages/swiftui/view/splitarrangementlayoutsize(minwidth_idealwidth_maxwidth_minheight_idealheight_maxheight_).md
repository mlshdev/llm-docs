> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/splitarrangementlayoutsize(minwidth:idealwidth:maxwidth:minheight:idealheight:maxheight:)

# splitArrangementLayoutSize(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Sets the size constraints for an arrangement view in a split style.

## Declaration

```swift
nonisolated func splitArrangementLayoutSize(minWidth: CGFloat? = nil, idealWidth: CGFloat? = nil, maxWidth: CGFloat? = nil, minHeight: CGFloat? = nil, idealHeight: CGFloat? = nil, maxHeight: CGFloat? = nil) -> some View

```

## Parameters

- `minWidth`: The minimum width for horizontal splits.
- `idealWidth`: The ideal width for horizontal splits.
- `maxWidth`: The maximum width for horizontal splits.
- `minHeight`: The minimum height for vertical splits.
- `idealHeight`: The ideal height for vertical splits.
- `maxHeight`: The maximum height for vertical splits.

<a id="discussion"></a>

## Discussion

Views with higher `layoutPriority` are sized first using their ideal size, clamped to their min and max values. Width constraints apply to horizontal arrangements, and height constraints apply to vertical arrangements.

```swift
ArrangementView {
    PhotoView()
        .splitArrangementLayoutSize(
            minWidth: 200,
            idealWidth: 320,
            maxWidth: 400)
} secondary: {
    InfoView()
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
- [splitArrangementLayoutRatio(minHorizontal:idealHorizontal:maxHorizontal:minVertical:idealVertical:maxVertical:)](splitarrangementlayoutratio%28minhorizontal_idealhorizontal_maxhorizontal_minvertical_idealvertical_maxvertical_%29.md): Beta. Sets the size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.
