> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbarappearance/setbackindicatorimage(_:transitionmaskimage:)](https://developer.apple.com/documentation/uikit/uinavigationbarappearance/setbackindicatorimage(_:transitionmaskimage:))

# setBackIndicatorImage(\_:transitionMaskImage:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Sets the back button indicator image and its transition mask.

## Declaration

```swift
func setBackIndicatorImage(_ backIndicatorImage: UIImage?, transitionMaskImage backIndicatorTransitionMaskImage: UIImage?)
```

## Parameters

- `backIndicatorImage`: The image to display on the leading edge of the back button.
- `backIndicatorTransitionMaskImage`: The image for masking content flowing under the back indicator image during push and pop transitions.

<a id="Discussion"></a>

## Discussion

If you specify `nil` for either [backIndicatorImage](backindicatorimage.md) or [backIndicatorTransitionMaskImage](backindicatortransitionmaskimage.md), this method resets both images to their default values.

## See Also

### Configuring the Back button

- [backButtonAppearance](backbuttonappearance.md): The appearance attributes for the back button.
- [backIndicatorImage](backindicatorimage.md): The image to display on the leading edge of the back button.
- [backIndicatorTransitionMaskImage](backindicatortransitionmaskimage.md): The image for masking content flowing under the back indicator image during push and pop transitions.

# setBackIndicatorImage:transitionMaskImage: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Sets the back button indicator image and its transition mask.

## Declaration

```objectivec
- (void) setBackIndicatorImage:(UIImage *) backIndicatorImage transitionMaskImage:(UIImage *) backIndicatorTransitionMaskImage;
```

## Parameters

- `backIndicatorImage`: The image to display on the leading edge of the back button.
- `backIndicatorTransitionMaskImage`: The image for masking content flowing under the back indicator image during push and pop transitions.

<a id="Discussion"></a>

## Discussion

If you specify `nil` for either [backIndicatorImage](backindicatorimage.md) or [backIndicatorTransitionMaskImage](backindicatortransitionmaskimage.md), this method resets both images to their default values.

## See Also

### Configuring the Back button

- [backButtonAppearance](backbuttonappearance.md): The appearance attributes for the back button.
- [backIndicatorImage](backindicatorimage.md): The image to display on the leading edge of the back button.
- [backIndicatorTransitionMaskImage](backindicatortransitionmaskimage.md): The image for masking content flowing under the back indicator image during push and pop transitions.
