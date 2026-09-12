> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivibrancyeffect/init(blureffect:)](https://developer.apple.com/documentation/uikit/uivibrancyeffect/init(blureffect:))

# init(blurEffect:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates a vibrancy effect for a specific blur effect.

## Declaration

```swift
init(blurEffect: UIBlurEffect)
```

## Parameters

- `blurEffect`: The [UIBlurEffect](../uiblureffect.md) used by the blurred view the vibrancy effect is attached to.

<a id="return-value"></a>

## Return Value

The vibrancy effect to be used by a [UIVisualEffectView](../uivisualeffectview.md) object.

<a id="Discussion"></a>

## Discussion

When you create a new vibrancy effect, use the same [UIBlurEffect](../uiblureffect.md) that you used to create the blur view. Using a different [UIBlurEffect](../uiblureffect.md) can cause unwanted visual effect combinations.

## See Also

### Creating a vibrancy effect

- [init(forBlurEffect:style:)](init%28forblureffect_style_%29.md): Creates a vibrancy effect with the specified blur and style values.
- [UIVibrancyEffectStyle](../uivibrancyeffectstyle.md): Constants for the vibrancy styles.

# effectForBlurEffect: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates a vibrancy effect for a specific blur effect.

## Declaration

```objectivec
+ (UIVibrancyEffect *) effectForBlurEffect:(UIBlurEffect *) blurEffect;
```

## Parameters

- `blurEffect`: The [UIBlurEffect](../uiblureffect.md) used by the blurred view the vibrancy effect is attached to.

<a id="return-value"></a>

## Return Value

The vibrancy effect to be used by a [UIVisualEffectView](../uivisualeffectview.md) object.

<a id="Discussion"></a>

## Discussion

When you create a new vibrancy effect, use the same [UIBlurEffect](../uiblureffect.md) that you used to create the blur view. Using a different [UIBlurEffect](../uiblureffect.md) can cause unwanted visual effect combinations.

## See Also

### Creating a vibrancy effect

- [UIVibrancyEffectStyle](../uivibrancyeffectstyle.md): Constants for the vibrancy styles.
