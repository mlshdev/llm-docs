> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/distribution-swift.enum/fillequally](https://developer.apple.com/documentation/uikit/uistackview/distribution-swift.enum/fillequally)

# UIStackView.Distribution.fillEqually (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A layout where the stack view resizes all arranged views to the same size, filling the available space along the stack view’s axis.

## Declaration

```swift
case fillEqually
```

<a id="Discussion"></a>

## Discussion

The following image shows an example of a horizontal stack view that uses the [UIStackView.Distribution.fillEqually](fillequally.md) distribution.

![A horizontal stack view with four arranged subviews. The stack view resizes the width of the arranged views so that they fill the available space along the stack view’s axis, with each view having equal size.](https://developer.apple.com/images/com.apple.uikit/media-2557447@2x.png)

## See Also

### Constants

- [UIStackView.Distribution.fill](fill.md): A layout where the stack view resizes its arranged views so that they fill the available space along the stack view’s axis.
- [UIStackView.Distribution.fillProportionally](fillproportionally.md): A layout where the stack view resizes views proportionally based on their intrinsic content size to fill the available space along the stack view’s axis.
- [UIStackView.Distribution.equalSpacing](equalspacing.md): A layout where the stack view maintains equal spacing between adjacent views while preserving their intrinsic content size.
- [UIStackView.Distribution.equalCentering](equalcentering.md): A layout that attempts to position the arranged views with equal center-to-center spacing along the stack view’s axis, while maintaining the spacing property’s distance between views.

# UIStackViewDistributionFillEqually (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A layout where the stack view resizes all arranged views to the same size, filling the available space along the stack view’s axis.

## Declaration

```objectivec
UIStackViewDistributionFillEqually
```

<a id="Discussion"></a>

## Discussion

The following image shows an example of a horizontal stack view that uses the [UIStackViewDistributionFillEqually](fillequally.md) distribution.

![A horizontal stack view with four arranged subviews. The stack view resizes the width of the arranged views so that they fill the available space along the stack view’s axis, with each view having equal size.](https://developer.apple.com/images/com.apple.uikit/media-2557447@2x.png)

## See Also

### Constants

- [UIStackViewDistributionFill](fill.md): A layout where the stack view resizes its arranged views so that they fill the available space along the stack view’s axis.
- [UIStackViewDistributionFillProportionally](fillproportionally.md): A layout where the stack view resizes views proportionally based on their intrinsic content size to fill the available space along the stack view’s axis.
- [UIStackViewDistributionEqualSpacing](equalspacing.md): A layout where the stack view maintains equal spacing between adjacent views while preserving their intrinsic content size.
- [UIStackViewDistributionEqualCentering](equalcentering.md): A layout that attempts to position the arranged views with equal center-to-center spacing along the stack view’s axis, while maintaining the spacing property’s distance between views.
