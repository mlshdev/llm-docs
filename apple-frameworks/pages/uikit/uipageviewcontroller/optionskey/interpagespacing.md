> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/optionskey/interpagespacing](https://developer.apple.com/documentation/uikit/uipageviewcontroller/optionskey/interpagespacing)

# interPageSpacing (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Space between pages, in points.

## Declaration

```swift
static let interPageSpacing: UIPageViewController.OptionsKey
```

<a id="Discussion"></a>

## Discussion

The value should be a [CGFloat](../../../corefoundation/cgfloat-swift.struct.md) wrapped in an instance of [NSNumber](../../../foundation/nsnumber.md). The default value is zero. An inter-page spacing is only valid if the transition style is [UIPageViewController.TransitionStyle.scroll](../transitionstyle-swift.enum/scroll.md).

## See Also

### Page options

- [spineLocation](spinelocation.md): Location of the spine.

# UIPageViewControllerOptionInterPageSpacingKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Space between pages, in points.

## Declaration

```objectivec
extern UIPageViewControllerOptionsKey const UIPageViewControllerOptionInterPageSpacingKey;
```

<a id="Discussion"></a>

## Discussion

The value should be a [CGFloat](../../../corefoundation/cgfloat-swift.struct.md) wrapped in an instance of [NSNumber](../../../foundation/nsnumber.md). The default value is zero. An inter-page spacing is only valid if the transition style is [UIPageViewControllerTransitionStyleScroll](../transitionstyle-swift.enum/scroll.md).

## See Also

### Page options

- [UIPageViewControllerOptionSpineLocationKey](spinelocation.md): Location of the spine.
