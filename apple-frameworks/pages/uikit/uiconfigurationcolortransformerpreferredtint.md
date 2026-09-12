> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconfigurationcolortransformerpreferredtint](https://developer.apple.com/documentation/uikit/uiconfigurationcolortransformerpreferredtint)

# UIConfigurationColorTransformerPreferredTint

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A color transformer that returns the preferred system accent color.

## Declaration

```objectivec
extern const UIConfigurationColorTransformer UIConfigurationColorTransformerPreferredTint;
```

<a id="Discussion"></a>

## Discussion

This color transformer returns the original color on platforms without a system accent color, or when the system accent color is set to Multicolor. When the system accent color is set to any other color, this color transformer returns that system accent color.

## See Also

### Creating a color transformer

- [UIConfigurationColorTransformerGrayscale](uiconfigurationcolortransformergrayscale.md): A color transformer that returns a grayscale version of the color.
- [UIConfigurationColorTransformerMonochromeTint](uiconfigurationcolortransformermonochrometint.md): A color transformer that returns the color with a monochrome tint.
