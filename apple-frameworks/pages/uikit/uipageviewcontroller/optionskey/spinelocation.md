> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/optionskey/spinelocation](https://developer.apple.com/documentation/uikit/uipageviewcontroller/optionskey/spinelocation)

# spineLocation (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Location of the spine.

## Declaration

```swift
static let spineLocation: UIPageViewController.OptionsKey
```

<a id="Discussion"></a>

## Discussion

For possible values, see [UIPageViewController.SpineLocation](../spinelocation-swift.enum.md). A spine location is only valid if the transition style is [UIPageViewController.TransitionStyle.pageCurl](../transitionstyle-swift.enum/pagecurl.md).

If the transition style is [UIPageViewController.TransitionStyle.pageCurl](../transitionstyle-swift.enum/pagecurl.md), the default value for this property is [UIPageViewController.SpineLocation.min](../spinelocation-swift.enum/min.md); otherwise, the default is [UIPageViewController.SpineLocation.none](../spinelocation-swift.enum/none.md).

## See Also

### Page options

- [interPageSpacing](interpagespacing.md): Space between pages, in points.

# UIPageViewControllerOptionSpineLocationKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Location of the spine.

## Declaration

```objectivec
extern UIPageViewControllerOptionsKey const UIPageViewControllerOptionSpineLocationKey;
```

<a id="Discussion"></a>

## Discussion

For possible values, see [UIPageViewControllerSpineLocation](../spinelocation-swift.enum.md). A spine location is only valid if the transition style is [UIPageViewControllerTransitionStylePageCurl](../transitionstyle-swift.enum/pagecurl.md).

If the transition style is [UIPageViewControllerTransitionStylePageCurl](../transitionstyle-swift.enum/pagecurl.md), the default value for this property is [UIPageViewControllerSpineLocationMin](../spinelocation-swift.enum/min.md); otherwise, the default is [UIPageViewControllerSpineLocationNone](../spinelocation-swift.enum/none.md).

## See Also

### Page options

- [UIPageViewControllerOptionInterPageSpacingKey](interpagespacing.md): Space between pages, in points.
