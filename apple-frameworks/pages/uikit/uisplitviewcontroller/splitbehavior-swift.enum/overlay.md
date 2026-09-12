> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/splitbehavior-swift.enum/overlay](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/splitbehavior-swift.enum/overlay)

# UISplitViewController.SplitBehavior.overlay (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+

The sidebars are layered on top of the secondary view controller, leaving the secondary view controller partially visible.

## Declaration

```swift
case overlay
```

<a id="Discussion"></a>

## Discussion

This split behavior shows one or both sidebars layered on top of the secondary view controller, partially obscuring it. The secondary view controller is dimmed out, preventing interaction with its view.

The possible display modes for this split behavior are:

- [UISplitViewController.DisplayMode.secondaryOnly](../displaymode-swift.enum/secondaryonly.md)
- [UISplitViewController.DisplayMode.oneOverSecondary](../displaymode-swift.enum/oneoversecondary.md)
- [UISplitViewController.DisplayMode.twoOverSecondary](../displaymode-swift.enum/twooversecondary.md)

If the current display mode is not [UISplitViewController.DisplayMode.twoOverSecondary](../displaymode-swift.enum/twooversecondary.md) and [presentsWithGesture](../presentswithgesture.md) is [true](https://developer.apple.com/documentation/swift/true), the split view controller presents a special bar button item styled as a back-chevron icon. When a user taps this button, it changes the current display mode from [UISplitViewController.DisplayMode.secondaryOnly](../displaymode-swift.enum/secondaryonly.md) to [UISplitViewController.DisplayMode.oneOverSecondary](../displaymode-swift.enum/oneoversecondary.md), and from [UISplitViewController.DisplayMode.oneOverSecondary](../displaymode-swift.enum/oneoversecondary.md) to [UISplitViewController.DisplayMode.twoOverSecondary](../displaymode-swift.enum/twooversecondary.md).

## See Also

### Constants

- [UISplitViewController.SplitBehavior.automatic](automatic.md): The split view controller automatically decides the most appropriate split behavior based on the device and the current app size.
- [UISplitViewController.SplitBehavior.tile](tile.md): The sidebars and secondary view controller appear tiled side-by-side.
- [UISplitViewController.SplitBehavior.displace](displace.md): The sidebars displace the secondary view controller instead of overlapping it, moving it partially offscreen.

# UISplitViewControllerSplitBehaviorOverlay (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+

The sidebars are layered on top of the secondary view controller, leaving the secondary view controller partially visible.

## Declaration

```objectivec
UISplitViewControllerSplitBehaviorOverlay
```

<a id="Discussion"></a>

## Discussion

This split behavior shows one or both sidebars layered on top of the secondary view controller, partially obscuring it. The secondary view controller is dimmed out, preventing interaction with its view.

The possible display modes for this split behavior are:

- [UISplitViewControllerDisplayModeSecondaryOnly](../displaymode-swift.enum/secondaryonly.md)
- [UISplitViewControllerDisplayModeOneOverSecondary](../displaymode-swift.enum/oneoversecondary.md)
- [UISplitViewControllerDisplayModeTwoOverSecondary](../displaymode-swift.enum/twooversecondary.md)

If the current display mode is not [UISplitViewControllerDisplayModeTwoOverSecondary](../displaymode-swift.enum/twooversecondary.md) and [presentsWithGesture](../presentswithgesture.md) is [true](https://developer.apple.com/documentation/swift/true), the split view controller presents a special bar button item styled as a back-chevron icon. When a user taps this button, it changes the current display mode from [UISplitViewControllerDisplayModeSecondaryOnly](../displaymode-swift.enum/secondaryonly.md) to [UISplitViewControllerDisplayModeOneOverSecondary](../displaymode-swift.enum/oneoversecondary.md), and from [UISplitViewControllerDisplayModeOneOverSecondary](../displaymode-swift.enum/oneoversecondary.md) to [UISplitViewControllerDisplayModeTwoOverSecondary](../displaymode-swift.enum/twooversecondary.md).

## See Also

### Constants

- [UISplitViewControllerSplitBehaviorAutomatic](automatic.md): The split view controller automatically decides the most appropriate split behavior based on the device and the current app size.
- [UISplitViewControllerSplitBehaviorTile](tile.md): The sidebars and secondary view controller appear tiled side-by-side.
- [UISplitViewControllerSplitBehaviorDisplace](displace.md): The sidebars displace the secondary view controller instead of overlapping it, moving it partially offscreen.
