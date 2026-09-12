> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/obscuresbackgroundduringpresentation](https://developer.apple.com/documentation/uikit/uisearchcontroller/obscuresbackgroundduringpresentation)

# obscuresBackgroundDuringPresentation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean indicating whether to obscure the underlying content during a search.

## Declaration

```swift
var obscuresBackgroundDuringPresentation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the search controller obscures the view controller containing your searchable content as soon as the user interacts with the search bar. When this property is [false](https://developer.apple.com/documentation/swift/false), the search controller doesn’t obscure the original view controller. This property controls only whether the original view controller is initially obscured. When the user enters text in the search bar, the search controller immediately displays the search results controller with the results.

If you use the same view controller to display the searchable content and search results, it’s recommended that you set this property to [false](https://developer.apple.com/documentation/swift/false). The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the search interface

- [hidesNavigationBarDuringPresentation](hidesnavigationbarduringpresentation.md): A Boolean indicating whether to hide the navigation bar when searching.
- [automaticallyShowsCancelButton](automaticallyshowscancelbutton.md): A Boolean indicating whether the search controller manages the visibility of the search bar’s cancel button.
- [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md): A Boolean indicating whether the search controller manages the visibility of its results controller.
- [showsSearchResultsController](showssearchresultscontroller.md): A Boolean indicating whether the search results controller is visible when the search controller is active.
- [searchBarPlacement](searchbarplacement.md): The placement of the search bar in the navigation bar.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [automaticallyShowsScopeBar](automaticallyshowsscopebar.md): Deprecated. A Boolean indicating whether the search controller manages the visibility of the search bar’s scope bar.
- [scopeBarActivation](scopebaractivation-swift.property.md): A mode that determines when the search controller shows and hides the scope bar.
- [UISearchController.ScopeBarActivation](scopebaractivation-swift.enum.md): Constants that specify the modes for showing and hiding the scope bar.

# obscuresBackgroundDuringPresentation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean indicating whether to obscure the underlying content during a search.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL obscuresBackgroundDuringPresentation;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the search controller obscures the view controller containing your searchable content as soon as the user interacts with the search bar. When this property is [false](https://developer.apple.com/documentation/swift/false), the search controller doesn’t obscure the original view controller. This property controls only whether the original view controller is initially obscured. When the user enters text in the search bar, the search controller immediately displays the search results controller with the results.

If you use the same view controller to display the searchable content and search results, it’s recommended that you set this property to [false](https://developer.apple.com/documentation/swift/false). The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the search interface

- [hidesNavigationBarDuringPresentation](hidesnavigationbarduringpresentation.md): A Boolean indicating whether to hide the navigation bar when searching.
- [automaticallyShowsCancelButton](automaticallyshowscancelbutton.md): A Boolean indicating whether the search controller manages the visibility of the search bar’s cancel button.
- [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md): A Boolean indicating whether the search controller manages the visibility of its results controller.
- [showsSearchResultsController](showssearchresultscontroller.md): A Boolean indicating whether the search results controller is visible when the search controller is active.
- [searchBarPlacement](searchbarplacement.md): The placement of the search bar in the navigation bar.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [automaticallyShowsScopeBar](automaticallyshowsscopebar.md): Deprecated. A Boolean indicating whether the search controller manages the visibility of the search bar’s scope bar.
- [scopeBarActivation](scopebaractivation-swift.property.md): A mode that determines when the search controller shows and hides the scope bar.
- [UISearchControllerScopeBarActivation](scopebaractivation-swift.enum.md): Constants that specify the modes for showing and hiding the scope bar.
