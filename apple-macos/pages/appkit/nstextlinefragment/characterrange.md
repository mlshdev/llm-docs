> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlinefragment/characterrange](https://developer.apple.com/documentation/appkit/nstextlinefragment/characterrange)

# characterRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The string range for the source attributed string that corresponds to this line fragment.

## Declaration

```swift
var characterRange: NSRange { get }
```

## See Also

### Line fragment characteristics

- [attributedString](attributedstring.md): The source attributed string.
- [glyphOrigin](glyphorigin.md): Rendering origin for the left-most glyph in the line fragment coordinate system.
- [typographicBounds](typographicbounds.md): The typographic bounds that specifies the dimensions of the line fragment for laying out line fragments to each other.

# characterRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The string range for the source attributed string that corresponds to this line fragment.

## Declaration

```objectivec
@property (readonly) NSRange characterRange;
```

## See Also

### Line fragment characteristics

- [attributedString](attributedstring.md): The source attributed string.
- [glyphOrigin](glyphorigin.md): Rendering origin for the left-most glyph in the line fragment coordinate system.
- [typographicBounds](typographicbounds.md): The typographic bounds that specifies the dimensions of the line fragment for laying out line fragments to each other.
