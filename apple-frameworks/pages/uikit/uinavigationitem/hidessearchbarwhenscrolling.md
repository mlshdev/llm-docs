> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/hidessearchbarwhenscrolling](https://developer.apple.com/documentation/uikit/uinavigationitem/hidessearchbarwhenscrolling)

# hidesSearchBarWhenScrolling (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.

## Declaration

```swift
var hidesSearchBarWhenScrolling: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the search bar is visible only when the scroll position equals the top of your content view. When the user scrolls down, the search bar collapses into the navigation bar. Scrolling back to the top reveals the search bar again. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the search bar remains regardless of the current scroll position.

You must configure the [searchController](searchcontroller.md) property for this property to have any effect. The navigation controller hides and shows only the search bar provided by the search controller in that property.

## See Also

### Integrating search into your interface

- [searchController](searchcontroller.md): The search controller to integrate into your navigation interface.
- [searchBarPlacement](searchbarplacement-swift.property.md): The placement of the search bar in the navigation bar.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [UINavigationItem.SearchBarPlacement](searchbarplacement-swift.enum.md): Constants that determine where the search bar appears in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementAllowsToolbarIntegration](searchbarplacementallowstoolbarintegration.md): A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.
- [searchBarPlacementBarButtonItem](searchbarplacementbarbuttonitem.md): An item you use to control the placement of the search bar in a toolbar on iPhone.

# hidesSearchBarWhenScrolling (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL hidesSearchBarWhenScrolling;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the search bar is visible only when the scroll position equals the top of your content view. When the user scrolls down, the search bar collapses into the navigation bar. Scrolling back to the top reveals the search bar again. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the search bar remains regardless of the current scroll position.

You must configure the [searchController](searchcontroller.md) property for this property to have any effect. The navigation controller hides and shows only the search bar provided by the search controller in that property.

## See Also

### Integrating search into your interface

- [searchController](searchcontroller.md): The search controller to integrate into your navigation interface.
- [searchBarPlacement](searchbarplacement-swift.property.md): The placement of the search bar in the navigation bar.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [UINavigationItemSearchBarPlacement](searchbarplacement-swift.enum.md): Constants that determine where the search bar appears in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementAllowsToolbarIntegration](searchbarplacementallowstoolbarintegration.md): A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.
- [searchBarPlacementBarButtonItem](searchbarplacementbarbuttonitem.md): An item you use to control the placement of the search bar in a toolbar on iPhone.
