> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctfontweighttrait](https://developer.apple.com/documentation/coretext/kctfontweighttrait)

# kCTFontWeightTrait (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The normalized weight trait from the font traits dictionary.

## Declaration

```swift
let kCTFontWeightTrait: CFString
```

<a id="Discussion"></a>

## Discussion

The value returned is a [CFNumber](../corefoundation/cfnumber.md) representing a float value between `-1.0` and `1.0` for normalized weight. The value of `0.0` corresponds to the regular or medium font weight.

## See Also

### Font Trait Keys

- [kCTFontSymbolicTrait](kctfontsymbolictrait.md): The symbolic traits value from the font traits dictionary.
- [kCTFontWidthTrait](kctfontwidthtrait.md): The normalized proportion (width condense or expand) trait from the font traits dictionary.
- [kCTFontSlantTrait](kctfontslanttrait.md): The normalized slant angle from the font traits dictionary.

# kCTFontWeightTrait (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The normalized weight trait from the font traits dictionary.

## Declaration

```objectivec
extern CFStringRef const kCTFontWeightTrait;
```

<a id="Discussion"></a>

## Discussion

The value returned is a [CFNumberRef](../corefoundation/cfnumber.md) representing a float value between `-1.0` and `1.0` for normalized weight. The value of `0.0` corresponds to the regular or medium font weight.

## See Also

### Font Trait Keys

- [kCTFontSymbolicTrait](kctfontsymbolictrait.md): The symbolic traits value from the font traits dictionary.
- [kCTFontWidthTrait](kctfontwidthtrait.md): The normalized proportion (width condense or expand) trait from the font traits dictionary.
- [kCTFontSlantTrait](kctfontslanttrait.md): The normalized slant angle from the font traits dictionary.
