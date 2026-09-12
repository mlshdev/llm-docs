> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/popovertip(_:ispresented:attachmentanchor:arrowedge:action:)](https://developer.apple.com/documentation/swiftui/view/popovertip(_:ispresented:attachmentanchor:arrowedge:action:))

# popoverTip(\_:isPresented:attachmentAnchor:arrowEdge:action:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Presents a popover tip on the modified view.

## Declaration

```swift
@preconcurrency nonisolated func popoverTip(_ tip: (any Tip)?, isPresented: Binding<Bool>? = nil, attachmentAnchor: PopoverAttachmentAnchor = .rect(.bounds), arrowEdge: Edge? = nil, action: @escaping @MainActor @Sendable (Tips.Action) -> Void = { _ in }) -> some View

```

## Parameters

- `tip`: The tip to display.
- `isPresented`: A binding that will automatically update to true when a tip is displayed. This value can be changed to temporarily hide or show a currently displayable tip. If this value is `nil`, the popover will automatically be dismissed based on the tip’s status and display rules.
- `attachmentAnchor`: The positioning anchor that defines the attachment point of the popover. The default is bounds.
- `arrowEdge`: The edge of the attachmentAnchor that defines the location of the popover’s arrow. By default, the system will choose the best orientation of the popover’s arrow.
- `action`: The closure to perform when the user triggers a tip’s action.

<a id="Discussion"></a>

### Discussion

Use this modifier to present a tip as a popover on an existing view when the tip becomes eligible for display.

```swift
struct TrailRow: View {
    let trail: Trail

    var body: some View {
        VStack {
            HStack {
                Text(trail.name)

                Button(action: trail.favorite) {
                    Image(systemName: "star")
                }
            }
        }
        .popoverTip(FavoriteTrailTip(), attachmentAnchor: .point(.center), arrowEdge: .top)
    }
}
```

## See Also

### Providing tips

- [popoverTip(\_:arrowEdge:action:)](popovertip%28__arrowedge_action_%29.md): Presents a popover tip on the modified view.
- [popoverTip(\_:isPresented:attachmentAnchor:arrowEdges:action:)](popovertip%28__ispresented_attachmentanchor_arrowedges_action_%29.md): Presents a popover tip on the modified view.
- [tipAnchor(\_:)](tipanchor%28__%29.md): Sets a value for the specified tip anchor to be used to anchor a tip view to the `.bounds` of the view.
- [tipBackground(\_:)](tipbackground%28__%29.md): Sets the tip’s view background to a style.
- [tipBackgroundInteraction(\_:)](tipbackgroundinteraction%28__%29.md): Controls whether people can interact with the view behind a presented tip.
- [tipCornerRadius(\_:antialiased:)](tipcornerradius%28__antialiased_%29.md): Sets the corner radius for an inline tip view.
- [tipImageSize(\_:)](tipimagesize%28__%29.md): Sets the size for a tip’s image.
- [tipViewStyle(\_:)](tipviewstyle%28__%29.md): Sets the given style for TipView within the view hierarchy.
- [tipImageStyle(\_:)](tipimagestyle%28__%29.md): Sets the style for a tip’s image.
- [tipImageStyle(\_:\_:)](tipimagestyle%28____%29.md): Sets the style for a tip’s image.
- [tipImageStyle(\_:\_:\_:)](tipimagestyle%28______%29.md): Sets the style for a tip’s image.
