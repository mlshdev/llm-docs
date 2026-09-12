> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctfontwidthtrait](https://developer.apple.com/documentation/coretext/kctfontwidthtrait)

# kCTFontWidthTrait (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The normalized proportion (width condense or expand) trait from the font traits dictionary.

## Declaration

```swift
let kCTFontWidthTrait: CFString
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the relative interglyph spacing for a given font. The value returned is a [CFNumber](../corefoundation/cfnumber.md) object representing a float between `-1.0` and `1.0`. The value of `0.0` corresponds to regular glyph spacing, and negative values represent condensed glyph spacing.

## See Also

### Font Trait Keys

- [kCTFontSymbolicTrait](kctfontsymbolictrait.md): The symbolic traits value from the font traits dictionary.
- [kCTFontWeightTrait](kctfontweighttrait.md): The normalized weight trait from the font traits dictionary.
- [kCTFontSlantTrait](kctfontslanttrait.md): The normalized slant angle from the font traits dictionary.

# kCTFontWidthTrait (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The normalized proportion (width condense or expand) trait from the font traits dictionary.

## Declaration

```objectivec
extern CFStringRef const kCTFontWidthTrait;
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the relative interglyph spacing for a given font. The value returned is a [CFNumberRef](../corefoundation/cfnumber.md) object representing a float between `-1.0` and `1.0`. The value of `0.0` corresponds to regular glyph spacing, and negative values represent condensed glyph spacing.

## See Also

### Font Trait Keys

- [kCTFontSymbolicTrait](kctfontsymbolictrait.md): The symbolic traits value from the font traits dictionary.
- [kCTFontWeightTrait](kctfontweighttrait.md): The normalized weight trait from the font traits dictionary.
- [kCTFontSlantTrait](kctfontslanttrait.md): The normalized slant angle from the font traits dictionary.
