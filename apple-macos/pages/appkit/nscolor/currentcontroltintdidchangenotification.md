> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/currentcontroltintdidchangenotification](https://developer.apple.com/documentation/appkit/nscolor/currentcontroltintdidchangenotification)

# currentControlTintDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Sent after the user changes control tint preference.

> Changes to the accent color can be manually observed by implementing -viewDidChangeEffectiveAppearance in a NSView subclass, or by Key-Value Observing the -effectiveAppearance property on NSApplication. Views are automatically redisplayed when the accent color changes.

## Declaration

```swift
class let currentControlTintDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is `NSApp`. This notification does not contain a `userInfo` dictionary.

## See Also

### Deprecated

- [ignoresAlpha](ignoresalpha.md): Deprecated. A Boolean value that indicates whether the app supports alpha.
- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.
- [usingColorSpaceName(\_:)](usingcolorspacename%28__%29.md): Deprecated. Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.
- [usingColorSpaceName(\_:device:)](usingcolorspacename%28__device_%29.md): Deprecated. Creates a new color object for the same color, but in the specified color space and specific to the provided device.

# NSControlTintDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Sent after the user changes control tint preference.

> Changes to the accent color can be manually observed by implementing -viewDidChangeEffectiveAppearance in a NSView subclass, or by Key-Value Observing the -effectiveAppearance property on NSApplication. Views are automatically redisplayed when the accent color changes.

## Declaration

```objectivec
extern NSNotificationName NSControlTintDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is `NSApp`. This notification does not contain a `userInfo` dictionary.

## See Also

### Deprecated

- [ignoresAlpha](ignoresalpha.md): Deprecated. A Boolean value that indicates whether the app supports alpha.
- [colorSpaceName](colorspacename.md): Deprecated. The name of the color space associated with the color.
- [colorUsingColorSpaceName:](usingcolorspacename%28__%29.md): Deprecated. Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.
- [colorUsingColorSpaceName:device:](usingcolorspacename%28__device_%29.md): Deprecated. Creates a new color object for the same color, but in the specified color space and specific to the provided device.
