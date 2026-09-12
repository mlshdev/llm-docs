> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/image](https://developer.apple.com/documentation/appkit/nscolorwell/image)

# image (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The image to display on the button portion of a color well that adopts the expanded style.

## Declaration

```swift
var image: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The color well applies the image only when the [colorWellStyle](colorwellstyle.md) property is set to [NSColorWell.Style.expanded](style/expanded.md).

## See Also

### Configuring the appearance

- [colorWellStyle](colorwellstyle.md): The appearance and interaction style to apply to the color well.
- [NSColorWell.Style](style.md): Constants that specify the appearance and interaction modes for a color well.
- [isBordered](isbordered.md): Deprecated. A Boolean value that determines whether the color well has a border.

# image (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The image to display on the button portion of a color well that adopts the expanded style.

## Declaration

```objectivec
@property (strong, nullable) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

The color well applies the image only when the [colorWellStyle](colorwellstyle.md) property is set to [NSColorWellStyleExpanded](style/expanded.md).

## See Also

### Configuring the appearance

- [colorWellStyle](colorwellstyle.md): The appearance and interaction style to apply to the color well.
- [NSColorWellStyle](style.md): Constants that specify the appearance and interaction modes for a color well.
- [bordered](isbordered.md): Deprecated. A Boolean value that determines whether the color well has a border.
