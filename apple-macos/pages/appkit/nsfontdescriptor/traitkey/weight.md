> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/traitkey/weight](https://developer.apple.com/documentation/appkit/nsfontdescriptor/traitkey/weight)

# weight (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The normalized weight value as a number object.

## Declaration

```swift
static let weight: NSFontDescriptor.TraitKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object. The valid value range is from `-1.0` to `1.0`. The value of `0.0` corresponds to the regular or medium font weight.

## See Also

### Trait Keys

- [symbolic](symbolic.md): The symbolic traits value as a number object.
- [width](width.md): The relative inter-glyph spacing value as a number object.
- [slant](slant.md): The relative slant angle value as a number object.

# NSFontWeightTrait (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The normalized weight value as a number object.

## Declaration

```objectivec
extern NSFontDescriptorTraitKey NSFontWeightTrait;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object. The valid value range is from `-1.0` to `1.0`. The value of `0.0` corresponds to the regular or medium font weight.

## See Also

### Trait Keys

- [NSFontSymbolicTrait](symbolic.md): The symbolic traits value as a number object.
- [NSFontWidthTrait](width.md): The relative inter-glyph spacing value as a number object.
- [NSFontSlantTrait](slant.md): The relative slant angle value as a number object.
