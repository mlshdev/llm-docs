> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctfontslanttrait](https://developer.apple.com/documentation/coretext/kctfontslanttrait)

# kCTFontSlantTrait (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The normalized slant angle from the font traits dictionary.

## Declaration

```swift
let kCTFontSlantTrait: CFString
```

<a id="Discussion"></a>

## Discussion

The value returned is a [CFNumber](../corefoundation/cfnumber.md) object representing a float value between `-1.0` and `1.0` for normalized slant angle. The value of `0.0` corresponds to 0 degrees clockwise rotation from the vertical and `1.0` corresponds to 30 degrees clockwise rotation.

## See Also

### Font Trait Keys

- [kCTFontSymbolicTrait](kctfontsymbolictrait.md): The symbolic traits value from the font traits dictionary.
- [kCTFontWeightTrait](kctfontweighttrait.md): The normalized weight trait from the font traits dictionary.
- [kCTFontWidthTrait](kctfontwidthtrait.md): The normalized proportion (width condense or expand) trait from the font traits dictionary.

# kCTFontSlantTrait (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The normalized slant angle from the font traits dictionary.

## Declaration

```objectivec
extern CFStringRef const kCTFontSlantTrait;
```

<a id="Discussion"></a>

## Discussion

The value returned is a [CFNumberRef](../corefoundation/cfnumber.md) object representing a float value between `-1.0` and `1.0` for normalized slant angle. The value of `0.0` corresponds to 0 degrees clockwise rotation from the vertical and `1.0` corresponds to 30 degrees clockwise rotation.

## See Also

### Font Trait Keys

- [kCTFontSymbolicTrait](kctfontsymbolictrait.md): The symbolic traits value from the font traits dictionary.
- [kCTFontWeightTrait](kctfontweighttrait.md): The normalized weight trait from the font traits dictionary.
- [kCTFontWidthTrait](kctfontwidthtrait.md): The normalized proportion (width condense or expand) trait from the font traits dictionary.
