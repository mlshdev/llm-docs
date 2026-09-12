> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchresultsupdating/updatesearchresults(for:)](https://developer.apple.com/documentation/uikit/uisearchresultsupdating/updatesearchresults(for:))

# updateSearchResults(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the object to update the search results for a specified controller.

## Declaration

```swift
func updateSearchResults(for searchController: UISearchController)
```

## Parameters

- `searchController`: The [UISearchController](../uisearchcontroller.md) object used as the search bar.

<a id="Discussion"></a>

## Discussion

The system calls this method when the search bar becomes the first responder or the search bar’s text changes. Perform any required filtering and updating of search results or suggestions inside of this method.

## See Also

### Updating the search bar

- [updateSearchResults(for:selecting:)](updatesearchresults%28for_selecting_%29.md): Asks the object to update the search results for a specified controller after the user selects a search suggestion.

# updateSearchResultsForSearchController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the object to update the search results for a specified controller.

## Declaration

```objectivec
- (void) updateSearchResultsForSearchController:(UISearchController *) searchController;
```

## Parameters

- `searchController`: The [UISearchController](../uisearchcontroller.md) object used as the search bar.

<a id="Discussion"></a>

## Discussion

The system calls this method when the search bar becomes the first responder or the search bar’s text changes. Perform any required filtering and updating of search results or suggestions inside of this method.

## See Also

### Updating the search bar

- [updateSearchResultsForSearchController:selectingSearchSuggestion:](updatesearchresults%28for_selecting_%29.md): Asks the object to update the search results for a specified controller after the user selects a search suggestion.
