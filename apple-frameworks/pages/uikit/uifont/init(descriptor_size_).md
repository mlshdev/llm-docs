> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/init(descriptor:size:)](https://developer.apple.com/documentation/uikit/uifont/init(descriptor:size:))

# init(descriptor:size:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a font that matches the specified font descriptor.

## Declaration

```swift
init(descriptor: UIFontDescriptor, size pointSize: CGFloat)
```

## Parameters

- `descriptor`: The font descriptor to match.
- `pointSize`: The size in points to which the font is scaled. If greater than 0.0, it has precedence over `UIFontDescriptorSizeAttribute` in `descriptor`.

<a id="return-value"></a>

## Return Value

A font object for the specified descriptor and size.

<a id="Discussion"></a>

## Discussion

In most cases, you can simply use [init(name:size:)](init%28name_size_%29.md) to create standard scaled fonts.

## See Also

### Creating Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFont(forTextStyle:)](preferredfont%28fortextstyle_%29.md): Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.
- [preferredFont(forTextStyle:compatibleWith:)](preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [UIFont.TextStyle](textstyle.md): Constants that describe the preferred styles for fonts.
- [init(name:size:)](init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.
- [withSize(\_:)](withsize%28__%29.md): Returns a font object that is the same as the font, but has the specified size.

# fontWithDescriptor:size: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a font that matches the specified font descriptor.

## Declaration

```objectivec
+ (UIFont *) fontWithDescriptor:(UIFontDescriptor *) descriptor size:(CGFloat) pointSize;
```

## Parameters

- `descriptor`: The font descriptor to match.
- `pointSize`: The size in points to which the font is scaled. If greater than 0.0, it has precedence over `UIFontDescriptorSizeAttribute` in `descriptor`.

<a id="return-value"></a>

## Return Value

A font object for the specified descriptor and size.

<a id="Discussion"></a>

## Discussion

In most cases, you can simply use [fontWithName:size:](init%28name_size_%29.md) to create standard scaled fonts.

## See Also

### Creating Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFontForTextStyle:](preferredfont%28fortextstyle_%29.md): Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.
- [preferredFontForTextStyle:compatibleWithTraitCollection:](preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [UIFontTextStyle](textstyle.md): Constants that describe the preferred styles for fonts.
- [fontWithName:size:](init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.
- [fontWithSize:](withsize%28__%29.md): Returns a font object that is the same as the font, but has the specified size.
