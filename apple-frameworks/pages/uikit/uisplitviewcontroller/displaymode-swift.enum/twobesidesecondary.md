> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/displaymode-swift.enum/twobesidesecondary](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/displaymode-swift.enum/twobesidesecondary)

# UISplitViewController.DisplayMode.twoBesideSecondary (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Two sidebars appear side-by-side with the secondary view controller.

## Declaration

```swift
case twoBesideSecondary
```

<a id="Discussion"></a>

## Discussion

This display mode is only available for [UISplitViewController.Style.tripleColumn](../style-swift.enum/triplecolumn.md) interfaces.

This display mode shows both sidebars tiled next to the secondary view controller. The primary view controller is displayed on the side specified by [primaryEdge](../primaryedge-swift.property.md), followed by the supplementary view controller, and finally the secondary view controller. The secondary view controller’s view is fully interactive.

This display mode is available for the [UISplitViewController.SplitBehavior.tile](../splitbehavior-swift.enum/tile.md) split behavior.

## See Also

### Constants

- [UISplitViewController.DisplayMode.automatic](automatic.md): The split view controller automatically decides the most appropriate display mode based on the device and the current app size.
- [UISplitViewController.DisplayMode.secondaryOnly](secondaryonly.md): Only the secondary view controller is shown onscreen.
- [UISplitViewController.DisplayMode.oneBesideSecondary](onebesidesecondary.md): One sidebar appears side-by-side with the secondary view controller.
- [UISplitViewController.DisplayMode.oneOverSecondary](oneoversecondary.md): One sidebar is layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewController.DisplayMode.twoOverSecondary](twooversecondary.md): Two sidebars are layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewController.DisplayMode.twoDisplaceSecondary](twodisplacesecondary.md): Two sidebars displace the secondary view controller instead of overlapping it, moving it partially offscreen.

# UISplitViewControllerDisplayModeTwoBesideSecondary (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Two sidebars appear side-by-side with the secondary view controller.

## Declaration

```objectivec
UISplitViewControllerDisplayModeTwoBesideSecondary
```

<a id="Discussion"></a>

## Discussion

This display mode is only available for [UISplitViewControllerStyleTripleColumn](../style-swift.enum/triplecolumn.md) interfaces.

This display mode shows both sidebars tiled next to the secondary view controller. The primary view controller is displayed on the side specified by [primaryEdge](../primaryedge-swift.property.md), followed by the supplementary view controller, and finally the secondary view controller. The secondary view controller’s view is fully interactive.

This display mode is available for the [UISplitViewControllerSplitBehaviorTile](../splitbehavior-swift.enum/tile.md) split behavior.

## See Also

### Constants

- [UISplitViewControllerDisplayModeAutomatic](automatic.md): The split view controller automatically decides the most appropriate display mode based on the device and the current app size.
- [UISplitViewControllerDisplayModeSecondaryOnly](secondaryonly.md): Only the secondary view controller is shown onscreen.
- [UISplitViewControllerDisplayModeOneBesideSecondary](onebesidesecondary.md): One sidebar appears side-by-side with the secondary view controller.
- [UISplitViewControllerDisplayModeOneOverSecondary](oneoversecondary.md): One sidebar is layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewControllerDisplayModeTwoOverSecondary](twooversecondary.md): Two sidebars are layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewControllerDisplayModeTwoDisplaceSecondary](twodisplacesecondary.md): Two sidebars displace the secondary view controller instead of overlapping it, moving it partially offscreen.
