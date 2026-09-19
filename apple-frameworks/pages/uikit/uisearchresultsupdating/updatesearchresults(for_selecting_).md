> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisearchresultsupdating/updatesearchresults(for:selecting:)

# updateSearchResults(for:selecting:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Asks the object to update the search results for a specified controller after the user selects a search suggestion.

## Declaration

```swift
optional func updateSearchResults(for searchController: UISearchController, selecting searchSuggestion: any UISearchSuggestion)
```

## Parameters

- `searchController`: The [UISearchController](../uisearchcontroller.md) object used as the search bar.
- `searchSuggestion`: The suggestion the user selected.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user selects a search suggestion. Perform any required filtering and updating of search results or suggestions inside of this method.

## See Also

### Updating the search bar

- [updateSearchResults(for:)](updatesearchresults%28for_%29.md): Asks the object to update the search results for a specified controller.

# updateSearchResultsForSearchController:selectingSearchSuggestion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Asks the object to update the search results for a specified controller after the user selects a search suggestion.

## Declaration

```objectivec
- (void) updateSearchResultsForSearchController:(UISearchController *) searchController selectingSearchSuggestion:(id<UISearchSuggestion>) searchSuggestion;
```

## Parameters

- `searchController`: The [UISearchController](../uisearchcontroller.md) object used as the search bar.
- `searchSuggestion`: The suggestion the user selected.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user selects a search suggestion. Perform any required filtering and updating of search results or suggestions inside of this method.

## See Also

### Updating the search bar

- [updateSearchResultsForSearchController:](updatesearchresults%28for_%29.md): Asks the object to update the search results for a specified controller.
