> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/searchbarplacementallowstoolbarintegration](https://developer.apple.com/documentation/uikit/uinavigationitem/searchbarplacementallowstoolbarintegration)

# searchBarPlacementAllowsToolbarIntegration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.

## Declaration

```swift
var searchBarPlacementAllowsToolbarIntegration: Bool { get set }
```

<a id="Overview"></a>

## Overview

Defaults to [true](https://developer.apple.com/documentation/swift/true). Set to [false](https://developer.apple.com/documentation/swift/false) to prevent the system from placing the search bar among other [UIToolbar](../uitoolbar.md) items on iPhone.

## See Also

### Integrating search into your interface

- [searchController](searchcontroller.md): The search controller to integrate into your navigation interface.
- [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md): A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.
- [searchBarPlacement](searchbarplacement-swift.property.md): The placement of the search bar in the navigation bar.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [UINavigationItem.SearchBarPlacement](searchbarplacement-swift.enum.md): Constants that determine where the search bar appears in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementBarButtonItem](searchbarplacementbarbuttonitem.md): An item you use to control the placement of the search bar in a toolbar on iPhone.

# searchBarPlacementAllowsToolbarIntegration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.

## Declaration

```objectivec
@property (nonatomic) BOOL searchBarPlacementAllowsToolbarIntegration;
```

<a id="Overview"></a>

## Overview

Defaults to [true](https://developer.apple.com/documentation/swift/true). Set to [false](https://developer.apple.com/documentation/swift/false) to prevent the system from placing the search bar among other [UIToolbar](../uitoolbar.md) items on iPhone.

## See Also

### Integrating search into your interface

- [searchController](searchcontroller.md): The search controller to integrate into your navigation interface.
- [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md): A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.
- [searchBarPlacement](searchbarplacement-swift.property.md): The placement of the search bar in the navigation bar.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [UINavigationItemSearchBarPlacement](searchbarplacement-swift.enum.md): Constants that determine where the search bar appears in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementBarButtonItem](searchbarplacementbarbuttonitem.md): An item you use to control the placement of the search bar in a toolbar on iPhone.
