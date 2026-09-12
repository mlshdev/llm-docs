> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/showssearchresultscontroller](https://developer.apple.com/documentation/uikit/uisearchcontroller/showssearchresultscontroller)

# showsSearchResultsController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the search results controller is visible when the search controller is active.

## Declaration

```swift
var showsSearchResultsController: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to directly control the visibility of the search results controller. If you set this property, [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md) becomes [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the search interface

- [obscuresBackgroundDuringPresentation](obscuresbackgroundduringpresentation.md): A Boolean indicating whether to obscure the underlying content during a search.
- [hidesNavigationBarDuringPresentation](hidesnavigationbarduringpresentation.md): A Boolean indicating whether to hide the navigation bar when searching.
- [automaticallyShowsCancelButton](automaticallyshowscancelbutton.md): A Boolean indicating whether the search controller manages the visibility of the search bar’s cancel button.
- [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md): A Boolean indicating whether the search controller manages the visibility of its results controller.
- [searchBarPlacement](searchbarplacement.md): The placement of the search bar in the navigation bar.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [automaticallyShowsScopeBar](automaticallyshowsscopebar.md): Deprecated. A Boolean indicating whether the search controller manages the visibility of the search bar’s scope bar.
- [scopeBarActivation](scopebaractivation-swift.property.md): A mode that determines when the search controller shows and hides the scope bar.
- [UISearchController.ScopeBarActivation](scopebaractivation-swift.enum.md): Constants that specify the modes for showing and hiding the scope bar.

# showsSearchResultsController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the search results controller is visible when the search controller is active.

## Declaration

```objectivec
@property (nonatomic) BOOL showsSearchResultsController;
```

<a id="Discussion"></a>

## Discussion

Set this property to directly control the visibility of the search results controller. If you set this property, [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md) becomes [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the search interface

- [obscuresBackgroundDuringPresentation](obscuresbackgroundduringpresentation.md): A Boolean indicating whether to obscure the underlying content during a search.
- [hidesNavigationBarDuringPresentation](hidesnavigationbarduringpresentation.md): A Boolean indicating whether to hide the navigation bar when searching.
- [automaticallyShowsCancelButton](automaticallyshowscancelbutton.md): A Boolean indicating whether the search controller manages the visibility of the search bar’s cancel button.
- [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md): A Boolean indicating whether the search controller manages the visibility of its results controller.
- [searchBarPlacement](searchbarplacement.md): The placement of the search bar in the navigation bar.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [automaticallyShowsScopeBar](automaticallyshowsscopebar.md): Deprecated. A Boolean indicating whether the search controller manages the visibility of the search bar’s scope bar.
- [scopeBarActivation](scopebaractivation-swift.property.md): A mode that determines when the search controller shows and hides the scope bar.
- [UISearchControllerScopeBarActivation](scopebaractivation-swift.enum.md): Constants that specify the modes for showing and hiding the scope bar.
