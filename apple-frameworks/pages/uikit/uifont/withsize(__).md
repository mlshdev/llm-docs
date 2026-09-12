> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/withsize(_:)](https://developer.apple.com/documentation/uikit/uifont/withsize(_:))

# withSize(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a font object that is the same as the font, but has the specified size.

## Declaration

```swift
func withSize(_ fontSize: CGFloat) -> UIFont
```

## Parameters

- `fontSize`: The desired size (in points) of the new font object. This value must be greater than 0.0.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

## See Also

### Creating Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFont(forTextStyle:)](preferredfont%28fortextstyle_%29.md): Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.
- [preferredFont(forTextStyle:compatibleWith:)](preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [UIFont.TextStyle](textstyle.md): Constants that describe the preferred styles for fonts.
- [init(name:size:)](init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.
- [init(descriptor:size:)](init%28descriptor_size_%29.md): Returns a font that matches the specified font descriptor.

# fontWithSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a font object that is the same as the font, but has the specified size.

## Declaration

```objectivec
- (UIFont *) fontWithSize:(CGFloat) fontSize;
```

## Parameters

- `fontSize`: The desired size (in points) of the new font object. This value must be greater than 0.0.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

## See Also

### Creating Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFontForTextStyle:](preferredfont%28fortextstyle_%29.md): Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.
- [preferredFontForTextStyle:compatibleWithTraitCollection:](preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [UIFontTextStyle](textstyle.md): Constants that describe the preferred styles for fonts.
- [fontWithName:size:](init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.
- [fontWithDescriptor:size:](init%28descriptor_size_%29.md): Returns a font that matches the specified font descriptor.
