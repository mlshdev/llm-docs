> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/texthighlightcolorscheme](https://developer.apple.com/documentation/foundation/nsattributedstring/key/texthighlightcolorscheme)

# textHighlightColorScheme

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The custom highlight color to apply to the text.

## Declaration

```swift
static let textHighlightColorScheme: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSAttributedString.TextHighlightColorScheme](../texthighlightcolorscheme.md) structure. The default value of this attribute is `nil`, which applies the default system highlight color to the text when the [textHighlightStyle](texthighlightstyle.md) attribute is present.

A highlight adds a background color behind the text, and applies a contrasting foreground color to the text itself. Set the value of this attribute to [default](../texthighlightcolorscheme/default.md), or don’t specify the attribute at all, to apply a highlight with the default system color. Specify a different value for this attribute to apply that highlight color instead.

## See Also

### Getting text attribute keys

- [cursor](cursor.md): The cursor object.
- [link](link.md): The link for the text.
- [markedClauseSegment](markedclausesegment.md): The index of the marked clause segment.
- [replacementIndex](replacementindex.md): The replacement position associated with a format string specifier.
- [shadow](shadow.md): The shadow of the text.
- [spellingState](spellingstate.md): The spelling state of the text.
- [suggestionHighlight](suggestionhighlight.md): A highlight associated with a Spotlight suggestion.
- [textAlternatives](textalternatives.md): The alternatives for the text.
- [textEffect](texteffect.md): An attribute that applies a text effect to the text.
- [textHighlightStyle](texthighlightstyle.md): An attribute that adds a highlight color to the text to emphasize it.
- [textItemTag](textitemtag.md): The name of a custom tag associated with a text item.
- [toolTip](tooltip.md): The tooltip text.
