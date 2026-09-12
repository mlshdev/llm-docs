> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/attributename](https://developer.apple.com/documentation/uikit/uifontdescriptor/attributename)

# UIFontDescriptor.AttributeName (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 4.0+

Constants that describe font attributes.

## Declaration

```swift
struct AttributeName
```

## Topics

### Constants

- [cascadeList](attributename/cascadelist.md): The cascading list attribute.
- [characterSet](attributename/characterset.md): The character set attribute.
- [face](attributename/face.md): The font face attribute.
- [family](attributename/family.md): The font family attribute.
- [featureSettings](attributename/featuresettings.md): The font feature settings attribute.
- [fixedAdvance](attributename/fixedadvance.md): The glyph advancement attribute.
- [matrix](attributename/matrix.md): The font’s transformation matrix attribute.
- [name](attributename/name.md): The font name attribute.
- [size](attributename/size.md): The font size attribute.
- [textStyle](attributename/textstyle.md): The text style attribute.
- [traits](attributename/traits.md): The font traits dictionary attribute.
- [visibleName](attributename/visiblename.md): The font’s visible name attribute.

### Initializers

- [init(rawValue:)](attributename/init%28rawvalue_%29.md): Creates an attribute name with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIFont.TextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.
- [UIFontDescriptor.SystemDesign](systemdesign.md): Constants that describe the system-defined typeface designs.
- [UIFontDescriptor.SymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontDescriptor.Class](class.md): Constants that classify certain stylistic qualities of the font.
- [UIFontDescriptor.FeatureKey](featurekey.md): Keys for retrieving feature settings.
- [UIFontDescriptor.TraitKey](traitkey.md): Keys for retrieving the font descriptor’s trait information.
- [UIFont.Weight](../uifont/weight.md): Constants that represent standard typeface styles.
- [UIFont.Width](../uifont/width.md)

# UIFontDescriptorAttributeName (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 4.0+

Constants that describe font attributes.

## Declaration

```objectivec
typedef NSString * UIFontDescriptorAttributeName;
```

## Topics

### Constants

- [UIFontDescriptorCascadeListAttribute](attributename/cascadelist.md): The cascading list attribute.
- [UIFontDescriptorCharacterSetAttribute](attributename/characterset.md): The character set attribute.
- [UIFontDescriptorFaceAttribute](attributename/face.md): The font face attribute.
- [UIFontDescriptorFamilyAttribute](attributename/family.md): The font family attribute.
- [UIFontDescriptorFeatureSettingsAttribute](attributename/featuresettings.md): The font feature settings attribute.
- [UIFontDescriptorFixedAdvanceAttribute](attributename/fixedadvance.md): The glyph advancement attribute.
- [UIFontDescriptorMatrixAttribute](attributename/matrix.md): The font’s transformation matrix attribute.
- [UIFontDescriptorNameAttribute](attributename/name.md): The font name attribute.
- [UIFontDescriptorSizeAttribute](attributename/size.md): The font size attribute.
- [UIFontDescriptorTextStyleAttribute](attributename/textstyle.md): The text style attribute.
- [UIFontDescriptorTraitsAttribute](attributename/traits.md): The font traits dictionary attribute.
- [UIFontDescriptorVisibleNameAttribute](attributename/visiblename.md): The font’s visible name attribute.

## See Also

### Constants

- [UIFontTextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.
- [UIFontDescriptorSystemDesign](systemdesign.md): Constants that describe the system-defined typeface designs.
- [UIFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontDescriptorClass](class.md): Constants that classify certain stylistic qualities of the font.
- [UIFontDescriptorFeatureKey](featurekey.md): Keys for retrieving feature settings.
- [UIFontDescriptorTraitKey](traitkey.md): Keys for retrieving the font descriptor’s trait information.
- [UIFontWeight](../uifont/weight.md): Constants that represent standard typeface styles.
- [UIFontWidth](../uifont/width.md)
