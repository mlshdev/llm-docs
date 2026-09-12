> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearance/name-swift.struct/accessibilityhighcontrastvibrantlight](https://developer.apple.com/documentation/appkit/nsappearance/name-swift.struct/accessibilityhighcontrastvibrantlight)

# accessibilityHighContrastVibrantLight (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.14+

A high-contrast version of the light vibrant appearance.

## Declaration

```swift
static let accessibilityHighContrastVibrantLight: NSAppearance.Name
```

<a id="Discussion"></a>

## Discussion

Don’t assign an [NSAppearance](../../nsappearance.md) object with this type directly to one of your views. Instead, assign a light appearance to your view. AppKit then returns this type when the user enables the Increase Contrast option in the Accessibility system preferences and the view’s [allowsVibrancy](../../nsview/allowsvibrancy.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### System Appearance Names

- [aqua](aqua.md): The standard light system appearance.
- [darkAqua](darkaqua.md): The standard dark system appearance.
- [vibrantLight](vibrantlight.md): The light vibrant appearance, available only in visual effect views.
- [vibrantDark](vibrantdark.md): A dark vibrant appearance, available only in visual effect views.
- [accessibilityHighContrastAqua](accessibilityhighcontrastaqua.md): A high-contrast version of the standard light system appearance.
- [accessibilityHighContrastDarkAqua](accessibilityhighcontrastdarkaqua.md): A high-contrast version of the standard dark system appearance.
- [accessibilityHighContrastVibrantDark](accessibilityhighcontrastvibrantdark.md): A high-contrast version of the dark vibrant appearance.

# NSAppearanceNameAccessibilityHighContrastVibrantLight (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.14+

A high-contrast version of the light vibrant appearance.

## Declaration

```objectivec
extern NSAppearanceName const NSAppearanceNameAccessibilityHighContrastVibrantLight;
```

<a id="Discussion"></a>

## Discussion

Don’t assign an [NSAppearance](../../nsappearance.md) object with this type directly to one of your views. Instead, assign a light appearance to your view. AppKit then returns this type when the user enables the Increase Contrast option in the Accessibility system preferences and the view’s [allowsVibrancy](../../nsview/allowsvibrancy.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### System Appearance Names

- [NSAppearanceNameAqua](aqua.md): The standard light system appearance.
- [NSAppearanceNameDarkAqua](darkaqua.md): The standard dark system appearance.
- [NSAppearanceNameVibrantLight](vibrantlight.md): The light vibrant appearance, available only in visual effect views.
- [NSAppearanceNameVibrantDark](vibrantdark.md): A dark vibrant appearance, available only in visual effect views.
- [NSAppearanceNameAccessibilityHighContrastAqua](accessibilityhighcontrastaqua.md): A high-contrast version of the standard light system appearance.
- [NSAppearanceNameAccessibilityHighContrastDarkAqua](accessibilityhighcontrastdarkaqua.md): A high-contrast version of the standard dark system appearance.
- [NSAppearanceNameAccessibilityHighContrastVibrantDark](accessibilityhighcontrastvibrantdark.md): A high-contrast version of the dark vibrant appearance.
