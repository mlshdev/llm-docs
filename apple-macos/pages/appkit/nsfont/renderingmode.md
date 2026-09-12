> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/renderingmode](https://developer.apple.com/documentation/appkit/nsfont/renderingmode)

# renderingMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rendering mode of the font.

## Declaration

```swift
var renderingMode: NSFontRenderingMode { get }
```

<a id="Discussion"></a>

## Discussion

For a list of valid rendering modes, see [NSFontRenderingMode](../nsfontrenderingmode.md).

## See Also

### Related Documentation

- [screenFont(with:)](screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.

### Instance Properties

- [printer](printer.md): The scalable PostScript font corresponding to current font.
- [screen](screen.md): The bitmapped screen font for the current font.

# renderingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rendering mode of the font.

## Declaration

```objectivec
@property (readonly) NSFontRenderingMode renderingMode;
```

<a id="Discussion"></a>

## Discussion

For a list of valid rendering modes, see [NSFontRenderingMode](../nsfontrenderingmode.md).

## See Also

### Related Documentation

- [screenFontWithRenderingMode:](screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.

### Instance Properties

- [printerFont](printer.md): The scalable PostScript font corresponding to current font.
- [screenFont](screen.md): The bitmapped screen font for the current font.
