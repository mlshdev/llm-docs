> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/postscriptname](https://developer.apple.com/documentation/appkit/nsfontdescriptor/postscriptname)

# postscriptName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The PostScript name of the receiver.

## Declaration

```swift
var postscriptName: String? { get }
```

## See Also

### Related Documentation

- [symbolicTraits](symbolictraits-swift.property.md): A bit mask that describes the traits of the receiver.

### Getting the Font Attributes

- [fontAttributes](fontattributes.md): The receiver’s dictionary of attributes.
- [object(forKey:)](object%28forkey_%29.md): Returns the font attribute specified by the given key.
- [NSFontDescriptor.AttributeName](attributename.md): Constants for the names of font attributes.
- [NSFontDescriptor.SymbolicTraits](symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](matrix.md): The current transform matrix of the receiver.
- [pointSize](pointsize.md): The point size of the receiver.
- [NSFontDescriptor.FeatureKey](featurekey.md): Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.
- [NSFontFamilyClass](../nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](../nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [Typeface Information](../typeface-information.md): Constants for type faces such as italic or bold.
- [NSFontDescriptor.VariationKey](variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.

# postscriptName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The PostScript name of the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * postscriptName;
```

## See Also

### Related Documentation

- [symbolicTraits](symbolictraits-swift.property.md): A bit mask that describes the traits of the receiver.

### Getting the Font Attributes

- [fontAttributes](fontattributes.md): The receiver’s dictionary of attributes.
- [objectForKey:](object%28forkey_%29.md): Returns the font attribute specified by the given key.
- [NSFontDescriptorAttributeName](attributename.md): Constants for the names of font attributes.
- [NSFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](matrix.md): The current transform matrix of the receiver.
- [pointSize](pointsize.md): The point size of the receiver.
- [NSFontDescriptorFeatureKey](featurekey.md): Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.
- [NSFontFamilyClass](../nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](../nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [Typeface Information](../typeface-information.md): Constants for type faces such as italic or bold.
- [NSFontDescriptorVariationKey](variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.
