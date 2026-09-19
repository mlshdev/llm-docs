> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextlinefragment/typographicbounds

# typographicBounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
