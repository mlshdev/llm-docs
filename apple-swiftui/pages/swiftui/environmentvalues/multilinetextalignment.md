> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/multilinetextalignment](https://developer.apple.com/documentation/swiftui/environmentvalues/multilinetextalignment)

# multilineTextAlignment

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An environment value that indicates how a text view aligns its lines when the content wraps or contains newlines.

## Declaration

```swift
var multilineTextAlignment: TextAlignment { get set }
```

<a id="discussion"></a>

## Discussion

Set this value for a view hierarchy by applying the [multilineTextAlignment(\_:)](../view/multilinetextalignment%28__%29.md) view modifier. Views in the hierarchy that display text, like [Text](../text.md) or [TextEditor](../texteditor.md), read the value from the environment and adjust their text alignment accordingly.

This value has no effect on a [Text](../text.md) view that contains only one line of text, because a text view has a width that exactly matches the width of its widest line. If you want to align an entire text view rather than its contents, set the aligment of its container, like a [VStack](../vstack.md) or a frame that you create with the [frame(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:alignment:)](../view/frame%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_alignment_%29.md) modifier.

> **Note**

> You can use this value to control the alignment of a [Text](../text.md) view that you create with the [init(\_:style:)](../text/init%28__style_%29.md) initializer to display localized dates and times, including when the view uses only a single line, but only when that view appears in a widget.

## See Also

### Formatting multiline text

- [lineSpacing(\_:)](../view/linespacing%28__%29.md): Sets the amount of space between lines of text in this view.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [multilineTextAlignment(\_:)](../view/multilinetextalignment%28__%29.md): Sets the alignment of a text view that contains multiple lines of text.
