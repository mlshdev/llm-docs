> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/flipsforrighttoleftlayoutdirection(_:)](https://developer.apple.com/documentation/swiftui/view/flipsforrighttoleftlayoutdirection(_:))

# flipsForRightToLeftLayoutDirection(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets whether this view mirrors its contents horizontally when the layout direction is right-to-left.

## Declaration

```swift
nonisolated func flipsForRightToLeftLayoutDirection(_ enabled: Bool) -> some View

```

## Parameters

- `enabled`: A Boolean value that indicates whether this view should have its content flipped horizontally when the layout direction is right-to-left. By default, views will adjust their layouts automatically in a right-to-left context and do not need to be mirrored.

<a id="return-value"></a>

## Return Value

A view that conditionally mirrors its contents horizontally when the layout direction is right-to-left.

<a id="discussion"></a>

## Discussion

Use `flipsForRightToLeftLayoutDirection(_:)` when you need the system to horizontally mirror the contents of the view when presented in a right-to-left layout.

To override the layout direction for a specific view, use the [environment(\_:\_:)](environment%28____%29.md) view modifier to explicitly override the [layoutDirection](../environmentvalues/layoutdirection.md) environment value for the view.

## See Also

### Managing text layout

- [truncationMode(\_:)](truncationmode%28__%29.md): Sets the truncation mode for lines of text that are too long to fit in the available space.
- [truncationMode](../environmentvalues/truncationmode.md): A value that indicates how the layout truncates the last line of text to fit into the available space.
- [allowsTightening(\_:)](allowstightening%28__%29.md): Sets whether text in this view can compress the space between characters when necessary to fit text in a line.
- [allowsTightening](../environmentvalues/allowstightening.md): A Boolean value that indicates whether inter-character spacing should tighten to fit the text into the available space.
- [minimumScaleFactor(\_:)](minimumscalefactor%28__%29.md): Sets the minimum amount that text in this view scales down to fit in the available space.
- [minimumScaleFactor](../environmentvalues/minimumscalefactor.md): The minimum permissible proportion to shrink the font size to fit the text into the available space.
- [baselineOffset(\_:)](baselineoffset%28__%29.md): Sets the vertical offset for the text relative to its baseline in this view.
- [kerning(\_:)](kerning%28__%29.md): Sets the spacing, or kerning, between characters for the text in this view.
- [tracking(\_:)](tracking%28__%29.md): Sets the tracking for the text in this view.
- [TextAlignment](../textalignment.md): An alignment position for text along the horizontal axis.
