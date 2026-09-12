> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/traitkey/width](https://developer.apple.com/documentation/uikit/uifontdescriptor/traitkey/width)

# width (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The inter-glyph spacing of the font.

## Declaration

```swift
static let width: UIFontDescriptor.TraitKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../../foundation/nsnumber.md) object. The valid value range is from `-1.0` to `1.0`. The value of `0.0` corresponds to the regular glyph spacing.

## See Also

### Font traits

- [slant](slant.md): The relative slant angle of the font.
- [symbolic](symbolic.md): The symbolic font traits.
- [weight](weight.md): The numerical value that corresponds to a font face.

# UIFontWidthTrait (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The inter-glyph spacing of the font.

## Declaration

```objectivec
extern UIFontDescriptorTraitKey const UIFontWidthTrait;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../../foundation/nsnumber.md) object. The valid value range is from `-1.0` to `1.0`. The value of `0.0` corresponds to the regular glyph spacing.

## See Also

### Font traits

- [UIFontSlantTrait](slant.md): The relative slant angle of the font.
- [UIFontSymbolicTrait](symbolic.md): The symbolic font traits.
- [UIFontWeightTrait](weight.md): The numerical value that corresponds to a font face.
