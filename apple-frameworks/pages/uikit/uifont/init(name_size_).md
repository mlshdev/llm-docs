> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/init(name:size:)](https://developer.apple.com/documentation/uikit/uifont/init(name:size:))

# init(name:size:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a font object for the specified font name and size.

## Declaration

```swift
init?(name fontName: String, size fontSize: CGFloat)
```

## Parameters

- `fontName`: The fully specified name of the font. This name incorporates both the font family name and the specific style information for the font.
- `fontSize`: The size (in points) to which the font is scaled. This value must be greater than 0.0.

<a id="return-value"></a>

## Return Value

A font object of the specified name and size.

<a id="Discussion"></a>

## Discussion

You can use the [fontNames(forFamilyName:)](fontnames%28forfamilyname_%29.md) method to retrieve the specific font names for a given font family.

## See Also

### Related Documentation

- [familyNames](familynames.md): Returns an array of font family names available on the system.
- [fontNames(forFamilyName:)](fontnames%28forfamilyname_%29.md): Returns an array of font names available in a particular font family.

### Creating Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFont(forTextStyle:)](preferredfont%28fortextstyle_%29.md): Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.
- [preferredFont(forTextStyle:compatibleWith:)](preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [UIFont.TextStyle](textstyle.md): Constants that describe the preferred styles for fonts.
- [init(descriptor:size:)](init%28descriptor_size_%29.md): Returns a font that matches the specified font descriptor.
- [withSize(\_:)](withsize%28__%29.md): Returns a font object that is the same as the font, but has the specified size.

# fontWithName:size: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a font object for the specified font name and size.

## Declaration

```objectivec
+ (UIFont *) fontWithName:(NSString *) fontName size:(CGFloat) fontSize;
```

## Parameters

- `fontName`: The fully specified name of the font. This name incorporates both the font family name and the specific style information for the font.
- `fontSize`: The size (in points) to which the font is scaled. This value must be greater than 0.0.

<a id="return-value"></a>

## Return Value

A font object of the specified name and size.

<a id="Discussion"></a>

## Discussion

You can use the [fontNamesForFamilyName:](fontnames%28forfamilyname_%29.md) method to retrieve the specific font names for a given font family.

## See Also

### Related Documentation

- [familyNames](familynames.md): Returns an array of font family names available on the system.
- [fontNamesForFamilyName:](fontnames%28forfamilyname_%29.md): Returns an array of font names available in a particular font family.

### Creating Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFontForTextStyle:](preferredfont%28fortextstyle_%29.md): Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.
- [preferredFontForTextStyle:compatibleWithTraitCollection:](preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [UIFontTextStyle](textstyle.md): Constants that describe the preferred styles for fonts.
- [fontWithDescriptor:size:](init%28descriptor_size_%29.md): Returns a font that matches the specified font descriptor.
- [fontWithSize:](withsize%28__%29.md): Returns a font object that is the same as the font, but has the specified size.
