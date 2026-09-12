> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/matrix](https://developer.apple.com/documentation/appkit/nsfont/matrix)

# matrix (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The transformation matrix associated with the font.

## Declaration

```swift
var matrix: UnsafePointer<CGFloat> { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a standard six-element transformation matrix as used in the PostScript language, specifically with the `makefont` operator. In most cases, with a font of `fontSize`, this matrix is \[`fontSize` 0 0 `fontSize` 0 0\].

## See Also

### Related Documentation

- [init(descriptor:size:)](init%28descriptor_size_%29.md): Returns a font object for the specified font descriptor and font size.

### Getting the Font Matrices

- [textTransform](texttransform.md): The current transformation matrix of the font.
- [identityMatrix](identitymatrix.md): The identify matrix for the font.

# matrix (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The transformation matrix associated with the font.

## Declaration

```objectivec
@property (readonly) const CGFloat * matrix;
```

<a id="Discussion"></a>

## Discussion

This property contains a standard six-element transformation matrix as used in the PostScript language, specifically with the `makefont` operator. In most cases, with a font of `fontSize`, this matrix is \[`fontSize` 0 0 `fontSize` 0 0\].

## See Also

### Related Documentation

- [fontWithDescriptor:size:](init%28descriptor_size_%29.md): Returns a font object for the specified font descriptor and font size.

### Getting the Font Matrices

- [textTransform](texttransform.md): The current transformation matrix of the font.
- [NSFontIdentityMatrix](identitymatrix.md): The identify matrix for the font.
