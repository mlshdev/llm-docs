> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/spellingstate](https://developer.apple.com/documentation/foundation/nsattributedstring/key/spellingstate)

# spellingState

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

The spelling state of the text.

## Declaration

```swift
static let spellingState: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an integer. The default value of this key is 0, which indicates that there are no grammar or spelling errors. Specify a different value to indicate that a spelling or grammar error exists.

This key is available in macOS 10.2 and later, but its interpretation changed in OS X v10.5. Previously, any non-zero value caused the spelling indicator to be displayed. For macOS 10.5 and later, the (integer) value is treated as being composed of the spelling and grammar flags. See `NSSpellingStateAttributeName Flags` for possible values.

## See Also

### Getting text attribute keys

- [cursor](cursor.md): The cursor object.
- [link](link.md): The link for the text.
- [markedClauseSegment](markedclausesegment.md): The index of the marked clause segment.
- [replacementIndex](replacementindex.md): The replacement position associated with a format string specifier.
- [shadow](shadow.md): The shadow of the text.
- [suggestionHighlight](suggestionhighlight.md): A highlight associated with a Spotlight suggestion.
- [textAlternatives](textalternatives.md): The alternatives for the text.
- [textEffect](texteffect.md): An attribute that applies a text effect to the text.
- [textHighlightColorScheme](texthighlightcolorscheme.md): The custom highlight color to apply to the text.
- [textHighlightStyle](texthighlightstyle.md): An attribute that adds a highlight color to the text to emphasize it.
- [textItemTag](textitemtag.md): The name of a custom tag associated with a text item.
- [toolTip](tooltip.md): The tooltip text.
