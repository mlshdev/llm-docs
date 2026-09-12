> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/imagedimswhendisabled](https://developer.apple.com/documentation/appkit/nsbuttoncell/imagedimswhendisabled)

# imageDimsWhenDisabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.

## Declaration

```swift
var imageDimsWhenDisabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button’s image and text are dimmed when the button is disabled; when it is [false](https://developer.apple.com/documentation/swift/false), the image and text are not dimmed in the disabled state. By default, all button types except [NSSwitchButton](../nsswitchbutton.md) and [NSRadioButton](../nsradiobutton.md) dim when disabled. When buttons of type [NSSwitchButton](../nsswitchbutton.md) and [NSRadioButton](../nsradiobutton.md) are disabled, only the associated text dims.

The default setting for this state is reasserted whenever you invoke [setButtonType(\_:)](setbuttontype%28__%29.md), so be sure to specify the button cell’s type before you set [imageDimsWhenDisabled](imagedimswhendisabled.md).

## See Also

### Related Documentation

- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [isOpaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [isTransparent](istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.

# imageDimsWhenDisabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.

## Declaration

```objectivec
@property BOOL imageDimsWhenDisabled;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button’s image and text are dimmed when the button is disabled; when it is [false](https://developer.apple.com/documentation/swift/false), the image and text are not dimmed in the disabled state. By default, all button types except [NSSwitchButton](../nsswitchbutton.md) and [NSRadioButton](../nsradiobutton.md) dim when disabled. When buttons of type [NSSwitchButton](../nsswitchbutton.md) and [NSRadioButton](../nsradiobutton.md) are disabled, only the associated text dims.

The default setting for this state is reasserted whenever you invoke [setButtonType:](setbuttontype%28__%29.md), so be sure to specify the button cell’s type before you set [imageDimsWhenDisabled](imagedimswhendisabled.md).

## See Also

### Related Documentation

- [setButtonType:](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [opaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [transparent](istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.
