> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstexteffectattributename](https://developer.apple.com/documentation/uikit/nstexteffectattributename)

# NSTextEffectAttributeName

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An attribute that applies a text effect to the text.

## Declaration

```objectivec
extern NSAttributedStringKey const NSTextEffectAttributeName;
```

<a id="Overview"></a>

## Overview

The value of this attribute is an [NSString](../foundation/nsstring.md) object. Use this attribute to specify a text effect, such as [NSTextEffectLetterpressStyle](nstexteffectletterpressstyle.md). The default value of this property is `nil`, indicating no text effect.

## See Also

### Getting text attribute keys

- [NSLinkAttributeName](nslinkattributename.md): The link for the text.
- [NSShadowAttributeName](nsshadowattributename.md): The shadow of the text.
- [NSTextHighlightColorSchemeAttributeName](nstexthighlightcolorschemeattributename.md): The custom highlight color to apply to the text.
- [NSTextHighlightStyleAttributeName](nstexthighlightstyleattributename.md): An attribute that adds a highlight color to the text to emphasize it.
- [UITextItemTagAttributeName](uitextitemtagattributename.md): The name of a custom tag associated with a text item.
- [NSWritingToolsExclusionAttributeName](nswritingtoolsexclusionattributename.md)
