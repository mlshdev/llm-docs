> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaycontroller](https://developer.apple.com/documentation/uikit/uisearchdisplaycontroller)

# UISearchDisplayController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

An object that manages the display of a search bar, along with a table view that displays search results.

> Use [UISearchController](uisearchcontroller.md) instead.

## Declaration

```swift
@MainActor class UISearchDisplayController
```

<a id="overview"></a>

## Overview

You initialize a search display controller with a search bar and a view controller responsible for managing the data to be searched. When the user starts a search, the search display controller superimposes the search interface over the original view controller’s view and shows the search results in its table view.

In addition to managing the searchable data, the original view controller typically plays four more roles you need to fill when using a search display controller. Those roles are the following:

1. Data source for the search results table view ([searchResultsDataSource](uisearchdisplaycontroller/searchresultsdatasource.md)), which provides the data for the results table.
2. Delegate for the search results table view ([searchResultsDelegate](uisearchdisplaycontroller/searchresultsdelegate.md)), which responds to the user’s selection of an item in the results table.
3. Delegate for the search display controller ([delegate](uisearchdisplaycontroller/delegate.md)), which responds to events such the starting or ending of a search, and the showing or hiding of the search interface. As a convenience, this delegate may also be told about changes to the search string or search scope, so that the results table view can be reloaded.
4. Delegate for the search bar ([delegate](uisearchbar/delegate.md) described in [UISearchBar](uisearchbar.md)), which responds to changes in search criteria.

Typically, you initialize a search display controller from a view controller (usually an instance of [UITableViewController](uitableviewcontroller.md)) that’s displaying a list. See the Simple UISearchBar with State Restoration sample code project for an example of how to configure a search display controller in Interface Builder. To perform configuration programmatically, set `self` for the search display controller’s view controller and search results data source and delegate, as shown here:

```objc
searchController = [[UISearchDisplayController alloc]
                         initWithSearchBar:searchBar contentsController:self];
searchController.delegate = self;
searchController.searchResultsDataSource = self;
searchController.searchResultsDelegate = self;
```

If you follow this pattern, then in the table view data source and delegate methods you can check the methods’ table view argument to determine which table view is sending the message:

```objc
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
 
    if (tableView == self.tableView) {
        return ...;
    }
    // If necessary (if self is the data source for other table views),
    // check whether tableView is searchController.searchResultsTableView.
    return ...;
}
```

> **Important**

>  A view controller or search bar can be associated with only a single search display controller at a time. If a search display controller is destroyed (for example, in response to a memory warning), then you can create a new one and associate it with the original view controller or search bar.

Starting in iOS 7.0, you can use a search display controller with a navigation bar (an instance of the [UINavigationBar](uinavigationbar.md) class) by configuring the search display controller’s [displaysSearchBarInNavigationBar](uisearchdisplaycontroller/displayssearchbarinnavigationbar.md) and [navigationItem](uisearchdisplaycontroller/navigationitem.md) properties.

## Topics

### Initializing a search bar

- [init(searchBar:contentsController:)](uisearchdisplaycontroller/init%28searchbar_contentscontroller_%29.md): Deprecated. Returns a display controller initialized with the given search bar and contents controller.

### Displaying the search Interface

- [isActive](uisearchdisplaycontroller/isactive.md): Deprecated. The visibility state of the search interface.
- [setActive(\_:animated:)](uisearchdisplaycontroller/setactive%28__animated_%29.md): Deprecated. Displays or hides the search interface, optionally with animation.

### Configuring a search bar

- [delegate](uisearchdisplaycontroller/delegate.md): Deprecated. The controller’s delegate.
- [searchBar](uisearchdisplaycontroller/searchbar.md): Deprecated. The search bar.
- [searchContentsController](uisearchdisplaycontroller/searchcontentscontroller.md): Deprecated. The view controller that manages the contents being searched.
- [searchResultsTableView](uisearchdisplaycontroller/searchresultstableview.md): Deprecated. The table view in which the search results are displayed.
- [searchResultsDataSource](uisearchdisplaycontroller/searchresultsdatasource.md): Deprecated. The data source for the table view in which the search results are displayed.
- [searchResultsDelegate](uisearchdisplaycontroller/searchresultsdelegate.md): Deprecated. The delegate for the table view in which the search results are displayed.
- [searchResultsTitle](uisearchdisplaycontroller/searchresultstitle.md): Deprecated. The title for the search results view.
- [displaysSearchBarInNavigationBar](uisearchdisplaycontroller/displayssearchbarinnavigationbar.md): Deprecated. Specifies that the navigation bar contains a search bar.
- [navigationItem](uisearchdisplaycontroller/navigationitem.md): Deprecated. Represents the search display controller in a navigation controller’s navigation bar.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Deprecated classes

- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md): Deprecated. A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
- [UILocalNotification](uilocalnotification.md): Deprecated. A notification that an app can schedule for presentation at a specific date and time.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
- [UIUserNotificationAction](uiusernotificationaction.md): Deprecated. A custom action that your app can perform in response to a remote or local notification.
- [UIUserNotificationCategory](uiusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.

# UISearchDisplayController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

An object that manages the display of a search bar, along with a table view that displays search results.

> Use [UISearchController](uisearchcontroller.md) instead.

## Declaration

```objectivec
@interface UISearchDisplayController : NSObject
```

<a id="overview"></a>

## Overview

You initialize a search display controller with a search bar and a view controller responsible for managing the data to be searched. When the user starts a search, the search display controller superimposes the search interface over the original view controller’s view and shows the search results in its table view.

In addition to managing the searchable data, the original view controller typically plays four more roles you need to fill when using a search display controller. Those roles are the following:

1. Data source for the search results table view ([searchResultsDataSource](uisearchdisplaycontroller/searchresultsdatasource.md)), which provides the data for the results table.
2. Delegate for the search results table view ([searchResultsDelegate](uisearchdisplaycontroller/searchresultsdelegate.md)), which responds to the user’s selection of an item in the results table.
3. Delegate for the search display controller ([delegate](uisearchdisplaycontroller/delegate.md)), which responds to events such the starting or ending of a search, and the showing or hiding of the search interface. As a convenience, this delegate may also be told about changes to the search string or search scope, so that the results table view can be reloaded.
4. Delegate for the search bar ([delegate](uisearchbar/delegate.md) described in [UISearchBar](uisearchbar.md)), which responds to changes in search criteria.

Typically, you initialize a search display controller from a view controller (usually an instance of [UITableViewController](uitableviewcontroller.md)) that’s displaying a list. See the Simple UISearchBar with State Restoration sample code project for an example of how to configure a search display controller in Interface Builder. To perform configuration programmatically, set `self` for the search display controller’s view controller and search results data source and delegate, as shown here:

```objc
searchController = [[UISearchDisplayController alloc]
                         initWithSearchBar:searchBar contentsController:self];
searchController.delegate = self;
searchController.searchResultsDataSource = self;
searchController.searchResultsDelegate = self;
```

If you follow this pattern, then in the table view data source and delegate methods you can check the methods’ table view argument to determine which table view is sending the message:

```objc
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
 
    if (tableView == self.tableView) {
        return ...;
    }
    // If necessary (if self is the data source for other table views),
    // check whether tableView is searchController.searchResultsTableView.
    return ...;
}
```

> **Important**

>  A view controller or search bar can be associated with only a single search display controller at a time. If a search display controller is destroyed (for example, in response to a memory warning), then you can create a new one and associate it with the original view controller or search bar.

Starting in iOS 7.0, you can use a search display controller with a navigation bar (an instance of the [UINavigationBar](uinavigationbar.md) class) by configuring the search display controller’s [displaysSearchBarInNavigationBar](uisearchdisplaycontroller/displayssearchbarinnavigationbar.md) and [navigationItem](uisearchdisplaycontroller/navigationitem.md) properties.

## Topics

### Initializing a search bar

- [initWithSearchBar:contentsController:](uisearchdisplaycontroller/init%28searchbar_contentscontroller_%29.md): Deprecated. Returns a display controller initialized with the given search bar and contents controller.

### Displaying the search Interface

- [active](uisearchdisplaycontroller/isactive.md): Deprecated. The visibility state of the search interface.
- [setActive:animated:](uisearchdisplaycontroller/setactive%28__animated_%29.md): Deprecated. Displays or hides the search interface, optionally with animation.

### Configuring a search bar

- [delegate](uisearchdisplaycontroller/delegate.md): Deprecated. The controller’s delegate.
- [searchBar](uisearchdisplaycontroller/searchbar.md): Deprecated. The search bar.
- [searchContentsController](uisearchdisplaycontroller/searchcontentscontroller.md): Deprecated. The view controller that manages the contents being searched.
- [searchResultsTableView](uisearchdisplaycontroller/searchresultstableview.md): Deprecated. The table view in which the search results are displayed.
- [searchResultsDataSource](uisearchdisplaycontroller/searchresultsdatasource.md): Deprecated. The data source for the table view in which the search results are displayed.
- [searchResultsDelegate](uisearchdisplaycontroller/searchresultsdelegate.md): Deprecated. The delegate for the table view in which the search results are displayed.
- [searchResultsTitle](uisearchdisplaycontroller/searchresultstitle.md): Deprecated. The title for the search results view.
- [displaysSearchBarInNavigationBar](uisearchdisplaycontroller/displayssearchbarinnavigationbar.md): Deprecated. Specifies that the navigation bar contains a search bar.
- [navigationItem](uisearchdisplaycontroller/navigationitem.md): Deprecated. Represents the search display controller in a navigation controller’s navigation bar.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated classes

- [UIAcceleration](uiacceleration.md): Deprecated. An acceleration event that represents immediate, three-dimensional acceleration data.
- [UIAccelerometer](uiaccelerometer.md): Deprecated. An object that lets you register to receive acceleration-related data from the onboard hardware.
- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md): Deprecated. A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
- [UILocalNotification](uilocalnotification.md): Deprecated. A notification that an app can schedule for presentation at a specific date and time.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
