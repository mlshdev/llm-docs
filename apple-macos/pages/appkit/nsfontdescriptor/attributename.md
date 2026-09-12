> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/attributename](https://developer.apple.com/documentation/appkit/nsfontdescriptor/attributename)

# NSFontDescriptor.AttributeName (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants for the names of font attributes.

## Declaration

```swift
struct AttributeName
```

<a id="Discussion"></a>

## Discussion

You can retrieve the values for these attributes using [object(forKey:)](object%28forkey_%29.md).

## Topics

### Font Attributes

- [family](attributename/family.md): An optional string object that specifies the font family.
- [name](attributename/name.md): An optional string object that specifies the font name.
- [face](attributename/face.md): An optional string object that specifies the font face.
- [size](attributename/size.md): An optional floating-point number that specifies the font size.
- [visibleName](attributename/visiblename.md): An optional string object that specifies the font’s visible name.
- [matrix](attributename/matrix.md): An affine transform that specifies the font’s transformation matrix.
- [variation](attributename/variation.md): A dictionary that describes the font’s variation axis.
- [characterSet](attributename/characterset.md): The set of Unicode characters covered by the font.
- [cascadeList](attributename/cascadelist.md): An array, each member of which is a sub-descriptor.
- [traits](attributename/traits.md): A dictionary that fully describes the font traits.
- [fixedAdvance](attributename/fixedadvance.md): A floating-point value that overrides the glyph advancement specified by the font.
- [featureSettings](attributename/featuresettings.md): An array of dictionaries representing non-default font feature settings.

### Initializers

- [init(\_:)](attributename/init%28__%29.md)
- [init(rawValue:)](attributename/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Font Attributes

- [fontAttributes](fontattributes.md): The receiver’s dictionary of attributes.
- [object(forKey:)](object%28forkey_%29.md): Returns the font attribute specified by the given key.
- [NSFontDescriptor.SymbolicTraits](symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](matrix.md): The current transform matrix of the receiver.
- [pointSize](pointsize.md): The point size of the receiver.
- [postscriptName](postscriptname.md): The PostScript name of the receiver.
- [NSFontDescriptor.FeatureKey](featurekey.md): Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.
- [NSFontFamilyClass](../nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](../nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [Typeface Information](../typeface-information.md): Constants for type faces such as italic or bold.
- [NSFontDescriptor.VariationKey](variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.

# NSFontDescriptorAttributeName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants for the names of font attributes.

## Declaration

```objectivec
typedef NSString * NSFontDescriptorAttributeName;
```

<a id="Discussion"></a>

## Discussion

You can retrieve the values for these attributes using [objectForKey:](object%28forkey_%29.md).

## Topics

### Font Attributes

- [NSFontFamilyAttribute](attributename/family.md): An optional string object that specifies the font family.
- [NSFontNameAttribute](attributename/name.md): An optional string object that specifies the font name.
- [NSFontFaceAttribute](attributename/face.md): An optional string object that specifies the font face.
- [NSFontSizeAttribute](attributename/size.md): An optional floating-point number that specifies the font size.
- [NSFontVisibleNameAttribute](attributename/visiblename.md): An optional string object that specifies the font’s visible name.
- [NSFontMatrixAttribute](attributename/matrix.md): An affine transform that specifies the font’s transformation matrix.
- [NSFontVariationAttribute](attributename/variation.md): A dictionary that describes the font’s variation axis.
- [NSFontCharacterSetAttribute](attributename/characterset.md): The set of Unicode characters covered by the font.
- [NSFontCascadeListAttribute](attributename/cascadelist.md): An array, each member of which is a sub-descriptor.
- [NSFontTraitsAttribute](attributename/traits.md): A dictionary that fully describes the font traits.
- [NSFontFixedAdvanceAttribute](attributename/fixedadvance.md): A floating-point value that overrides the glyph advancement specified by the font.
- [NSFontFeatureSettingsAttribute](attributename/featuresettings.md): An array of dictionaries representing non-default font feature settings.

### Deprecated

- [NSFontColorAttribute](../nsfontcolorattribute.md): Deprecated. An optional `NSData` object that specifies the font color.

## See Also

### Getting the Font Attributes

- [fontAttributes](fontattributes.md): The receiver’s dictionary of attributes.
- [objectForKey:](object%28forkey_%29.md): Returns the font attribute specified by the given key.
- [NSFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](matrix.md): The current transform matrix of the receiver.
- [pointSize](pointsize.md): The point size of the receiver.
- [postscriptName](postscriptname.md): The PostScript name of the receiver.
- [NSFontDescriptorFeatureKey](featurekey.md): Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.
- [NSFontFamilyClass](../nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](../nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [Typeface Information](../typeface-information.md): Constants for type faces such as italic or bold.
- [NSFontDescriptorVariationKey](variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.
