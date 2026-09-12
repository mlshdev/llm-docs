> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/searchresultsupdater](https://developer.apple.com/documentation/uikit/uisearchcontroller/searchresultsupdater)

# searchResultsUpdater (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object responsible for updating the contents of the search results controller.

## Declaration

```swift
weak var searchResultsUpdater: (any UISearchResultsUpdating)? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign an object that adopts the [UISearchResultsUpdating](../uisearchresultsupdating.md) protocol. Use the methods of that protocol to search your content and deliver the results to your search results view controller. The object contained by the [searchResultsUpdater](searchresultsupdater.md) property is often the view controller that’s set during initialization.

## See Also

### Managing the search results

- [searchBar](searchbar.md): The search bar to install in your interface.
- [searchResultsController](searchresultscontroller.md): The view controller that displays the results of the search.
- [isActive](isactive.md): The presented state of the search interface.

# searchResultsUpdater (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object responsible for updating the contents of the search results controller.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UISearchResultsUpdating> searchResultsUpdater;
```

<a id="Discussion"></a>

## Discussion

Assign an object that adopts the [UISearchResultsUpdating](../uisearchresultsupdating.md) protocol. Use the methods of that protocol to search your content and deliver the results to your search results view controller. The object contained by the [searchResultsUpdater](searchresultsupdater.md) property is often the view controller that’s set during initialization.

## See Also

### Managing the search results

- [searchBar](searchbar.md): The search bar to install in your interface.
- [searchResultsController](searchresultscontroller.md): The view controller that displays the results of the search.
- [active](isactive.md): The presented state of the search interface.
