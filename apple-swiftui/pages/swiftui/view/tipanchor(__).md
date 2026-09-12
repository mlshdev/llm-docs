> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tipanchor(_:)](https://developer.apple.com/documentation/swiftui/view/tipanchor(_:))

# tipAnchor(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Sets a value for the specified tip anchor to be used to anchor a tip view to the `.bounds` of the view.

## Declaration

```swift
nonisolated func tipAnchor<AnchorID>(_ id: AnchorID) -> some View where AnchorID : Hashable, AnchorID : Sendable

```

## Parameters

- `id`: The anchored view’s identifier.

<a id="return-value"></a>

## Return Value

A new version of the view that writes to the key.

<a id="discussion"></a>

## Discussion

Use this modifier to specify an anchor view for a `TipView`’s arrow to point towards.

```swift
struct TrailRow: View {
    let trail: Trail

    var body: some View {
        HStack {
            Text(trail.name)

            Button(action: trail.favorite) {
                Image(systemName: "star")
            }
            .tipAnchor("FavoriteTrailTipAnchor")
        }

        TipView(FavoriteTrailTip(), anchorID: "FavoriteTrailTipAnchor")
    }
}
```

## See Also

### Providing tips

- [popoverTip(\_:arrowEdge:action:)](popovertip%28__arrowedge_action_%29.md): Presents a popover tip on the modified view.
- [popoverTip(\_:isPresented:attachmentAnchor:arrowEdge:action:)](popovertip%28__ispresented_attachmentanchor_arrowedge_action_%29.md): Presents a popover tip on the modified view.
- [popoverTip(\_:isPresented:attachmentAnchor:arrowEdges:action:)](popovertip%28__ispresented_attachmentanchor_arrowedges_action_%29.md): Presents a popover tip on the modified view.
- [tipBackground(\_:)](tipbackground%28__%29.md): Sets the tip’s view background to a style.
- [tipBackgroundInteraction(\_:)](tipbackgroundinteraction%28__%29.md): Controls whether people can interact with the view behind a presented tip.
- [tipCornerRadius(\_:antialiased:)](tipcornerradius%28__antialiased_%29.md): Sets the corner radius for an inline tip view.
- [tipImageSize(\_:)](tipimagesize%28__%29.md): Sets the size for a tip’s image.
- [tipViewStyle(\_:)](tipviewstyle%28__%29.md): Sets the given style for TipView within the view hierarchy.
- [tipImageStyle(\_:)](tipimagestyle%28__%29.md): Sets the style for a tip’s image.
- [tipImageStyle(\_:\_:)](tipimagestyle%28____%29.md): Sets the style for a tip’s image.
- [tipImageStyle(\_:\_:\_:)](tipimagestyle%28______%29.md): Sets the style for a tip’s image.
