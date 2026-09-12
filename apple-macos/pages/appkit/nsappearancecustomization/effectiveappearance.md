> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearancecustomization/effectiveappearance](https://developer.apple.com/documentation/appkit/nsappearancecustomization/effectiveappearance)

# effectiveAppearance (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The appearance that will be used when the receiver is drawn onscreen, in an `NSAppearance` object. (read-only)

## Declaration

```swift
var effectiveAppearance: NSAppearance { get }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is provided by the nearest ancestor of the receiver that has set an appearance.

You can use this property to ensure that an offscreen view sets the appropriate current appearance when it draws onscreen.

## See Also

### Getting and Setting Appearance

- [Choosing a Specific Appearance for Your macOS App](../choosing-a-specific-appearance-for-your-macos-app.md): Adopt a specific appearance for your windows, views, or app when it is inappropriate to support both light and dark variants.
- [appearance](appearance.md): The appearance of the receiver, in an `NSAppearance` object.

# effectiveAppearance (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The appearance that will be used when the receiver is drawn onscreen, in an `NSAppearance` object. (read-only)

## Declaration

```objectivec
@property (strong, readonly) NSAppearance * effectiveAppearance;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is provided by the nearest ancestor of the receiver that has set an appearance.

You can use this property to ensure that an offscreen view sets the appropriate current appearance when it draws onscreen.

## See Also

### Getting and Setting Appearance

- [Choosing a Specific Appearance for Your macOS App](../choosing-a-specific-appearance-for-your-macos-app.md): Adopt a specific appearance for your windows, views, or app when it is inappropriate to support both light and dark variants.
- [appearance](appearance.md): The appearance of the receiver, in an `NSAppearance` object.
