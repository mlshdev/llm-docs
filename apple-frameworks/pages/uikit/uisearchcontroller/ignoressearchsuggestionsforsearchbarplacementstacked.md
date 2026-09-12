> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/ignoressearchsuggestionsforsearchbarplacementstacked](https://developer.apple.com/documentation/uikit/uisearchcontroller/ignoressearchsuggestionsforsearchbarplacementstacked)

# ignoresSearchSuggestionsForSearchBarPlacementStacked (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.

## Declaration

```swift
var ignoresSearchSuggestionsForSearchBarPlacementStacked: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [false](https://developer.apple.com/documentation/swift/false). To prevent the search controller from creating and presenting a search suggestions view controller when the [searchBarPlacement](searchbarplacement.md) is [UINavigationItem.SearchBarPlacement.stacked](../uinavigationitem/searchbarplacement-swift.enum/stacked.md), set to [true](https://developer.apple.com/documentation/swift/true) when you create the search controller.

If you set this value to [true](https://developer.apple.com/documentation/swift/true) after the search controller has already displayed search suggestions, it hides the search suggestions view controller and won’t display it again until you set the value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the search interface

- [obscuresBackgroundDuringPresentation](obscuresbackgroundduringpresentation.md): A Boolean indicating whether to obscure the underlying content during a search.
- [hidesNavigationBarDuringPresentation](hidesnavigationbarduringpresentation.md): A Boolean indicating whether to hide the navigation bar when searching.
- [automaticallyShowsCancelButton](automaticallyshowscancelbutton.md): A Boolean indicating whether the search controller manages the visibility of the search bar’s cancel button.
- [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md): A Boolean indicating whether the search controller manages the visibility of its results controller.
- [showsSearchResultsController](showssearchresultscontroller.md): A Boolean indicating whether the search results controller is visible when the search controller is active.
- [searchBarPlacement](searchbarplacement.md): The placement of the search bar in the navigation bar.
- [automaticallyShowsScopeBar](automaticallyshowsscopebar.md): Deprecated. A Boolean indicating whether the search controller manages the visibility of the search bar’s scope bar.
- [scopeBarActivation](scopebaractivation-swift.property.md): A mode that determines when the search controller shows and hides the scope bar.
- [UISearchController.ScopeBarActivation](scopebaractivation-swift.enum.md): Constants that specify the modes for showing and hiding the scope bar.

# ignoresSearchSuggestionsForSearchBarPlacementStacked (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.

## Declaration

```objectivec
@property (nonatomic) BOOL ignoresSearchSuggestionsForSearchBarPlacementStacked;
```

<a id="Discussion"></a>

## Discussion

Defaults to [false](https://developer.apple.com/documentation/swift/false). To prevent the search controller from creating and presenting a search suggestions view controller when the [searchBarPlacement](searchbarplacement.md) is [UINavigationItemSearchBarPlacementStacked](../uinavigationitem/searchbarplacement-swift.enum/stacked.md), set to [true](https://developer.apple.com/documentation/swift/true) when you create the search controller.

If you set this value to [true](https://developer.apple.com/documentation/swift/true) after the search controller has already displayed search suggestions, it hides the search suggestions view controller and won’t display it again until you set the value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the search interface

- [obscuresBackgroundDuringPresentation](obscuresbackgroundduringpresentation.md): A Boolean indicating whether to obscure the underlying content during a search.
- [hidesNavigationBarDuringPresentation](hidesnavigationbarduringpresentation.md): A Boolean indicating whether to hide the navigation bar when searching.
- [automaticallyShowsCancelButton](automaticallyshowscancelbutton.md): A Boolean indicating whether the search controller manages the visibility of the search bar’s cancel button.
- [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md): A Boolean indicating whether the search controller manages the visibility of its results controller.
- [showsSearchResultsController](showssearchresultscontroller.md): A Boolean indicating whether the search results controller is visible when the search controller is active.
- [searchBarPlacement](searchbarplacement.md): The placement of the search bar in the navigation bar.
- [automaticallyShowsScopeBar](automaticallyshowsscopebar.md): Deprecated. A Boolean indicating whether the search controller manages the visibility of the search bar’s scope bar.
- [scopeBarActivation](scopebaractivation-swift.property.md): A mode that determines when the search controller shows and hides the scope bar.
- [UISearchControllerScopeBarActivation](scopebaractivation-swift.enum.md): Constants that specify the modes for showing and hiding the scope bar.
