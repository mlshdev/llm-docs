> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller](https://developer.apple.com/documentation/uikit/uipageviewcontroller)

# UIPageViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A container view controller that manages navigation between pages of content, where a subview controller manages each page.

## Declaration

```swift
@MainActor class UIPageViewController
```

## Mentioned In

- [Creating a custom container view controller](creating-a-custom-container-view-controller.md)
- [Managing content in your app’s windows](managing-content-in-your-app-s-windows.md)

<a id="overview"></a>

## Overview

Page view controller–navigation can be controlled programmatically by your app or directly by the user using gestures. When navigating from page to page, the page view controller uses the transition that you specify to animate the change.

> **Important**

>  In tvOS, the [UIPageViewController](uipageviewcontroller.md) class provides only a way to swipe between full-screen content pages. Unlike in iOS, a user cannot interact with or move focus between items on each page.

When defining a page view controller interface, you can provide the content view controllers one at a time (or two at a time, depending upon the spine position and double-sided state) or as-needed using a data source. When providing content view controllers one at a time, you use the [setViewControllers(\_:direction:animated:completion:)](uipageviewcontroller/setviewcontrollers%28__direction_animated_completion_%29.md) method to set the current content view controllers. To support gesture-based navigation, you must provide your view controllers using a data source object.

The data source for a page view controller is responsible for providing the content view controllers on demand and must conform to the [UIPageViewControllerDataSource](uipageviewcontrollerdatasource.md) protocol. The delegate object—an object that conforms to the [UIPageViewControllerDelegate](uipageviewcontrollerdelegate.md) protocol—provides some appearance-related information and receives notifications about gesture-initiated transitions.

This class is generally used as-is, but can also be subclassed.

## Topics

### Creating a page view controller

- [init(transitionStyle:navigationOrientation:options:)](uipageviewcontroller/init%28transitionstyle_navigationorientation_options_%29.md): Initializes a newly created page view controller.
- [init(coder:)](uipageviewcontroller/init%28coder_%29.md): Creates a page view controller from data in an unarchiver.
- [UIPageViewController.OptionsKey](uipageviewcontroller/optionskey.md): Keys for creating the page view controller.

### Providing the Page Content

- [dataSource](uipageviewcontroller/datasource.md): The object that provides view controllers.
- [UIPageViewControllerDataSource](uipageviewcontrollerdatasource.md): The [UIPageViewControllerDataSource](uipageviewcontrollerdatasource.md) protocol is adopted by an object that provides view controllers to the page view controller on an as-needed basis, in response to navigation gestures.

### Customizing the Page View Behavior

- [delegate](uipageviewcontroller/delegate.md): The delegate object.
- [UIPageViewControllerDelegate](uipageviewcontrollerdelegate.md): The delegate of a page view controller must adopt the [UIPageViewControllerDelegate](uipageviewcontrollerdelegate.md) protocol. These methods allow the delegate to receive a notification when the device orientation changes and when the user navigates to a new page. For page-curl style transitions, the delegate can provide a different spine location in response to a change in the interface orientation.

### Providing Content

- [setViewControllers(\_:direction:animated:completion:)](uipageviewcontroller/setviewcontrollers%28__direction_animated_completion_%29.md): Sets the view controllers to be displayed.
- [UIPageViewController.NavigationDirection](uipageviewcontroller/navigationdirection.md): Directions for page-turn transitions.
- [viewControllers](uipageviewcontroller/viewcontrollers.md): The view controllers displayed by the page view controller.
- [gestureRecognizers](uipageviewcontroller/gesturerecognizers.md): An array of [UIGestureRecognizer](uigesturerecognizer.md) objects that are configured to handle user interaction.

### Display Options

- [navigationOrientation](uipageviewcontroller/navigationorientation-swift.property.md): The direction along which navigation occurs.
- [UIPageViewController.NavigationOrientation](uipageviewcontroller/navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [spineLocation](uipageviewcontroller/spinelocation-swift.property.md): The location of the spine.
- [UIPageViewController.SpineLocation](uipageviewcontroller/spinelocation-swift.enum.md): Locations for the spine.
- [transitionStyle](uipageviewcontroller/transitionstyle-swift.property.md): The style used to transition between view controllers.
- [UIPageViewController.TransitionStyle](uipageviewcontroller/transitionstyle-swift.enum.md): Styles for the page-turn transition.
- [isDoubleSided](uipageviewcontroller/isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.

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
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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

# UIPageViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A container view controller that manages navigation between pages of content, where a subview controller manages each page.

## Declaration

```objectivec
@interface UIPageViewController : UIViewController
```

## Mentioned In

- [Creating a custom container view controller](creating-a-custom-container-view-controller.md)
- [Managing content in your app’s windows](managing-content-in-your-app-s-windows.md)

<a id="overview"></a>

## Overview

Page view controller–navigation can be controlled programmatically by your app or directly by the user using gestures. When navigating from page to page, the page view controller uses the transition that you specify to animate the change.

> **Important**

>  In tvOS, the [UIPageViewController](uipageviewcontroller.md) class provides only a way to swipe between full-screen content pages. Unlike in iOS, a user cannot interact with or move focus between items on each page.

When defining a page view controller interface, you can provide the content view controllers one at a time (or two at a time, depending upon the spine position and double-sided state) or as-needed using a data source. When providing content view controllers one at a time, you use the [setViewControllers:direction:animated:completion:](uipageviewcontroller/setviewcontrollers%28__direction_animated_completion_%29.md) method to set the current content view controllers. To support gesture-based navigation, you must provide your view controllers using a data source object.

The data source for a page view controller is responsible for providing the content view controllers on demand and must conform to the [UIPageViewControllerDataSource](uipageviewcontrollerdatasource.md) protocol. The delegate object—an object that conforms to the [UIPageViewControllerDelegate](uipageviewcontrollerdelegate.md) protocol—provides some appearance-related information and receives notifications about gesture-initiated transitions.

This class is generally used as-is, but can also be subclassed.

## Topics

### Creating a page view controller

- [initWithTransitionStyle:navigationOrientation:options:](uipageviewcontroller/init%28transitionstyle_navigationorientation_options_%29.md): Initializes a newly created page view controller.
- [initWithCoder:](uipageviewcontroller/init%28coder_%29.md): Creates a page view controller from data in an unarchiver.
- [UIPageViewControllerOptionsKey](uipageviewcontroller/optionskey.md): Keys for creating the page view controller.

### Providing the Page Content

- [dataSource](uipageviewcontroller/datasource.md): The object that provides view controllers.
- [UIPageViewControllerDataSource](uipageviewcontrollerdatasource.md): The [UIPageViewControllerDataSource](uipageviewcontrollerdatasource.md) protocol is adopted by an object that provides view controllers to the page view controller on an as-needed basis, in response to navigation gestures.

### Customizing the Page View Behavior

- [delegate](uipageviewcontroller/delegate.md): The delegate object.
- [UIPageViewControllerDelegate](uipageviewcontrollerdelegate.md): The delegate of a page view controller must adopt the [UIPageViewControllerDelegate](uipageviewcontrollerdelegate.md) protocol. These methods allow the delegate to receive a notification when the device orientation changes and when the user navigates to a new page. For page-curl style transitions, the delegate can provide a different spine location in response to a change in the interface orientation.

### Providing Content

- [setViewControllers:direction:animated:completion:](uipageviewcontroller/setviewcontrollers%28__direction_animated_completion_%29.md): Sets the view controllers to be displayed.
- [UIPageViewControllerNavigationDirection](uipageviewcontroller/navigationdirection.md): Directions for page-turn transitions.
- [viewControllers](uipageviewcontroller/viewcontrollers.md): The view controllers displayed by the page view controller.
- [gestureRecognizers](uipageviewcontroller/gesturerecognizers.md): An array of [UIGestureRecognizer](uigesturerecognizer.md) objects that are configured to handle user interaction.

### Display Options

- [navigationOrientation](uipageviewcontroller/navigationorientation-swift.property.md): The direction along which navigation occurs.
- [UIPageViewControllerNavigationOrientation](uipageviewcontroller/navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [spineLocation](uipageviewcontroller/spinelocation-swift.property.md): The location of the spine.
- [UIPageViewControllerSpineLocation](uipageviewcontroller/spinelocation-swift.enum.md): Locations for the spine.
- [transitionStyle](uipageviewcontroller/transitionstyle-swift.property.md): The style used to transition between view controllers.
- [UIPageViewControllerTransitionStyle](uipageviewcontroller/transitionstyle-swift.enum.md): Styles for the page-turn transition.
- [doubleSided](uipageviewcontroller/isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.

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
