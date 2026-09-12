> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/texttransform](https://developer.apple.com/documentation/appkit/nsfont/texttransform)

# textTransform (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current transformation matrix of the font.

## Declaration

```swift
var textTransform: AffineTransform { get }
```

## See Also

### Related Documentation

- [set()](set%28%29.md): Sets this font as the font for the current graphics context.

### Getting the Font Matrices

- [matrix](matrix.md): The transformation matrix associated with the font.
- [identityMatrix](identitymatrix.md): The identify matrix for the font.

# textTransform (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current transformation matrix of the font.

## Declaration

```objectivec
@property (copy, readonly) NSAffineTransform * textTransform;
```

## See Also

### Related Documentation

- [set](set%28%29.md): Sets this font as the font for the current graphics context.

### Getting the Font Matrices

- [matrix](matrix.md): The transformation matrix associated with the font.
- [NSFontIdentityMatrix](identitymatrix.md): The identify matrix for the font.
