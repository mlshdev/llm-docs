> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstexthighlightstyledefault](https://developer.apple.com/documentation/uikit/nstexthighlightstyledefault)

# NSTextHighlightStyleDefault

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The default highlight style to apply to text.

## Declaration

```objectivec
extern NSTextHighlightStyle const NSTextHighlightStyleDefault;
```

<a id="Overview"></a>

## Overview

Use this constant as the value for the [NSTextHighlightStyleAttributeName](nstexthighlightstyleattributename.md) attribute. The system applies the default highlight color to your text. To specify a different highlight color, add the [NSTextHighlightColorSchemeAttributeName](nstexthighlightcolorschemeattributename.md) attribute to your text and set its value to the color you want.
