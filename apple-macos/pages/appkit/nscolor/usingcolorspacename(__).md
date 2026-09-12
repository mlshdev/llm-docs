> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/usingcolorspacename(_:)](https://developer.apple.com/documentation/appkit/nscolor/usingcolorspacename(_:))

# usingColorSpaceName(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.

> Use -colorUsingType: or -colorUsingColorSpace: instead

## Declaration

```swift
func usingColorSpaceName(_ name: NSColorSpaceName) -> NSColor?
```

## Parameters

- `name`: The name of the color space containing the new `NSColor` object.

<a id="return-value"></a>

## Return Value

The new `NSColor` object or `nil` if the specified conversion cannot be done.

## See Also

### Related Documentation

- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.

### Deprecated

- [ignoresAlpha](ignoresalpha.md): Deprecated. A Boolean value that indicates whether the app supports alpha.
- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.
- [usingColorSpaceName(\_:device:)](usingcolorspacename%28__device_%29.md): Deprecated. Creates a new color object for the same color, but in the specified color space and specific to the provided device.
- [currentControlTintDidChangeNotification](currentcontroltintdidchangenotification.md): Deprecated. Sent after the user changes control tint preference.

# colorUsingColorSpaceName: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.

> Use -colorUsingType: or -colorUsingColorSpace: instead

## Declaration

```objectivec
- (NSColor *) colorUsingColorSpaceName:(NSColorSpaceName) name;
```

## Parameters

- `name`: The name of the color space containing the new `NSColor` object.

<a id="return-value"></a>

## Return Value

The new `NSColor` object or `nil` if the specified conversion cannot be done.

## See Also

### Related Documentation

- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.

### Deprecated

- [ignoresAlpha](ignoresalpha.md): Deprecated. A Boolean value that indicates whether the app supports alpha.
- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.
- [colorUsingColorSpaceName:device:](usingcolorspacename%28__device_%29.md): Deprecated. Creates a new color object for the same color, but in the specified color space and specific to the provided device.
- [NSControlTintDidChangeNotification](currentcontroltintdidchangenotification.md): Deprecated. Sent after the user changes control tint preference.
