> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/addingattributes(_:)](https://developer.apple.com/documentation/appkit/nsfontdescriptor/addingattributes(_:))

# addingAttributes(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a new font descriptor based on the current object, but with the specified attributes taking precedence over the existing ones.

## Declaration

```swift
func addingAttributes(_ attributes: [NSFontDescriptor.AttributeName : Any] = [:]) -> NSFontDescriptor
```

## Parameters

- `attributes`: The replacement attributes for the new font descriptor.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Modifying an Existing Font Descriptor

- [withFace(\_:)](withface%28__%29.md): Returns a new font descriptor based on the current object, but with the specified face.
- [withFamily(\_:)](withfamily%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font family.
- [withMatrix(\_:)](withmatrix%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font matrix.
- [withSize(\_:)](withsize%28__%29.md): Returns a new font descriptor based on the current object, but with the specified point size.
- [withSymbolicTraits(\_:)](withsymbolictraits%28__%29.md): Returns a new font descriptor based on the current object, but with the specified symbolic traits taking precedence over the existing ones.
- [withDesign(\_:)](withdesign%28__%29.md): Returns a new font descriptor based on the current object, but with the specified design style.
- [NSFontDescriptor.SystemDesign](systemdesign.md): Constants for font designs, such as monospace, rounded, and serif.

# fontDescriptorByAddingAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a new font descriptor based on the current object, but with the specified attributes taking precedence over the existing ones.

## Declaration

```objectivec
- (NSFontDescriptor *) fontDescriptorByAddingAttributes:(NSDictionary<NSString *,id> *) attributes;
```

## Parameters

- `attributes`: The replacement attributes for the new font descriptor.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Related Documentation

- [fontDescriptorWithFontAttributes:](fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.

### Modifying an Existing Font Descriptor

- [fontDescriptorWithFace:](withface%28__%29.md): Returns a new font descriptor based on the current object, but with the specified face.
- [fontDescriptorWithFamily:](withfamily%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font family.
- [fontDescriptorWithMatrix:](withmatrix%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font matrix.
- [fontDescriptorWithSize:](withsize%28__%29.md): Returns a new font descriptor based on the current object, but with the specified point size.
- [fontDescriptorWithSymbolicTraits:](withsymbolictraits%28__%29.md): Returns a new font descriptor based on the current object, but with the specified symbolic traits taking precedence over the existing ones.
- [fontDescriptorWithDesign:](withdesign%28__%29.md): Returns a new font descriptor based on the current object, but with the specified design style.
- [NSFontDescriptorSystemDesign](systemdesign.md): Constants for font designs, such as monospace, rounded, and serif.
