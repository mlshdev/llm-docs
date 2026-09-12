> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/gradienttype](https://developer.apple.com/documentation/appkit/nsbuttoncell/gradienttype)

# gradientType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.12)

The gradient of the button’s border.

> The gradientType property is unused, and setting it has no effect.

## Declaration

```swift
var gradientType: NSButton.GradientType { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a constant that specifies the gradient used for the button’s border. See [NSButton.GradientType](../nsbutton/gradienttype.md) for a list of possible values.

If the button has no border, setting this property has no effect on the button’s appearance. A concave gradient is darkest in the top-left corner; a convex gradient is darkest in the bottom-right corner. Weak versus strong is how much contrast exists between the colors used in opposite corners.

> **Note**

>  This property is currently unused by AppKit and has no effect.

## See Also

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [isOpaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [isTransparent](istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.

# gradientType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.12)

The gradient of the button’s border.

> The gradientType property is unused, and setting it has no effect.

## Declaration

```objectivec
@property NSGradientType gradientType;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a constant that specifies the gradient used for the button’s border. See [NSGradientType](../nsbutton/gradienttype.md) for a list of possible values.

If the button has no border, setting this property has no effect on the button’s appearance. A concave gradient is darkest in the top-left corner; a convex gradient is darkest in the bottom-right corner. Weak versus strong is how much contrast exists between the colors used in opposite corners.

> **Note**

>  This property is currently unused by AppKit and has no effect.

## See Also

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [opaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [transparent](istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.
