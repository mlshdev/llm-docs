> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/attributename/matrix](https://developer.apple.com/documentation/appkit/nsfontdescriptor/attributename/matrix)

# matrix (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

An affine transform that specifies the font’s transformation matrix.

## Declaration

```swift
static let matrix: NSFontDescriptor.AttributeName
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSAffineTransform](https://developer.apple.com/documentation/foundation/nsaffinetransform) object. The default value is the identity matrix.

## See Also

### Font Attributes

- [family](family.md): An optional string object that specifies the font family.
- [name](name.md): An optional string object that specifies the font name.
- [face](face.md): An optional string object that specifies the font face.
- [size](size.md): An optional floating-point number that specifies the font size.
- [visibleName](visiblename.md): An optional string object that specifies the font’s visible name.
- [variation](variation.md): A dictionary that describes the font’s variation axis.
- [characterSet](characterset.md): The set of Unicode characters covered by the font.
- [cascadeList](cascadelist.md): An array, each member of which is a sub-descriptor.
- [traits](traits.md): A dictionary that fully describes the font traits.
- [fixedAdvance](fixedadvance.md): A floating-point value that overrides the glyph advancement specified by the font.
- [featureSettings](featuresettings.md): An array of dictionaries representing non-default font feature settings.

# NSFontMatrixAttribute (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

An affine transform that specifies the font’s transformation matrix.

## Declaration

```objectivec
extern NSFontDescriptorAttributeName NSFontMatrixAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSAffineTransform](https://developer.apple.com/documentation/foundation/nsaffinetransform) object. The default value is the identity matrix.

## See Also

### Font Attributes

- [NSFontFamilyAttribute](family.md): An optional string object that specifies the font family.
- [NSFontNameAttribute](name.md): An optional string object that specifies the font name.
- [NSFontFaceAttribute](face.md): An optional string object that specifies the font face.
- [NSFontSizeAttribute](size.md): An optional floating-point number that specifies the font size.
- [NSFontVisibleNameAttribute](visiblename.md): An optional string object that specifies the font’s visible name.
- [NSFontVariationAttribute](variation.md): A dictionary that describes the font’s variation axis.
- [NSFontCharacterSetAttribute](characterset.md): The set of Unicode characters covered by the font.
- [NSFontCascadeListAttribute](cascadelist.md): An array, each member of which is a sub-descriptor.
- [NSFontTraitsAttribute](traits.md): A dictionary that fully describes the font traits.
- [NSFontFixedAdvanceAttribute](fixedadvance.md): A floating-point value that overrides the glyph advancement specified by the font.
- [NSFontFeatureSettingsAttribute](featuresettings.md): An array of dictionaries representing non-default font feature settings.
