> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/init(name:size:)](https://developer.apple.com/documentation/appkit/nsfont/init(name:size:))

# init(name:size:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a font object for the specified font name and font size.

## Declaration

```swift
init?(name fontName: String, size fontSize: CGFloat)
```

## Parameters

- `fontName`: The fully specified family-face name of the font.
- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object for the specified name and size.

<a id="Discussion"></a>

## Discussion

The value of the `fontName` parameter is a fully specified family-face name, preferably the PostScript name, such as Helvetica-BoldOblique or Times-Roman. (The Font Book app displays PostScript names of fonts in the Font Info panel.)

Specifying `fontSize` is equivalent to using a font matrix of \[`fontSize` 0 0 `fontSize` 0 0\] with [init(descriptor:size:)](init%28descriptor_size_%29.md). If you use a `fontSize` of 0.0, this method uses the default User Font size.

Fonts created with this method automatically flip themselves in flipped views. This method is the preferred means for creating fonts.

## See Also

### Creating Arbitrary Fonts

- [init(descriptor:size:)](init%28descriptor_size_%29.md): Returns a font object for the specified font descriptor and font size.
- [init(descriptor:textTransform:)](init%28descriptor_texttransform_%29.md): Returns a font object for the specified font descriptor and text transform.
- [init(name:matrix:)](init%28name_matrix_%29.md): Returns a font object for the specified font name and matrix.

# fontWithName:size: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a font object for the specified font name and font size.

## Declaration

```objectivec
+ (NSFont *) fontWithName:(NSString *) fontName size:(CGFloat) fontSize;
```

## Parameters

- `fontName`: The fully specified family-face name of the font.
- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object for the specified name and size.

<a id="Discussion"></a>

## Discussion

The value of the `fontName` parameter is a fully specified family-face name, preferably the PostScript name, such as Helvetica-BoldOblique or Times-Roman. (The Font Book app displays PostScript names of fonts in the Font Info panel.)

Specifying `fontSize` is equivalent to using a font matrix of \[`fontSize` 0 0 `fontSize` 0 0\] with [fontWithDescriptor:size:](init%28descriptor_size_%29.md). If you use a `fontSize` of 0.0, this method uses the default User Font size.

Fonts created with this method automatically flip themselves in flipped views. This method is the preferred means for creating fonts.

## See Also

### Creating Arbitrary Fonts

- [fontWithDescriptor:size:](init%28descriptor_size_%29.md): Returns a font object for the specified font descriptor and font size.
- [fontWithDescriptor:textTransform:](init%28descriptor_texttransform_%29.md): Returns a font object for the specified font descriptor and text transform.
- [fontWithName:matrix:](init%28name_matrix_%29.md): Returns a font object for the specified font name and matrix.
