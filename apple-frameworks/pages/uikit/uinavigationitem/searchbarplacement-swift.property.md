> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/searchbarplacement-swift.property](https://developer.apple.com/documentation/uikit/uinavigationitem/searchbarplacement-swift.property)

# searchBarPlacement (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The placement of the search bar in the navigation bar.

## Declaration

```swift
var searchBarPlacement: UINavigationItem.SearchBarPlacement { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine the actual search bar placement when the [preferredSearchBarPlacement](preferredsearchbarplacement.md) is [UINavigationItem.SearchBarPlacement.automatic](searchbarplacement-swift.enum/automatic.md).

This property only applies when the navigation item has a [searchController](searchcontroller.md).

## See Also

### Integrating search into your interface

- [searchController](searchcontroller.md): The search controller to integrate into your navigation interface.
- [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md): A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [UINavigationItem.SearchBarPlacement](searchbarplacement-swift.enum.md): Constants that determine where the search bar appears in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementAllowsToolbarIntegration](searchbarplacementallowstoolbarintegration.md): A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.
- [searchBarPlacementBarButtonItem](searchbarplacementbarbuttonitem.md): An item you use to control the placement of the search bar in a toolbar on iPhone.

# searchBarPlacement (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The placement of the search bar in the navigation bar.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) UINavigationItemSearchBarPlacement searchBarPlacement;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine the actual search bar placement when the [preferredSearchBarPlacement](preferredsearchbarplacement.md) is [UINavigationItemSearchBarPlacementAutomatic](searchbarplacement-swift.enum/automatic.md).

This property only applies when the navigation item has a [searchController](searchcontroller.md).

## See Also

### Integrating search into your interface

- [searchController](searchcontroller.md): The search controller to integrate into your navigation interface.
- [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md): A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [UINavigationItemSearchBarPlacement](searchbarplacement-swift.enum.md): Constants that determine where the search bar appears in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementAllowsToolbarIntegration](searchbarplacementallowstoolbarintegration.md): A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.
- [searchBarPlacementBarButtonItem](searchbarplacementbarbuttonitem.md): An item you use to control the placement of the search bar in a toolbar on iPhone.
