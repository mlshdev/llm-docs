> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/bezelstyle](https://developer.apple.com/documentation/appkit/nsbuttoncell/bezelstyle)

# bezelStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The appearance of the button’s border, if it has one.

## Declaration

```swift
var bezelStyle: NSButton.BezelStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a constant that specifies the bezel style used by the button. See [NSButton.BezelStyle](../nsbutton/bezelstyle-swift.enum.md) for a list of possible values. If a button is borderless, the value of this property is ignored.

A button uses shading to look like it’s sticking out or pushed in. You can set the shading with the [gradientType](gradienttype.md) property.

## See Also

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [isOpaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [isTransparent](istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.

# bezelStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The appearance of the button’s border, if it has one.

## Declaration

```objectivec
@property NSBezelStyle bezelStyle;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a constant that specifies the bezel style used by the button. See [NSBezelStyle](../nsbutton/bezelstyle-swift.enum.md) for a list of possible values. If a button is borderless, the value of this property is ignored.

A button uses shading to look like it’s sticking out or pushed in. You can set the shading with the [gradientType](gradienttype.md) property.

## See Also

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [opaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [transparent](istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.
