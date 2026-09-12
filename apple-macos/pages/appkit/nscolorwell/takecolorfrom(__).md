> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/takecolorfrom(_:)](https://developer.apple.com/documentation/appkit/nscolorwell/takecolorfrom(_:))

# takeColorFrom(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes the currently selected color to the color of the specified object.

## Declaration

```swift
func takeColorFrom(_ sender: Any?)
```

## Parameters

- `sender`: The object from which to take the new color.

<a id="Discussion"></a>

## Discussion

This method attempts to access a property or accessor method named `color`. If the object doesn’t implement a `color` accessor, this method does nothing.

## See Also

### Managing the selected color

- [color](color.md): The currently selected color for the color well.
- [supportsAlpha](supportsalpha.md): A Boolean value that determines whether the color picker supports alpha values.

# takeColorFrom: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes the currently selected color to the color of the specified object.

## Declaration

```objectivec
- (void) takeColorFrom:(id) sender;
```

## Parameters

- `sender`: The object from which to take the new color.

<a id="Discussion"></a>

## Discussion

This method attempts to access a property or accessor method named `color`. If the object doesn’t implement a `color` accessor, this method does nothing.

## See Also

### Managing the selected color

- [color](color.md): The currently selected color for the color well.
- [supportsAlpha](supportsalpha.md): A Boolean value that determines whether the color picker supports alpha values.
