> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/searchcontroller](https://developer.apple.com/documentation/uikit/uinavigationitem/searchcontroller)

# searchController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The search controller to integrate into your navigation interface.

## Declaration

```swift
var searchController: UISearchController? { get set }
```

<a id="Discussion"></a>

## Discussion

When a view controller in your navigation interface supports search, assign the corresponding search controller to this property. The navigation controller integrates the search bar from your search controller into the navigation bar interface, presenting a single bar for both search and navigation. Use the [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md) property to control the visibility of the search bar when scrolling.

## See Also

### Integrating search into your interface

- [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md): A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.
- [searchBarPlacement](searchbarplacement-swift.property.md): The placement of the search bar in the navigation bar.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [UINavigationItem.SearchBarPlacement](searchbarplacement-swift.enum.md): Constants that determine where the search bar appears in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementAllowsToolbarIntegration](searchbarplacementallowstoolbarintegration.md): A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.
- [searchBarPlacementBarButtonItem](searchbarplacementbarbuttonitem.md): An item you use to control the placement of the search bar in a toolbar on iPhone.

# searchController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The search controller to integrate into your navigation interface.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UISearchController * searchController;
```

<a id="Discussion"></a>

## Discussion

When a view controller in your navigation interface supports search, assign the corresponding search controller to this property. The navigation controller integrates the search bar from your search controller into the navigation bar interface, presenting a single bar for both search and navigation. Use the [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md) property to control the visibility of the search bar when scrolling.

## See Also

### Integrating search into your interface

- [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md): A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.
- [searchBarPlacement](searchbarplacement-swift.property.md): The placement of the search bar in the navigation bar.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [UINavigationItemSearchBarPlacement](searchbarplacement-swift.enum.md): Constants that determine where the search bar appears in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementAllowsToolbarIntegration](searchbarplacementallowstoolbarintegration.md): A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.
- [searchBarPlacementBarButtonItem](searchbarplacementbarbuttonitem.md): An item you use to control the placement of the search bar in a toolbar on iPhone.
