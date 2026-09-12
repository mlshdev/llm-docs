> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/printer](https://developer.apple.com/documentation/appkit/nsfont/printer)

# printer (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scalable PostScript font corresponding to current font.

## Declaration

```swift
@NSCopying var printer: NSFont { get }
```

<a id="Discussion"></a>

## Discussion

For a font that already represents a scalable PostScript font, the value in this property is `self`. For a bitmapped screen font, the value is the corresponding scalable PostScript font.

## See Also

### Instance Properties

- [renderingMode](renderingmode.md): The rendering mode of the font.
- [screen](screen.md): The bitmapped screen font for the current font.

# printerFont (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scalable PostScript font corresponding to current font.

## Declaration

```objectivec
@property (copy, readonly) NSFont * printerFont;
```

<a id="Discussion"></a>

## Discussion

For a font that already represents a scalable PostScript font, the value in this property is `self`. For a bitmapped screen font, the value is the corresponding scalable PostScript font.

## See Also

### Instance Properties

- [renderingMode](renderingmode.md): The rendering mode of the font.
- [screenFont](screen.md): The bitmapped screen font for the current font.
