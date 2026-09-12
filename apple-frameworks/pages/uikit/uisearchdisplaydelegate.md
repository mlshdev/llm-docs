> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaydelegate](https://developer.apple.com/documentation/uikit/uisearchdisplaydelegate)

# UISearchDisplayDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst

The interface for the delegate of a search display controller.

> Use [UISearchControllerDelegate](uisearchcontrollerdelegate.md) instead.

## Declaration

```swift
@MainActor protocol UISearchDisplayDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol defines delegate methods for [UISearchDisplayController](uisearchdisplaycontroller.md) objects.

## Topics

### Responding to search state change

- [searchDisplayControllerWillBeginSearch(\_:)](uisearchdisplaydelegate/searchdisplaycontrollerwillbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to begin searching.
- [searchDisplayControllerDidBeginSearch(\_:)](uisearchdisplaydelegate/searchdisplaycontrollerdidbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller has started searching.
- [searchDisplayControllerWillEndSearch(\_:)](uisearchdisplaydelegate/searchdisplaycontrollerwillendsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to end searching.
- [searchDisplayControllerDidEndSearch(\_:)](uisearchdisplaydelegate/searchdisplaycontrollerdidendsearch%28__%29.md): Deprecated. Tells the delegate that the controller has finished searching.

### Loading and unloading the table view

- [searchDisplayController(\_:didLoadSearchResultsTableView:)](uisearchdisplaydelegate/searchdisplaycontroller%28__didloadsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller has loaded its table view.
- [searchDisplayController(\_:willUnloadSearchResultsTableView:)](uisearchdisplaydelegate/searchdisplaycontroller%28__willunloadsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller is about to unload its table view.

### Showing and hiding the table view

- [searchDisplayController(\_:willShowSearchResultsTableView:)](uisearchdisplaydelegate/searchdisplaycontroller%28__willshowsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller is about to display its table view.
- [searchDisplayController(\_:didShowSearchResultsTableView:)](uisearchdisplaydelegate/searchdisplaycontroller%28__didshowsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller just displayed its table view.
- [searchDisplayController(\_:willHideSearchResultsTableView:)](uisearchdisplaydelegate/searchdisplaycontroller%28__willhidesearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller is about to hide its table view.
- [searchDisplayController(\_:didHideSearchResultsTableView:)](uisearchdisplaydelegate/searchdisplaycontroller%28__didhidesearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller just hid its table view.

### Responding to changes in search criteria

- [searchDisplayController(\_:shouldReloadTableForSearch:)](uisearchdisplaydelegate/searchdisplaycontroller%28__shouldreloadtableforsearch_%29.md): Deprecated. Asks the delegate if the table view should be reloaded for a given search string.
- [searchDisplayController(\_:shouldReloadTableForSearchScope:)](uisearchdisplaydelegate/searchdisplaycontroller%28__shouldreloadtableforsearchscope_%29.md): Deprecated. Asks the delegate if the table view should be reloaded for a given scope.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [UIActionSheetDelegate](uiactionsheetdelegate.md): Deprecated. The interface for the delegate of an action sheet object.
- [UIAlertViewDelegate](uialertviewdelegate.md): Deprecated. The interface for the delegate of an alert view object.
- [UIPopoverControllerDelegate](uipopovercontrollerdelegate.md): Deprecated. The interface for the delegate of a popover controller object.
- [UIViewControllerPreviewing](uiviewcontrollerpreviewing.md): Deprecated. A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.
- [UIViewControllerPreviewingDelegate](uiviewcontrollerpreviewingdelegate.md): Deprecated. A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.

# UISearchDisplayDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst

The interface for the delegate of a search display controller.

> Use [UISearchControllerDelegate](uisearchcontrollerdelegate.md) instead.

## Declaration

```objectivec
@protocol UISearchDisplayDelegate <NSObject>
```

<a id="overview"></a>

## Overview

This protocol defines delegate methods for [UISearchDisplayController](uisearchdisplaycontroller.md) objects.

## Topics

### Responding to search state change

- [searchDisplayControllerWillBeginSearch:](uisearchdisplaydelegate/searchdisplaycontrollerwillbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to begin searching.
- [searchDisplayControllerDidBeginSearch:](uisearchdisplaydelegate/searchdisplaycontrollerdidbeginsearch%28__%29.md): Deprecated. Tells the delegate that the controller has started searching.
- [searchDisplayControllerWillEndSearch:](uisearchdisplaydelegate/searchdisplaycontrollerwillendsearch%28__%29.md): Deprecated. Tells the delegate that the controller is about to end searching.
- [searchDisplayControllerDidEndSearch:](uisearchdisplaydelegate/searchdisplaycontrollerdidendsearch%28__%29.md): Deprecated. Tells the delegate that the controller has finished searching.

### Loading and unloading the table view

- [searchDisplayController:didLoadSearchResultsTableView:](uisearchdisplaydelegate/searchdisplaycontroller%28__didloadsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller has loaded its table view.
- [searchDisplayController:willUnloadSearchResultsTableView:](uisearchdisplaydelegate/searchdisplaycontroller%28__willunloadsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller is about to unload its table view.

### Showing and hiding the table view

- [searchDisplayController:willShowSearchResultsTableView:](uisearchdisplaydelegate/searchdisplaycontroller%28__willshowsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller is about to display its table view.
- [searchDisplayController:didShowSearchResultsTableView:](uisearchdisplaydelegate/searchdisplaycontroller%28__didshowsearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller just displayed its table view.
- [searchDisplayController:willHideSearchResultsTableView:](uisearchdisplaydelegate/searchdisplaycontroller%28__willhidesearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller is about to hide its table view.
- [searchDisplayController:didHideSearchResultsTableView:](uisearchdisplaydelegate/searchdisplaycontroller%28__didhidesearchresultstableview_%29.md): Deprecated. Tells the delegate that the controller just hid its table view.

### Responding to changes in search criteria

- [searchDisplayController:shouldReloadTableForSearchString:](uisearchdisplaydelegate/searchdisplaycontroller%28__shouldreloadtableforsearch_%29.md): Deprecated. Asks the delegate if the table view should be reloaded for a given search string.
- [searchDisplayController:shouldReloadTableForSearchScope:](uisearchdisplaydelegate/searchdisplaycontroller%28__shouldreloadtableforsearchscope_%29.md): Deprecated. Asks the delegate if the table view should be reloaded for a given scope.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [UIAccelerometerDelegate](uiaccelerometerdelegate.md): Deprecated. The interface for receiving acceleration-related data from the system.
- [UIActionSheetDelegate](uiactionsheetdelegate.md): Deprecated. The interface for the delegate of an action sheet object.
- [UIAlertViewDelegate](uialertviewdelegate.md): Deprecated. The interface for the delegate of an alert view object.
- [UIPopoverControllerDelegate](uipopovercontrollerdelegate.md): Deprecated. The interface for the delegate of a popover controller object.
- [UIViewControllerPreviewing](uiviewcontrollerpreviewing.md): Deprecated. A set of methods that define the interface for configuring a previewing view controller on devices that support 3D Touch.
- [UIViewControllerPreviewingDelegate](uiviewcontrollerpreviewingdelegate.md): Deprecated. A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.
