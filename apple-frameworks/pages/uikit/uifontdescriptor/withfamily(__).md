> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/withfamily(_:)](https://developer.apple.com/documentation/uikit/uifontdescriptor/withfamily(_:))

# withFamily(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new font descriptor whose attributes are the same as the existing font descriptor, but from the specified family.

## Declaration

```swift
func withFamily(_ newFamily: String) -> UIFontDescriptor
```

## Parameters

- `newFamily`: The new font family.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Creating a font descriptor

- [preferredFontDescriptor(withTextStyle:)](preferredfontdescriptor%28withtextstyle_%29.md): Returns a font descriptor that contains the specified text style and the user’s selected content size category.
- [preferredFontDescriptor(withTextStyle:compatibleWith:)](preferredfontdescriptor%28withtextstyle_compatiblewith_%29.md): Returns a font descriptor that contains the text style and the content size category that the provided trait collection specifies.
- [init(name:matrix:)](init%28name_matrix_%29.md): Returns a font descriptor with the specified values for the name and matrix dictionary attributes.
- [init(name:size:)](init%28name_size_%29.md): Returns a font descriptor with the specified values for the name and size dictionary attributes.
- [addingAttributes(\_:)](addingattributes%28__%29.md): Returns a new font descriptor that’s the same as the existing descriptor, but with the specified attributes taking precedence over the existing ones.
- [withDesign(\_:)](withdesign%28__%29.md): Returns a new font descriptor that’s the same as the existing descriptor, but with the specified design.
- [withFace(\_:)](withface%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified face.
- [withMatrix(\_:)](withmatrix%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified matrix.
- [withSize(\_:)](withsize%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified point size.
- [withSymbolicTraits(\_:)](withsymbolictraits%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified symbolic traits.

# fontDescriptorWithFamily: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new font descriptor whose attributes are the same as the existing font descriptor, but from the specified family.

## Declaration

```objectivec
- (UIFontDescriptor *) fontDescriptorWithFamily:(NSString *) newFamily;
```

## Parameters

- `newFamily`: The new font family.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Related Documentation

- [fontDescriptorWithFontAttributes:](fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.

### Creating a font descriptor

- [preferredFontDescriptorWithTextStyle:](preferredfontdescriptor%28withtextstyle_%29.md): Returns a font descriptor that contains the specified text style and the user’s selected content size category.
- [preferredFontDescriptorWithTextStyle:compatibleWithTraitCollection:](preferredfontdescriptor%28withtextstyle_compatiblewith_%29.md): Returns a font descriptor that contains the text style and the content size category that the provided trait collection specifies.
- [fontDescriptorWithFontAttributes:](fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.
- [fontDescriptorWithName:matrix:](init%28name_matrix_%29.md): Returns a font descriptor with the specified values for the name and matrix dictionary attributes.
- [fontDescriptorWithName:size:](init%28name_size_%29.md): Returns a font descriptor with the specified values for the name and size dictionary attributes.
- [fontDescriptorByAddingAttributes:](addingattributes%28__%29.md): Returns a new font descriptor that’s the same as the existing descriptor, but with the specified attributes taking precedence over the existing ones.
- [fontDescriptorWithDesign:](withdesign%28__%29.md): Returns a new font descriptor that’s the same as the existing descriptor, but with the specified design.
- [fontDescriptorWithFace:](withface%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified face.
- [fontDescriptorWithMatrix:](withmatrix%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified matrix.
- [fontDescriptorWithSize:](withsize%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified point size.
- [fontDescriptorWithSymbolicTraits:](withsymbolictraits%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified symbolic traits.
