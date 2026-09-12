> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/isopaque](https://developer.apple.com/documentation/appkit/nsbuttoncell/isopaque)

# isOpaque (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the button is opaque.

## Declaration

```swift
var isOpaque: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button draws over every pixel in its frame. Note that a button cell is opaque only if it isn’t transparent and if it has a border. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [isTransparent](istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.

# opaque (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the button is opaque.

## Declaration

```objectivec
@property (readonly, getter=isOpaque) BOOL opaque;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button draws over every pixel in its frame. Note that a button cell is opaque only if it isn’t transparent and if it has a border. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The background color of the button.
- [bezelStyle](bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [transparent](istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.
