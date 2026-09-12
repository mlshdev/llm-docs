> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/traitkey/width](https://developer.apple.com/documentation/appkit/nsfontdescriptor/traitkey/width)

# width (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The relative inter-glyph spacing value as a number object.

## Declaration

```swift
static let width: NSFontDescriptor.TraitKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object. The valid value range is from `-1.0` to `1.0`. The value of `0.0` corresponds to the regular glyph spacing.

## See Also

### Trait Keys

- [symbolic](symbolic.md): The symbolic traits value as a number object.
- [weight](weight.md): The normalized weight value as a number object.
- [slant](slant.md): The relative slant angle value as a number object.

# NSFontWidthTrait (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The relative inter-glyph spacing value as a number object.

## Declaration

```objectivec
extern NSFontDescriptorTraitKey NSFontWidthTrait;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object. The valid value range is from `-1.0` to `1.0`. The value of `0.0` corresponds to the regular glyph spacing.

## See Also

### Trait Keys

- [NSFontSymbolicTrait](symbolic.md): The symbolic traits value as a number object.
- [NSFontWeightTrait](weight.md): The normalized weight value as a number object.
- [NSFontSlantTrait](slant.md): The relative slant angle value as a number object.
