> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/displaymode-swift.enum](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/displaymode-swift.enum)

# UISplitViewController.DisplayMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that describe the possible arrangements for a split view interface.

## Declaration

```swift
enum DisplayMode
```

<a id="overview"></a>

## Overview

A split view controller’s display mode controls the visual arrangement of its child view controllers. You set a preferred display mode by using the [preferredDisplayMode](preferreddisplaymode.md) property, and the split view controller updates itself and reflects the actual display mode in the [displayMode](displaymode-swift.property.md) property.

Display modes apply to a split view controller in an expanded arrangement. When the split view interface is collapsed — when [isCollapsed](iscollapsed.md) is [true](https://developer.apple.com/documentation/swift/true) — the display mode has no impact on the appearance of the split view controller interface.

A split view controller’s split behavior ([splitBehavior](splitbehavior-swift.property.md)) affects its possible display modes. For more information, see [UISplitViewController.SplitBehavior](splitbehavior-swift.enum.md).

| Split Behavior | Possible Display Modes |
| --- | --- |
| Tile | [UISplitViewController.DisplayMode.secondaryOnly](displaymode-swift.enum/secondaryonly.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewController.DisplayMode.oneBesideSecondary](displaymode-swift.enum/onebesidesecondary.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewController.DisplayMode.twoBesideSecondary](displaymode-swift.enum/twobesidesecondary.md) |
| Overlay | [UISplitViewController.DisplayMode.secondaryOnly](displaymode-swift.enum/secondaryonly.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewController.DisplayMode.oneOverSecondary](displaymode-swift.enum/oneoversecondary.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewController.DisplayMode.twoOverSecondary](displaymode-swift.enum/twooversecondary.md) |
| Displace | [UISplitViewController.DisplayMode.secondaryOnly](displaymode-swift.enum/secondaryonly.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewController.DisplayMode.oneBesideSecondary](displaymode-swift.enum/onebesidesecondary.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewController.DisplayMode.twoDisplaceSecondary](displaymode-swift.enum/twodisplacesecondary.md) |

There are several ways for user interaction to change the current display mode. Based on the type of user interaction (gesture or button tap), the display mode can transition between a set of predetermined states.

![Flow diagram showing the possible state transitions between display modes, based on split behavior and column style.](https://developer.apple.com/images/com.apple.uikit/UISplitViewController-3@2x.png)

## Topics

### Constants

- [UISplitViewController.DisplayMode.automatic](displaymode-swift.enum/automatic.md): The split view controller automatically decides the most appropriate display mode based on the device and the current app size.
- [UISplitViewController.DisplayMode.secondaryOnly](displaymode-swift.enum/secondaryonly.md): Only the secondary view controller is shown onscreen.
- [UISplitViewController.DisplayMode.oneBesideSecondary](displaymode-swift.enum/onebesidesecondary.md): One sidebar appears side-by-side with the secondary view controller.
- [UISplitViewController.DisplayMode.oneOverSecondary](displaymode-swift.enum/oneoversecondary.md): One sidebar is layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewController.DisplayMode.twoBesideSecondary](displaymode-swift.enum/twobesidesecondary.md): Two sidebars appear side-by-side with the secondary view controller.
- [UISplitViewController.DisplayMode.twoOverSecondary](displaymode-swift.enum/twooversecondary.md): Two sidebars are layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewController.DisplayMode.twoDisplaceSecondary](displaymode-swift.enum/twodisplacesecondary.md): Two sidebars displace the secondary view controller instead of overlapping it, moving it partially offscreen.

### Deprecated

- [primaryHidden](displaymode-swift.enum/primaryhidden.md): Deprecated. The primary view controller is hidden.
- [allVisible](displaymode-swift.enum/allvisible.md): Deprecated. The primary and secondary view controllers are displayed side-by-side onscreen.
- [primaryOverlay](displaymode-swift.enum/primaryoverlay.md): Deprecated. The primary view controller is layered on top of the secondary view controller, leaving the secondary view controller partially visible.

### Initializers

- [init(rawValue:)](displaymode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the display mode

- [preferredDisplayMode](preferreddisplaymode.md): The preferred arrangement of the split view interface.
- [displayMode](displaymode-swift.property.md): The current arrangement of the split view interface.
- [displayModeButtonItem](displaymodebuttonitem.md): A button that changes the display mode of the split view controller.
- [presentsWithGesture](presentswithgesture.md): Specifies whether a hidden view controller can be presented and dismissed using a swipe gesture.
- [showsSecondaryOnlyButton](showssecondaryonlybutton.md): Specifies whether the secondary view controller shows a button to toggle to and from the secondary-only display mode.
- [displayModeButtonVisibility](displaymodebuttonvisibility-swift.property.md): A setting that determines whether the display mode button is visible in the interface.
- [UISplitViewController.DisplayModeButtonVisibility](displaymodebuttonvisibility-swift.enum.md): Constants that determine the visibility of the display mode button.

# UISplitViewControllerDisplayMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that describe the possible arrangements for a split view interface.

## Declaration

```objectivec
enum UISplitViewControllerDisplayMode : NSInteger;
```

<a id="overview"></a>

## Overview

A split view controller’s display mode controls the visual arrangement of its child view controllers. You set a preferred display mode by using the [preferredDisplayMode](preferreddisplaymode.md) property, and the split view controller updates itself and reflects the actual display mode in the [displayMode](displaymode-swift.property.md) property.

Display modes apply to a split view controller in an expanded arrangement. When the split view interface is collapsed — when [collapsed](iscollapsed.md) is [true](https://developer.apple.com/documentation/swift/true) — the display mode has no impact on the appearance of the split view controller interface.

A split view controller’s split behavior ([splitBehavior](splitbehavior-swift.property.md)) affects its possible display modes. For more information, see [UISplitViewControllerSplitBehavior](splitbehavior-swift.enum.md).

| Split Behavior | Possible Display Modes |
| --- | --- |
| Tile | [UISplitViewControllerDisplayModeSecondaryOnly](displaymode-swift.enum/secondaryonly.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewControllerDisplayModeOneBesideSecondary](displaymode-swift.enum/onebesidesecondary.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewControllerDisplayModeTwoBesideSecondary](displaymode-swift.enum/twobesidesecondary.md) |
| Overlay | [UISplitViewControllerDisplayModeSecondaryOnly](displaymode-swift.enum/secondaryonly.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewControllerDisplayModeOneOverSecondary](displaymode-swift.enum/oneoversecondary.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewControllerDisplayModeTwoOverSecondary](displaymode-swift.enum/twooversecondary.md) |
| Displace | [UISplitViewControllerDisplayModeSecondaryOnly](displaymode-swift.enum/secondaryonly.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewControllerDisplayModeOneBesideSecondary](displaymode-swift.enum/onebesidesecondary.md) ![](https://developer.apple.com/images/com.apple.uikit/spacer.png) [UISplitViewControllerDisplayModeTwoDisplaceSecondary](displaymode-swift.enum/twodisplacesecondary.md) |

There are several ways for user interaction to change the current display mode. Based on the type of user interaction (gesture or button tap), the display mode can transition between a set of predetermined states.

![Flow diagram showing the possible state transitions between display modes, based on split behavior and column style.](https://developer.apple.com/images/com.apple.uikit/UISplitViewController-3@2x.png)

## Topics

### Constants

- [UISplitViewControllerDisplayModeAutomatic](displaymode-swift.enum/automatic.md): The split view controller automatically decides the most appropriate display mode based on the device and the current app size.
- [UISplitViewControllerDisplayModeSecondaryOnly](displaymode-swift.enum/secondaryonly.md): Only the secondary view controller is shown onscreen.
- [UISplitViewControllerDisplayModeOneBesideSecondary](displaymode-swift.enum/onebesidesecondary.md): One sidebar appears side-by-side with the secondary view controller.
- [UISplitViewControllerDisplayModeOneOverSecondary](displaymode-swift.enum/oneoversecondary.md): One sidebar is layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewControllerDisplayModeTwoBesideSecondary](displaymode-swift.enum/twobesidesecondary.md): Two sidebars appear side-by-side with the secondary view controller.
- [UISplitViewControllerDisplayModeTwoOverSecondary](displaymode-swift.enum/twooversecondary.md): Two sidebars are layered on top of the secondary view controller, leaving the secondary view controller partially visible.
- [UISplitViewControllerDisplayModeTwoDisplaceSecondary](displaymode-swift.enum/twodisplacesecondary.md): Two sidebars displace the secondary view controller instead of overlapping it, moving it partially offscreen.

### Deprecated

- [UISplitViewControllerDisplayModePrimaryHidden](displaymode-swift.enum/primaryhidden.md): Deprecated. The primary view controller is hidden.
- [UISplitViewControllerDisplayModeAllVisible](displaymode-swift.enum/allvisible.md): Deprecated. The primary and secondary view controllers are displayed side-by-side onscreen.
- [UISplitViewControllerDisplayModePrimaryOverlay](displaymode-swift.enum/primaryoverlay.md): Deprecated. The primary view controller is layered on top of the secondary view controller, leaving the secondary view controller partially visible.

## See Also

### Managing the display mode

- [preferredDisplayMode](preferreddisplaymode.md): The preferred arrangement of the split view interface.
- [displayMode](displaymode-swift.property.md): The current arrangement of the split view interface.
- [displayModeButtonItem](displaymodebuttonitem.md): A button that changes the display mode of the split view controller.
- [presentsWithGesture](presentswithgesture.md): Specifies whether a hidden view controller can be presented and dismissed using a swipe gesture.
- [showsSecondaryOnlyButton](showssecondaryonlybutton.md): Specifies whether the secondary view controller shows a button to toggle to and from the secondary-only display mode.
- [displayModeButtonVisibility](displaymodebuttonvisibility-swift.property.md): A setting that determines whether the display mode button is visible in the interface.
- [UISplitViewControllerDisplayModeButtonVisibility](displaymodebuttonvisibility-swift.enum.md): Constants that determine the visibility of the display mode button.
