> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/pageindicatortintcolor](https://developer.apple.com/documentation/uikit/uipagecontrol/pageindicatortintcolor)

# pageIndicatorTintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the page indicator.

## Declaration

```swift
var pageIndicatorTintColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default color is a translucent white for the page indicator dot. The page indicator dot is used for all of the pages not visible on the screen. Assigning a new value to this property does not automatically change the color in the [currentPageIndicatorTintColor](currentpageindicatortintcolor.md) property because the value for these two properties is not automatically derived from the other. Both properties must be specified independently. Similarly, no alpha is applied to this property for you. It is recommended (but not required) that the color you specify for this parameter contains some transparency–i.e. the alpha value should be less than 1.0.

## See Also

### Coloring the page indicator

- [currentPageIndicatorTintColor](currentpageindicatortintcolor.md): The tint color to apply to the current page indicator.

# pageIndicatorTintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the page indicator.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * pageIndicatorTintColor;
```

<a id="Discussion"></a>

## Discussion

The default color is a translucent white for the page indicator dot. The page indicator dot is used for all of the pages not visible on the screen. Assigning a new value to this property does not automatically change the color in the [currentPageIndicatorTintColor](currentpageindicatortintcolor.md) property because the value for these two properties is not automatically derived from the other. Both properties must be specified independently. Similarly, no alpha is applied to this property for you. It is recommended (but not required) that the color you specify for this parameter contains some transparency–i.e. the alpha value should be less than 1.0.

## See Also

### Coloring the page indicator

- [currentPageIndicatorTintColor](currentpageindicatortintcolor.md): The tint color to apply to the current page indicator.
