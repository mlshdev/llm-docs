> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellingstateattributename](https://developer.apple.com/documentation/appkit/nsspellingstateattributename)

# NSSpellingStateAttributeName

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The spelling state of the text.

## Declaration

```objectivec
extern NSAttributedStringKey NSSpellingStateAttributeName;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an integer. The default value of this key is 0, which indicates that there are no grammar or spelling errors. Specify a different value to indicate that a spelling or grammar error exists.

This key is available in macOS 10.2 and later, but its interpretation changed in OS X v10.5. Previously, any non-zero value caused the spelling indicator to be displayed. For macOS 10.5 and later, the (integer) value is treated as being composed of the spelling and grammar flags. See `NSSpellingStateAttributeName Flags` for possible values.

## See Also

### Getting text attribute keys

- [NSCursorAttributeName](nscursorattributename.md): The cursor object.
- [NSLinkAttributeName](nslinkattributename.md): The link for the text.
- [NSMarkedClauseSegmentAttributeName](nsmarkedclausesegmentattributename.md): The index of the marked clause segment.
- [NSShadowAttributeName](nsshadowattributename.md): The shadow of the text.
- [NSTextAlternativesAttributeName](nstextalternativesattributename.md): The alternatives for the text.
- [NSTextEffectAttributeName](nstexteffectattributename.md): An attribute that applies a text effect to the text.
- [NSTextHighlightColorSchemeAttributeName](nstexthighlightcolorschemeattributename.md): The custom highlight color to apply to the text.
- [NSTextHighlightStyleAttributeName](nstexthighlightstyleattributename.md): An attribute that adds a highlight color to the text to emphasize it.
- [NSToolTipAttributeName](nstooltipattributename.md): The tooltip text.
