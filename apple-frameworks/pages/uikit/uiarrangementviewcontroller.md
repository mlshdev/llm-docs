> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller

# UIArrangementViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A view controller that presents its container view controllers through an arrangement.

## Declaration

```swift
@MainActor class UIArrangementViewController
```

<a id="overview"></a>

## Overview

You create an arrangement view controller and set a primary and secondary view controller. The arrangement view controller computes a layout for its content based on the context it is presented in, including the available size, size class, and hardware features.

Use [updateArrangement(\_:animated:)](uiarrangementviewcontroller/updatearrangement%28__animated_%29.md) to choose how the arrangement view lays out its content. The default style is [UISplitArrangement](uisplitarrangement-swift.struct.md). The other built-in style is [UIOverlayArrangement](uioverlayarrangement-swift.struct.md).

<a id="Overlay-arrangements"></a>

### Overlay arrangements

An overlay arrangement layers the primary view on top of the secondary view in z-order. This layout is well-suited for full-screen experiences like media players, where playback controls overlay a video surface:

**Swift**

```swift
let arrangementVC = UIArrangementViewController()

let primaryVC = PrimaryViewController()
arrangementVC.setViewController(primaryVC, for: .primary)

let secondaryVC = SecondaryViewController()
arrangementVC.setViewController(secondaryVC, for: .secondary)

arrangementVC.updateArrangement(.overlay.axes(.horizontal))
```

**Objective-C**

```objc
self.arrangementVC = [[UIArrangementViewController alloc] init];

self.primaryVC = [[PrimaryController alloc] init];
[self.arrangementVC setViewController:self.primaryVC forPlacement:UIArrangementViewControllerViewPlacementPrimary];

self.secondaryVC = [[SecondaryController alloc] init];
[self.arrangementVC setViewController:self.secondaryVC forPlacement:UIArrangementViewControllerViewPlacementSecondary];

UIOverlayArrangement *arrangement = [UIOverlayArrangement overlayArrangement];
arrangement.axes = UIAxisHorizontal;
[self.arrangementVC updateArrangement:arrangement];
```

When the environment changes, such as when a foldable device is folded, the overlay arrangement can transition its views from a layered layout into a side-by-side layout. Use [axes(\_:)](uioverlayarrangement-swift.struct/axes%28__%29.md) to control which axes are supported.

<a id="Split-arrangements"></a>

### Split arrangements

A split arrangement places the primary and secondary views side-by-side along one or more axes. Use this layout for experiences that display two distinct pieces of content simultaneously, such as a music player alongside its lyrics:

**Swift**

```swift
let arrangementVC = UIArrangementViewController()

let primaryVC = PrimaryViewController()
arrangementVC.setViewController(primaryVC, for: .primary)

let secondaryVC = SecondaryViewController()
arrangementVC.setViewController(secondaryVC, for: .secondary)

arrangementVC.updateArrangement(.split.axes(.horizontal))
```

**Objective-C**

```objc
self.arrangementVC = [[UIArrangementViewController alloc] init];

self.primaryVC = [[PrimaryController alloc] init];
[self.arrangementVC setViewController:self.primaryVC forPlacement:UIArrangementViewControllerViewPlacementPrimary];

self.secondaryVC = [[SecondaryController alloc] init];
[self.arrangementVC setViewController:self.secondaryVC forPlacement:UIArrangementViewControllerViewPlacementSecondary];

UISplitArrangement *arrangement = [UISplitArrangement splitArrangement];
arrangement.axes = UIAxisHorizontal;
[self.arrangementVC updateArrangement:arrangement];
```

The split arrangement adapts its axis based on the available size and size class. You can constrain which axes the split supports using [axes(\_:)](uisplitarrangement-swift.struct/axes%28__%29.md).

## Topics

### Creating an arrangement view controller

- [init()](uiarrangementviewcontroller/init%28%29.md): Beta. Creates an arrangement view controller.

### Configuring the arrangement

- [UIArrangementViewController.Arrangement](uiarrangementviewcontroller/arrangement.md): Beta. A type that describes how an arrangement view controller lays out its view controllers.
- [UIOverlayArrangement](uioverlayarrangement-swift.struct.md): Beta. An arrangement that overlays views.
- [UISplitArrangement](uisplitarrangement-swift.struct.md): Beta. An arrangement that splits views.
- [updateArrangement(\_:animated:)](uiarrangementviewcontroller/updatearrangement%28__animated_%29.md): Beta. Updates the arrangement of the view controller.

### Managing arrangement view controllers

- [UIArrangementViewController.ViewPlacement](uiarrangementviewcontroller/viewplacement.md): Beta. A placement of a view controller within an arrangement view controller.
- [viewController(for:)](uiarrangementviewcontroller/viewcontroller%28for_%29.md): Beta. The view controller in the arrangement for the provided placement.
- [setViewController(\_:for:animated:)](uiarrangementviewcontroller/setviewcontroller%28__for_animated_%29.md): Beta. Sets the view controller in the arrangement for a specific placement.
- [placement(for:)](uiarrangementviewcontroller/placement%28for_%29.md): Beta. Returns the placement for the provided view controller in the arrangement.

### Getting view state

- [UIArrangementViewController.ViewState](uiarrangementviewcontroller/viewstate.md): Beta. The state of a view within an arrangement.
- [state(for:)](uiarrangementviewcontroller/state%28for_%29.md): Beta. Returns the view state for a placement in the arrangement.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentContainer](uicontentcontainer.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIStateRestoring](uistaterestoring.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Container view controllers

- [Creating a custom container view controller](creating-a-custom-container-view-controller.md): Create a composite interface by combining content from one or more view controllers with other custom views.
- [UISplitViewController](uisplitviewcontroller.md): A container view controller that implements a hierarchical interface.
- [UINavigationController](uinavigationcontroller.md): A container view controller that defines a stack-based scheme for navigating hierarchical content.
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UINavigationItem](uinavigationitem.md): The items that a navigation bar displays when the associated view controller is visible.
- [UITabBarController](uitabbarcontroller.md): A container view controller that manages a multiselection interface, where the selection determines which child view controller to display.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UITab](uitab.md): An object that manages a tab in a tab bar.
- [UITabAccessory](uitabaccessory.md)
- [UISearchTab](uisearchtab.md): A tab subclass that represents the system’s search tab.
- [UITabGroup](uitabgroup.md): An object that manages a collection of tab objects.
- [UIPageViewController](uipageviewcontroller.md): A container view controller that manages navigation between pages of content, where a subview controller manages each page.

# UIArrangementViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A view controller that presents its container view controllers through an arrangement.

## Declaration

```objectivec
@interface UIArrangementViewController : UIViewController
```

<a id="overview"></a>

## Overview

You create an arrangement view controller and set a primary and secondary view controller. The arrangement view controller computes a layout for its content based on the context it is presented in, including the available size, size class, and hardware features.

Use [updateArrangement(\_:animated:)](uiarrangementviewcontroller/updatearrangement%28__animated_%29.md) to choose how the arrangement view lays out its content. The default style is [UISplitArrangement](uisplitarrangement-swift.struct.md). The other built-in style is [UIOverlayArrangement](uioverlayarrangement-swift.struct.md).

<a id="Overlay-arrangements"></a>

### Overlay arrangements

An overlay arrangement layers the primary view on top of the secondary view in z-order. This layout is well-suited for full-screen experiences like media players, where playback controls overlay a video surface:

**Swift**

```swift
let arrangementVC = UIArrangementViewController()

let primaryVC = PrimaryViewController()
arrangementVC.setViewController(primaryVC, for: .primary)

let secondaryVC = SecondaryViewController()
arrangementVC.setViewController(secondaryVC, for: .secondary)

arrangementVC.updateArrangement(.overlay.axes(.horizontal))
```

**Objective-C**

```objc
self.arrangementVC = [[UIArrangementViewController alloc] init];

self.primaryVC = [[PrimaryController alloc] init];
[self.arrangementVC setViewController:self.primaryVC forPlacement:UIArrangementViewControllerViewPlacementPrimary];

self.secondaryVC = [[SecondaryController alloc] init];
[self.arrangementVC setViewController:self.secondaryVC forPlacement:UIArrangementViewControllerViewPlacementSecondary];

UIOverlayArrangement *arrangement = [UIOverlayArrangement overlayArrangement];
arrangement.axes = UIAxisHorizontal;
[self.arrangementVC updateArrangement:arrangement];
```

When the environment changes, such as when a foldable device is folded, the overlay arrangement can transition its views from a layered layout into a side-by-side layout. Use [axes(\_:)](uioverlayarrangement-swift.struct/axes%28__%29.md) to control which axes are supported.

<a id="Split-arrangements"></a>

### Split arrangements

A split arrangement places the primary and secondary views side-by-side along one or more axes. Use this layout for experiences that display two distinct pieces of content simultaneously, such as a music player alongside its lyrics:

**Swift**

```swift
let arrangementVC = UIArrangementViewController()

let primaryVC = PrimaryViewController()
arrangementVC.setViewController(primaryVC, for: .primary)

let secondaryVC = SecondaryViewController()
arrangementVC.setViewController(secondaryVC, for: .secondary)

arrangementVC.updateArrangement(.split.axes(.horizontal))
```

**Objective-C**

```objc
self.arrangementVC = [[UIArrangementViewController alloc] init];

self.primaryVC = [[PrimaryController alloc] init];
[self.arrangementVC setViewController:self.primaryVC forPlacement:UIArrangementViewControllerViewPlacementPrimary];

self.secondaryVC = [[SecondaryController alloc] init];
[self.arrangementVC setViewController:self.secondaryVC forPlacement:UIArrangementViewControllerViewPlacementSecondary];

UISplitArrangement *arrangement = [UISplitArrangement splitArrangement];
arrangement.axes = UIAxisHorizontal;
[self.arrangementVC updateArrangement:arrangement];
```

The split arrangement adapts its axis based on the available size and size class. You can constrain which axes the split supports using [axes(\_:)](uisplitarrangement-swift.struct/axes%28__%29.md).

## Topics

### Creating an arrangement view controller

- [init](uiarrangementviewcontroller/init%28%29.md): Beta. Creates an arrangement view controller.

### Configuring the arrangement

- [UIArrangement](uiarrangement.md): Beta. A type that describes how an arrangement view controller lays out its view controllers.
- [UIOverlayArrangement](uioverlayarrangement-c.class.md): Beta. An arrangement that overlays views.
- [UISplitArrangement](uisplitarrangement-c.class.md): Beta. An arrangement that splits views.
- [updateArrangement:](uiarrangementviewcontroller/updatearrangement_.md): Beta. Updates the arrangement of the view controller.
- [updateArrangement:animated:](uiarrangementviewcontroller/updatearrangement_animated_.md): Beta. Updates the arrangement of the view controller.

### Managing arrangement view controllers

- [UIArrangementViewControllerViewPlacement](uiarrangementviewcontrollerviewplacement.md): Beta. A placement of a view within an arrangement view controller. Use this type to define placement for container views within the arrangement view controller.
- [viewControllerForPlacement:](uiarrangementviewcontroller/viewcontrollerforplacement_.md): Beta. The view controller in the arrangement for the provided placement.
- [setViewController:forPlacement:](uiarrangementviewcontroller/setviewcontroller_forplacement_.md): Beta. Sets the view controller in the arrangement for a specific placement.
- [setViewController:forPlacement:animated:](uiarrangementviewcontroller/setviewcontroller_forplacement_animated_.md): Beta. Sets the view controller in the arrangement for a specific placement.
- [placementForViewController:](uiarrangementviewcontroller/placementforviewcontroller_.md): Beta. The placement for the provided view controller in the arrangement. Will return `UIArrangementViewControllerViewPlacementNone` if the provided view controller is not a view controller provided to the arrangement view controller with an explicit placement.

### Getting view state

- [UIArrangementViewState](uiarrangementviewstate.md): Beta. The state of a view within an arrangement.
- [stateForPlacement:](uiarrangementviewcontroller/stateforplacement_.md): Beta. Returns the arrangement view state for a placement.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

## See Also

### Container view controllers

- [Creating a custom container view controller](creating-a-custom-container-view-controller.md): Create a composite interface by combining content from one or more view controllers with other custom views.
- [UISplitViewController](uisplitviewcontroller.md): A container view controller that implements a hierarchical interface.
- [UINavigationController](uinavigationcontroller.md): A container view controller that defines a stack-based scheme for navigating hierarchical content.
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UINavigationItem](uinavigationitem.md): The items that a navigation bar displays when the associated view controller is visible.
- [UITabBarController](uitabbarcontroller.md): A container view controller that manages a multiselection interface, where the selection determines which child view controller to display.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UITab](uitab.md): An object that manages a tab in a tab bar.
- [UITabAccessory](uitabaccessory.md)
- [UISearchTab](uisearchtab.md): A tab subclass that represents the system’s search tab.
- [UITabGroup](uitabgroup.md): An object that manages a collection of tab objects.
- [UIPageViewController](uipageviewcontroller.md): A container view controller that manages navigation between pages of content, where a subview controller manages each page.
