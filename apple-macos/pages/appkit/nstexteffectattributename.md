> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexteffectattributename](https://developer.apple.com/documentation/appkit/nstexteffectattributename)

# NSTextEffectAttributeName

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.10+

An attribute that applies a text effect to the text.

## Declaration

```objectivec
extern NSAttributedStringKey const NSTextEffectAttributeName;
```

<a id="Overview"></a>

## Overview

The value of this attribute is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object. Use this attribute to specify a text effect, such as [NSTextEffectLetterpressStyle](nstexteffectletterpressstyle.md). The default value of this property is `nil`, indicating no text effect.

## See Also

### Getting text attribute keys

- [NSCursorAttributeName](nscursorattributename.md): The cursor object.
- [NSLinkAttributeName](nslinkattributename.md): The link for the text.
- [NSMarkedClauseSegmentAttributeName](nsmarkedclausesegmentattributename.md): The index of the marked clause segment.
- [NSShadowAttributeName](nsshadowattributename.md): The shadow of the text.
- [NSSpellingStateAttributeName](nsspellingstateattributename.md): The spelling state of the text.
- [NSTextAlternativesAttributeName](nstextalternativesattributename.md): The alternatives for the text.
- [NSTextHighlightColorSchemeAttributeName](nstexthighlightcolorschemeattributename.md): The custom highlight color to apply to the text.
- [NSTextHighlightStyleAttributeName](nstexthighlightstyleattributename.md): An attribute that adds a highlight color to the text to emphasize it.
- [NSToolTipAttributeName](nstooltipattributename.md): The tooltip text.
