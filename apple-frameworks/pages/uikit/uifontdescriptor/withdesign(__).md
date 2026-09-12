> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/withdesign(_:)](https://developer.apple.com/documentation/uikit/uifontdescriptor/withdesign(_:))

# withDesign(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 5.2+

Returns a new font descriptor that’s the same as the existing descriptor, but with the specified design.

## Declaration

```swift
func withDesign(_ design: UIFontDescriptor.SystemDesign) -> UIFontDescriptor?
```

## Parameters

- `design`: The new system font design.

<a id="return-value"></a>

## Return Value

The new font descriptor, if the original font descriptor is from a system UI font; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

This method changes the design of an existing font descriptor that describes a system UI font — for example, a font descriptor created by methods such as [systemFont(ofSize:)](../uifont/systemfont%28ofsize_%29.md), [preferredFont(forTextStyle:)](../uifont/preferredfont%28fortextstyle_%29.md), or [preferredFontDescriptor(withTextStyle:)](preferredfontdescriptor%28withtextstyle_%29.md). If the original font descriptor doesn’t describe a system font, this method returns `nil`.

## See Also

### Creating a font descriptor

- [preferredFontDescriptor(withTextStyle:)](preferredfontdescriptor%28withtextstyle_%29.md): Returns a font descriptor that contains the specified text style and the user’s selected content size category.
- [preferredFontDescriptor(withTextStyle:compatibleWith:)](preferredfontdescriptor%28withtextstyle_compatiblewith_%29.md): Returns a font descriptor that contains the text style and the content size category that the provided trait collection specifies.
- [init(name:matrix:)](init%28name_matrix_%29.md): Returns a font descriptor with the specified values for the name and matrix dictionary attributes.
- [init(name:size:)](init%28name_size_%29.md): Returns a font descriptor with the specified values for the name and size dictionary attributes.
- [addingAttributes(\_:)](addingattributes%28__%29.md): Returns a new font descriptor that’s the same as the existing descriptor, but with the specified attributes taking precedence over the existing ones.
- [withFamily(\_:)](withfamily%28__%29.md): Returns a new font descriptor whose attributes are the same as the existing font descriptor, but from the specified family.
- [withFace(\_:)](withface%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified face.
- [withMatrix(\_:)](withmatrix%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified matrix.
- [withSize(\_:)](withsize%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified point size.
- [withSymbolicTraits(\_:)](withsymbolictraits%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified symbolic traits.

# fontDescriptorWithDesign: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 5.2+

Returns a new font descriptor that’s the same as the existing descriptor, but with the specified design.

## Declaration

```objectivec
- (UIFontDescriptor *) fontDescriptorWithDesign:(UIFontDescriptorSystemDesign) design;
```

## Parameters

- `design`: The new system font design.

<a id="return-value"></a>

## Return Value

The new font descriptor, if the original font descriptor is from a system UI font; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

This method changes the design of an existing font descriptor that describes a system UI font — for example, a font descriptor created by methods such as [systemFontOfSize:](../uifont/systemfont%28ofsize_%29.md), [preferredFontForTextStyle:](../uifont/preferredfont%28fortextstyle_%29.md), or [preferredFontDescriptorWithTextStyle:](preferredfontdescriptor%28withtextstyle_%29.md). If the original font descriptor doesn’t describe a system font, this method returns `nil`.

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
- [fontDescriptorWithFamily:](withfamily%28__%29.md): Returns a new font descriptor whose attributes are the same as the existing font descriptor, but from the specified family.
- [fontDescriptorWithFace:](withface%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified face.
- [fontDescriptorWithMatrix:](withmatrix%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified matrix.
- [fontDescriptorWithSize:](withsize%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified point size.
- [fontDescriptorWithSymbolicTraits:](withsymbolictraits%28__%29.md): Returns a new font descriptor that’s the same as the existing font descriptor, but with the specified symbolic traits.
