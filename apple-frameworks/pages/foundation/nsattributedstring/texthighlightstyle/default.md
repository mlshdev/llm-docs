> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/texthighlightstyle/default](https://developer.apple.com/documentation/foundation/nsattributedstring/texthighlightstyle/default)

# default

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The default highlight style to apply to text.

## Declaration

```swift
static let `default`: NSAttributedString.TextHighlightStyle
```

<a id="Discussion"></a>

## Discussion

Use this constant as the value for the [textHighlightStyle](../key/texthighlightstyle.md) attribute. The system applies the default highlight color to your text. To specify a different highlight color, add the [textHighlightColorScheme](../key/texthighlightcolorscheme.md) attribute to your text and set its value to the color you want.
