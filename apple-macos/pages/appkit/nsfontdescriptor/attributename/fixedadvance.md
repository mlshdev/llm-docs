> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/attributename/fixedadvance](https://developer.apple.com/documentation/appkit/nsfontdescriptor/attributename/fixedadvance)

# fixedAdvance (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A floating-point value that overrides the glyph advancement specified by the font.

## Declaration

```swift
static let fixedAdvance: NSFontDescriptor.AttributeName
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object. The default value is `0.0`.

## See Also

### Font Attributes

- [family](family.md): An optional string object that specifies the font family.
- [name](name.md): An optional string object that specifies the font name.
- [face](face.md): An optional string object that specifies the font face.
- [size](size.md): An optional floating-point number that specifies the font size.
- [visibleName](visiblename.md): An optional string object that specifies the font’s visible name.
- [matrix](matrix.md): An affine transform that specifies the font’s transformation matrix.
- [variation](variation.md): A dictionary that describes the font’s variation axis.
- [characterSet](characterset.md): The set of Unicode characters covered by the font.
- [cascadeList](cascadelist.md): An array, each member of which is a sub-descriptor.
- [traits](traits.md): A dictionary that fully describes the font traits.
- [featureSettings](featuresettings.md): An array of dictionaries representing non-default font feature settings.

# NSFontFixedAdvanceAttribute (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

A floating-point value that overrides the glyph advancement specified by the font.

## Declaration

```objectivec
extern NSFontDescriptorAttributeName NSFontFixedAdvanceAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object. The default value is `0.0`.

## See Also

### Font Attributes

- [NSFontFamilyAttribute](family.md): An optional string object that specifies the font family.
- [NSFontNameAttribute](name.md): An optional string object that specifies the font name.
- [NSFontFaceAttribute](face.md): An optional string object that specifies the font face.
- [NSFontSizeAttribute](size.md): An optional floating-point number that specifies the font size.
- [NSFontVisibleNameAttribute](visiblename.md): An optional string object that specifies the font’s visible name.
- [NSFontMatrixAttribute](matrix.md): An affine transform that specifies the font’s transformation matrix.
- [NSFontVariationAttribute](variation.md): A dictionary that describes the font’s variation axis.
- [NSFontCharacterSetAttribute](characterset.md): The set of Unicode characters covered by the font.
- [NSFontCascadeListAttribute](cascadelist.md): An array, each member of which is a sub-descriptor.
- [NSFontTraitsAttribute](traits.md): A dictionary that fully describes the font traits.
- [NSFontFeatureSettingsAttribute](featuresettings.md): An array of dictionaries representing non-default font feature settings.
