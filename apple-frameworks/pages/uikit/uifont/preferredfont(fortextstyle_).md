> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/preferredfont(fortextstyle:)](https://developer.apple.com/documentation/uikit/uifont/preferredfont(fortextstyle:))

# preferredFont(forTextStyle:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.

## Declaration

```swift
class func preferredFont(forTextStyle style: UIFont.TextStyle) -> UIFont
```

## Parameters

- `style`: The text style for which to return a font. See [UIFont.TextStyle](textstyle.md) for recognized values.

<a id="return-value"></a>

## Return Value

The system font associated with the specified text style.

## Mentioned In

- [Scaling fonts automatically](../scaling-fonts-automatically.md)

<a id="discussion"></a>

## Discussion

> **Related sessions from WWDC23**

>  Session 10058: [What’s new with text and text interactions](https://developer.apple.com/videos/play/wwdc2023/10058/)

<a id="Discussion"></a>

## Discussion

To create a styled font based on a custom font, use a [UIFontMetrics](../uifontmetrics.md) object.

Because fonts are immutable, any element that adjusts for an updated content size category does not modify the font itself. Instead, the element replaces the assigned font with a new instance based on the original settings.

A font’s metrics, such as [ascender](ascender.md), [descender](descender.md), and [lineHeight](lineheight.md), can differ across devices for the same text style and point size. UIKit reserves extra vertical space to accommodate scripts like Thai and Hindi whenever someone includes one of those languages in their preferred languages, even if your text doesn’t use that script.

To take advantage of this behavior, create a font explicitly with this method and assign it to a text element, like a [UILabel](../uilabel.md). Don’t set `clipsToBounds` on these text elements: ascenders and descenders for languages like Thai and Hindi often protrude beyond the line height bounds. This typically isn’t a problem, since layouts usually leave extra space around neighboring elements, but setting `clipsToBounds` clips that text. UIKit no longer enables `clipsToBounds` by default in places where it previously did.

## See Also

### Creating Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFont(forTextStyle:compatibleWith:)](preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [UIFont.TextStyle](textstyle.md): Constants that describe the preferred styles for fonts.
- [init(name:size:)](init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.
- [init(descriptor:size:)](init%28descriptor_size_%29.md): Returns a font that matches the specified font descriptor.
- [withSize(\_:)](withsize%28__%29.md): Returns a font object that is the same as the font, but has the specified size.

# preferredFontForTextStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.

## Declaration

```objectivec
+ (UIFont *) preferredFontForTextStyle:(UIFontTextStyle) style;
```

## Parameters

- `style`: The text style for which to return a font. See [UIFontTextStyle](textstyle.md) for recognized values.

<a id="return-value"></a>

## Return Value

The system font associated with the specified text style.

## Mentioned In

- [Scaling fonts automatically](../scaling-fonts-automatically.md)

<a id="discussion"></a>

## Discussion

> **Related sessions from WWDC23**

>  Session 10058: [What’s new with text and text interactions](https://developer.apple.com/videos/play/wwdc2023/10058/)

<a id="Discussion"></a>

## Discussion

To create a styled font based on a custom font, use a [UIFontMetrics](../uifontmetrics.md) object.

Because fonts are immutable, any element that adjusts for an updated content size category does not modify the font itself. Instead, the element replaces the assigned font with a new instance based on the original settings.

A font’s metrics, such as [ascender](ascender.md), [descender](descender.md), and [lineHeight](lineheight.md), can differ across devices for the same text style and point size. UIKit reserves extra vertical space to accommodate scripts like Thai and Hindi whenever someone includes one of those languages in their preferred languages, even if your text doesn’t use that script.

To take advantage of this behavior, create a font explicitly with this method and assign it to a text element, like a [UILabel](../uilabel.md). Don’t set `clipsToBounds` on these text elements: ascenders and descenders for languages like Thai and Hindi often protrude beyond the line height bounds. This typically isn’t a problem, since layouts usually leave extra space around neighboring elements, but setting `clipsToBounds` clips that text. UIKit no longer enables `clipsToBounds` by default in places where it previously did.

## See Also

### Creating Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFontForTextStyle:compatibleWithTraitCollection:](preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [UIFontTextStyle](textstyle.md): Constants that describe the preferred styles for fonts.
- [fontWithName:size:](init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.
- [fontWithDescriptor:size:](init%28descriptor_size_%29.md): Returns a font that matches the specified font descriptor.
- [fontWithSize:](withsize%28__%29.md): Returns a font object that is the same as the font, but has the specified size.
