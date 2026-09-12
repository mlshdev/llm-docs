> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiletterformawareadjusting](https://developer.apple.com/documentation/uikit/uiletterformawareadjusting)

# UILetterformAwareAdjusting (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The typographic bounds-sizing behavior to handle text with fonts that contain oversize characters.

## Declaration

```swift
@MainActor protocol UILetterformAwareAdjusting : NSObjectProtocol
```

<a id="overview"></a>

## Overview

In [UILabel](uilabel.md), [UITextField](uitextfield.md), or a nonscrollable [UITextView](uitextview.md), [sizeThatFits(\_:)](uiview/sizethatfits%28__%29.md) and [intrinsicContentSize](uiview/intrinsiccontentsize.md) increase the height calculated for tall scripts when you present text that contains oversize characters in a font that you create with  [preferredFont(forTextStyle:)](uifont/preferredfont%28fortextstyle_%29.md). Even with the increase, some extreme ascenders and descenders may extend beyond the view’s bounds and appear to be clipped. For nontext-style fonts, [sizeThatFits(\_:)](uiview/sizethatfits%28__%29.md) and [intrinsicContentSize](uiview/intrinsiccontentsize.md) don’t increase the calculated height for oversize characters. This is the default, standard behavior. Set [sizingRule](uiletterformawareadjusting/sizingrule.md) to [UILetterformAwareSizingRule.typographic](uiletterformawaresizingrule/typographic.md) to use this behavior explicitly.

To adjust the boundary calculations in [sizeThatFits(\_:)](uiview/sizethatfits%28__%29.md) and [intrinsicContentSize](uiview/intrinsiccontentsize.md) to account for oversize characters, set [sizingRule](uiletterformawareadjusting/sizingrule.md) to [UILetterformAwareSizingRule.oversize](uiletterformawaresizingrule/oversize.md). Note that the larger bounds to accommodate oversize characters may negatively impact typographic alignment, such as vertical edge alignment, vertical edge-to-edge spacing, or vertical centering.

## Topics

### Specifying text-sizing behavior

- [sizingRule](uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
- [UILetterformAwareSizingRule](uiletterformawaresizingrule.md): Constants that specify typographic bounds-sizing behavior to handle text in fonts with oversize characters.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UILabel](uilabel.md)
- [UISearchTextField](uisearchtextfield.md)
- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

# UILetterformAwareAdjusting (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The typographic bounds-sizing behavior to handle text with fonts that contain oversize characters.

## Declaration

```objectivec
@protocol UILetterformAwareAdjusting <NSObject>
```

<a id="overview"></a>

## Overview

In [UILabel](uilabel.md), [UITextField](uitextfield.md), or a nonscrollable [UITextView](uitextview.md), [sizeThatFits:](uiview/sizethatfits%28__%29.md) and [intrinsicContentSize](uiview/intrinsiccontentsize.md) increase the height calculated for tall scripts when you present text that contains oversize characters in a font that you create with  [preferredFontForTextStyle:](uifont/preferredfont%28fortextstyle_%29.md). Even with the increase, some extreme ascenders and descenders may extend beyond the view’s bounds and appear to be clipped. For nontext-style fonts, [sizeThatFits:](uiview/sizethatfits%28__%29.md) and [intrinsicContentSize](uiview/intrinsiccontentsize.md) don’t increase the calculated height for oversize characters. This is the default, standard behavior. Set [sizingRule](uiletterformawareadjusting/sizingrule.md) to [UILetterformAwareSizingRuleTypographic](uiletterformawaresizingrule/typographic.md) to use this behavior explicitly.

To adjust the boundary calculations in [sizeThatFits:](uiview/sizethatfits%28__%29.md) and [intrinsicContentSize](uiview/intrinsiccontentsize.md) to account for oversize characters, set [sizingRule](uiletterformawareadjusting/sizingrule.md) to [UILetterformAwareSizingRuleOversize](uiletterformawaresizingrule/oversize.md). Note that the larger bounds to accommodate oversize characters may negatively impact typographic alignment, such as vertical edge alignment, vertical edge-to-edge spacing, or vertical centering.

## Topics

### Specifying text-sizing behavior

- [sizingRule](uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
- [UILetterformAwareSizingRule](uiletterformawaresizingrule.md): Constants that specify typographic bounds-sizing behavior to handle text in fonts with oversize characters.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UILabel](uilabel.md)
- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)
