> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/usingcolorspacename(_:device:)](https://developer.apple.com/documentation/appkit/nscolor/usingcolorspacename(_:device:))

# usingColorSpaceName(\_:device:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Creates a new color object for the same color, but in the specified color space and specific to the provided device.

> Use -colorUsingType: or -colorUsingColorSpace: instead

## Declaration

```swift
func usingColorSpaceName(_ name: NSColorSpaceName?, device deviceDescription: [NSDeviceDescriptionKey : Any]?) -> NSColor?
```

## Parameters

- `name`: The name of the color space containing the new `NSColor` object. If `colorSpace` is `nil`, the most appropriate color space is used.
- `deviceDescription`: The device description. Device descriptions can be obtained from windows, screens, and printers with the `deviceDescription` method.

  If `deviceDescription` is `nil`, the current device (as obtained from the currently lockFocus’ed view’s window or, if printing, the current printer) is used.

<a id="return-value"></a>

## Return Value

The new NSColor object or `nil` if the specified conversion cannot be done.

## See Also

### Related Documentation

- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.

### Deprecated

- [ignoresAlpha](ignoresalpha.md): Deprecated. A Boolean value that indicates whether the app supports alpha.
- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.
- [usingColorSpaceName(\_:)](usingcolorspacename%28__%29.md): Deprecated. Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.
- [currentControlTintDidChangeNotification](currentcontroltintdidchangenotification.md): Deprecated. Sent after the user changes control tint preference.

# colorUsingColorSpaceName:device: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Creates a new color object for the same color, but in the specified color space and specific to the provided device.

> Use -colorUsingType: or -colorUsingColorSpace: instead

## Declaration

```objectivec
- (NSColor *) colorUsingColorSpaceName:(NSColorSpaceName) name device:(NSDictionary<NSString *,id> *) deviceDescription;
```

## Parameters

- `name`: The name of the color space containing the new `NSColor` object. If `colorSpace` is `nil`, the most appropriate color space is used.
- `deviceDescription`: The device description. Device descriptions can be obtained from windows, screens, and printers with the `deviceDescription` method.

  If `deviceDescription` is `nil`, the current device (as obtained from the currently lockFocus’ed view’s window or, if printing, the current printer) is used.

<a id="return-value"></a>

## Return Value

The new NSColor object or `nil` if the specified conversion cannot be done.

## See Also

### Related Documentation

- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.

### Deprecated

- [ignoresAlpha](ignoresalpha.md): Deprecated. A Boolean value that indicates whether the app supports alpha.
- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.
- [colorUsingColorSpaceName:](usingcolorspacename%28__%29.md): Deprecated. Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.
- [NSControlTintDidChangeNotification](currentcontroltintdidchangenotification.md): Deprecated. Sent after the user changes control tint preference.
