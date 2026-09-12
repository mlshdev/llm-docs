> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tipbackground(_:)](https://developer.apple.com/documentation/swiftui/view/tipbackground(_:))

# tipBackground(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the tip’s view background to a style.

## Declaration

```swift
nonisolated func tipBackground<S>(_ style: S) -> some View where S : ShapeStyle

```

## Parameters

- `style`: An instance of a type that conforms to `ShapeStyle` that SwiftUI draws behind the modified view.

<a id="return-value"></a>

## Return Value

A view with the specified style drawn behind it.

## See Also

### Providing tips

- [popoverTip(\_:arrowEdge:action:)](popovertip%28__arrowedge_action_%29.md): Presents a popover tip on the modified view.
- [popoverTip(\_:isPresented:attachmentAnchor:arrowEdge:action:)](popovertip%28__ispresented_attachmentanchor_arrowedge_action_%29.md): Presents a popover tip on the modified view.
- [popoverTip(\_:isPresented:attachmentAnchor:arrowEdges:action:)](popovertip%28__ispresented_attachmentanchor_arrowedges_action_%29.md): Presents a popover tip on the modified view.
- [tipAnchor(\_:)](tipanchor%28__%29.md): Sets a value for the specified tip anchor to be used to anchor a tip view to the `.bounds` of the view.
- [tipBackgroundInteraction(\_:)](tipbackgroundinteraction%28__%29.md): Controls whether people can interact with the view behind a presented tip.
- [tipCornerRadius(\_:antialiased:)](tipcornerradius%28__antialiased_%29.md): Sets the corner radius for an inline tip view.
- [tipImageSize(\_:)](tipimagesize%28__%29.md): Sets the size for a tip’s image.
- [tipViewStyle(\_:)](tipviewstyle%28__%29.md): Sets the given style for TipView within the view hierarchy.
- [tipImageStyle(\_:)](tipimagestyle%28__%29.md): Sets the style for a tip’s image.
- [tipImageStyle(\_:\_:)](tipimagestyle%28____%29.md): Sets the style for a tip’s image.
- [tipImageStyle(\_:\_:\_:)](tipimagestyle%28______%29.md): Sets the style for a tip’s image.
