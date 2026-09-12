> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/traitkey/slant](https://developer.apple.com/documentation/uikit/uifontdescriptor/traitkey/slant)

# slant (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The relative slant angle of the font.

## Declaration

```swift
static let slant: UIFontDescriptor.TraitKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../../foundation/nsnumber.md) object. The valid value range is from `-1.0` to `1.0`. The value of `0.0` corresponds to `0` degree clockwise rotation from the vertical and `1.0` corresponds to `30` degrees clockwise rotation.

## See Also

### Font traits

- [symbolic](symbolic.md): The symbolic font traits.
- [weight](weight.md): The numerical value that corresponds to a font face.
- [width](width.md): The inter-glyph spacing of the font.

# UIFontSlantTrait (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The relative slant angle of the font.

## Declaration

```objectivec
extern UIFontDescriptorTraitKey const UIFontSlantTrait;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../../foundation/nsnumber.md) object. The valid value range is from `-1.0` to `1.0`. The value of `0.0` corresponds to `0` degree clockwise rotation from the vertical and `1.0` corresponds to `30` degrees clockwise rotation.

## See Also

### Font traits

- [UIFontSymbolicTrait](symbolic.md): The symbolic font traits.
- [UIFontWeightTrait](weight.md): The numerical value that corresponds to a font face.
- [UIFontWidthTrait](width.md): The inter-glyph spacing of the font.
