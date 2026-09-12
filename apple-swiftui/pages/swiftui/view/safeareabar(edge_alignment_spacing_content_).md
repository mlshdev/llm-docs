> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/safeareabar(edge:alignment:spacing:content:)](https://developer.apple.com/documentation/swiftui/view/safeareabar(edge:alignment:spacing:content:))

# safeAreaBar(edge:alignment:spacing:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Shows the specified content as a custom bar beside the modified view.

## Declaration

```swift
nonisolated func safeAreaBar(edge: HorizontalEdge, alignment: VerticalAlignment = .center, spacing: CGFloat? = nil, @ContentBuilder content: () -> some View) -> some View

```

## Parameters

- `edge`: The horizontal edge of the view on which `content` is placed.
- `alignment`: The alignment guide used to position `content` vertically.
- `spacing`: Extra distance placed between the two views, or nil to use the default amount of spacing.
- `content`: A content builder function providing the view to display as a custom bar.

<a id="return-value"></a>

## Return Value

A new view that displays `content` beside the modified view, making space for the `content` view by horizontally insetting the modified view, adjusting the safe area and scroll edge effects to match.

<a id="discussion"></a>

## Discussion

Similar to the [safeAreaInset(edge:alignment:spacing:content:)](https://developer.apple.com/documentation/swiftui/view/safeareainset%28edge:alignment:spacing:content:%29-6gwby) modifier, the `content` view is anchored to the specified horizontal edge of the parent view and its width insets the safe area.

Additionally, it extends the edge effect of any scroll views affected by the inset safe area.

## See Also

### Configuring scroll edge effects

- [scrollEdgeEffectStyle(\_:for:)](scrolledgeeffectstyle%28__for_%29.md): Configures the scroll edge effect style for scroll views within this hierarchy.
- [scrollEdgeEffectHidden(\_:for:)](scrolledgeeffecthidden%28__for_%29.md): Hides any scroll edge effects for scroll views within this hierarchy.
- [ScrollEdgeEffectStyle](../scrolledgeeffectstyle.md): A structure that specifies blur transitions between scrolling content and an area with controls, such as toolbars.
