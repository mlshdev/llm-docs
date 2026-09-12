> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/istransparent](https://developer.apple.com/documentation/appkit/nsbuttoncell/istransparent)

# isTransparent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the button is transparent.

## Declaration

```swift
var isTransparent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button is transparent, when it is [false](https://developer.apple.com/documentation/swift/false), the button is not transparent. The default value is [false](https://developer.apple.com/documentation/swift/false).

Setting this property redraws the button if necessary. A transparent button tracks the mouse and sends its action, but doesn’t draw. A transparent button is useful for sensitizing an area on the screen so that an action gets sent to a target when the area receives a mouse click.

## See Also

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [isOpaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.

# transparent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the button is transparent.

## Declaration

```objectivec
@property (getter=isTransparent) BOOL transparent;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button is transparent, when it is [false](https://developer.apple.com/documentation/swift/false), the button is not transparent. The default value is [false](https://developer.apple.com/documentation/swift/false).

Setting this property redraws the button if necessary. A transparent button tracks the mouse and sends its action, but doesn’t draw. A transparent button is useful for sensitizing an area on the screen so that an action gets sent to a target when the area receives a mouse click.

## See Also

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [opaque](isopaque.md): A Boolean value that indicates if the button is opaque.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.
