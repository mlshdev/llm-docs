> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/ignoresalpha](https://developer.apple.com/documentation/appkit/nscolor/ignoresalpha)

# ignoresAlpha (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 14.0)

A Boolean value that indicates whether the app supports alpha.

> Use [showsAlpha](../nscolorpanel/showsalpha.md) and [supportsAlpha](../nscolorwell/supportsalpha.md) to manage alpha behavior for individual controls.

## Declaration

```swift
@MainActor class var ignoresAlpha: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the app doesn’t support alpha; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The system consults this global value when the app imports alpha (for instance, through color dragging). By default this property is [false](https://developer.apple.com/documentation/swift/false); meaning the system supports the alpha component for colors globally. To ignore alpha for an app, invoke the `setIgnoresAlpha` method with a parameter of [true](https://developer.apple.com/documentation/swift/true). This value also determines whether the color panel has an opacity slider.

This method provides a global approach for removing alpha, which might not always be appropriate. Apps that need to disable alpha can use more fine-grained APIs for individual controls, such as [showsAlpha](../nscolorpanel/showsalpha.md) and [supportsAlpha](../nscolorwell/supportsalpha.md).

In macOS 13 and earlier, the default value is [true](https://developer.apple.com/documentation/swift/true). This property is deprecated as of macOS 14.

## See Also

### Related Documentation

- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.

### Deprecated

- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.
- [usingColorSpaceName(\_:)](usingcolorspacename%28__%29.md): Deprecated. Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.
- [usingColorSpaceName(\_:device:)](usingcolorspacename%28__device_%29.md): Deprecated. Creates a new color object for the same color, but in the specified color space and specific to the provided device.
- [currentControlTintDidChangeNotification](currentcontroltintdidchangenotification.md): Deprecated. Sent after the user changes control tint preference.

# ignoresAlpha (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 14.0)

A Boolean value that indicates whether the app supports alpha.

> Use [showsAlpha](../nscolorpanel/showsalpha.md) and [supportsAlpha](../nscolorwell/supportsalpha.md) to manage alpha behavior for individual controls.

## Declaration

```objectivec
@property (class) BOOL ignoresAlpha;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the app doesn’t support alpha; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The system consults this global value when the app imports alpha (for instance, through color dragging). By default this property is [false](https://developer.apple.com/documentation/swift/false); meaning the system supports the alpha component for colors globally. To ignore alpha for an app, invoke the `setIgnoresAlpha` method with a parameter of [true](https://developer.apple.com/documentation/swift/true). This value also determines whether the color panel has an opacity slider.

This method provides a global approach for removing alpha, which might not always be appropriate. Apps that need to disable alpha can use more fine-grained APIs for individual controls, such as [showsAlpha](../nscolorpanel/showsalpha.md) and [supportsAlpha](../nscolorwell/supportsalpha.md).

In macOS 13 and earlier, the default value is [true](https://developer.apple.com/documentation/swift/true). This property is deprecated as of macOS 14.

## See Also

### Related Documentation

- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.

### Deprecated

- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.
- [colorUsingColorSpaceName:](usingcolorspacename%28__%29.md): Deprecated. Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.
- [colorUsingColorSpaceName:device:](usingcolorspacename%28__device_%29.md): Deprecated. Creates a new color object for the same color, but in the specified color space and specific to the provided device.
- [NSControlTintDidChangeNotification](currentcontroltintdidchangenotification.md): Deprecated. Sent after the user changes control tint preference.
