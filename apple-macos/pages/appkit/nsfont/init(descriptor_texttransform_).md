> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/init(descriptor:texttransform:)](https://developer.apple.com/documentation/appkit/nsfont/init(descriptor:texttransform:))

# init(descriptor:textTransform:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a font object for the specified font descriptor and text transform.

## Declaration

```swift
init?(descriptor fontDescriptor: NSFontDescriptor, textTransform: AffineTransform?)
```

## Parameters

- `fontDescriptor`: The font descriptor object describing the font to return.
- `textTransform`: An affine transformation applied to the font.

<a id="return-value"></a>

## Return Value

A font object for the specified name and transform.

<a id="Discussion"></a>

## Discussion

In most cases, you can simply use [init(name:size:)](init%28name_size_%29.md) to create standard scaled fonts. If `textTransform` is non-nil, it has precedence over `NSFontMatrixAttribute` in `fontDescriptor`.

## See Also

### Creating Arbitrary Fonts

- [init(name:size:)](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [init(descriptor:size:)](init%28descriptor_size_%29.md): Returns a font object for the specified font descriptor and font size.
- [init(name:matrix:)](init%28name_matrix_%29.md): Returns a font object for the specified font name and matrix.

# fontWithDescriptor:textTransform: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a font object for the specified font descriptor and text transform.

## Declaration

```objectivec
+ (NSFont *) fontWithDescriptor:(NSFontDescriptor *) fontDescriptor textTransform:(NSAffineTransform *) textTransform;
```

## Parameters

- `fontDescriptor`: The font descriptor object describing the font to return.
- `textTransform`: An affine transformation applied to the font.

<a id="return-value"></a>

## Return Value

A font object for the specified name and transform.

<a id="Discussion"></a>

## Discussion

In most cases, you can simply use [fontWithName:size:](init%28name_size_%29.md) to create standard scaled fonts. If `textTransform` is non-nil, it has precedence over `NSFontMatrixAttribute` in `fontDescriptor`.

## See Also

### Creating Arbitrary Fonts

- [fontWithName:size:](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [fontWithDescriptor:size:](init%28descriptor_size_%29.md): Returns a font object for the specified font descriptor and font size.
- [fontWithName:matrix:](init%28name_matrix_%29.md): Returns a font object for the specified font name and matrix.
