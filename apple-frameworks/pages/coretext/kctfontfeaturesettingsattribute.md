> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctfontfeaturesettingsattribute](https://developer.apple.com/documentation/coretext/kctfontfeaturesettingsattribute)

# kCTFontFeatureSettingsAttribute (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The font features settings for a font reference.

## Declaration

```swift
let kCTFontFeatureSettingsAttribute: CFString
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is a [CFArray](../corefoundation/cfarray.md) object containing font feature-setting dictionaries. A feature-setting dictionary contains a tuple of a [kCTFontFeatureTypeIdentifierKey](kctfontfeaturetypeidentifierkey.md) key-value pair and a [kCTFontFeatureSelectorIdentifierKey](kctfontfeatureselectoridentifierkey.md) key-value pair. Each setting dictionary indicates which setting should be turned on.

> **Note**

>  In the case of duplicate or conflicting settings, the last setting in the list takes precedence. It is the caller’s responsibility to handle exclusive and nonexclusive settings as necessary.

## See Also

### Font Attribute Keys

- [kCTFontURLAttribute](kctfonturlattribute.md): The font URL from the font descriptor.
- [kCTFontNameAttribute](kctfontnameattribute.md): The PostScript name from the font descriptor.
- [kCTFontDisplayNameAttribute](kctfontdisplaynameattribute.md): The name used to display the font.
- [kCTFontFamilyNameAttribute](kctfontfamilynameattribute.md): The font family name from the font descriptor.
- [kCTFontStyleNameAttribute](kctfontstylenameattribute.md): The style name of the font.
- [kCTFontTraitsAttribute](kctfonttraitsattribute.md): The dictionary of font traits for stylistic information.
- [kCTFontVariationAttribute](kctfontvariationattribute.md): The dictionary of font variation.
- [kCTFontSizeAttribute](kctfontsizeattribute.md): The font point size.
- [kCTFontMatrixAttribute](kctfontmatrixattribute.md): The font transformation matrix when creating a font.
- [kCTFontCascadeListAttribute](kctfontcascadelistattribute.md): The cascade list used for a font reference.
- [kCTFontCharacterSetAttribute](kctfontcharactersetattribute.md): The Unicode character coverage set for a font reference.
- [kCTFontLanguagesAttribute](kctfontlanguagesattribute.md): A list of covered languages for a font reference.
- [kCTFontBaselineAdjustAttribute](kctfontbaselineadjustattribute.md): The baseline adjustment for a font reference.
- [kCTFontMacintoshEncodingsAttribute](kctfontmacintoshencodingsattribute.md): The Macintosh encodings for a font reference.
- [kCTFontFeaturesAttribute](kctfontfeaturesattribute.md): The font features for a font reference.

# kCTFontFeatureSettingsAttribute (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The font features settings for a font reference.

## Declaration

```objectivec
extern CFStringRef const kCTFontFeatureSettingsAttribute;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is a [CFArrayRef](../corefoundation/cfarray.md) object containing font feature-setting dictionaries. A feature-setting dictionary contains a tuple of a [kCTFontFeatureTypeIdentifierKey](kctfontfeaturetypeidentifierkey.md) key-value pair and a [kCTFontFeatureSelectorIdentifierKey](kctfontfeatureselectoridentifierkey.md) key-value pair. Each setting dictionary indicates which setting should be turned on.

> **Note**

>  In the case of duplicate or conflicting settings, the last setting in the list takes precedence. It is the caller’s responsibility to handle exclusive and nonexclusive settings as necessary.

## See Also

### Font Attribute Keys

- [kCTFontURLAttribute](kctfonturlattribute.md): The font URL from the font descriptor.
- [kCTFontNameAttribute](kctfontnameattribute.md): The PostScript name from the font descriptor.
- [kCTFontDisplayNameAttribute](kctfontdisplaynameattribute.md): The name used to display the font.
- [kCTFontFamilyNameAttribute](kctfontfamilynameattribute.md): The font family name from the font descriptor.
- [kCTFontStyleNameAttribute](kctfontstylenameattribute.md): The style name of the font.
- [kCTFontTraitsAttribute](kctfonttraitsattribute.md): The dictionary of font traits for stylistic information.
- [kCTFontVariationAttribute](kctfontvariationattribute.md): The dictionary of font variation.
- [kCTFontSizeAttribute](kctfontsizeattribute.md): The font point size.
- [kCTFontMatrixAttribute](kctfontmatrixattribute.md): The font transformation matrix when creating a font.
- [kCTFontCascadeListAttribute](kctfontcascadelistattribute.md): The cascade list used for a font reference.
- [kCTFontCharacterSetAttribute](kctfontcharactersetattribute.md): The Unicode character coverage set for a font reference.
- [kCTFontLanguagesAttribute](kctfontlanguagesattribute.md): A list of covered languages for a font reference.
- [kCTFontBaselineAdjustAttribute](kctfontbaselineadjustattribute.md): The baseline adjustment for a font reference.
- [kCTFontMacintoshEncodingsAttribute](kctfontmacintoshencodingsattribute.md): The Macintosh encodings for a font reference.
- [kCTFontFeaturesAttribute](kctfontfeaturesattribute.md): The font features for a font reference.
