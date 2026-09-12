> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/lineheight(_:)](https://developer.apple.com/documentation/swiftui/view/lineheight(_:))

# lineHeight(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A modifier for the default line height in the view hierarchy.

## Declaration

```swift
nonisolated func lineHeight(_ lineHeight: AttributedString.LineHeight?) -> some View

```

<a id="discussion"></a>

## Discussion

The default value is `nil`. In that case, SwiftUI automatically chooses an appropriate line height setting for each context.

> **See Also**

> [lineHeight](../environmentvalues/lineheight.md)

## See Also

### Text layout

- [allowsTightening(\_:)](allowstightening%28__%29.md): Sets whether text in this view can compress the space between characters when necessary to fit text in a line.
- [baselineOffset(\_:)](baselineoffset%28__%29.md): Sets the vertical offset for the text relative to its baseline in this view.
- [flipsForRightToLeftLayoutDirection(\_:)](flipsforrighttoleftlayoutdirection%28__%29.md): Sets whether this view mirrors its contents horizontally when the layout direction is right-to-left.
- [kerning(\_:)](kerning%28__%29.md): Sets the spacing, or kerning, between characters for the text in this view.
- [minimumScaleFactor(\_:)](minimumscalefactor%28__%29.md): Sets the minimum amount that text in this view scales down to fit in the available space.
- [tracking(\_:)](tracking%28__%29.md): Sets the tracking for the text in this view.
- [truncationMode(\_:)](truncationmode%28__%29.md): Sets the truncation mode for lines of text that are too long to fit in the available space.
- [typesettingLanguage(\_:isEnabled:)](typesettinglanguage%28__isenabled_%29.md): Specifies the language for typesetting.
- [writingDirection(strategy:)](writingdirection%28strategy_%29.md): A modifier for the default text writing direction strategy in the view hierarchy.
