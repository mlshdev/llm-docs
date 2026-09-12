> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/traitkey](https://developer.apple.com/documentation/appkit/nsfontdescriptor/traitkey)

# NSFontDescriptor.TraitKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that can be used as keys to retrieve information about a font descriptor from its trait dictionary.

## Declaration

```swift
struct TraitKey
```

<a id="Discussion"></a>

## Discussion

These keys are used with [traits](attributename/traits.md).

## Topics

### Trait Keys

- [symbolic](traitkey/symbolic.md): The symbolic traits value as a number object.
- [weight](traitkey/weight.md): The normalized weight value as a number object.
- [width](traitkey/width.md): The relative inter-glyph spacing value as a number object.
- [slant](traitkey/slant.md): The relative slant angle value as a number object.

### Initializers

- [init(rawValue:)](traitkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Font Traits

- [symbolicTraits](symbolictraits-swift.property.md): A bit mask that describes the traits of the receiver.
- [NSFontSymbolicTraits](../nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.

# NSFontDescriptorTraitKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that can be used as keys to retrieve information about a font descriptor from its trait dictionary.

## Declaration

```objectivec
typedef NSString * NSFontDescriptorTraitKey;
```

<a id="Discussion"></a>

## Discussion

These keys are used with [NSFontTraitsAttribute](attributename/traits.md).

## Topics

### Trait Keys

- [NSFontSymbolicTrait](traitkey/symbolic.md): The symbolic traits value as a number object.
- [NSFontWeightTrait](traitkey/weight.md): The normalized weight value as a number object.
- [NSFontWidthTrait](traitkey/width.md): The relative inter-glyph spacing value as a number object.
- [NSFontSlantTrait](traitkey/slant.md): The relative slant angle value as a number object.

## See Also

### Getting the Font Traits

- [symbolicTraits](symbolictraits-swift.property.md): A bit mask that describes the traits of the receiver.
- [NSFontSymbolicTraits](../nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.
