> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/supportsalpha](https://developer.apple.com/documentation/appkit/nscolorwell/supportsalpha)

# supportsAlpha (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that determines whether the color picker supports alpha values.

## Declaration

```swift
var supportsAlpha: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is [false](https://developer.apple.com/documentation/swift/false), people can select only fully opaque colors from the color picker. A value of [false](https://developer.apple.com/documentation/swift/false) also hides the alpha slider. Setting this property to [true](https://developer.apple.com/documentation/swift/true) enables partial color opacity, and also makes the alpha slider visible.

If [ignoresAlpha](../nscolor/ignoresalpha.md) is [true](https://developer.apple.com/documentation/swift/true), this property always returns [false](https://developer.apple.com/documentation/swift/false), disabling alpha globally.

By default this value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the selected color

- [color](color.md): The currently selected color for the color well.
- [takeColorFrom(\_:)](takecolorfrom%28__%29.md): Changes the currently selected color to the color of the specified object.

# supportsAlpha (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that determines whether the color picker supports alpha values.

## Declaration

```objectivec
@property BOOL supportsAlpha;
```

<a id="Discussion"></a>

## Discussion

If this property is [false](https://developer.apple.com/documentation/swift/false), people can select only fully opaque colors from the color picker. A value of [false](https://developer.apple.com/documentation/swift/false) also hides the alpha slider. Setting this property to [true](https://developer.apple.com/documentation/swift/true) enables partial color opacity, and also makes the alpha slider visible.

If [ignoresAlpha](../nscolor/ignoresalpha.md) is [true](https://developer.apple.com/documentation/swift/true), this property always returns [false](https://developer.apple.com/documentation/swift/false), disabling alpha globally.

By default this value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the selected color

- [color](color.md): The currently selected color for the color well.
- [takeColorFrom:](takecolorfrom%28__%29.md): Changes the currently selected color to the color of the specified object.
