> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/variationkey](https://developer.apple.com/documentation/appkit/nsfontdescriptor/variationkey)

# NSFontDescriptor.VariationKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.

## Declaration

```swift
struct VariationKey
```

<a id="Discussion"></a>

## Discussion

These keys are used with [variation](attributename/variation.md).

## Topics

### Variation Keys

- [identifier](variationkey/identifier.md): The axis identifier value as a number object.
- [minimumValue](variationkey/minimumvalue.md): The minimum axis value as a number object.
- [maximumValue](variationkey/maximumvalue.md): The maximum axis value as a number object.
- [defaultValue](variationkey/defaultvalue.md): The default axis value as a number object.
- [name](variationkey/name.md): The localized variation axis name.

### Initializers

- [init(rawValue:)](variationkey/init%28rawvalue_%29.md)

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
- [NSFontDescriptor.AttributeName](attributename.md): Constants for the names of font attributes.
- [NSFontDescriptor.SymbolicTraits](symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](matrix.md): The current transform matrix of the receiver.
- [pointSize](pointsize.md): The point size of the receiver.
- [postscriptName](postscriptname.md): The PostScript name of the receiver.
- [NSFontDescriptor.FeatureKey](featurekey.md): Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.
- [NSFontFamilyClass](../nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](../nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [Typeface Information](../typeface-information.md): Constants for type faces such as italic or bold.

# NSFontDescriptorVariationKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.

## Declaration

```objectivec
typedef NSString * NSFontDescriptorVariationKey;
```

<a id="Discussion"></a>

## Discussion

These keys are used with [NSFontVariationAttribute](attributename/variation.md).

## Topics

### Variation Keys

- [NSFontVariationAxisIdentifierKey](variationkey/identifier.md): The axis identifier value as a number object.
- [NSFontVariationAxisMinimumValueKey](variationkey/minimumvalue.md): The minimum axis value as a number object.
- [NSFontVariationAxisMaximumValueKey](variationkey/maximumvalue.md): The maximum axis value as a number object.
- [NSFontVariationAxisDefaultValueKey](variationkey/defaultvalue.md): The default axis value as a number object.
- [NSFontVariationAxisNameKey](variationkey/name.md): The localized variation axis name.

## See Also

### Getting the Font Attributes

- [fontAttributes](fontattributes.md): The receiver’s dictionary of attributes.
- [objectForKey:](object%28forkey_%29.md): Returns the font attribute specified by the given key.
- [NSFontDescriptorAttributeName](attributename.md): Constants for the names of font attributes.
- [NSFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](matrix.md): The current transform matrix of the receiver.
- [pointSize](pointsize.md): The point size of the receiver.
- [postscriptName](postscriptname.md): The PostScript name of the receiver.
- [NSFontDescriptorFeatureKey](featurekey.md): Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.
- [NSFontFamilyClass](../nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](../nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [Typeface Information](../typeface-information.md): Constants for type faces such as italic or bold.
