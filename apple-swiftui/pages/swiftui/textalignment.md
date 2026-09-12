> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textalignment](https://developer.apple.com/documentation/swiftui/textalignment)

# TextAlignment

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An alignment position for text along the horizontal axis.

## Declaration

```swift
@frozen enum TextAlignment
```

## Topics

### Getting text alignments

- [TextAlignment.center](textalignment/center.md)
- [TextAlignment.leading](textalignment/leading.md)
- [TextAlignment.trailing](textalignment/trailing.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing text layout

- [truncationMode(\_:)](view/truncationmode%28__%29.md): Sets the truncation mode for lines of text that are too long to fit in the available space.
- [truncationMode](environmentvalues/truncationmode.md): A value that indicates how the layout truncates the last line of text to fit into the available space.
- [allowsTightening(\_:)](view/allowstightening%28__%29.md): Sets whether text in this view can compress the space between characters when necessary to fit text in a line.
- [allowsTightening](environmentvalues/allowstightening.md): A Boolean value that indicates whether inter-character spacing should tighten to fit the text into the available space.
- [minimumScaleFactor(\_:)](view/minimumscalefactor%28__%29.md): Sets the minimum amount that text in this view scales down to fit in the available space.
- [minimumScaleFactor](environmentvalues/minimumscalefactor.md): The minimum permissible proportion to shrink the font size to fit the text into the available space.
- [baselineOffset(\_:)](view/baselineoffset%28__%29.md): Sets the vertical offset for the text relative to its baseline in this view.
- [kerning(\_:)](view/kerning%28__%29.md): Sets the spacing, or kerning, between characters for the text in this view.
- [tracking(\_:)](view/tracking%28__%29.md): Sets the tracking for the text in this view.
- [flipsForRightToLeftLayoutDirection(\_:)](view/flipsforrighttoleftlayoutdirection%28__%29.md): Sets whether this view mirrors its contents horizontally when the layout direction is right-to-left.
