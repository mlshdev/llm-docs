> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor](https://developer.apple.com/documentation/appkit/nsfontdescriptor)

# NSFontDescriptor (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A dictionary of attributes that describe a font.

## Declaration

```swift
class NSFontDescriptor
```

<a id="overview"></a>

## Overview

A font descriptor can be used to create or modify an [NSFont](nsfont.md) object. The system provides a font matching capability, so that you can partially describe a font by creating a font descriptor with, for example, just a family name. You can then find all the available fonts on the system with a matching family name using [matchingFontDescriptors(withMandatoryKeys:)](nsfontdescriptor/matchingfontdescriptors%28withmandatorykeys_%29.md).

There are several ways to create a new [NSFontDescriptor](nsfontdescriptor.md) object. You can use `alloc` and  [init(fontAttributes:)](nsfontdescriptor/init%28fontattributes_%29.md), [fontDescriptorWithFontAttributes:](nsfontdescriptor/fontdescriptorwithfontattributes_.md), [init(name:matrix:)](nsfontdescriptor/init%28name_matrix_%29.md), or [init(name:size:)](nsfontdescriptor/init%28name_size_%29.md). to create a font descriptor based on either your custom attributes dictionary or on a specific font’s name and size. Alternatively you can use one of the `fontDescriptor…` instance methods (such as [withFace(\_:)](nsfontdescriptor/withface%28__%29.md)) to create a modified version of an existing descriptor. The latter methods are useful if you have an existing descriptor and simply want to change one aspect.

All attributes in the attributes dictionary are optional.

## Topics

### Creating a Font Descriptor

- [preferredFontDescriptor(forTextStyle:options:)](nsfontdescriptor/preferredfontdescriptor%28fortextstyle_options_%29.md): Returns a font descriptor that contains the text style.
- [init(name:matrix:)](nsfontdescriptor/init%28name_matrix_%29.md): Returns a font descriptor with the name and matrix attributes set to the given values.
- [init(name:size:)](nsfontdescriptor/init%28name_size_%29.md): Returns a font descriptor with the name and size attributes set to the given values.
- [init(fontAttributes:)](nsfontdescriptor/init%28fontattributes_%29.md): Initializes and returns a new font descriptor with the specified attributes.

### Modifying an Existing Font Descriptor

- [addingAttributes(\_:)](nsfontdescriptor/addingattributes%28__%29.md): Returns a new font descriptor based on the current object, but with the specified attributes taking precedence over the existing ones.
- [withFace(\_:)](nsfontdescriptor/withface%28__%29.md): Returns a new font descriptor based on the current object, but with the specified face.
- [withFamily(\_:)](nsfontdescriptor/withfamily%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font family.
- [withMatrix(\_:)](nsfontdescriptor/withmatrix%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font matrix.
- [withSize(\_:)](nsfontdescriptor/withsize%28__%29.md): Returns a new font descriptor based on the current object, but with the specified point size.
- [withSymbolicTraits(\_:)](nsfontdescriptor/withsymbolictraits%28__%29.md): Returns a new font descriptor based on the current object, but with the specified symbolic traits taking precedence over the existing ones.
- [withDesign(\_:)](nsfontdescriptor/withdesign%28__%29.md): Returns a new font descriptor based on the current object, but with the specified design style.
- [NSFontDescriptor.SystemDesign](nsfontdescriptor/systemdesign.md): Constants for font designs, such as monospace, rounded, and serif.

### Finding Fonts

- [matchingFontDescriptors(withMandatoryKeys:)](nsfontdescriptor/matchingfontdescriptors%28withmandatorykeys_%29.md): Returns all the fonts available on the system whose specified attributes match those of the receiver.
- [matchingFontDescriptor(withMandatoryKeys:)](nsfontdescriptor/matchingfontdescriptor%28withmandatorykeys_%29.md): Returns a normalized font descriptor whose specified attributes match those of the receiver.

### Getting the Font Attributes

- [fontAttributes](nsfontdescriptor/fontattributes.md): The receiver’s dictionary of attributes.
- [object(forKey:)](nsfontdescriptor/object%28forkey_%29.md): Returns the font attribute specified by the given key.
- [NSFontDescriptor.AttributeName](nsfontdescriptor/attributename.md): Constants for the names of font attributes.
- [NSFontDescriptor.SymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](nsfontdescriptor/matrix.md): The current transform matrix of the receiver.
- [pointSize](nsfontdescriptor/pointsize.md): The point size of the receiver.
- [postscriptName](nsfontdescriptor/postscriptname.md): The PostScript name of the receiver.
- [NSFontDescriptor.FeatureKey](nsfontdescriptor/featurekey.md): Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [Typeface Information](typeface-information.md): Constants for type faces such as italic or bold.
- [NSFontDescriptor.VariationKey](nsfontdescriptor/variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.

### Getting the Font Traits

- [symbolicTraits](nsfontdescriptor/symbolictraits-swift.property.md): A bit mask that describes the traits of the receiver.
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.
- [NSFontDescriptor.TraitKey](nsfontdescriptor/traitkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its trait dictionary.

### Requiring Font Assets

- [requiresFontAssetRequest](nsfontdescriptor/requiresfontassetrequest.md)

### Initializers

- [init(coder:)](nsfontdescriptor/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptor.SymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.

# NSFontDescriptor (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A dictionary of attributes that describe a font.

## Declaration

```objectivec
@interface NSFontDescriptor : NSObject
```

<a id="overview"></a>

## Overview

A font descriptor can be used to create or modify an [NSFont](nsfont.md) object. The system provides a font matching capability, so that you can partially describe a font by creating a font descriptor with, for example, just a family name. You can then find all the available fonts on the system with a matching family name using [matchingFontDescriptorsWithMandatoryKeys:](nsfontdescriptor/matchingfontdescriptors%28withmandatorykeys_%29.md).

There are several ways to create a new [NSFontDescriptor](nsfontdescriptor.md) object. You can use `alloc` and  [initWithFontAttributes:](nsfontdescriptor/init%28fontattributes_%29.md), [fontDescriptorWithFontAttributes:](nsfontdescriptor/fontdescriptorwithfontattributes_.md), [fontDescriptorWithName:matrix:](nsfontdescriptor/init%28name_matrix_%29.md), or [fontDescriptorWithName:size:](nsfontdescriptor/init%28name_size_%29.md). to create a font descriptor based on either your custom attributes dictionary or on a specific font’s name and size. Alternatively you can use one of the `fontDescriptor…` instance methods (such as [fontDescriptorWithFace:](nsfontdescriptor/withface%28__%29.md)) to create a modified version of an existing descriptor. The latter methods are useful if you have an existing descriptor and simply want to change one aspect.

All attributes in the attributes dictionary are optional.

## Topics

### Creating a Font Descriptor

- [preferredFontDescriptorForTextStyle:options:](nsfontdescriptor/preferredfontdescriptor%28fortextstyle_options_%29.md): Returns a font descriptor that contains the text style.
- [fontDescriptorWithFontAttributes:](nsfontdescriptor/fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.
- [fontDescriptorWithName:matrix:](nsfontdescriptor/init%28name_matrix_%29.md): Returns a font descriptor with the name and matrix attributes set to the given values.
- [fontDescriptorWithName:size:](nsfontdescriptor/init%28name_size_%29.md): Returns a font descriptor with the name and size attributes set to the given values.
- [initWithFontAttributes:](nsfontdescriptor/init%28fontattributes_%29.md): Initializes and returns a new font descriptor with the specified attributes.

### Modifying an Existing Font Descriptor

- [fontDescriptorByAddingAttributes:](nsfontdescriptor/addingattributes%28__%29.md): Returns a new font descriptor based on the current object, but with the specified attributes taking precedence over the existing ones.
- [fontDescriptorWithFace:](nsfontdescriptor/withface%28__%29.md): Returns a new font descriptor based on the current object, but with the specified face.
- [fontDescriptorWithFamily:](nsfontdescriptor/withfamily%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font family.
- [fontDescriptorWithMatrix:](nsfontdescriptor/withmatrix%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font matrix.
- [fontDescriptorWithSize:](nsfontdescriptor/withsize%28__%29.md): Returns a new font descriptor based on the current object, but with the specified point size.
- [fontDescriptorWithSymbolicTraits:](nsfontdescriptor/withsymbolictraits%28__%29.md): Returns a new font descriptor based on the current object, but with the specified symbolic traits taking precedence over the existing ones.
- [fontDescriptorWithDesign:](nsfontdescriptor/withdesign%28__%29.md): Returns a new font descriptor based on the current object, but with the specified design style.
- [NSFontDescriptorSystemDesign](nsfontdescriptor/systemdesign.md): Constants for font designs, such as monospace, rounded, and serif.

### Finding Fonts

- [matchingFontDescriptorsWithMandatoryKeys:](nsfontdescriptor/matchingfontdescriptors%28withmandatorykeys_%29.md): Returns all the fonts available on the system whose specified attributes match those of the receiver.
- [matchingFontDescriptorWithMandatoryKeys:](nsfontdescriptor/matchingfontdescriptor%28withmandatorykeys_%29.md): Returns a normalized font descriptor whose specified attributes match those of the receiver.

### Getting the Font Attributes

- [fontAttributes](nsfontdescriptor/fontattributes.md): The receiver’s dictionary of attributes.
- [objectForKey:](nsfontdescriptor/object%28forkey_%29.md): Returns the font attribute specified by the given key.
- [NSFontDescriptorAttributeName](nsfontdescriptor/attributename.md): Constants for the names of font attributes.
- [NSFontDescriptorSymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](nsfontdescriptor/matrix.md): The current transform matrix of the receiver.
- [pointSize](nsfontdescriptor/pointsize.md): The point size of the receiver.
- [postscriptName](nsfontdescriptor/postscriptname.md): The PostScript name of the receiver.
- [NSFontDescriptorFeatureKey](nsfontdescriptor/featurekey.md): Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [Typeface Information](typeface-information.md): Constants for type faces such as italic or bold.
- [NSFontDescriptorVariationKey](nsfontdescriptor/variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.

### Getting the Font Traits

- [symbolicTraits](nsfontdescriptor/symbolictraits-swift.property.md): A bit mask that describes the traits of the receiver.
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.
- [NSFontDescriptorTraitKey](nsfontdescriptor/traitkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its trait dictionary.

### Requiring Font Assets

- [requiresFontAssetRequest](nsfontdescriptor/requiresfontassetrequest.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptorSymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.
