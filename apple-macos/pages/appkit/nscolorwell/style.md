> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/style](https://developer.apple.com/documentation/appkit/nscolorwell/style)

# NSColorWell.Style (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

Constants that specify the appearance and interaction modes for a color well.

## Declaration

```swift
enum Style
```

## Topics

### Getting the Style Option

- [NSColorWell.Style.default](style/default.md): The default style for color wells.
- [NSColorWell.Style.minimal](style/minimal.md): A style that adds minimal adornments to the color well.
- [NSColorWell.Style.expanded](style/expanded.md): A style that supports a color picker popover for fast interactions, and adds a dedicated button to display the color panel.

### Initializers

- [init(rawValue:)](style/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the appearance

- [colorWellStyle](colorwellstyle.md): The appearance and interaction style to apply to the color well.
- [image](image.md): The image to display on the button portion of a color well that adopts the expanded style.
- [isBordered](isbordered.md): Deprecated. A Boolean value that determines whether the color well has a border.

# NSColorWellStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

Constants that specify the appearance and interaction modes for a color well.

## Declaration

```objectivec
enum NSColorWellStyle : NSInteger;
```

## Topics

### Getting the Style Option

- [NSColorWellStyleDefault](style/default.md): The default style for color wells.
- [NSColorWellStyleMinimal](style/minimal.md): A style that adds minimal adornments to the color well.
- [NSColorWellStyleExpanded](style/expanded.md): A style that supports a color picker popover for fast interactions, and adds a dedicated button to display the color panel.

## See Also

### Configuring the appearance

- [colorWellStyle](colorwellstyle.md): The appearance and interaction style to apply to the color well.
- [image](image.md): The image to display on the button portion of a color well that adopts the expanded style.
- [bordered](isbordered.md): Deprecated. A Boolean value that determines whether the color well has a border.
