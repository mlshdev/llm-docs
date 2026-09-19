> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiconfigurationcolortransformermonochrometint

# UIConfigurationColorTransformerMonochromeTint

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A color transformer that returns the color with a monochrome tint.

## Declaration

```objectivec
extern const UIConfigurationColorTransformer UIConfigurationColorTransformerMonochromeTint;
```

<a id="Discussion"></a>

## Discussion

Use this color transformer to deemphasize a tinted item. The tinted item remains monochrome regardless of the system accent color.

## See Also

### Creating a color transformer

- [UIConfigurationColorTransformerGrayscale](uiconfigurationcolortransformergrayscale.md): A color transformer that returns a grayscale version of the color.
- [UIConfigurationColorTransformerPreferredTint](uiconfigurationcolortransformerpreferredtint.md): A color transformer that returns the preferred system accent color.
