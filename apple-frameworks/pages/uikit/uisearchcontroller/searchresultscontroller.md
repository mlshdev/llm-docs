> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/searchresultscontroller](https://developer.apple.com/documentation/uikit/uisearchcontroller/searchresultscontroller)

# searchResultsController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller that displays the results of the search.

## Declaration

```swift
var searchResultsController: UIViewController? { get }
```

<a id="Discussion"></a>

## Discussion

When the user enters text in the search bar, the search controller displays this view controller immediately and without any animations. You’re responsible for passing the search results to this view controller so that they can be displayed. You do this using the object in the [searchResultsUpdater](searchresultsupdater.md) property.

When the value of this property is `nil`, the search controller doesn’t present a separate view controller for the search results. Instead, you should display the results using the original view controller containing the search bar and searchable contents.

## See Also

### Managing the search results

- [searchBar](searchbar.md): The search bar to install in your interface.
- [searchResultsUpdater](searchresultsupdater.md): The object responsible for updating the contents of the search results controller.
- [isActive](isactive.md): The presented state of the search interface.

# searchResultsController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controller that displays the results of the search.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIViewController * searchResultsController;
```

<a id="Discussion"></a>

## Discussion

When the user enters text in the search bar, the search controller displays this view controller immediately and without any animations. You’re responsible for passing the search results to this view controller so that they can be displayed. You do this using the object in the [searchResultsUpdater](searchresultsupdater.md) property.

When the value of this property is `nil`, the search controller doesn’t present a separate view controller for the search results. Instead, you should display the results using the original view controller containing the search bar and searchable contents.

## See Also

### Managing the search results

- [searchBar](searchbar.md): The search bar to install in your interface.
- [searchResultsUpdater](searchresultsupdater.md): The object responsible for updating the contents of the search results controller.
- [active](isactive.md): The presented state of the search interface.
