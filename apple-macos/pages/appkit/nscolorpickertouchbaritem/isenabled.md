> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickertouchbaritem/isenabled](https://developer.apple.com/documentation/appkit/nscolorpickertouchbaritem/isenabled)

# isEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A Boolean value that determines whether the color picker is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the picker is currently displayed as a popover, and you set the value of this property to [false](https://developer.apple.com/documentation/swift/false), the picker is dismissed.

## See Also

### Configuring the color picker

- [colorList](colorlist.md): The list of colors displayed in the color picker.
- [allowedColorSpaces](allowedcolorspaces.md): Controls the color spaces that the color picker can produce.
- [showsAlpha](showsalpha.md): A Boolean value that controls whether the color picker allows picking of colors with alpha values other than `1.0`.

# enabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A Boolean value that determines whether the color picker is enabled.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

If the picker is currently displayed as a popover, and you set the value of this property to [false](https://developer.apple.com/documentation/swift/false), the picker is dismissed.

## See Also

### Configuring the color picker

- [colorList](colorlist.md): The list of colors displayed in the color picker.
- [allowedColorSpaces](allowedcolorspaces.md): Controls the color spaces that the color picker can produce.
- [showsAlpha](showsalpha.md): A Boolean value that controls whether the color picker allows picking of colors with alpha values other than `1.0`.
