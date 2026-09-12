> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbarappearance/backbuttonappearance](https://developer.apple.com/documentation/uikit/uinavigationbarappearance/backbuttonappearance)

# backButtonAppearance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance attributes for the back button.

## Declaration

```swift
@NSCopying var backButtonAppearance: UIBarButtonItemAppearance { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t change the value of this property, the navigation bar applies the attributes from the [buttonAppearance](buttonappearance.md) property.

## See Also

### Configuring the Back button

- [backIndicatorImage](backindicatorimage.md): The image to display on the leading edge of the back button.
- [backIndicatorTransitionMaskImage](backindicatortransitionmaskimage.md): The image for masking content flowing under the back indicator image during push and pop transitions.
- [setBackIndicatorImage(\_:transitionMaskImage:)](setbackindicatorimage%28__transitionmaskimage_%29.md): Sets the back button indicator image and its transition mask.

# backButtonAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The appearance attributes for the back button.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) UIBarButtonItemAppearance * backButtonAppearance;
```

<a id="Discussion"></a>

## Discussion

If you don’t change the value of this property, the navigation bar applies the attributes from the [buttonAppearance](buttonappearance.md) property.

## See Also

### Configuring the Back button

- [backIndicatorImage](backindicatorimage.md): The image to display on the leading edge of the back button.
- [backIndicatorTransitionMaskImage](backindicatortransitionmaskimage.md): The image for masking content flowing under the back indicator image during push and pop transitions.
- [setBackIndicatorImage:transitionMaskImage:](setbackindicatorimage%28__transitionmaskimage_%29.md): Sets the back button indicator image and its transition mask.
