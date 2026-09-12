> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearancecustomization/appearance](https://developer.apple.com/documentation/appkit/nsappearancecustomization/appearance)

# appearance (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The appearance of the receiver, in an `NSAppearance` object.

## Declaration

```swift
var appearance: NSAppearance? { get set }
```

## Mentioned In

- [Choosing a Specific Appearance for Your macOS App](../choosing-a-specific-appearance-for-your-macos-app.md)

<a id="Discussion"></a>

## Discussion

The default value for this property is `nil`, which means that the receiver uses the appearance it inherits from the nearest ancestor that has set an appearance. When you set `appearance` to a non-`nil` value, the receiver and the views it contains use the specified appearance.

## See Also

### Getting and Setting Appearance

- [Choosing a Specific Appearance for Your macOS App](../choosing-a-specific-appearance-for-your-macos-app.md): Adopt a specific appearance for your windows, views, or app when it is inappropriate to support both light and dark variants.
- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the receiver is drawn onscreen, in an `NSAppearance` object. (read-only)

# appearance (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The appearance of the receiver, in an `NSAppearance` object.

## Declaration

```objectivec
@property (strong, nullable) NSAppearance * appearance;
```

## Mentioned In

- [Choosing a Specific Appearance for Your macOS App](../choosing-a-specific-appearance-for-your-macos-app.md)

<a id="Discussion"></a>

## Discussion

The default value for this property is `nil`, which means that the receiver uses the appearance it inherits from the nearest ancestor that has set an appearance. When you set `appearance` to a non-`nil` value, the receiver and the views it contains use the specified appearance.

## See Also

### Getting and Setting Appearance

- [Choosing a Specific Appearance for Your macOS App](../choosing-a-specific-appearance-for-your-macos-app.md): Adopt a specific appearance for your windows, views, or app when it is inappropriate to support both light and dark variants.
- [effectiveAppearance](effectiveappearance.md): The appearance that will be used when the receiver is drawn onscreen, in an `NSAppearance` object. (read-only)
