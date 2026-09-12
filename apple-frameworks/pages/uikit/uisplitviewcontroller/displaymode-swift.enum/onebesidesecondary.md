> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/displaymode-swift.enum/onebesidesecondary](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/displaymode-swift.enum/onebesidesecondary)

# UISplitViewController.DisplayMode.oneBesideSecondary (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

One sidebar appears side-by-side with the secondary view controller.

## Declaration

```swift
case oneBesideSecondary
```

<a id="Discussion"></a>

## Discussion

This display mode shows one sidebar tiled next to the secondary view controller. The sidebar shown is the primary column for [UISplitViewController.Style.doubleColumn](../style-swift.enum/doublecolumn.md) interfaces and the supplementary column for [UISplitViewController.Style.tripleColumn](../style-swift.enum/triplecolumn.md) interfaces. The sidebar is displayed on the side specified by [primaryEdge](../primaryedge-swift.property.md), followed by the secondary view controller. The secondary view controller’s view is fully interactive.

This display mode is available for the [UISplitViewController.SplitBehavior.tile](../splitbehavior-swift.enum/tile.md) and [UISplitViewController.SplitBehavior.displace](../splitbehavior-swift.enum/displace.md) split behaviors.

## See Also

### Constants

- [UISplitViewController.DisplayMode.automatic](automatic.md): The split view controller automatically decides the most appropriate display mode based on the device and the current app size.
- [UISplitViewController.DisplayMode.secondaryOnly](secondaryonly.md): Only the secondary view controller is shown onscreen.
- [UISplitViewController.DisplayMode.oneOverSecondary](oneoversecondary.md): One sidebar is layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewController.DisplayMode.twoBesideSecondary](twobesidesecondary.md): Two sidebars appear side-by-side with the secondary view controller.
- [UISplitViewController.DisplayMode.twoOverSecondary](twooversecondary.md): Two sidebars are layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewController.DisplayMode.twoDisplaceSecondary](twodisplacesecondary.md): Two sidebars displace the secondary view controller instead of overlapping it, moving it partially offscreen.

# UISplitViewControllerDisplayModeOneBesideSecondary (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

One sidebar appears side-by-side with the secondary view controller.

## Declaration

```objectivec
UISplitViewControllerDisplayModeOneBesideSecondary
```

<a id="Discussion"></a>

## Discussion

This display mode shows one sidebar tiled next to the secondary view controller. The sidebar shown is the primary column for [UISplitViewControllerStyleDoubleColumn](../style-swift.enum/doublecolumn.md) interfaces and the supplementary column for [UISplitViewControllerStyleTripleColumn](../style-swift.enum/triplecolumn.md) interfaces. The sidebar is displayed on the side specified by [primaryEdge](../primaryedge-swift.property.md), followed by the secondary view controller. The secondary view controller’s view is fully interactive.

This display mode is available for the [UISplitViewControllerSplitBehaviorTile](../splitbehavior-swift.enum/tile.md) and [UISplitViewControllerSplitBehaviorDisplace](../splitbehavior-swift.enum/displace.md) split behaviors.

## See Also

### Constants

- [UISplitViewControllerDisplayModeAutomatic](automatic.md): The split view controller automatically decides the most appropriate display mode based on the device and the current app size.
- [UISplitViewControllerDisplayModeSecondaryOnly](secondaryonly.md): Only the secondary view controller is shown onscreen.
- [UISplitViewControllerDisplayModeOneOverSecondary](oneoversecondary.md): One sidebar is layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewControllerDisplayModeTwoBesideSecondary](twobesidesecondary.md): Two sidebars appear side-by-side with the secondary view controller.
- [UISplitViewControllerDisplayModeTwoOverSecondary](twooversecondary.md): Two sidebars are layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewControllerDisplayModeTwoDisplaceSecondary](twodisplacesecondary.md): Two sidebars displace the secondary view controller instead of overlapping it, moving it partially offscreen.
