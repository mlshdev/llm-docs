> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate)

# UITabBarControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods you implement to customize the behavior of a tab bar.

## Declaration

```swift
@MainActor protocol UITabBarControllerDelegate : NSObjectProtocol
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="overview"></a>

## Overview

You use the [UITabBarControllerDelegate](uitabbarcontrollerdelegate.md) protocol when you want to augment the behavior of a tab bar. In particular, you can use it to determine whether specific tabs should be selected, to perform actions after a tab is selected, or to perform actions before or after the user customizes the order of the tabs. After implementing these methods in your custom object, you should then assign that object to the [delegate](uitabbarcontroller/delegate.md) property of the corresponding [UITabBarController](uitabbarcontroller.md) object.

All of the methods in this protocol are optional. For more information on how to use and configure tab bar controllers and their delegates, see [View Controller Programming Guide for iOS](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457).

## Topics

### Managing tab bar selections

- [tabBarController(\_:shouldSelect:)](uitabbarcontrollerdelegate/tabbarcontroller%28__shouldselect_%29.md): Asks the delegate whether the specified view controller should be made active.
- [tabBarController(\_:didSelect:)](uitabbarcontrollerdelegate/tabbarcontroller%28__didselect_%29.md): Tells the delegate that the user selected an item in the tab bar.

### Managing tab bar customizations

- [tabBarController(\_:willBeginCustomizing:)](uitabbarcontrollerdelegate/tabbarcontroller%28__willbegincustomizing_%29.md): Tells the delegate that the tab bar customization sheet is about to be displayed.
- [tabBarController(\_:willEndCustomizing:changed:)](uitabbarcontrollerdelegate/tabbarcontroller%28__willendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet is about to be dismissed.
- [tabBarController(\_:didEndCustomizing:changed:)](uitabbarcontrollerdelegate/tabbarcontroller%28__didendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet was dismissed.

### Overriding view rotation settings

- [tabBarControllerSupportedInterfaceOrientations(\_:)](uitabbarcontrollerdelegate/tabbarcontrollersupportedinterfaceorientations%28__%29.md): Called to allow the delegate to provide the complete set of supported interface orientations for the tab bar controller.
- [tabBarControllerPreferredInterfaceOrientationForPresentation(\_:)](uitabbarcontrollerdelegate/tabbarcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Called to allow the delegate to provide the preferred orientation for presentation of the tab bar controller.

### Supporting custom tab bar transition animations

- [tabBarController(\_:animationControllerForTransitionFrom:to:)](uitabbarcontrollerdelegate/tabbarcontroller%28__animationcontrollerfortransitionfrom_to_%29.md): Called to allow the delegate to return a [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md) delegate object for use during a noninteractive tab bar view controller transition.
- [tabBarController(\_:interactionControllerFor:)](uitabbarcontrollerdelegate/tabbarcontroller%28__interactioncontrollerfor_%29.md): Called to allow the delegate to return a [UIViewControllerInteractiveTransitioning](uiviewcontrollerinteractivetransitioning.md) delegate object for use during an animated tab bar transition.

### Instance Methods

- [tabBarController(\_:didSelectTab:previousTab:)](uitabbarcontrollerdelegate/tabbarcontroller%28__didselecttab_previoustab_%29.md): Tells the delegate that the user selected the specified @c selectedTab in the tab bar controller.
- [tabBarController(\_:displayOrderDidChangeFor:)](uitabbarcontrollerdelegate/tabbarcontroller%28__displayorderdidchangefor_%29.md): Notifies the delegate that the display order for the specified tab has been changed by the user.
- [tabBarController(\_:displayedViewControllersFor:proposedViewControllers:)](uitabbarcontrollerdelegate/tabbarcontroller%28__displayedviewcontrollersfor_proposedviewcontrollers_%29.md): Used with `UITabGroup.managingNavigationController`, this method allows the delegate to customize the displayed view controllers within the navigation stack for each level of selected tab. This method is called by the system if the selected tab in the `UITabBarController` belongs to or is in the hierarchy of a managing tab group (i.e. a `UITabGroup` with a non-nil `managingNavigationController`). By default, if this method is not implemented, the system will build the navigation stack by adding each tab’s `viewController` into the hierarchy, if one exists. This is especially useful to hide certain view controllers when transitioning between compact and regular size classes.
- [tabBarController(\_:shouldSelectTab:)](uitabbarcontrollerdelegate/tabbarcontroller%28__shouldselecttab_%29.md): Asks the delegate whether the specified tab should be made active.
- [tabBarController(\_:tab:acceptItemsFrom:)](uitabbarcontrollerdelegate/tabbarcontroller%28__tab_acceptitemsfrom_%29.md): Notifies the delegate to perform a drop into the specified @c tab from the specified session.
- [tabBarController(\_:tab:operationForAcceptingItemsFrom:)](uitabbarcontrollerdelegate/tabbarcontroller%28__tab_operationforacceptingitemsfrom_%29.md): Asks the delegate for a drop operation to determine if drag items can be dropped into the specified @c tab
- [tabBarController(\_:visibilityDidChangeFor:)](uitabbarcontrollerdelegate/tabbarcontroller%28__visibilitydidchangefor_%29.md): Notifies the delegate when editing has ended and the specified tabs have had their `isHidden` values changed by the user.
- [tabBarControllerDidEndEditing(\_:)](uitabbarcontrollerdelegate/tabbarcontrollerdidendediting%28__%29.md): Notifies the delegate when the tab bar controller’s current editing state has ended.
- [tabBarControllerWillBeginEditing(\_:)](uitabbarcontrollerdelegate/tabbarcontrollerwillbeginediting%28__%29.md): Notifies the delegate when the tab bar controller is about to begin editing.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the tab bar behavior

- [delegate](uitabbarcontroller/delegate.md): The tab bar controller’s delegate object.
- [tabBarMinimizeBehavior](uitabbarcontroller/tabbarminimizebehavior.md): Defines the minimize behavior for the tab bar, if it is supported.
- [UITabBarController.MinimizeBehavior](uitabbarcontroller/minimizebehavior.md)

# UITabBarControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods you implement to customize the behavior of a tab bar.

## Declaration

```objectivec
@protocol UITabBarControllerDelegate <NSObject>
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="overview"></a>

## Overview

You use the [UITabBarControllerDelegate](uitabbarcontrollerdelegate.md) protocol when you want to augment the behavior of a tab bar. In particular, you can use it to determine whether specific tabs should be selected, to perform actions after a tab is selected, or to perform actions before or after the user customizes the order of the tabs. After implementing these methods in your custom object, you should then assign that object to the [delegate](uitabbarcontroller/delegate.md) property of the corresponding [UITabBarController](uitabbarcontroller.md) object.

All of the methods in this protocol are optional. For more information on how to use and configure tab bar controllers and their delegates, see [View Controller Programming Guide for iOS](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457).

## Topics

### Managing tab bar selections

- [tabBarController:shouldSelectViewController:](uitabbarcontrollerdelegate/tabbarcontroller%28__shouldselect_%29.md): Asks the delegate whether the specified view controller should be made active.
- [tabBarController:didSelectViewController:](uitabbarcontrollerdelegate/tabbarcontroller%28__didselect_%29.md): Tells the delegate that the user selected an item in the tab bar.

### Managing tab bar customizations

- [tabBarController:willBeginCustomizingViewControllers:](uitabbarcontrollerdelegate/tabbarcontroller%28__willbegincustomizing_%29.md): Tells the delegate that the tab bar customization sheet is about to be displayed.
- [tabBarController:willEndCustomizingViewControllers:changed:](uitabbarcontrollerdelegate/tabbarcontroller%28__willendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet is about to be dismissed.
- [tabBarController:didEndCustomizingViewControllers:changed:](uitabbarcontrollerdelegate/tabbarcontroller%28__didendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet was dismissed.

### Overriding view rotation settings

- [tabBarControllerSupportedInterfaceOrientations:](uitabbarcontrollerdelegate/tabbarcontrollersupportedinterfaceorientations%28__%29.md): Called to allow the delegate to provide the complete set of supported interface orientations for the tab bar controller.
- [tabBarControllerPreferredInterfaceOrientationForPresentation:](uitabbarcontrollerdelegate/tabbarcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Called to allow the delegate to provide the preferred orientation for presentation of the tab bar controller.

### Supporting custom tab bar transition animations

- [tabBarController:animationControllerForTransitionFromViewController:toViewController:](uitabbarcontrollerdelegate/tabbarcontroller%28__animationcontrollerfortransitionfrom_to_%29.md): Called to allow the delegate to return a [UIViewControllerAnimatedTransitioning](uiviewcontrolleranimatedtransitioning.md) delegate object for use during a noninteractive tab bar view controller transition.
- [tabBarController:interactionControllerForAnimationController:](uitabbarcontrollerdelegate/tabbarcontroller%28__interactioncontrollerfor_%29.md): Called to allow the delegate to return a [UIViewControllerInteractiveTransitioning](uiviewcontrollerinteractivetransitioning.md) delegate object for use during an animated tab bar transition.

### Instance Methods

- [tabBarController:didSelectTab:previousTab:](uitabbarcontrollerdelegate/tabbarcontroller%28__didselecttab_previoustab_%29.md): Tells the delegate that the user selected the specified @c selectedTab in the tab bar controller.
- [tabBarController:displayOrderDidChangeForGroup:](uitabbarcontrollerdelegate/tabbarcontroller%28__displayorderdidchangefor_%29.md): Notifies the delegate that the display order for the specified tab has been changed by the user.
- [tabBarController:displayedViewControllersForTab:proposedViewControllers:](uitabbarcontrollerdelegate/tabbarcontroller%28__displayedviewcontrollersfor_proposedviewcontrollers_%29.md): Used with `UITabGroup.managingNavigationController`, this method allows the delegate to customize the displayed view controllers within the navigation stack for each level of selected tab. This method is called by the system if the selected tab in the `UITabBarController` belongs to or is in the hierarchy of a managing tab group (i.e. a `UITabGroup` with a non-nil `managingNavigationController`). By default, if this method is not implemented, the system will build the navigation stack by adding each tab’s `viewController` into the hierarchy, if one exists. This is especially useful to hide certain view controllers when transitioning between compact and regular size classes.
- [tabBarController:shouldSelectTab:](uitabbarcontrollerdelegate/tabbarcontroller%28__shouldselecttab_%29.md): Asks the delegate whether the specified tab should be made active.
- [tabBarController:tab:acceptItemsFromDropSession:](uitabbarcontrollerdelegate/tabbarcontroller%28__tab_acceptitemsfrom_%29.md): Notifies the delegate to perform a drop into the specified @c tab from the specified session.
- [tabBarController:tab:operationForAcceptingItemsFromDropSession:](uitabbarcontrollerdelegate/tabbarcontroller%28__tab_operationforacceptingitemsfrom_%29.md): Asks the delegate for a drop operation to determine if drag items can be dropped into the specified @c tab
- [tabBarController:visibilityDidChangeForTabs:](uitabbarcontrollerdelegate/tabbarcontroller%28__visibilitydidchangefor_%29.md): Notifies the delegate when editing has ended and the specified tabs have had their `isHidden` values changed by the user.
- [tabBarControllerDidEndEditing:](uitabbarcontrollerdelegate/tabbarcontrollerdidendediting%28__%29.md): Notifies the delegate when the tab bar controller’s current editing state has ended.
- [tabBarControllerWillBeginEditing:](uitabbarcontrollerdelegate/tabbarcontrollerwillbeginediting%28__%29.md): Notifies the delegate when the tab bar controller is about to begin editing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the tab bar behavior

- [delegate](uitabbarcontroller/delegate.md): The tab bar controller’s delegate object.
- [tabBarMinimizeBehavior](uitabbarcontroller/tabbarminimizebehavior.md): Defines the minimize behavior for the tab bar, if it is supported.
- [UITabBarMinimizeBehavior](uitabbarcontroller/minimizebehavior.md)
