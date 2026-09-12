> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctfontsizeattribute](https://developer.apple.com/documentation/coretext/kctfontsizeattribute)

# kCTFontSizeAttribute (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The font point size.

## Declaration

```swift
let kCTFontSizeAttribute: CFString
```

<a id="Discussion"></a>

## Discussion

Creating a font with this unspecified will default to a point size of 12.0. The value for this key is represented as a [CFNumber](../corefoundation/cfnumber.md) object.

## See Also

### Font Attribute Keys

- [kCTFontURLAttribute](kctfonturlattribute.md): The font URL from the font descriptor.
- [kCTFontNameAttribute](kctfontnameattribute.md): The PostScript name from the font descriptor.
- [kCTFontDisplayNameAttribute](kctfontdisplaynameattribute.md): The name used to display the font.
- [kCTFontFamilyNameAttribute](kctfontfamilynameattribute.md): The font family name from the font descriptor.
- [kCTFontStyleNameAttribute](kctfontstylenameattribute.md): The style name of the font.
- [kCTFontTraitsAttribute](kctfonttraitsattribute.md): The dictionary of font traits for stylistic information.
- [kCTFontVariationAttribute](kctfontvariationattribute.md): The dictionary of font variation.
- [kCTFontMatrixAttribute](kctfontmatrixattribute.md): The font transformation matrix when creating a font.
- [kCTFontCascadeListAttribute](kctfontcascadelistattribute.md): The cascade list used for a font reference.
- [kCTFontCharacterSetAttribute](kctfontcharactersetattribute.md): The Unicode character coverage set for a font reference.
- [kCTFontLanguagesAttribute](kctfontlanguagesattribute.md): A list of covered languages for a font reference.
- [kCTFontBaselineAdjustAttribute](kctfontbaselineadjustattribute.md): The baseline adjustment for a font reference.
- [kCTFontMacintoshEncodingsAttribute](kctfontmacintoshencodingsattribute.md): The Macintosh encodings for a font reference.
- [kCTFontFeaturesAttribute](kctfontfeaturesattribute.md): The font features for a font reference.
- [kCTFontFeatureSettingsAttribute](kctfontfeaturesettingsattribute.md): The font features settings for a font reference.

# kCTFontSizeAttribute (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The font point size.

## Declaration

```objectivec
extern CFStringRef const kCTFontSizeAttribute;
```

<a id="Discussion"></a>

## Discussion

Creating a font with this unspecified will default to a point size of 12.0. The value for this key is represented as a [CFNumberRef](../corefoundation/cfnumber.md) object.

## See Also

### Font Attribute Keys

- [kCTFontURLAttribute](kctfonturlattribute.md): The font URL from the font descriptor.
- [kCTFontNameAttribute](kctfontnameattribute.md): The PostScript name from the font descriptor.
- [kCTFontDisplayNameAttribute](kctfontdisplaynameattribute.md): The name used to display the font.
- [kCTFontFamilyNameAttribute](kctfontfamilynameattribute.md): The font family name from the font descriptor.
- [kCTFontStyleNameAttribute](kctfontstylenameattribute.md): The style name of the font.
- [kCTFontTraitsAttribute](kctfonttraitsattribute.md): The dictionary of font traits for stylistic information.
- [kCTFontVariationAttribute](kctfontvariationattribute.md): The dictionary of font variation.
- [kCTFontMatrixAttribute](kctfontmatrixattribute.md): The font transformation matrix when creating a font.
- [kCTFontCascadeListAttribute](kctfontcascadelistattribute.md): The cascade list used for a font reference.
- [kCTFontCharacterSetAttribute](kctfontcharactersetattribute.md): The Unicode character coverage set for a font reference.
- [kCTFontLanguagesAttribute](kctfontlanguagesattribute.md): A list of covered languages for a font reference.
- [kCTFontBaselineAdjustAttribute](kctfontbaselineadjustattribute.md): The baseline adjustment for a font reference.
- [kCTFontMacintoshEncodingsAttribute](kctfontmacintoshencodingsattribute.md): The Macintosh encodings for a font reference.
- [kCTFontFeaturesAttribute](kctfontfeaturesattribute.md): The font features for a font reference.
- [kCTFontFeatureSettingsAttribute](kctfontfeaturesettingsattribute.md): The font features settings for a font reference.
