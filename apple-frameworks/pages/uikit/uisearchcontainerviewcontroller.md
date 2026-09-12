> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontainerviewcontroller](https://developer.apple.com/documentation/uikit/uisearchcontainerviewcontroller)

# UISearchContainerViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A view controller that manages the presentation of search results in your interface.

## Declaration

```swift
@MainActor class UISearchContainerViewController
```

<a id="overview"></a>

## Overview

In tvOS, rather than push a [UISearchController](uisearchcontroller.md) onto a navigation controller’s stack or use one as a child of another container view controller, embed an instance of this class and let it manage the presentation of the search controller’s content.

[UISearchContainerViewController](uisearchcontainerviewcontroller.md) presents its [UISearchController](uisearchcontroller.md), instead of containing it. So implement view appearance methods, such as [viewWillAppear(\_:)](uiviewcontroller/viewwillappear%28__%29.md) and [didMove(toParent:)](uiviewcontroller/didmove%28toparent_%29.md) on both view controllers.

## Topics

### Creating a search container view controller

- [init(searchController:)](uisearchcontainerviewcontroller/init%28searchcontroller_%29.md): Initializes and returns a search container view controller with the specified search controller object.

### Getting the search controller

- [searchController](uisearchcontainerviewcontroller/searchcontroller.md): The search controller the search container view controller manages.

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

### Search interface

- [UISearchController](uisearchcontroller.md): A view controller that manages the display of search results based on interactions with a search bar.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [UISearchResultsUpdating](uisearchresultsupdating.md): A set of methods that let you update search results based on information the user enters into the search bar.
- [Displaying searchable content by using a search controller](displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [Using suggested searches with a search controller](using-suggested-searches-with-a-search-controller.md): Create a search interface with a table view of suggested searches.

# UISearchContainerViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A view controller that manages the presentation of search results in your interface.

## Declaration

```objectivec
@interface UISearchContainerViewController : UIViewController
```

<a id="overview"></a>

## Overview

In tvOS, rather than push a [UISearchController](uisearchcontroller.md) onto a navigation controller’s stack or use one as a child of another container view controller, embed an instance of this class and let it manage the presentation of the search controller’s content.

[UISearchContainerViewController](uisearchcontainerviewcontroller.md) presents its [UISearchController](uisearchcontroller.md), instead of containing it. So implement view appearance methods, such as [viewWillAppear:](uiviewcontroller/viewwillappear%28__%29.md) and [didMoveToParentViewController:](uiviewcontroller/didmove%28toparent_%29.md) on both view controllers.

## Topics

### Creating a search container view controller

- [initWithSearchController:](uisearchcontainerviewcontroller/init%28searchcontroller_%29.md): Initializes and returns a search container view controller with the specified search controller object.

### Getting the search controller

- [searchController](uisearchcontainerviewcontroller/searchcontroller.md): The search controller the search container view controller manages.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

## See Also

### Search interface

- [UISearchController](uisearchcontroller.md): A view controller that manages the display of search results based on interactions with a search bar.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [UISearchResultsUpdating](uisearchresultsupdating.md): A set of methods that let you update search results based on information the user enters into the search bar.
- [Displaying searchable content by using a search controller](displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [Using suggested searches with a search controller](using-suggested-searches-with-a-search-controller.md): Create a search interface with a table view of suggested searches.
