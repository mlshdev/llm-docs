> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/textstyle](https://developer.apple.com/documentation/uikit/uifont/textstyle)

# UIFont.TextStyle (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 3.0+

Constants that describe the preferred styles for fonts.

## Declaration

```swift
struct TextStyle
```

<a id="overview"></a>

## Overview

Pass these constants to the [preferredFont(forTextStyle:)](preferredfont%28fortextstyle_%29.md) method of [UIFont](../uifont.md) or the [preferredFontDescriptor(withTextStyle:)](../uifontdescriptor/preferredfontdescriptor%28withtextstyle_%29.md) method of [UIFontDescriptor](../uifontdescriptor.md) to retrieve the corresponding font information.

## Topics

### Constants

- [body](textstyle/body.md): The font for body text.
- [callout](textstyle/callout.md): The font for callouts.
- [caption1](textstyle/caption1.md): The font for standard captions.
- [caption2](textstyle/caption2.md): The font for alternate captions.
- [footnote](textstyle/footnote.md): The font for footnotes.
- [headline](textstyle/headline.md): The font for headings.
- [subheadline](textstyle/subheadline.md): The font for subheadings.
- [largeTitle](textstyle/largetitle.md): The font style for large titles.
- [extraLargeTitle](textstyle/extralargetitle.md): The font style for extra large titles.
- [extraLargeTitle2](textstyle/extralargetitle2.md): The font style for extra extra large titles.
- [title1](textstyle/title1.md): The font for first-level hierarchical headings.
- [title2](textstyle/title2.md): The font for second-level hierarchical headings.
- [title3](textstyle/title3.md): The font for third-level hierarchical headings.

### Metrics

- [metrics](textstyle/metrics.md): The corresponding font metrics object for the text style.

### Initializers

- [init(rawValue:)](textstyle/init%28rawvalue_%29.md): Creates a text style with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFont(forTextStyle:)](preferredfont%28fortextstyle_%29.md): Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.
- [preferredFont(forTextStyle:compatibleWith:)](preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [init(name:size:)](init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.
- [init(descriptor:size:)](init%28descriptor_size_%29.md): Returns a font that matches the specified font descriptor.
- [withSize(\_:)](withsize%28__%29.md): Returns a font object that is the same as the font, but has the specified size.

# UIFontTextStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 3.0+

Constants that describe the preferred styles for fonts.

## Declaration

```objectivec
typedef NSString * UIFontTextStyle;
```

<a id="overview"></a>

## Overview

Pass these constants to the [preferredFontForTextStyle:](preferredfont%28fortextstyle_%29.md) method of [UIFont](../uifont.md) or the [preferredFontDescriptorWithTextStyle:](../uifontdescriptor/preferredfontdescriptor%28withtextstyle_%29.md) method of [UIFontDescriptor](../uifontdescriptor.md) to retrieve the corresponding font information.

## Topics

### Constants

- [UIFontTextStyleBody](textstyle/body.md): The font for body text.
- [UIFontTextStyleCallout](textstyle/callout.md): The font for callouts.
- [UIFontTextStyleCaption1](textstyle/caption1.md): The font for standard captions.
- [UIFontTextStyleCaption2](textstyle/caption2.md): The font for alternate captions.
- [UIFontTextStyleFootnote](textstyle/footnote.md): The font for footnotes.
- [UIFontTextStyleHeadline](textstyle/headline.md): The font for headings.
- [UIFontTextStyleSubheadline](textstyle/subheadline.md): The font for subheadings.
- [UIFontTextStyleLargeTitle](textstyle/largetitle.md): The font style for large titles.
- [UIFontTextStyleExtraLargeTitle](textstyle/extralargetitle.md): The font style for extra large titles.
- [UIFontTextStyleExtraLargeTitle2](textstyle/extralargetitle2.md): The font style for extra extra large titles.
- [UIFontTextStyleTitle1](textstyle/title1.md): The font for first-level hierarchical headings.
- [UIFontTextStyleTitle2](textstyle/title2.md): The font for second-level hierarchical headings.
- [UIFontTextStyleTitle3](textstyle/title3.md): The font for third-level hierarchical headings.

## See Also

### Creating Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFontForTextStyle:](preferredfont%28fortextstyle_%29.md): Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.
- [preferredFontForTextStyle:compatibleWithTraitCollection:](preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [fontWithName:size:](init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.
- [fontWithDescriptor:size:](init%28descriptor_size_%29.md): Returns a font that matches the specified font descriptor.
- [fontWithSize:](withsize%28__%29.md): Returns a font object that is the same as the font, but has the specified size.
