> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitytextattributeheadinglevel](https://developer.apple.com/documentation/uikit/uiaccessibilitytextattributeheadinglevel)

# UIAccessibilityTextAttributeHeadingLevel

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A key for specifying the heading level of the text.

## Declaration

```objectivec
extern NSAttributedStringKey const UIAccessibilityTextAttributeHeadingLevel;
```

<a id="Overview"></a>

## Overview

The value of this key is an [NSNumber](../foundation/nsnumber.md) object with a value that is a number in the range of `0` to `6`. Use `0` to indicate the absence of a specific heading level, and use other numbers to indicate the heading level.

## See Also

### Constants

- [UIAccessibilityTextAttributeCustom](uiaccessibilitytextattributecustom.md): A key for specifying custom attributes to apply to the text.
- [UIAccessibilityTextAttributeContext](uiaccessibilitytextattributecontext.md)
