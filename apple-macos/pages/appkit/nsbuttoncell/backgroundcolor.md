> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/backgroundcolor](https://developer.apple.com/documentation/appkit/nsbuttoncell/backgroundcolor)

# backgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The background color of the button.

## Declaration

```swift
@NSCopying var backgroundColor: NSColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The background color is used only when drawing borderless buttons.

## See Also

### Managing Graphics Attributes

- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [isOpaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [isTransparent](istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.

# backgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The background color of the button.

## Declaration

```objectivec
@property (copy, nullable) NSColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

The background color is used only when drawing borderless buttons.

## See Also

### Managing Graphics Attributes

- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [opaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [transparent](istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.
