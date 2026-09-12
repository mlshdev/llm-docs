> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivibrancyeffect/init(forblureffect:style:)](https://developer.apple.com/documentation/uikit/uivibrancyeffect/init(forblureffect:style:))

# init(forBlurEffect:style:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a vibrancy effect with the specified blur and style values.

## Declaration

```swift
init(forBlurEffect blurEffect: UIBlurEffect, style: UIVibrancyEffectStyle)
```

## Parameters

- `blurEffect`: The [UIBlurEffect](../uiblureffect.md) used by the blurred view the vibrancy effect is attached to.
- `style`: The style that defines what level of vibrancy to apply to the content. For a list of possible values, see [UIVibrancyEffectStyle](../uivibrancyeffectstyle.md).

<a id="return-value"></a>

## Return Value

The vibrancy effect object to use in your visual effect view.

<a id="Discussion"></a>

## Discussion

When you create a new vibrancy effect, use the same [UIBlurEffect](../uiblureffect.md) that you used to create the blur view. Using a different [UIBlurEffect](../uiblureffect.md) can cause unwanted visual effect combinations.

## See Also

### Creating a vibrancy effect

- [init(blurEffect:)](init%28blureffect_%29.md): Creates a vibrancy effect for a specific blur effect.
- [UIVibrancyEffectStyle](../uivibrancyeffectstyle.md): Constants for the vibrancy styles.
