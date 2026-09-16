> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/arrangementviewstyle

# ArrangementViewStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A style that configures an `ArrangementView` with an arrangement.

## Declaration

```swift
@MainActor @preconcurrency protocol ArrangementViewStyle
```

## Topics

### Getting arrangement view styles

- [automatic](arrangementviewstyle/automatic.md): Beta. Conforms when `Self` is `AutomaticArrangementViewStyle`. The default arrangement view style.
- [overlay](arrangementviewstyle/overlay.md): Beta. Conforms when `Self` is `OverlayArrangementViewStyle`. An arrangement view style that layers the primary view over the secondary view in z-order.
- [split](arrangementviewstyle/split.md): Beta. Conforms when `Self` is `SplitArrangementViewStyle`. An arrangement view style that places the primary and secondary views side by side along one or more axes.

### Creating a view using an arrangement view style

- [makeBody(configuration:)](arrangementviewstyle/makebody%28configuration_%29.md): Beta. Creates a view for the arrangement view style from the configuration.
- [Body](arrangementviewstyle/body.md): Beta.
- [ArrangementViewStyle.Configuration](arrangementviewstyle/configuration.md): Beta. The configuration used to create the arrangement view style.

### Supporting Types

- [AutomaticArrangementViewStyle](automaticarrangementviewstyle.md): Beta. The default arrangement view style.
- [OverlayArrangementViewStyle](overlayarrangementviewstyle.md): Beta. An arrangement view style which overlays views.
- [SplitArrangementViewStyle](splitarrangementviewstyle.md): Beta. An arrangement view style which splits views.

## Relationships

### Conforming Types

- [AutomaticArrangementViewStyle](automaticarrangementviewstyle.md)
- [OverlayArrangementViewStyle](overlayarrangementviewstyle.md)
- [SplitArrangementViewStyle](splitarrangementviewstyle.md)

## See Also

### Dynamically arranging a primary and secondary view

- [ArrangementView](arrangementview.md): Beta. A view that arranges primary and secondary content using an adaptive layout that responds to the environment.
- [arrangementViewStyle(\_:)](view/arrangementviewstyle%28__%29.md): Beta. Sets the style for arrangement views within this view.
- [overlayArrangementEdge(\_:)](view/overlayarrangementedge%28__%29.md): Beta. The horizontal edge a view in an overlay arrangement occupies when the arrangement transitions to a horizontal layout.
- [splitArrangementFixedLayoutSize(horizontal:vertical:)](view/splitarrangementfixedlayoutsize%28horizontal_vertical_%29.md): Beta. Sets the preferred size constraint for an arrangement view in a split style to the ideal size of the view within its container. The arrangement view will prefer this size, but may resize to a smaller size depending on the priority of the view.
- [splitArrangementLayoutRatio(\_:)](view/splitarrangementlayoutratio%28__%29.md): Beta. Sets the preferred size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.
- [splitArrangementLayoutRatio(minHorizontal:idealHorizontal:maxHorizontal:minVertical:idealVertical:maxVertical:)](view/splitarrangementlayoutratio%28minhorizontal_idealhorizontal_maxhorizontal_minvertical_idealvertical_maxvertical_%29.md): Beta. Sets the size ratio for an arrangement view in a split style. Use this modifier when you want to customize the size of the view compared to its other views in the split layout.
- [splitArrangementLayoutSize(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:)](view/splitarrangementlayoutsize%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_%29.md): Beta. Sets the size constraints for an arrangement view in a split style.
