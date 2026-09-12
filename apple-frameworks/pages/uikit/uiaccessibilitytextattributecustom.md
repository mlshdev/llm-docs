> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitytextattributecustom](https://developer.apple.com/documentation/uikit/uiaccessibilitytextattributecustom)

# UIAccessibilityTextAttributeCustom

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A key for specifying custom attributes to apply to the text.

## Declaration

```objectivec
extern NSAttributedStringKey const UIAccessibilityTextAttributeCustom;
```

<a id="Overview"></a>

## Overview

The value of this key is an [NSArray](../foundation/nsarray.md) of localized [NSString](../foundation/nsstring.md) objects, each of which describes a custom annotation style.

## See Also

### Constants

- [UIAccessibilityTextAttributeHeadingLevel](uiaccessibilitytextattributeheadinglevel.md): A key for specifying the heading level of the text.
- [UIAccessibilityTextAttributeContext](uiaccessibilitytextattributecontext.md)
