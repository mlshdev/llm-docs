> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/texteffect](https://developer.apple.com/documentation/foundation/nsattributedstring/key/texteffect)

# textEffect

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An attribute that applies a text effect to the text.

## Declaration

```swift
static let textEffect: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSString](../../nsstring.md) object. Use this attribute to specify a text effect, such as [letterpressStyle](../texteffectstyle/letterpressstyle.md). The default value of this property is `nil`, indicating no text effect.

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
- [textHighlightColorScheme](texthighlightcolorscheme.md): The custom highlight color to apply to the text.
- [textHighlightStyle](texthighlightstyle.md): An attribute that adds a highlight color to the text to emphasize it.
- [textItemTag](textitemtag.md): The name of a custom tag associated with a text item.
- [toolTip](tooltip.md): The tooltip text.
