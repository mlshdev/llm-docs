> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont](https://developer.apple.com/documentation/uikit/uifont)

# UIFont (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that provides access to the font’s characteristics.

## Declaration

```swift
class UIFont
```

## Mentioned In

- [Adding a custom font to your app](adding-a-custom-font-to-your-app.md)
- [Scaling fonts automatically](scaling-fonts-automatically.md)

<a id="overview"></a>

## Overview

Use `UIFont` to access your font’s characteristics within your app. It also provides the system with access to the glyph information, used during layout. Font objects are immutable, so it’s safe to use them from multiple threads in your app.

In Objective-C, don’t create font objects using the `alloc` and `init` methods. Instead, use class methods of [UIFont](uifont.md), such as [preferredFont(forTextStyle:)](uifont/preferredfont%28fortextstyle_%29.md), to look up and retrieve the desired font object. These methods check for an existing font object with the specified characteristics and return it if it exists. Otherwise, they create a new font object based on the desired font characteristics.

## Topics

### Creating Fonts

- [Scaling fonts automatically](scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFont(forTextStyle:)](uifont/preferredfont%28fortextstyle_%29.md): Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.
- [preferredFont(forTextStyle:compatibleWith:)](uifont/preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [UIFont.TextStyle](uifont/textstyle.md): Constants that describe the preferred styles for fonts.
- [init(name:size:)](uifont/init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.
- [init(descriptor:size:)](uifont/init%28descriptor_size_%29.md): Returns a font that matches the specified font descriptor.
- [withSize(\_:)](uifont/withsize%28__%29.md): Returns a font object that is the same as the font, but has the specified size.

### Creating System Fonts

- [systemFont(ofSize:)](uifont/systemfont%28ofsize_%29.md): Returns the font object for standard interface items in the specified size.
- [systemFont(ofSize:weight:)](uifont/systemfont%28ofsize_weight_%29.md): Returns the font object for standard interface items in the specified size and weight.
- [UIFont.Weight](uifont/weight.md): Constants that represent standard typeface styles.
- [systemFont(ofSize:weight:width:)](uifont/systemfont%28ofsize_weight_width_%29.md)
- [UIFont.Width](uifont/width.md)
- [boldSystemFont(ofSize:)](uifont/boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFont(ofSize:)](uifont/italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedSystemFont(ofSize:weight:)](uifont/monospacedsystemfont%28ofsize_weight_%29.md): Returns the fixed-width font for standard interface text in the specified size.
- [monospacedDigitSystemFont(ofSize:weight:)](uifont/monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns the standard system font with all digits of consistent width.

### Getting the Available Font Names

- [familyNames](uifont/familynames.md): Returns an array of font family names available on the system.
- [fontNames(forFamilyName:)](uifont/fontnames%28forfamilyname_%29.md): Returns an array of font names available in a particular font family.

### Getting Font Name Attributes

- [familyName](uifont/familyname.md): The font family name.
- [fontName](uifont/fontname.md): The font face name.

### Getting Font Metrics

- [pointSize](uifont/pointsize.md): The font’s point size, or the effective vertical point size for a font with a nonstandard matrix.
- [ascender](uifont/ascender.md): The top y-coordinate, offset from the baseline, of the font’s longest ascender.
- [descender](uifont/descender.md): The bottom y-coordinate, offset from the baseline, of the font’s longest descender.
- [leading](uifont/leading.md): The font’s leading information.
- [capHeight](uifont/capheight.md): The font’s cap height information.
- [xHeight](uifont/xheight.md): The x-height of the font.
- [lineHeight](uifont/lineheight.md): The height, in points, of text lines.

### Getting System Font Information

- [labelFontSize](uifont/labelfontsize.md): The standard font size, in points, for labels.
- [buttonFontSize](uifont/buttonfontsize.md): The standard font size, in points, for buttons.
- [smallSystemFontSize](uifont/smallsystemfontsize.md): The size, in points, of the standard small system font.
- [systemFontSize](uifont/systemfontsize.md): The size, in points, of the standard system font.

### Getting Font Descriptors

- [fontDescriptor](uifont/fontdescriptor.md): A font descriptor for the font.
- [UIFontDescriptor](uifontdescriptor.md): A collection of attributes that describes a font.

### Initializers

- [init(coder:)](uifont/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fonts

- [Scaling fonts automatically](scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Adding a custom font to your app](adding-a-custom-font-to-your-app.md): Add a custom font to your app and use it in your app’s interface.
- [UIFontDescriptor](uifontdescriptor.md): A collection of attributes that describes a font.
- [UIFontDescriptor.SymbolicTraits](uifontdescriptor/symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontMetrics](uifontmetrics.md): A utility object for obtaining custom fonts that scale to support Dynamic Type.

# UIFont (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that provides access to the font’s characteristics.

## Declaration

```objectivec
@interface UIFont : NSObject
```

## Mentioned In

- [Adding a custom font to your app](adding-a-custom-font-to-your-app.md)
- [Scaling fonts automatically](scaling-fonts-automatically.md)

<a id="overview"></a>

## Overview

Use `UIFont` to access your font’s characteristics within your app. It also provides the system with access to the glyph information, used during layout. Font objects are immutable, so it’s safe to use them from multiple threads in your app.

In Objective-C, don’t create font objects using the `alloc` and `init` methods. Instead, use class methods of [UIFont](uifont.md), such as [preferredFontForTextStyle:](uifont/preferredfont%28fortextstyle_%29.md), to look up and retrieve the desired font object. These methods check for an existing font object with the specified characteristics and return it if it exists. Otherwise, they create a new font object based on the desired font characteristics.

## Topics

### Creating Fonts

- [Scaling fonts automatically](scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Creating self-sizing table view cells](creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
- [preferredFontForTextStyle:](uifont/preferredfont%28fortextstyle_%29.md): Returns an instance of the system font for the specified text style with scaling for the user’s selected content size category.
- [preferredFontForTextStyle:compatibleWithTraitCollection:](uifont/preferredfont%28fortextstyle_compatiblewith_%29.md): Returns an instance of the system font for the appropriate text style and traits.
- [UIFontTextStyle](uifont/textstyle.md): Constants that describe the preferred styles for fonts.
- [fontWithName:size:](uifont/init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.
- [fontWithDescriptor:size:](uifont/init%28descriptor_size_%29.md): Returns a font that matches the specified font descriptor.
- [fontWithSize:](uifont/withsize%28__%29.md): Returns a font object that is the same as the font, but has the specified size.

### Creating System Fonts

- [systemFontOfSize:](uifont/systemfont%28ofsize_%29.md): Returns the font object for standard interface items in the specified size.
- [systemFontOfSize:weight:](uifont/systemfont%28ofsize_weight_%29.md): Returns the font object for standard interface items in the specified size and weight.
- [UIFontWeight](uifont/weight.md): Constants that represent standard typeface styles.
- [systemFontOfSize:weight:width:](uifont/systemfont%28ofsize_weight_width_%29.md)
- [UIFontWidth](uifont/width.md)
- [boldSystemFontOfSize:](uifont/boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFontOfSize:](uifont/italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedSystemFontOfSize:weight:](uifont/monospacedsystemfont%28ofsize_weight_%29.md): Returns the fixed-width font for standard interface text in the specified size.
- [monospacedDigitSystemFontOfSize:weight:](uifont/monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns the standard system font with all digits of consistent width.

### Getting the Available Font Names

- [familyNames](uifont/familynames.md): Returns an array of font family names available on the system.
- [fontNamesForFamilyName:](uifont/fontnames%28forfamilyname_%29.md): Returns an array of font names available in a particular font family.

### Getting Font Name Attributes

- [familyName](uifont/familyname.md): The font family name.
- [fontName](uifont/fontname.md): The font face name.

### Getting Font Metrics

- [pointSize](uifont/pointsize.md): The font’s point size, or the effective vertical point size for a font with a nonstandard matrix.
- [ascender](uifont/ascender.md): The top y-coordinate, offset from the baseline, of the font’s longest ascender.
- [descender](uifont/descender.md): The bottom y-coordinate, offset from the baseline, of the font’s longest descender.
- [leading](uifont/leading.md): The font’s leading information.
- [capHeight](uifont/capheight.md): The font’s cap height information.
- [xHeight](uifont/xheight.md): The x-height of the font.
- [lineHeight](uifont/lineheight.md): The height, in points, of text lines.

### Getting System Font Information

- [labelFontSize](uifont/labelfontsize.md): The standard font size, in points, for labels.
- [buttonFontSize](uifont/buttonfontsize.md): The standard font size, in points, for buttons.
- [smallSystemFontSize](uifont/smallsystemfontsize.md): The size, in points, of the standard small system font.
- [systemFontSize](uifont/systemfontsize.md): The size, in points, of the standard system font.

### Getting Font Descriptors

- [fontDescriptor](uifont/fontdescriptor.md): A font descriptor for the font.
- [UIFontDescriptor](uifontdescriptor.md): A collection of attributes that describes a font.

### Type Properties

- [defaultFontSize](uifont/defaultfontsize.md)
- [systemMinimumFontSize](uifont/systemminimumfontsize.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Fonts

- [Scaling fonts automatically](scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Adding a custom font to your app](adding-a-custom-font-to-your-app.md): Add a custom font to your app and use it in your app’s interface.
- [UIFontDescriptor](uifontdescriptor.md): A collection of attributes that describes a font.
- [UIFontDescriptorSymbolicTraits](uifontdescriptor/symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontMetrics](uifontmetrics.md): A utility object for obtaining custom fonts that scale to support Dynamic Type.
