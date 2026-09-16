> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/text/init(_:style:)

# init(\_:style:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an instance that displays localized dates and times using a specific style.

## Declaration

```swift
init(_ date: Date, style: Text.DateStyle)
```

## Parameters

- `date`: The target date to display.
- `style`: The style used when displaying a date.

<a id="discussion"></a>

## Discussion

> **Note**

> In a widget, a `Text` that uses the [relative](datestyle/relative.md), [offset](datestyle/offset.md), or [timer](datestyle/timer.md) style becomes horizontally flexible and expands to fill the available width. Widgets can’t perform layout again after the system archives them, so the text can’t measure itself against its eventual content, which changes as the date updates, without risking clipping. If you want to constrain the width, apply a [frame(width:height:alignment:)](../view/frame%28width_height_alignment_%29.md) modifier, and use [multilineTextAlignment(\_:)](../view/multilinetextalignment%28__%29.md) to align the text within that frame.

## See Also

### Creating a text view

- [init(\_:tableName:bundle:comment:)](init%28__tablename_bundle_comment_%29.md): Creates a text view that displays localized content identified by a key.
- [init(\_:)](init%28__%29.md): Creates a text view that displays styled attributed content.
- [init(verbatim:)](init%28verbatim_%29.md): Creates a text view that displays a string literal without localization.
- [init(\_:format:)](init%28__format_%29.md): Creates a text view that displays the formatted representation of a nonstring type supported by a corresponding format style.
- [init(\_:formatter:)](init%28__formatter_%29.md): Creates a text view that displays the formatted representation of a Foundation object.
- [init(timerInterval:pauseTime:countsDown:showsHours:)](init%28timerinterval_pausetime_countsdown_showshours_%29.md): Creates an instance that displays a timer counting within the provided interval.
