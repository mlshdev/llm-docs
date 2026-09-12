> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/colorwellstyle](https://developer.apple.com/documentation/appkit/nscolorwell/colorwellstyle)

# colorWellStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The appearance and interaction style to apply to the color well.

## Declaration

```swift
var colorWellStyle: NSColorWell.Style { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property determines how the color well presents itself, and how interactions affect it. For details, see [NSColorWell.Style](style.md).

## See Also

### Configuring the appearance

- [NSColorWell.Style](style.md): Constants that specify the appearance and interaction modes for a color well.
- [image](image.md): The image to display on the button portion of a color well that adopts the expanded style.
- [isBordered](isbordered.md): Deprecated. A Boolean value that determines whether the color well has a border.

# colorWellStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The appearance and interaction style to apply to the color well.

## Declaration

```objectivec
@property (assign) NSColorWellStyle colorWellStyle;
```

<a id="Discussion"></a>

## Discussion

The value of this property determines how the color well presents itself, and how interactions affect it. For details, see [NSColorWellStyle](style.md).

## See Also

### Configuring the appearance

- [NSColorWellStyle](style.md): Constants that specify the appearance and interaction modes for a color well.
- [image](image.md): The image to display on the button portion of a color well that adopts the expanded style.
- [bordered](isbordered.md): Deprecated. A Boolean value that determines whether the color well has a border.
