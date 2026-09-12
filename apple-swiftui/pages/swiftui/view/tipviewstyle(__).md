> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tipviewstyle(_:)](https://developer.apple.com/documentation/swiftui/view/tipviewstyle(_:))

# tipViewStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the given style for TipView within the view hierarchy.

## Declaration

```swift
nonisolated func tipViewStyle(_ style: some TipViewStyle) -> some View

```

## Parameters

- `style`: The style to set.

<a id="return-value"></a>

## Return Value

A view that uses the specified style on its child views.

<a id="discussion"></a>

## Discussion

For more information on styling tips, see `TipKit/TipViewStyle`.

## See Also

### Providing tips

- [popoverTip(\_:arrowEdge:action:)](popovertip%28__arrowedge_action_%29.md): Presents a popover tip on the modified view.
- [popoverTip(\_:isPresented:attachmentAnchor:arrowEdge:action:)](popovertip%28__ispresented_attachmentanchor_arrowedge_action_%29.md): Presents a popover tip on the modified view.
- [popoverTip(\_:isPresented:attachmentAnchor:arrowEdges:action:)](popovertip%28__ispresented_attachmentanchor_arrowedges_action_%29.md): Presents a popover tip on the modified view.
- [tipAnchor(\_:)](tipanchor%28__%29.md): Sets a value for the specified tip anchor to be used to anchor a tip view to the `.bounds` of the view.
- [tipBackground(\_:)](tipbackground%28__%29.md): Sets the tip’s view background to a style.
- [tipBackgroundInteraction(\_:)](tipbackgroundinteraction%28__%29.md): Controls whether people can interact with the view behind a presented tip.
- [tipCornerRadius(\_:antialiased:)](tipcornerradius%28__antialiased_%29.md): Sets the corner radius for an inline tip view.
- [tipImageSize(\_:)](tipimagesize%28__%29.md): Sets the size for a tip’s image.
- [tipImageStyle(\_:)](tipimagestyle%28__%29.md): Sets the style for a tip’s image.
- [tipImageStyle(\_:\_:)](tipimagestyle%28____%29.md): Sets the style for a tip’s image.
- [tipImageStyle(\_:\_:\_:)](tipimagestyle%28______%29.md): Sets the style for a tip’s image.
