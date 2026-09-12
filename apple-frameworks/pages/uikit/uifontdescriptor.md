> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor](https://developer.apple.com/documentation/uikit/uifontdescriptor)

# UIFontDescriptor (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A collection of attributes that describes a font.

## Declaration

```swift
class UIFontDescriptor
```

<a id="overview"></a>

## Overview

A font descriptor can be used to create or modify a [UIFont](uifont.md) object. Font descriptors have a font matching capability, so that you can partially describe a font by creating a font descriptor with, for example, just a family name. You can use [matchingFontDescriptors(withMandatoryKeys:)](uifontdescriptor/matchingfontdescriptors%28withmandatorykeys_%29.md) to find all the available fonts in the system with a matching family name. Font descriptors can also be archived and unarchived.

There are several ways to create a new [UIFontDescriptor](uifontdescriptor.md) object. To take advantage of text styles and respect the user’s current content size category, use [preferredFontDescriptor(withTextStyle:)](uifontdescriptor/preferredfontdescriptor%28withtextstyle_%29.md). You can also use `alloc` and [init(fontAttributes:)](uifontdescriptor/init%28fontattributes_%29.md), [fontDescriptorWithFontAttributes:](uifontdescriptor/fontdescriptorwithfontattributes_.md), [init(name:matrix:)](uifontdescriptor/init%28name_matrix_%29.md), or [init(name:size:)](uifontdescriptor/init%28name_size_%29.md) to create a font descriptor based on your custom attributes dictionary or on a specific font’s name and size. Alternatively you can use one of the `fontDescriptor…` instance methods (such as [withFace(\_:)](uifontdescriptor/withface%28__%29.md)) to create a modified version of an existing descriptor. The latter methods are useful if you have an existing descriptor and simply want to change one aspect.

All attributes in the attributes dictionary are optional.

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/).

## Topics

### Creating a font descriptor

- [preferredFontDescriptor(withTextStyle:)](uifontdescriptor/preferredfontdescriptor%28withtextstyle_%29.md): Returns a font descriptor that contains the specified text style and the user’s selected content size category.
- [preferredFontDescriptor(withTextStyle:compatibleWith:)](uifontdescriptor/preferredfontdescriptor%28withtextstyle_compatiblewith_%29.md): Returns a font descriptor that contains the text style and the content size category that the provided trait collection specifies.
- [init(name:matrix:)](uifontdescriptor/init%28name_matrix_%29.md): Returns a font descriptor with the specified values for the name and matrix dictionary attributes.
- [init(name:size:)](uifontdescriptor/init%28name_size_%29.md): Returns a font descriptor with the specified values for the name and size dictionary attributes.
- [addingAttributes(\_:)](uifontdescriptor/addingattributes%28__%29.md): Returns a new font descriptor that’s the same as the existing descriptor, but with the specified attributes taking precedence over the existing ones.
- [withDesign(\_:)](uifontdescriptor/withdesign%28__%29.md): Returns a new font descriptor that’s the same as the existing descriptor, but with the specified design.
- [withFamily(\_:)](uifontdescriptor/withfamily%28__%29.md): Returns a new font descriptor whose attributes are the same as the existing font descriptor, but from the specified family.
- [withFace(\_:)](uifontdescriptor/withface%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified face.
- [withMatrix(\_:)](uifontdescriptor/withmatrix%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified matrix.
- [withSize(\_:)](uifontdescriptor/withsize%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified point size.
- [withSymbolicTraits(\_:)](uifontdescriptor/withsymbolictraits%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified symbolic traits.

### Initializing a font descriptor

- [init(fontAttributes:)](uifontdescriptor/init%28fontattributes_%29.md): Creates a font descriptor with the specified attributes.
- [init()](uifontdescriptor/init%28%29.md): Creates a font descriptor.
- [init(coder:)](uifontdescriptor/init%28coder_%29.md): Creates a font descriptor from data in an unarchiver.

### Finding fonts

- [matchingFontDescriptors(withMandatoryKeys:)](uifontdescriptor/matchingfontdescriptors%28withmandatorykeys_%29.md): Returns all the fonts available in the system with specified attributes that match those of the font.

### Querying a font descriptor

- [fontAttributes](uifontdescriptor/fontattributes.md): The font descriptor’s dictionary of attributes.
- [matrix](uifontdescriptor/matrix.md): The current transform matrix of the font descriptor.
- [object(forKey:)](uifontdescriptor/object%28forkey_%29.md): Returns the font attribute that the corresponding key specifies.
- [pointSize](uifontdescriptor/pointsize.md): The point size of the font descriptor.
- [postscriptName](uifontdescriptor/postscriptname.md): The PostScript name of the font descriptor.
- [symbolicTraits](uifontdescriptor/symbolictraits-swift.property.md): The traits of the font descriptor.
- [UIFontDescriptor.SymbolicTraits](uifontdescriptor/symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.

### Constants

- [UIFont.TextStyle](uifont/textstyle.md): Constants that describe the preferred styles for fonts.
- [UIFontDescriptor.SystemDesign](uifontdescriptor/systemdesign.md): Constants that describe the system-defined typeface designs.
- [UIFontDescriptor.SymbolicTraits](uifontdescriptor/symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontDescriptor.Class](uifontdescriptor/class.md): Constants that classify certain stylistic qualities of the font.
- [UIFontDescriptor.AttributeName](uifontdescriptor/attributename.md): Constants that describe font attributes.
- [UIFontDescriptor.FeatureKey](uifontdescriptor/featurekey.md): Keys for retrieving feature settings.
- [UIFontDescriptor.TraitKey](uifontdescriptor/traitkey.md): Keys for retrieving the font descriptor’s trait information.
- [UIFont.Weight](uifont/weight.md): Constants that represent standard typeface styles.
- [UIFont.Width](uifont/width.md)

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
- [UIFont](uifont.md): An object that provides access to the font’s characteristics.
- [UIFontDescriptor.SymbolicTraits](uifontdescriptor/symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontMetrics](uifontmetrics.md): A utility object for obtaining custom fonts that scale to support Dynamic Type.

# UIFontDescriptor (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A collection of attributes that describes a font.

## Declaration

```objectivec
@interface UIFontDescriptor : NSObject
```

<a id="overview"></a>

## Overview

A font descriptor can be used to create or modify a [UIFont](uifont.md) object. Font descriptors have a font matching capability, so that you can partially describe a font by creating a font descriptor with, for example, just a family name. You can use [matchingFontDescriptorsWithMandatoryKeys:](uifontdescriptor/matchingfontdescriptors%28withmandatorykeys_%29.md) to find all the available fonts in the system with a matching family name. Font descriptors can also be archived and unarchived.

There are several ways to create a new [UIFontDescriptor](uifontdescriptor.md) object. To take advantage of text styles and respect the user’s current content size category, use [preferredFontDescriptorWithTextStyle:](uifontdescriptor/preferredfontdescriptor%28withtextstyle_%29.md). You can also use `alloc` and [initWithFontAttributes:](uifontdescriptor/init%28fontattributes_%29.md), [fontDescriptorWithFontAttributes:](uifontdescriptor/fontdescriptorwithfontattributes_.md), [fontDescriptorWithName:matrix:](uifontdescriptor/init%28name_matrix_%29.md), or [fontDescriptorWithName:size:](uifontdescriptor/init%28name_size_%29.md) to create a font descriptor based on your custom attributes dictionary or on a specific font’s name and size. Alternatively you can use one of the `fontDescriptor…` instance methods (such as [fontDescriptorWithFace:](uifontdescriptor/withface%28__%29.md)) to create a modified version of an existing descriptor. The latter methods are useful if you have an existing descriptor and simply want to change one aspect.

All attributes in the attributes dictionary are optional.

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/).

## Topics

### Creating a font descriptor

- [preferredFontDescriptorWithTextStyle:](uifontdescriptor/preferredfontdescriptor%28withtextstyle_%29.md): Returns a font descriptor that contains the specified text style and the user’s selected content size category.
- [preferredFontDescriptorWithTextStyle:compatibleWithTraitCollection:](uifontdescriptor/preferredfontdescriptor%28withtextstyle_compatiblewith_%29.md): Returns a font descriptor that contains the text style and the content size category that the provided trait collection specifies.
- [fontDescriptorWithFontAttributes:](uifontdescriptor/fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.
- [fontDescriptorWithName:matrix:](uifontdescriptor/init%28name_matrix_%29.md): Returns a font descriptor with the specified values for the name and matrix dictionary attributes.
- [fontDescriptorWithName:size:](uifontdescriptor/init%28name_size_%29.md): Returns a font descriptor with the specified values for the name and size dictionary attributes.
- [fontDescriptorByAddingAttributes:](uifontdescriptor/addingattributes%28__%29.md): Returns a new font descriptor that’s the same as the existing descriptor, but with the specified attributes taking precedence over the existing ones.
- [fontDescriptorWithDesign:](uifontdescriptor/withdesign%28__%29.md): Returns a new font descriptor that’s the same as the existing descriptor, but with the specified design.
- [fontDescriptorWithFamily:](uifontdescriptor/withfamily%28__%29.md): Returns a new font descriptor whose attributes are the same as the existing font descriptor, but from the specified family.
- [fontDescriptorWithFace:](uifontdescriptor/withface%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified face.
- [fontDescriptorWithMatrix:](uifontdescriptor/withmatrix%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified matrix.
- [fontDescriptorWithSize:](uifontdescriptor/withsize%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified point size.
- [fontDescriptorWithSymbolicTraits:](uifontdescriptor/withsymbolictraits%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified symbolic traits.

### Initializing a font descriptor

- [initWithFontAttributes:](uifontdescriptor/init%28fontattributes_%29.md): Creates a font descriptor with the specified attributes.
- [init](uifontdescriptor/init%28%29.md): Creates a font descriptor.
- [initWithCoder:](uifontdescriptor/init%28coder_%29.md): Creates a font descriptor from data in an unarchiver.

### Finding fonts

- [matchingFontDescriptorsWithMandatoryKeys:](uifontdescriptor/matchingfontdescriptors%28withmandatorykeys_%29.md): Returns all the fonts available in the system with specified attributes that match those of the font.

### Querying a font descriptor

- [fontAttributes](uifontdescriptor/fontattributes.md): The font descriptor’s dictionary of attributes.
- [matrix](uifontdescriptor/matrix.md): The current transform matrix of the font descriptor.
- [objectForKey:](uifontdescriptor/object%28forkey_%29.md): Returns the font attribute that the corresponding key specifies.
- [pointSize](uifontdescriptor/pointsize.md): The point size of the font descriptor.
- [postscriptName](uifontdescriptor/postscriptname.md): The PostScript name of the font descriptor.
- [symbolicTraits](uifontdescriptor/symbolictraits-swift.property.md): The traits of the font descriptor.
- [UIFontDescriptorSymbolicTraits](uifontdescriptor/symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.

### Constants

- [UIFontTextStyle](uifont/textstyle.md): Constants that describe the preferred styles for fonts.
- [UIFontDescriptorSystemDesign](uifontdescriptor/systemdesign.md): Constants that describe the system-defined typeface designs.
- [UIFontDescriptorSymbolicTraits](uifontdescriptor/symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontDescriptorClass](uifontdescriptor/class.md): Constants that classify certain stylistic qualities of the font.
- [UIFontDescriptorAttributeName](uifontdescriptor/attributename.md): Constants that describe font attributes.
- [UIFontDescriptorFeatureKey](uifontdescriptor/featurekey.md): Keys for retrieving feature settings.
- [UIFontDescriptorTraitKey](uifontdescriptor/traitkey.md): Keys for retrieving the font descriptor’s trait information.
- [UIFontWeight](uifont/weight.md): Constants that represent standard typeface styles.
- [UIFontWidth](uifont/width.md)

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
- [UIFont](uifont.md): An object that provides access to the font’s characteristics.
- [UIFontDescriptorSymbolicTraits](uifontdescriptor/symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontMetrics](uifontmetrics.md): A utility object for obtaining custom fonts that scale to support Dynamic Type.
