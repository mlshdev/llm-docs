> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslinkattributename](https://developer.apple.com/documentation/appkit/nslinkattributename)

# NSLinkAttributeName

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The link for the text.

## Declaration

```objectivec
extern NSAttributedStringKey NSLinkAttributeName;
```

<a id="Overview"></a>

## Overview

The value of this attribute is an - [NSURL](https://developer.apple.com/documentation/foundation/nsurl) object (preferred) or an - [NSString](https://developer.apple.com/documentation/foundation/nsstring) object. The default value of this property is `nil`, indicating no link.

## See Also

### Getting text attribute keys

- [NSCursorAttributeName](nscursorattributename.md): The cursor object.
- [NSMarkedClauseSegmentAttributeName](nsmarkedclausesegmentattributename.md): The index of the marked clause segment.
- [NSShadowAttributeName](nsshadowattributename.md): The shadow of the text.
- [NSSpellingStateAttributeName](nsspellingstateattributename.md): The spelling state of the text.
- [NSTextAlternativesAttributeName](nstextalternativesattributename.md): The alternatives for the text.
- [NSTextEffectAttributeName](nstexteffectattributename.md): An attribute that applies a text effect to the text.
- [NSTextHighlightColorSchemeAttributeName](nstexthighlightcolorschemeattributename.md): The custom highlight color to apply to the text.
- [NSTextHighlightStyleAttributeName](nstexthighlightstyleattributename.md): An attribute that adds a highlight color to the text to emphasize it.
- [NSToolTipAttributeName](nstooltipattributename.md): The tooltip text.
