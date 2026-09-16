> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/splitarrangementlayoutratio(_:)

# splitArrangementLayoutRatio(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Sets the preferred size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.

## Declaration

```swift
nonisolated func splitArrangementLayoutRatio(_ ratio: CGFloat?) -> some View

```

## Parameters

- `ratio`: The ratio the view uses for its preferred size.

<a id="discussion"></a>

## Discussion

The view with the highest `layoutPriority` will be sized first using its ratio. When a ratio is used on a view that would be greater than the remaining size of the arrangement view container, the remaining size will be used. When a ratio of a view would result in the views of the container not filling its total size, the highest priority view will fill the remaining size of the container.

```swift
ArrangementView {
    ConversationView()
        .splitArrangementLayoutRatio(0.3)
} secondary: {
    PhotosView()
}
.arrangementViewStyle(.split.axes(.horizontal))
```

## See Also

### Dynamically arranging a primary and secondary view

- [ArrangementView](../arrangementview.md): Beta. A view that arranges primary and secondary content using an adaptive layout that responds to the environment.
- [arrangementViewStyle(\_:)](arrangementviewstyle%28__%29.md): Beta. Sets the style for arrangement views within this view.
- [ArrangementViewStyle](../arrangementviewstyle.md): Beta. A style that configures an `ArrangementView` with an arrangement.
- [overlayArrangementEdge(\_:)](overlayarrangementedge%28__%29.md): Beta. The horizontal edge a view in an overlay arrangement occupies when the arrangement transitions to a horizontal layout.
- [splitArrangementFixedLayoutSize(horizontal:vertical:)](splitarrangementfixedlayoutsize%28horizontal_vertical_%29.md): Beta. Sets the preferred size constraint for an arrangement view in a split style to the ideal size of the view within its container. The arrangement view will prefer this size, but may resize to a smaller size depending on the priority of the view.
- [splitArrangementLayoutRatio(minHorizontal:idealHorizontal:maxHorizontal:minVertical:idealVertical:maxVertical:)](splitarrangementlayoutratio%28minhorizontal_idealhorizontal_maxhorizontal_minvertical_idealvertical_maxvertical_%29.md): Beta. Sets the size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.
- [splitArrangementLayoutSize(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:)](splitarrangementlayoutsize%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_%29.md): Beta. Sets the size constraints for an arrangement view in a split style.
