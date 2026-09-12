> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/withdesign(_:)](https://developer.apple.com/documentation/appkit/nsfontdescriptor/withdesign(_:))

# withDesign(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns a new font descriptor based on the current object, but with the specified design style.

## Declaration

```swift
func withDesign(_ design: NSFontDescriptor.SystemDesign) -> Self?
```

## Parameters

- `design`: The replacement design style for the font. For a list of possible values, see `UIFontDescriptor.SystemDesign`.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Modifying an Existing Font Descriptor

- [addingAttributes(\_:)](addingattributes%28__%29.md): Returns a new font descriptor based on the current object, but with the specified attributes taking precedence over the existing ones.
- [withFace(\_:)](withface%28__%29.md): Returns a new font descriptor based on the current object, but with the specified face.
- [withFamily(\_:)](withfamily%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font family.
- [withMatrix(\_:)](withmatrix%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font matrix.
- [withSize(\_:)](withsize%28__%29.md): Returns a new font descriptor based on the current object, but with the specified point size.
- [withSymbolicTraits(\_:)](withsymbolictraits%28__%29.md): Returns a new font descriptor based on the current object, but with the specified symbolic traits taking precedence over the existing ones.
- [NSFontDescriptor.SystemDesign](systemdesign.md): Constants for font designs, such as monospace, rounded, and serif.

# fontDescriptorWithDesign: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns a new font descriptor based on the current object, but with the specified design style.

## Declaration

```objectivec
- (instancetype) fontDescriptorWithDesign:(NSFontDescriptorSystemDesign) design;
```

## Parameters

- `design`: The replacement design style for the font. For a list of possible values, see `UIFontDescriptor.SystemDesign`.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Modifying an Existing Font Descriptor

- [fontDescriptorByAddingAttributes:](addingattributes%28__%29.md): Returns a new font descriptor based on the current object, but with the specified attributes taking precedence over the existing ones.
- [fontDescriptorWithFace:](withface%28__%29.md): Returns a new font descriptor based on the current object, but with the specified face.
- [fontDescriptorWithFamily:](withfamily%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font family.
- [fontDescriptorWithMatrix:](withmatrix%28__%29.md): Returns a new font descriptor based on the current object, but with the specified font matrix.
- [fontDescriptorWithSize:](withsize%28__%29.md): Returns a new font descriptor based on the current object, but with the specified point size.
- [fontDescriptorWithSymbolicTraits:](withsymbolictraits%28__%29.md): Returns a new font descriptor based on the current object, but with the specified symbolic traits taking precedence over the existing ones.
- [NSFontDescriptorSystemDesign](systemdesign.md): Constants for font designs, such as monospace, rounded, and serif.
