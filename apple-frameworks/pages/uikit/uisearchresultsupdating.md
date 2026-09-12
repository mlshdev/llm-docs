> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchresultsupdating](https://developer.apple.com/documentation/uikit/uisearchresultsupdating)

# UISearchResultsUpdating (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that let you update search results based on information the user enters into the search bar.

## Declaration

```swift
@MainActor protocol UISearchResultsUpdating : NSObjectProtocol
```

## Topics

### Updating the search bar

- [updateSearchResults(for:)](uisearchresultsupdating/updatesearchresults%28for_%29.md): Asks the object to update the search results for a specified controller.
- [updateSearchResults(for:selecting:)](uisearchresultsupdating/updatesearchresults%28for_selecting_%29.md): Asks the object to update the search results for a specified controller after the user selects a search suggestion.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Search interface

- [UISearchContainerViewController](uisearchcontainerviewcontroller.md): A view controller that manages the presentation of search results in your interface.
- [UISearchController](uisearchcontroller.md): A view controller that manages the display of search results based on interactions with a search bar.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [Displaying searchable content by using a search controller](displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [Using suggested searches with a search controller](using-suggested-searches-with-a-search-controller.md): Create a search interface with a table view of suggested searches.

# UISearchResultsUpdating (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that let you update search results based on information the user enters into the search bar.

## Declaration

```objectivec
@protocol UISearchResultsUpdating <NSObject>
```

## Topics

### Updating the search bar

- [updateSearchResultsForSearchController:](uisearchresultsupdating/updatesearchresults%28for_%29.md): Asks the object to update the search results for a specified controller.
- [updateSearchResultsForSearchController:selectingSearchSuggestion:](uisearchresultsupdating/updatesearchresults%28for_selecting_%29.md): Asks the object to update the search results for a specified controller after the user selects a search suggestion.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Search interface

- [UISearchContainerViewController](uisearchcontainerviewcontroller.md): A view controller that manages the presentation of search results in your interface.
- [UISearchController](uisearchcontroller.md): A view controller that manages the display of search results based on interactions with a search bar.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [Displaying searchable content by using a search controller](displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [Using suggested searches with a search controller](using-suggested-searches-with-a-search-controller.md): Create a search interface with a table view of suggested searches.
