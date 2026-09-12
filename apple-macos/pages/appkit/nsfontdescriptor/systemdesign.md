> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/systemdesign](https://developer.apple.com/documentation/appkit/nsfontdescriptor/systemdesign)

# NSFontDescriptor.SystemDesign (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants for font designs, such as monospace, rounded, and serif.

## Declaration

```swift
struct SystemDesign
```

## Topics

### Designs

- [default](systemdesign/default.md): The default font design.
- [monospaced](systemdesign/monospaced.md): A font with a monospace appearance.
- [rounded](systemdesign/rounded.md): A font with a rounded appearance.
- [serif](systemdesign/serif.md): A font with a serif design.

### Initializers

- [init(rawValue:)](systemdesign/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying an Existing Font Descriptor

- [addingAttributes(\_:)](addingattributes%28__%29.md): Returns a new font descriptor based on the current object, but with the specified attributes taking precedence over the existing ones.
- [withFace(\_:)](withface%28__%29.md): Returns a new font descriptor based on the current object, but with the specified face.
- [withFamily(\_:)](withfamily%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font family.
- [withMatrix(\_:)](withmatrix%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font matrix.
- [withSize(\_:)](withsize%28__%29.md): Returns a new font descriptor based on the current object, but with the specified point size.
- [withSymbolicTraits(\_:)](withsymbolictraits%28__%29.md): Returns a new font descriptor based on the current object, but with the specified symbolic traits taking precedence over the existing ones.
- [withDesign(\_:)](withdesign%28__%29.md): Returns a new font descriptor based on the current object, but with the specified design style.

# NSFontDescriptorSystemDesign (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants for font designs, such as monospace, rounded, and serif.

## Declaration

```objectivec
typedef NSString * NSFontDescriptorSystemDesign;
```

## Topics

### Designs

- [NSFontDescriptorSystemDesignDefault](systemdesign/default.md): The default font design.
- [NSFontDescriptorSystemDesignMonospaced](systemdesign/monospaced.md): A font with a monospace appearance.
- [NSFontDescriptorSystemDesignRounded](systemdesign/rounded.md): A font with a rounded appearance.
- [NSFontDescriptorSystemDesignSerif](systemdesign/serif.md): A font with a serif design.

## See Also

### Modifying an Existing Font Descriptor

- [fontDescriptorByAddingAttributes:](addingattributes%28__%29.md): Returns a new font descriptor based on the current object, but with the specified attributes taking precedence over the existing ones.
- [fontDescriptorWithFace:](withface%28__%29.md): Returns a new font descriptor based on the current object, but with the specified face.
- [fontDescriptorWithFamily:](withfamily%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font family.
- [fontDescriptorWithMatrix:](withmatrix%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font matrix.
- [fontDescriptorWithSize:](withsize%28__%29.md): Returns a new font descriptor based on the current object, but with the specified point size.
- [fontDescriptorWithSymbolicTraits:](withsymbolictraits%28__%29.md): Returns a new font descriptor based on the current object, but with the specified symbolic traits taking precedence over the existing ones.
- [fontDescriptorWithDesign:](withdesign%28__%29.md): Returns a new font descriptor based on the current object, but with the specified design style.
