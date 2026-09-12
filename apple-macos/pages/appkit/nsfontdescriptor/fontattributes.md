> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/fontattributes](https://developer.apple.com/documentation/appkit/nsfontdescriptor/fontattributes)

# fontAttributes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s dictionary of attributes.

## Declaration

```swift
var fontAttributes: [NSFontDescriptor.AttributeName : Any] { get }
```

## See Also

### Getting the Font Attributes

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
- [NSFontDescriptor.VariationKey](variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.

# fontAttributes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s dictionary of attributes.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * fontAttributes;
```

## See Also

### Getting the Font Attributes

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
- [NSFontDescriptorVariationKey](variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.
