> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/featurekey](https://developer.apple.com/documentation/appkit/nsfontdescriptor/featurekey)

# NSFontDescriptor.FeatureKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.

## Declaration

```swift
struct FeatureKey
```

<a id="Discussion"></a>

## Discussion

These keys are used with [featureSettings](attributename/featuresettings.md).

## Topics

### Feature Keys

- [typeIdentifier](featurekey/typeidentifier.md): A key that indicates the type of the font feature.
- [selectorIdentifier](featurekey/selectoridentifier.md): A key that indicates the selector of the font feature.

### Initializers

- [init(\_:)](featurekey/init%28__%29.md)
- [init(rawValue:)](featurekey/init%28rawvalue_%29.md)

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
- [NSFontFamilyClass](../nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](../nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [Typeface Information](../typeface-information.md): Constants for type faces such as italic or bold.
- [NSFontDescriptor.VariationKey](variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.

# NSFontDescriptorFeatureKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.

## Declaration

```objectivec
typedef NSString * NSFontDescriptorFeatureKey;
```

<a id="Discussion"></a>

## Discussion

These keys are used with [NSFontFeatureSettingsAttribute](attributename/featuresettings.md).

## Topics

### Feature Keys

- [NSFontFeatureTypeIdentifierKey](featurekey/typeidentifier.md): A key that indicates the type of the font feature.
- [NSFontFeatureSelectorIdentifierKey](featurekey/selectoridentifier.md): A key that indicates the selector of the font feature.

## See Also

### Getting the Font Attributes

- [fontAttributes](fontattributes.md): The receiver’s dictionary of attributes.
- [objectForKey:](object%28forkey_%29.md): Returns the font attribute specified by the given key.
- [NSFontDescriptorAttributeName](attributename.md): Constants for the names of font attributes.
- [NSFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](matrix.md): The current transform matrix of the receiver.
- [pointSize](pointsize.md): The point size of the receiver.
- [postscriptName](postscriptname.md): The PostScript name of the receiver.
- [NSFontFamilyClass](../nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](../nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [Typeface Information](../typeface-information.md): Constants for type faces such as italic or bold.
- [NSFontDescriptorVariationKey](variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.
