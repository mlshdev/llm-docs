> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/init(descriptor:size:)](https://developer.apple.com/documentation/appkit/nsfont/init(descriptor:size:))

# init(descriptor:size:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a font object for the specified font descriptor and font size.

## Declaration

```swift
init?(descriptor fontDescriptor: NSFontDescriptor, size fontSize: CGFloat)
```

## Parameters

- `fontDescriptor`: A font descriptor object.
- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object for the specified descriptor and size.

<a id="Discussion"></a>

## Discussion

In most cases, you can simply use [init(name:size:)](init%28name_size_%29.md) to create standard scaled fonts.

## See Also

### Creating Arbitrary Fonts

- [init(name:size:)](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [init(descriptor:textTransform:)](init%28descriptor_texttransform_%29.md): Returns a font object for the specified font descriptor and text transform.
- [init(name:matrix:)](init%28name_matrix_%29.md): Returns a font object for the specified font name and matrix.

# fontWithDescriptor:size: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a font object for the specified font descriptor and font size.

## Declaration

```objectivec
+ (NSFont *) fontWithDescriptor:(NSFontDescriptor *) fontDescriptor size:(CGFloat) fontSize;
```

## Parameters

- `fontDescriptor`: A font descriptor object.
- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object for the specified descriptor and size.

<a id="Discussion"></a>

## Discussion

In most cases, you can simply use [fontWithName:size:](init%28name_size_%29.md) to create standard scaled fonts.

## See Also

### Creating Arbitrary Fonts

- [fontWithName:size:](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [fontWithDescriptor:textTransform:](init%28descriptor_texttransform_%29.md): Returns a font object for the specified font descriptor and text transform.
- [fontWithName:matrix:](init%28name_matrix_%29.md): Returns a font object for the specified font name and matrix.
