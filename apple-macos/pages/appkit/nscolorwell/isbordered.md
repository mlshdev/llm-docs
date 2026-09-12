> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/isbordered](https://developer.apple.com/documentation/appkit/nscolorwell/isbordered)

# isBordered (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

A Boolean value that determines whether the color well has a border.

> This property will be deprecated in a future release.

## Declaration

```swift
var isBordered: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the color well has a border; if it’s [false](https://developer.apple.com/documentation/swift/false), the color well doesn’t have a border. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

A borderless color well doesn’t display the Colors window when someone clicks it.

## See Also

### Configuring the appearance

- [colorWellStyle](colorwellstyle.md): The appearance and interaction style to apply to the color well.
- [NSColorWell.Style](style.md): Constants that specify the appearance and interaction modes for a color well.
- [image](image.md): The image to display on the button portion of a color well that adopts the expanded style.

# bordered (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

A Boolean value that determines whether the color well has a border.

> This property will be deprecated in a future release.

## Declaration

```objectivec
@property (getter=isBordered) BOOL bordered;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the color well has a border; if it’s [false](https://developer.apple.com/documentation/swift/false), the color well doesn’t have a border. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

A borderless color well doesn’t display the Colors window when someone clicks it.

## See Also

### Configuring the appearance

- [colorWellStyle](colorwellstyle.md): The appearance and interaction style to apply to the color well.
- [NSColorWellStyle](style.md): Constants that specify the appearance and interaction modes for a color well.
- [image](image.md): The image to display on the button portion of a color well that adopts the expanded style.
