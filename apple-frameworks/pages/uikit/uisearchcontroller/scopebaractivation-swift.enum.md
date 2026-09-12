> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/scopebaractivation-swift.enum](https://developer.apple.com/documentation/uikit/uisearchcontroller/scopebaractivation-swift.enum)

# UISearchController.ScopeBarActivation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that specify the modes for showing and hiding the scope bar.

## Declaration

```swift
enum ScopeBarActivation
```

<a id="overview"></a>

## Overview

You use these constants with the [scopeBarActivation](scopebaractivation-swift.property.md) property.

## Topics

### Constants

- [UISearchController.ScopeBarActivation.automatic](scopebaractivation-swift.enum/automatic.md): A mode in which the system automatically determines when to show and hide the scope bar.
- [UISearchController.ScopeBarActivation.manual](scopebaractivation-swift.enum/manual.md): A mode that gives you manual control over when to show and hide the scope bar.
- [UISearchController.ScopeBarActivation.onTextEntry](scopebaractivation-swift.enum/ontextentry.md): A mode in which the search controller shows the scope bar when typing begins in the search field, and hides it after search cancellation.
- [UISearchController.ScopeBarActivation.onSearchActivation](scopebaractivation-swift.enum/onsearchactivation.md): A mode in which the search controller shows the scope bar when search becomes active, and hides it after search cancellation.

### Initializers

- [init(rawValue:)](scopebaractivation-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the search interface

- [obscuresBackgroundDuringPresentation](obscuresbackgroundduringpresentation.md): A Boolean indicating whether to obscure the underlying content during a search.
- [hidesNavigationBarDuringPresentation](hidesnavigationbarduringpresentation.md): A Boolean indicating whether to hide the navigation bar when searching.
- [automaticallyShowsCancelButton](automaticallyshowscancelbutton.md): A Boolean indicating whether the search controller manages the visibility of the search bar’s cancel button.
- [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md): A Boolean indicating whether the search controller manages the visibility of its results controller.
- [showsSearchResultsController](showssearchresultscontroller.md): A Boolean indicating whether the search results controller is visible when the search controller is active.
- [searchBarPlacement](searchbarplacement.md): The placement of the search bar in the navigation bar.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [automaticallyShowsScopeBar](automaticallyshowsscopebar.md): Deprecated. A Boolean indicating whether the search controller manages the visibility of the search bar’s scope bar.
- [scopeBarActivation](scopebaractivation-swift.property.md): A mode that determines when the search controller shows and hides the scope bar.

# UISearchControllerScopeBarActivation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that specify the modes for showing and hiding the scope bar.

## Declaration

```objectivec
enum UISearchControllerScopeBarActivation : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants with the [scopeBarActivation](scopebaractivation-swift.property.md) property.

## Topics

### Constants

- [UISearchControllerScopeBarActivationAutomatic](scopebaractivation-swift.enum/automatic.md): A mode in which the system automatically determines when to show and hide the scope bar.
- [UISearchControllerScopeBarActivationManual](scopebaractivation-swift.enum/manual.md): A mode that gives you manual control over when to show and hide the scope bar.
- [UISearchControllerScopeBarActivationOnTextEntry](scopebaractivation-swift.enum/ontextentry.md): A mode in which the search controller shows the scope bar when typing begins in the search field, and hides it after search cancellation.
- [UISearchControllerScopeBarActivationOnSearchActivation](scopebaractivation-swift.enum/onsearchactivation.md): A mode in which the search controller shows the scope bar when search becomes active, and hides it after search cancellation.

## See Also

### Configuring the search interface

- [obscuresBackgroundDuringPresentation](obscuresbackgroundduringpresentation.md): A Boolean indicating whether to obscure the underlying content during a search.
- [hidesNavigationBarDuringPresentation](hidesnavigationbarduringpresentation.md): A Boolean indicating whether to hide the navigation bar when searching.
- [automaticallyShowsCancelButton](automaticallyshowscancelbutton.md): A Boolean indicating whether the search controller manages the visibility of the search bar’s cancel button.
- [automaticallyShowsSearchResultsController](automaticallyshowssearchresultscontroller.md): A Boolean indicating whether the search controller manages the visibility of its results controller.
- [showsSearchResultsController](showssearchresultscontroller.md): A Boolean indicating whether the search results controller is visible when the search controller is active.
- [searchBarPlacement](searchbarplacement.md): The placement of the search bar in the navigation bar.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [automaticallyShowsScopeBar](automaticallyshowsscopebar.md): Deprecated. A Boolean indicating whether the search controller manages the visibility of the search bar’s scope bar.
- [scopeBarActivation](scopebaractivation-swift.property.md): A mode that determines when the search controller shows and hides the scope bar.
