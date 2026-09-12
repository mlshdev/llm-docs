> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearance/name-swift.struct/vibrantlight](https://developer.apple.com/documentation/appkit/nsappearance/name-swift.struct/vibrantlight)

# vibrantLight (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.10+

The light vibrant appearance, available only in visual effect views.

## Declaration

```swift
static let vibrantLight: NSAppearance.Name
```

<a id="Discussion"></a>

## Discussion

Vibrant appearances use color blending to make the foreground appearance stand out from the background more prominently.

Don’t assign an [NSAppearance](../../nsappearance.md) object with this type directly to one of your views. Instead, assign a light appearance to your view, make sure its [allowsVibrancy](../../nsview/allowsvibrancy.md) property is set to [true](https://developer.apple.com/documentation/swift/true), and embed the view in a visual effect view. When you do, AppKit updates your view’s appearance to this type.

## See Also

### System Appearance Names

- [aqua](aqua.md): The standard light system appearance.
- [darkAqua](darkaqua.md): The standard dark system appearance.
- [vibrantDark](vibrantdark.md): A dark vibrant appearance, available only in visual effect views.
- [accessibilityHighContrastAqua](accessibilityhighcontrastaqua.md): A high-contrast version of the standard light system appearance.
- [accessibilityHighContrastDarkAqua](accessibilityhighcontrastdarkaqua.md): A high-contrast version of the standard dark system appearance.
- [accessibilityHighContrastVibrantLight](accessibilityhighcontrastvibrantlight.md): A high-contrast version of the light vibrant appearance.
- [accessibilityHighContrastVibrantDark](accessibilityhighcontrastvibrantdark.md): A high-contrast version of the dark vibrant appearance.

# NSAppearanceNameVibrantLight (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.10+

The light vibrant appearance, available only in visual effect views.

## Declaration

```objectivec
extern NSAppearanceName const NSAppearanceNameVibrantLight;
```

<a id="Discussion"></a>

## Discussion

Vibrant appearances use color blending to make the foreground appearance stand out from the background more prominently.

Don’t assign an [NSAppearance](../../nsappearance.md) object with this type directly to one of your views. Instead, assign a light appearance to your view, make sure its [allowsVibrancy](../../nsview/allowsvibrancy.md) property is set to [true](https://developer.apple.com/documentation/swift/true), and embed the view in a visual effect view. When you do, AppKit updates your view’s appearance to this type.

## See Also

### System Appearance Names

- [NSAppearanceNameAqua](aqua.md): The standard light system appearance.
- [NSAppearanceNameDarkAqua](darkaqua.md): The standard dark system appearance.
- [NSAppearanceNameVibrantDark](vibrantdark.md): A dark vibrant appearance, available only in visual effect views.
- [NSAppearanceNameAccessibilityHighContrastAqua](accessibilityhighcontrastaqua.md): A high-contrast version of the standard light system appearance.
- [NSAppearanceNameAccessibilityHighContrastDarkAqua](accessibilityhighcontrastdarkaqua.md): A high-contrast version of the standard dark system appearance.
- [NSAppearanceNameAccessibilityHighContrastVibrantLight](accessibilityhighcontrastvibrantlight.md): A high-contrast version of the light vibrant appearance.
- [NSAppearanceNameAccessibilityHighContrastVibrantDark](accessibilityhighcontrastvibrantdark.md): A high-contrast version of the dark vibrant appearance.
