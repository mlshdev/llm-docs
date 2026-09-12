> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/init(name:matrix:)](https://developer.apple.com/documentation/appkit/nsfontdescriptor/init(name:matrix:))

# init(name:matrix:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a font descriptor with the name and matrix attributes set to the given values.

## Declaration

```swift
init(name fontName: String, matrix: AffineTransform)
```

## Parameters

- `fontName`: The value for `NSFontNameAttribute`.
- `matrix`: The value for `NSFontMatrixAttribute`.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Creating a Font Descriptor

- [preferredFontDescriptor(forTextStyle:options:)](preferredfontdescriptor%28fortextstyle_options_%29.md): Returns a font descriptor that contains the text style.
- [init(name:size:)](init%28name_size_%29.md): Returns a font descriptor with the name and size attributes set to the given values.
- [init(fontAttributes:)](init%28fontattributes_%29.md): Initializes and returns a new font descriptor with the specified attributes.

# fontDescriptorWithName:matrix: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a font descriptor with the name and matrix attributes set to the given values.

## Declaration

```objectivec
+ (NSFontDescriptor *) fontDescriptorWithName:(NSString *) fontName matrix:(NSAffineTransform *) matrix;
```

## Parameters

- `fontName`: The value for `NSFontNameAttribute`.
- `matrix`: The value for `NSFontMatrixAttribute`.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Related Documentation

- [fontDescriptorWithFontAttributes:](fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.

### Creating a Font Descriptor

- [preferredFontDescriptorForTextStyle:options:](preferredfontdescriptor%28fortextstyle_options_%29.md): Returns a font descriptor that contains the text style.
- [fontDescriptorWithFontAttributes:](fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.
- [fontDescriptorWithName:size:](init%28name_size_%29.md): Returns a font descriptor with the name and size attributes set to the given values.
- [initWithFontAttributes:](init%28fontattributes_%29.md): Initializes and returns a new font descriptor with the specified attributes.
