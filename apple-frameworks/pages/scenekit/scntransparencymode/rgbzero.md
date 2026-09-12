> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransparencymode/rgbzero](https://developer.apple.com/documentation/scenekit/scntransparencymode/rgbzero)

# SCNTransparencyMode.rgbZero (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

SceneKit derives transparency information from the luminance of colors. The value `0.0` is opaque.

## Declaration

```swift
case rgbZero
```

<a id="Discussion"></a>

## Discussion

When using this mode, SceneKit ignores the alpha value of colors in the material’s [transparent](../scnmaterial/transparent.md) property. SceneKit calculates the luminance of a color from its red, green, and blue channels and uses the resulting value to determine the material’s opacity.

## See Also

### Constants

- [SCNTransparencyMode.aOne](aone.md): SceneKit derives transparency information from the alpha channel of colors. The value `1.0` is opaque.

# SCNTransparencyModeRGBZero (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

SceneKit derives transparency information from the luminance of colors. The value `0.0` is opaque.

## Declaration

```objectivec
SCNTransparencyModeRGBZero
```

<a id="Discussion"></a>

## Discussion

When using this mode, SceneKit ignores the alpha value of colors in the material’s [transparent](../scnmaterial/transparent.md) property. SceneKit calculates the luminance of a color from its red, green, and blue channels and uses the resulting value to determine the material’s opacity.

## See Also

### Constants

- [SCNTransparencyModeAOne](aone.md): SceneKit derives transparency information from the alpha channel of colors. The value `1.0` is opaque.
