> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/searchbarplacementbarbuttonitem](https://developer.apple.com/documentation/uikit/uinavigationitem/searchbarplacementbarbuttonitem)

# searchBarPlacementBarButtonItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An item you use to control the placement of the search bar in a toolbar on iPhone.

## Declaration

```swift
var searchBarPlacementBarButtonItem: UIBarButtonItem { get }
```

<a id="Overview"></a>

## Overview

When [searchBarPlacement](searchbarplacement-swift.property.md) is `.integrated` or `.integratedButton` and a search controller is present, use this bar button item in the view controller’s [toolbarItems](../uiviewcontroller/toolbaritems.md) to control the placement of the search bar among them when the search bar is appearing in the [UIToolbar](../uitoolbar.md) on iPhone. Without this bar button item, the positioning for the search bar defaults to trailingmost for the [UIToolbar](../uitoolbar.md) case.

The system ignores this bar button item during toolbar layout if [searchController](searchcontroller.md) is `nil`. [UIBarButtonItemGroup](../uibarbuttonitemgroup.md) throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) when you include this bar button item in its initialization. [UINavigationItem](../uinavigationitem.md) throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) when you include this bar button item in [leftBarButtonItems](leftbarbuttonitems.md) or [rightBarButtonItems](rightbarbuttonitems.md).

## See Also

### Integrating search into your interface

- [searchController](searchcontroller.md): The search controller to integrate into your navigation interface.
- [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md): A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.
- [searchBarPlacement](searchbarplacement-swift.property.md): The placement of the search bar in the navigation bar.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [UINavigationItem.SearchBarPlacement](searchbarplacement-swift.enum.md): Constants that determine where the search bar appears in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementAllowsToolbarIntegration](searchbarplacementallowstoolbarintegration.md): A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.

# searchBarPlacementBarButtonItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An item you use to control the placement of the search bar in a toolbar on iPhone.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIBarButtonItem * searchBarPlacementBarButtonItem;
```

<a id="Overview"></a>

## Overview

When [searchBarPlacement](searchbarplacement-swift.property.md) is `.integrated` or `.integratedButton` and a search controller is present, use this bar button item in the view controller’s [toolbarItems](../uiviewcontroller/toolbaritems.md) to control the placement of the search bar among them when the search bar is appearing in the [UIToolbar](../uitoolbar.md) on iPhone. Without this bar button item, the positioning for the search bar defaults to trailingmost for the [UIToolbar](../uitoolbar.md) case.

The system ignores this bar button item during toolbar layout if [searchController](searchcontroller.md) is `nil`. [UIBarButtonItemGroup](../uibarbuttonitemgroup.md) throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) when you include this bar button item in its initialization. [UINavigationItem](../uinavigationitem.md) throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) when you include this bar button item in [leftBarButtonItems](leftbarbuttonitems.md) or [rightBarButtonItems](rightbarbuttonitems.md).

## See Also

### Integrating search into your interface

- [searchController](searchcontroller.md): The search controller to integrate into your navigation interface.
- [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md): A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.
- [searchBarPlacement](searchbarplacement-swift.property.md): The placement of the search bar in the navigation bar.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [UINavigationItemSearchBarPlacement](searchbarplacement-swift.enum.md): Constants that determine where the search bar appears in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementAllowsToolbarIntegration](searchbarplacementallowstoolbarintegration.md): A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.
