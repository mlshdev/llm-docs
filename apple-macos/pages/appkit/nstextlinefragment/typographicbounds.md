> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlinefragment/typographicbounds](https://developer.apple.com/documentation/appkit/nstextlinefragment/typographicbounds)

# typographicBounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The typographic bounds that specifies the dimensions of the line fragment for laying out line fragments to each other.

## Declaration

```swift
var typographicBounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The origin value is offset from the beginning of the line fragment group belonging to the parent layout fragment.

## See Also

### Line fragment characteristics

- [attributedString](attributedstring.md): The source attributed string.
- [characterRange](characterrange.md): The string range for the source attributed string that corresponds to this line fragment.
- [glyphOrigin](glyphorigin.md): Rendering origin for the left-most glyph in the line fragment coordinate system.

# typographicBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The typographic bounds that specifies the dimensions of the line fragment for laying out line fragments to each other.

## Declaration

```objectivec
@property (readonly) CGRect typographicBounds;
```

<a id="Discussion"></a>

## Discussion

The origin value is offset from the beginning of the line fragment group belonging to the parent layout fragment.

## See Also

### Line fragment characteristics

- [attributedString](attributedstring.md): The source attributed string.
- [characterRange](characterrange.md): The string range for the source attributed string that corresponds to this line fragment.
- [glyphOrigin](glyphorigin.md): Rendering origin for the left-most glyph in the line fragment coordinate system.
