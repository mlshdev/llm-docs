> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipageviewcontroller/isdoublesided

# isDoubleSided (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether content appears on the back of pages.

## Declaration

```swift
var isDoubleSided: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

If the back of pages has no content (the value is [false](https://developer.apple.com/documentation/swift/false)), then the content on the front of the page will partially show through to the back when turning pages.

If the spine is located in the middle, the value must be [true](https://developer.apple.com/documentation/swift/true). Setting it to [false](https://developer.apple.com/documentation/swift/false) with the spine located in the middle raises an exception.

## See Also

### Display Options

- [navigationOrientation](navigationorientation-swift.property.md): The direction along which navigation occurs.
- [UIPageViewController.NavigationOrientation](navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [spineLocation](spinelocation-swift.property.md): The location of the spine.
- [UIPageViewController.SpineLocation](spinelocation-swift.enum.md): Locations for the spine.
- [transitionStyle](transitionstyle-swift.property.md): The style used to transition between view controllers.
- [UIPageViewController.TransitionStyle](transitionstyle-swift.enum.md): Styles for the page-turn transition.

# doubleSided (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether content appears on the back of pages.

## Declaration

```objectivec
@property (nonatomic, getter=isDoubleSided) BOOL doubleSided;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

If the back of pages has no content (the value is [false](https://developer.apple.com/documentation/swift/false)), then the content on the front of the page will partially show through to the back when turning pages.

If the spine is located in the middle, the value must be [true](https://developer.apple.com/documentation/swift/true). Setting it to [false](https://developer.apple.com/documentation/swift/false) with the spine located in the middle raises an exception.

## See Also

### Display Options

- [navigationOrientation](navigationorientation-swift.property.md): The direction along which navigation occurs.
- [UIPageViewControllerNavigationOrientation](navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [spineLocation](spinelocation-swift.property.md): The location of the spine.
- [UIPageViewControllerSpineLocation](spinelocation-swift.enum.md): Locations for the spine.
- [transitionStyle](transitionstyle-swift.property.md): The style used to transition between view controllers.
- [UIPageViewControllerTransitionStyle](transitionstyle-swift.enum.md): Styles for the page-turn transition.
