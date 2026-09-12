> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslinkattributename](https://developer.apple.com/documentation/uikit/nslinkattributename)

# NSLinkAttributeName

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The link for the text.

## Declaration

```objectivec
extern NSAttributedStringKey const NSLinkAttributeName;
```

<a id="Overview"></a>

## Overview

The value of this attribute is an [NSURL](../foundation/nsurl.md) object (preferred) or an [NSString](../foundation/nsstring.md) object. The default value of this property is `nil`, indicating no link.

## See Also

### Getting text attribute keys

- [NSShadowAttributeName](nsshadowattributename.md): The shadow of the text.
- [NSTextEffectAttributeName](nstexteffectattributename.md): An attribute that applies a text effect to the text.
- [NSTextHighlightColorSchemeAttributeName](nstexthighlightcolorschemeattributename.md): The custom highlight color to apply to the text.
- [NSTextHighlightStyleAttributeName](nstexthighlightstyleattributename.md): An attribute that adds a highlight color to the text to emphasize it.
- [UITextItemTagAttributeName](uitextitemtagattributename.md): The name of a custom tag associated with a text item.
- [NSWritingToolsExclusionAttributeName](nswritingtoolsexclusionattributename.md)
