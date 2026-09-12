> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/showsborderonlywhilemouseinside](https://developer.apple.com/documentation/appkit/nsbuttoncell/showsborderonlywhilemouseinside)

# showsBorderOnlyWhileMouseInside (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the button displays its border only when the pointer is over it.

## Declaration

```swift
var showsBorderOnlyWhileMouseInside: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) if the button’s border is displayed only when the pointer is over the button and the button is active. When it is [false](https://developer.apple.com/documentation/swift/false), the border continues to display when the pointer is outside of the button’s bounds.

## See Also

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [isOpaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [isTransparent](istransparent.md): A Boolean value that indicates if the button is transparent.

# showsBorderOnlyWhileMouseInside (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the button displays its border only when the pointer is over it.

## Declaration

```objectivec
@property BOOL showsBorderOnlyWhileMouseInside;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) if the button’s border is displayed only when the pointer is over the button and the button is active. When it is [false](https://developer.apple.com/documentation/swift/false), the border continues to display when the pointer is outside of the button’s bounds.

## See Also

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [opaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [transparent](istransparent.md): A Boolean value that indicates if the button is transparent.
