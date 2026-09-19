> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipagecontrol/currentpageindicatortintcolor

# currentPageIndicatorTintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the current page indicator.

## Declaration

```swift
var currentPageIndicatorTintColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default color is an opaque white for the current page indicator dot. The current page indicator dot is used to indicate the currently visible page. Assigning a new value to this property does not automatically change the color in the [pageIndicatorTintColor](pageindicatortintcolor.md) property because the value for these two properties is not automatically derived from the other. Both properties must be specified independently.

## See Also

### Coloring the page indicator

- [pageIndicatorTintColor](pageindicatortintcolor.md): The tint color to apply to the page indicator.

# currentPageIndicatorTintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the current page indicator.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * currentPageIndicatorTintColor;
```

<a id="Discussion"></a>

## Discussion

The default color is an opaque white for the current page indicator dot. The current page indicator dot is used to indicate the currently visible page. Assigning a new value to this property does not automatically change the color in the [pageIndicatorTintColor](pageindicatortintcolor.md) property because the value for these two properties is not automatically derived from the other. Both properties must be specified independently.

## See Also

### Coloring the page indicator

- [pageIndicatorTintColor](pageindicatortintcolor.md): The tint color to apply to the page indicator.
