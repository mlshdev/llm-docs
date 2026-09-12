> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/automaticallyshowsscopebar](https://developer.apple.com/documentation/uikit/uisearchcontroller/automaticallyshowsscopebar)

# automaticallyShowsScopeBar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 13.0+ · visionOS 1.0+ (deprecated in 27.0)

A Boolean indicating whether the search controller manages the visibility of the search bar’s scope bar.

> In iOS, use [scopeBarActivation](scopebaractivation-swift.property.md) instead.

## Declaration

```swift
var automaticallyShowsScopeBar: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, [UISearchController](../uisearchcontroller.md) shows the search bar’s scope bar when search becomes active and hides it when the user dismisses the search. Set this to [false](https://developer.apple.com/documentation/swift/false) if you want to show and hide the scope bar in your own code. If you set the [showsScopeBar](../uisearchbar/showsscopebar.md) property, that also changes this property to [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  The search bar doesn’t show its scope bar at all if there are fewer than two titles in the search bar’s [scopeButtonTitles](../uisearchbar/scopebuttontitles.md).

## See Also

### Configuring the search interface

- [obscuresBackgroundDuringPresentation](obscuresbackgroundduringpresentation.md): A Boolean indicating whether to obscure the underlying content during a search.
- [hidesNavigationBarDuringPresentation](hidesnavigationbarduringpresentation.md): A Boolean indicating whether to hide the navigation bar when searching.
- [automaticallyShowsCancelButton](automaticallyshowscancelbutton.md): A Boolean indicating whether the search controller manages the visibility of the search bar’s cancel button.
- [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md): A Boolean indicating whether the search controller manages the visibility of its results controller.
- [showsSearchResultsController](showssearchresultscontroller.md): A Boolean indicating whether the search results controller is visible when the search controller is active.
- [searchBarPlacement](searchbarplacement.md): The placement of the search bar in the navigation bar.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [scopeBarActivation](scopebaractivation-swift.property.md): A mode that determines when the search controller shows and hides the scope bar.
- [UISearchController.ScopeBarActivation](scopebaractivation-swift.enum.md): Constants that specify the modes for showing and hiding the scope bar.

# automaticallyShowsScopeBar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 13.0+ · visionOS 1.0+ (deprecated in 27.0)

A Boolean indicating whether the search controller manages the visibility of the search bar’s scope bar.

> In iOS, use [scopeBarActivation](scopebaractivation-swift.property.md) instead.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyShowsScopeBar;
```

<a id="Discussion"></a>

## Discussion

By default, [UISearchController](../uisearchcontroller.md) shows the search bar’s scope bar when search becomes active and hides it when the user dismisses the search. Set this to [false](https://developer.apple.com/documentation/swift/false) if you want to show and hide the scope bar in your own code. If you set the [showsScopeBar](../uisearchbar/showsscopebar.md) property, that also changes this property to [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  The search bar doesn’t show its scope bar at all if there are fewer than two titles in the search bar’s [scopeButtonTitles](../uisearchbar/scopebuttontitles.md).

## See Also

### Configuring the search interface

- [obscuresBackgroundDuringPresentation](obscuresbackgroundduringpresentation.md): A Boolean indicating whether to obscure the underlying content during a search.
- [hidesNavigationBarDuringPresentation](hidesnavigationbarduringpresentation.md): A Boolean indicating whether to hide the navigation bar when searching.
- [automaticallyShowsCancelButton](automaticallyshowscancelbutton.md): A Boolean indicating whether the search controller manages the visibility of the search bar’s cancel button.
- [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md): A Boolean indicating whether the search controller manages the visibility of its results controller.
- [showsSearchResultsController](showssearchresultscontroller.md): A Boolean indicating whether the search results controller is visible when the search controller is active.
- [searchBarPlacement](searchbarplacement.md): The placement of the search bar in the navigation bar.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [scopeBarActivation](scopebaractivation-swift.property.md): A mode that determines when the search controller shows and hides the scope bar.
- [UISearchControllerScopeBarActivation](scopebaractivation-swift.enum.md): Constants that specify the modes for showing and hiding the scope bar.
