> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/replacementindex](https://developer.apple.com/documentation/foundation/nsattributedstring/key/replacementindex)

# replacementIndex (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The replacement position associated with a format string specifier.

## Declaration

```swift
static let replacementIndex: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

When creating an attributed string from a format string and one or more replacement values, this attribute indicates the ordinal index of each replacement. You must specify the [NSAttributedStringFormattingApplyReplacementIndexAttribute](../../nsattributedstringformattingoptions/nsattributedstringformattingapplyreplacementindexattribute.md) option at creation time to add this attribute to the substituted text. The value of this key is an `NSNumber` with the replacement position of the substitute text.

## See Also

### Getting text attribute keys

- [cursor](cursor.md): The cursor object.
- [link](link.md): The link for the text.
- [markedClauseSegment](markedclausesegment.md): The index of the marked clause segment.
- [shadow](shadow.md): The shadow of the text.
- [spellingState](spellingstate.md): The spelling state of the text.
- [suggestionHighlight](suggestionhighlight.md): A highlight associated with a Spotlight suggestion.
- [textAlternatives](textalternatives.md): The alternatives for the text.
- [textEffect](texteffect.md): An attribute that applies a text effect to the text.
- [textHighlightColorScheme](texthighlightcolorscheme.md): The custom highlight color to apply to the text.
- [textHighlightStyle](texthighlightstyle.md): An attribute that adds a highlight color to the text to emphasize it.
- [textItemTag](textitemtag.md): The name of a custom tag associated with a text item.
- [toolTip](tooltip.md): The tooltip text.

# NSReplacementIndexAttributeName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The replacement position associated with a format string specifier.

## Declaration

```objectivec
extern NSAttributedStringKey const NSReplacementIndexAttributeName;
```

<a id="Discussion"></a>

## Discussion

When creating an attributed string from a format string and one or more replacement values, this attribute indicates the ordinal index of each replacement. You must specify the [NSAttributedStringFormattingApplyReplacementIndexAttribute](../../nsattributedstringformattingoptions/nsattributedstringformattingapplyreplacementindexattribute.md) option at creation time to add this attribute to the substituted text. The value of this key is an `NSNumber` with the replacement position of the substitute text.

## See Also

### Getting text attribute keys

- [NSCursorAttributeName](https://developer.apple.com/documentation/appkit/nscursorattributename): The cursor object.
- [NSLinkAttributeName](../../../uikit/nslinkattributename.md): The link for the text.
- [NSMarkedClauseSegmentAttributeName](https://developer.apple.com/documentation/appkit/nsmarkedclausesegmentattributename): The index of the marked clause segment.
- [NSShadowAttributeName](../../../uikit/nsshadowattributename.md): The shadow of the text.
- [NSSpellingStateAttributeName](https://developer.apple.com/documentation/appkit/nsspellingstateattributename): The spelling state of the text.
- [CSSuggestionHighlightAttributeName](../../../corespotlight/cssuggestionhighlightattributename.md)
- [NSTextAlternativesAttributeName](https://developer.apple.com/documentation/appkit/nstextalternativesattributename): The alternatives for the text.
- [NSTextEffectAttributeName](../../../uikit/nstexteffectattributename.md): An attribute that applies a text effect to the text.
- [NSTextHighlightColorSchemeAttributeName](../../../uikit/nstexthighlightcolorschemeattributename.md): The custom highlight color to apply to the text.
- [NSTextHighlightStyleAttributeName](../../../uikit/nstexthighlightstyleattributename.md): An attribute that adds a highlight color to the text to emphasize it.
- [UITextItemTagAttributeName](../../../uikit/uitextitemtagattributename.md): The name of a custom tag associated with a text item.
- [NSToolTipAttributeName](https://developer.apple.com/documentation/appkit/nstooltipattributename): The tooltip text.
