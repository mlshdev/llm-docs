> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate)

# UISplitViewControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The methods adopted by the object you use to manage changes to a split view interface.

## Declaration

```swift
@MainActor protocol UISplitViewControllerDelegate
```

<a id="overview"></a>

## Overview

Use the methods of this protocol to respond to changes in the current display mode and to the current interface orientation. When the split view interface collapses and expands, or when a new view controller is added to the interface, you can also use these methods to configure the child view controllers.

The methods of this protocol are all optional. If you don’t implement any of the methods, the split view controller provides default behavior to handle the collapsing and expanding transitions.

For more information, see [UISplitViewController](uisplitviewcontroller.md).

<a id="Column-style-split-views"></a>

### Column-style split views

In a column-style split view interface, you use these delegate methods to customize interface transition behavior:

- [splitViewController(\_:topColumnForCollapsingToProposedTopColumn:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__topcolumnforcollapsingtoproposedtopcolumn_%29.md)
- [splitViewController(\_:willHide:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__willhide_%29.md)
- [splitViewController(\_:didHide:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__didhide_%29.md)
- [splitViewControllerDidCollapse(\_:)](uisplitviewcontrollerdelegate/splitviewcontrollerdidcollapse%28__%29.md)
- [splitViewController(\_:displayModeForExpandingToProposedDisplayMode:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__displaymodeforexpandingtoproposeddisplaymode_%29.md)
- [splitViewController(\_:willShow:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__willshow_%29.md)
- [splitViewController(\_:didShow:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__didshow_%29.md)
- [splitViewControllerDidExpand(\_:)](uisplitviewcontrollerdelegate/splitviewcontrollerdidexpand%28__%29.md)

<a id="Classic-split-views"></a>

### Classic split views

In a classic split view interface, you use these delegate methods to customize interface transition behavior:

- [primaryViewController(forCollapsing:)](uisplitviewcontrollerdelegate/primaryviewcontroller%28forcollapsing_%29.md)
- [splitViewController(\_:collapseSecondary:onto:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__collapsesecondary_onto_%29.md)
- [primaryViewController(forExpanding:)](uisplitviewcontrollerdelegate/primaryviewcontroller%28forexpanding_%29.md)
- [splitViewController(\_:separateSecondaryFrom:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__separatesecondaryfrom_%29.md)
- [splitViewController(\_:show:sender:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__show_sender_%29.md)
- [splitViewController(\_:showDetail:sender:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__showdetail_sender_%29.md)

At the end of a collapse transition, the split view controller typically shows only the content from its primary view controller. You can change this behavior by implementing the [primaryViewController(forCollapsing:)](uisplitviewcontrollerdelegate/primaryviewcontroller%28forcollapsing_%29.md) method in your split view controller delegate. You might use that method to specify the secondary view controller or an entirely different view controller—perhaps one better suited for display in a horizontally compact environment.

If you want to perform any additional adjustments of the view controllers and view hierarchy, you can also implement the [splitViewController(\_:collapseSecondary:onto:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__collapsesecondary_onto_%29.md) method in your delegate.

The expansion process reverses the collapsing process by asking the delegate to designate which view controller becomes the primary view controller and to give the delegate a chance to perform the transition itself. If you implement the delegate methods for collapsing your split view interface, you should also implement the [primaryViewController(forExpanding:)](uisplitviewcontrollerdelegate/primaryviewcontroller%28forexpanding_%29.md) and [splitViewController(\_:separateSecondaryFrom:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__separatesecondaryfrom_%29.md) methods for expanding that interface.

## Topics

### Specifying the interface orientations

- [splitViewControllerPreferredInterfaceOrientationForPresentation(\_:)](uisplitviewcontrollerdelegate/splitviewcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Asks the delegate for the orientation to use when presenting the split view controller.
- [splitViewControllerSupportedInterfaceOrientations(\_:)](uisplitviewcontrollerdelegate/splitviewcontrollersupportedinterfaceorientations%28__%29.md): Asks the delegate to specify the interface orientations that the split view controller supports.

### Responding to display mode changes

- [splitViewController(\_:willChangeTo:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__willchangeto_%29.md): Tells the delegate that the display mode for the split view controller is about to change.
- [targetDisplayModeForAction(in:)](uisplitviewcontrollerdelegate/targetdisplaymodeforaction%28in_%29.md): Asks the delegate to provide the display mode to apply when a split view controller action occurs.

### Collapsing the interface

- [splitViewController(\_:topColumnForCollapsingToProposedTopColumn:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__topcolumnforcollapsingtoproposedtopcolumn_%29.md): Asks the delegate to provide the column to display after the split view interface collapses.
- [splitViewController(\_:willHide:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__willhide_%29.md): Tells the delegate that the specified column is about to be hidden.
- [splitViewController(\_:didHide:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__didhide_%29.md): Tells the delegate that the system completed hiding the specified column.
- [splitViewControllerDidCollapse(\_:)](uisplitviewcontrollerdelegate/splitviewcontrollerdidcollapse%28__%29.md): Tells the delegate that the split view controller interface has collapsed.

### Expanding the interface

- [splitViewController(\_:displayModeForExpandingToProposedDisplayMode:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__displaymodeforexpandingtoproposeddisplaymode_%29.md): Asks the delegate to provide the display mode to use after the split view interface expands.
- [splitViewController(\_:willShow:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__willshow_%29.md): Tells the delegate that the specified column is about to be shown.
- [splitViewController(\_:didShow:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__didshow_%29.md): Tells the delegate that the system completed showing the specified column.
- [splitViewControllerDidExpand(\_:)](uisplitviewcontrollerdelegate/splitviewcontrollerdidexpand%28__%29.md): Tells the delegate that the split view controller interface has expanded.

### Handling the presentation gesture

- [splitViewControllerInteractivePresentationGestureWillBegin(\_:)](uisplitviewcontrollerdelegate/splitviewcontrollerinteractivepresentationgesturewillbegin%28__%29.md): Tells the delegate that the interactive presentation gesture is about to begin.
- [splitViewControllerInteractivePresentationGestureDidEnd(\_:)](uisplitviewcontrollerdelegate/splitviewcontrollerinteractivepresentationgesturedidend%28__%29.md): Tells the delegate when the interactive presentation gesture ends.

### Collapsing and expanding classic split views

- [primaryViewController(forCollapsing:)](uisplitviewcontrollerdelegate/primaryviewcontroller%28forcollapsing_%29.md): Asks the delegate to provide the single view controller to display after the split view interface collapses.
- [splitViewController(\_:collapseSecondary:onto:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__collapsesecondary_onto_%29.md): Asks the delegate to adjust the primary view controller and to incorporate the secondary view controller into the collapsed interface.
- [primaryViewController(forExpanding:)](uisplitviewcontrollerdelegate/primaryviewcontroller%28forexpanding_%29.md): Asks the delegate to provide the view controller to display in the primary position when the split view interface expands.
- [splitViewController(\_:separateSecondaryFrom:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__separatesecondaryfrom_%29.md): Asks the delegate to provide the new secondary view controller for the split view interface.

### Overriding the presentation behavior

- [splitViewController(\_:show:sender:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__show_sender_%29.md): Asks the delegate if it will do the work of displaying a view controller in the primary position of the split view interface.
- [splitViewController(\_:showDetail:sender:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__showdetail_sender_%29.md): Asks the delegate if it will do the work of displaying a view controller in the secondary position of the split view interface.

### Deprecated methods

- [splitViewController(\_:shouldHide:in:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__shouldhide_in_%29.md): Deprecated. Asks the delegate whether the first view controller should be hidden for the specified orientation.
- [splitViewController(\_:willHide:with:for:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__willhide_with_for_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be hidden.
- [splitViewController(\_:willShow:invalidating:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__willshow_invalidating_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be shown again.
- [splitViewController(\_:popoverController:willPresent:)](uisplitviewcontrollerdelegate/splitviewcontroller%28__popovercontroller_willpresent_%29.md): Deprecated. Tells the delegate that the hidden view controller is about to be displayed in a popover.

## See Also

### Customizing the split view transitions

- [delegate](uisplitviewcontroller/delegate.md): The delegate you use to manage changes to a split view interface.

# UISplitViewControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The methods adopted by the object you use to manage changes to a split view interface.

## Declaration

```objectivec
@protocol UISplitViewControllerDelegate
```

<a id="overview"></a>

## Overview

Use the methods of this protocol to respond to changes in the current display mode and to the current interface orientation. When the split view interface collapses and expands, or when a new view controller is added to the interface, you can also use these methods to configure the child view controllers.

The methods of this protocol are all optional. If you don’t implement any of the methods, the split view controller provides default behavior to handle the collapsing and expanding transitions.

For more information, see [UISplitViewController](uisplitviewcontroller.md).

<a id="Column-style-split-views"></a>

### Column-style split views

In a column-style split view interface, you use these delegate methods to customize interface transition behavior:

- [splitViewController:topColumnForCollapsingToProposedTopColumn:](uisplitviewcontrollerdelegate/splitviewcontroller%28__topcolumnforcollapsingtoproposedtopcolumn_%29.md)
- [splitViewController:willHideColumn:](uisplitviewcontrollerdelegate/splitviewcontroller%28__willhide_%29.md)
- [splitViewController:didHideColumn:](uisplitviewcontrollerdelegate/splitviewcontroller%28__didhide_%29.md)
- [splitViewControllerDidCollapse:](uisplitviewcontrollerdelegate/splitviewcontrollerdidcollapse%28__%29.md)
- [splitViewController:displayModeForExpandingToProposedDisplayMode:](uisplitviewcontrollerdelegate/splitviewcontroller%28__displaymodeforexpandingtoproposeddisplaymode_%29.md)
- [splitViewController:willShowColumn:](uisplitviewcontrollerdelegate/splitviewcontroller%28__willshow_%29.md)
- [splitViewController:didShowColumn:](uisplitviewcontrollerdelegate/splitviewcontroller%28__didshow_%29.md)
- [splitViewControllerDidExpand:](uisplitviewcontrollerdelegate/splitviewcontrollerdidexpand%28__%29.md)

<a id="Classic-split-views"></a>

### Classic split views

In a classic split view interface, you use these delegate methods to customize interface transition behavior:

- [primaryViewControllerForCollapsingSplitViewController:](uisplitviewcontrollerdelegate/primaryviewcontroller%28forcollapsing_%29.md)
- [splitViewController:collapseSecondaryViewController:ontoPrimaryViewController:](uisplitviewcontrollerdelegate/splitviewcontroller%28__collapsesecondary_onto_%29.md)
- [primaryViewControllerForExpandingSplitViewController:](uisplitviewcontrollerdelegate/primaryviewcontroller%28forexpanding_%29.md)
- [splitViewController:separateSecondaryViewControllerFromPrimaryViewController:](uisplitviewcontrollerdelegate/splitviewcontroller%28__separatesecondaryfrom_%29.md)
- [splitViewController:showViewController:sender:](uisplitviewcontrollerdelegate/splitviewcontroller%28__show_sender_%29.md)
- [splitViewController:showDetailViewController:sender:](uisplitviewcontrollerdelegate/splitviewcontroller%28__showdetail_sender_%29.md)

At the end of a collapse transition, the split view controller typically shows only the content from its primary view controller. You can change this behavior by implementing the [primaryViewControllerForCollapsingSplitViewController:](uisplitviewcontrollerdelegate/primaryviewcontroller%28forcollapsing_%29.md) method in your split view controller delegate. You might use that method to specify the secondary view controller or an entirely different view controller—perhaps one better suited for display in a horizontally compact environment.

If you want to perform any additional adjustments of the view controllers and view hierarchy, you can also implement the [splitViewController:collapseSecondaryViewController:ontoPrimaryViewController:](uisplitviewcontrollerdelegate/splitviewcontroller%28__collapsesecondary_onto_%29.md) method in your delegate.

The expansion process reverses the collapsing process by asking the delegate to designate which view controller becomes the primary view controller and to give the delegate a chance to perform the transition itself. If you implement the delegate methods for collapsing your split view interface, you should also implement the [primaryViewControllerForExpandingSplitViewController:](uisplitviewcontrollerdelegate/primaryviewcontroller%28forexpanding_%29.md) and [splitViewController:separateSecondaryViewControllerFromPrimaryViewController:](uisplitviewcontrollerdelegate/splitviewcontroller%28__separatesecondaryfrom_%29.md) methods for expanding that interface.

## Topics

### Specifying the interface orientations

- [splitViewControllerPreferredInterfaceOrientationForPresentation:](uisplitviewcontrollerdelegate/splitviewcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Asks the delegate for the orientation to use when presenting the split view controller.
- [splitViewControllerSupportedInterfaceOrientations:](uisplitviewcontrollerdelegate/splitviewcontrollersupportedinterfaceorientations%28__%29.md): Asks the delegate to specify the interface orientations that the split view controller supports.

### Responding to display mode changes

- [splitViewController:willChangeToDisplayMode:](uisplitviewcontrollerdelegate/splitviewcontroller%28__willchangeto_%29.md): Tells the delegate that the display mode for the split view controller is about to change.
- [targetDisplayModeForActionInSplitViewController:](uisplitviewcontrollerdelegate/targetdisplaymodeforaction%28in_%29.md): Asks the delegate to provide the display mode to apply when a split view controller action occurs.

### Collapsing the interface

- [splitViewController:topColumnForCollapsingToProposedTopColumn:](uisplitviewcontrollerdelegate/splitviewcontroller%28__topcolumnforcollapsingtoproposedtopcolumn_%29.md): Asks the delegate to provide the column to display after the split view interface collapses.
- [splitViewController:willHideColumn:](uisplitviewcontrollerdelegate/splitviewcontroller%28__willhide_%29.md): Tells the delegate that the specified column is about to be hidden.
- [splitViewController:didHideColumn:](uisplitviewcontrollerdelegate/splitviewcontroller%28__didhide_%29.md): Tells the delegate that the system completed hiding the specified column.
- [splitViewControllerDidCollapse:](uisplitviewcontrollerdelegate/splitviewcontrollerdidcollapse%28__%29.md): Tells the delegate that the split view controller interface has collapsed.

### Expanding the interface

- [splitViewController:displayModeForExpandingToProposedDisplayMode:](uisplitviewcontrollerdelegate/splitviewcontroller%28__displaymodeforexpandingtoproposeddisplaymode_%29.md): Asks the delegate to provide the display mode to use after the split view interface expands.
- [splitViewController:willShowColumn:](uisplitviewcontrollerdelegate/splitviewcontroller%28__willshow_%29.md): Tells the delegate that the specified column is about to be shown.
- [splitViewController:didShowColumn:](uisplitviewcontrollerdelegate/splitviewcontroller%28__didshow_%29.md): Tells the delegate that the system completed showing the specified column.
- [splitViewControllerDidExpand:](uisplitviewcontrollerdelegate/splitviewcontrollerdidexpand%28__%29.md): Tells the delegate that the split view controller interface has expanded.

### Handling the presentation gesture

- [splitViewControllerInteractivePresentationGestureWillBegin:](uisplitviewcontrollerdelegate/splitviewcontrollerinteractivepresentationgesturewillbegin%28__%29.md): Tells the delegate that the interactive presentation gesture is about to begin.
- [splitViewControllerInteractivePresentationGestureDidEnd:](uisplitviewcontrollerdelegate/splitviewcontrollerinteractivepresentationgesturedidend%28__%29.md): Tells the delegate when the interactive presentation gesture ends.

### Collapsing and expanding classic split views

- [primaryViewControllerForCollapsingSplitViewController:](uisplitviewcontrollerdelegate/primaryviewcontroller%28forcollapsing_%29.md): Asks the delegate to provide the single view controller to display after the split view interface collapses.
- [splitViewController:collapseSecondaryViewController:ontoPrimaryViewController:](uisplitviewcontrollerdelegate/splitviewcontroller%28__collapsesecondary_onto_%29.md): Asks the delegate to adjust the primary view controller and to incorporate the secondary view controller into the collapsed interface.
- [primaryViewControllerForExpandingSplitViewController:](uisplitviewcontrollerdelegate/primaryviewcontroller%28forexpanding_%29.md): Asks the delegate to provide the view controller to display in the primary position when the split view interface expands.
- [splitViewController:separateSecondaryViewControllerFromPrimaryViewController:](uisplitviewcontrollerdelegate/splitviewcontroller%28__separatesecondaryfrom_%29.md): Asks the delegate to provide the new secondary view controller for the split view interface.

### Overriding the presentation behavior

- [splitViewController:showViewController:sender:](uisplitviewcontrollerdelegate/splitviewcontroller%28__show_sender_%29.md): Asks the delegate if it will do the work of displaying a view controller in the primary position of the split view interface.
- [splitViewController:showDetailViewController:sender:](uisplitviewcontrollerdelegate/splitviewcontroller%28__showdetail_sender_%29.md): Asks the delegate if it will do the work of displaying a view controller in the secondary position of the split view interface.

### Deprecated methods

- [splitViewController:shouldHideViewController:inOrientation:](uisplitviewcontrollerdelegate/splitviewcontroller%28__shouldhide_in_%29.md): Deprecated. Asks the delegate whether the first view controller should be hidden for the specified orientation.
- [splitViewController:willHideViewController:withBarButtonItem:forPopoverController:](uisplitviewcontrollerdelegate/splitviewcontroller%28__willhide_with_for_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be hidden.
- [splitViewController:willShowViewController:invalidatingBarButtonItem:](uisplitviewcontrollerdelegate/splitviewcontroller%28__willshow_invalidating_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be shown again.
- [splitViewController:popoverController:willPresentViewController:](uisplitviewcontrollerdelegate/splitviewcontroller%28__popovercontroller_willpresent_%29.md): Deprecated. Tells the delegate that the hidden view controller is about to be displayed in a popover.

## See Also

### Customizing the split view transitions

- [delegate](uisplitviewcontroller/delegate.md): The delegate you use to manage changes to a split view interface.
