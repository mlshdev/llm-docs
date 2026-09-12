> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/searchbarplacement-swift.enum](https://developer.apple.com/documentation/uikit/uinavigationitem/searchbarplacement-swift.enum)

# UINavigationItem.SearchBarPlacement (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that determine where the search bar appears in the navigation bar.

## Declaration

```swift
enum SearchBarPlacement
```

<a id="Overview"></a>

## Overview

Use these constants to specify the placement of the search bar that belongs to the navigation item’s search controller ([searchController](searchcontroller.md)).

## Topics

### Constants

- [UINavigationItem.SearchBarPlacement.automatic](searchbarplacement-swift.enum/automatic.md): A constant that places the search bar according to the current layout.
- [inline](searchbarplacement-swift.enum/inline.md): Deprecated. A constant that places the search bar on the trailing edge of the navigation bar, inline with the other content.
- [UINavigationItem.SearchBarPlacement.stacked](searchbarplacement-swift.enum/stacked.md): A constant that stacks the search bar vertically below the other content in the navigation bar.

### Enumeration Cases

- [UINavigationItem.SearchBarPlacement.integrated](searchbarplacement-swift.enum/integrated.md): The navigation bar will place the search bar inline with other content, on the trailing edge. On iPhone, when the navigation bar belongs to a UINavigationController, the search bar may be integrated into the toolbar.
- [UINavigationItem.SearchBarPlacement.integratedButton](searchbarplacement-swift.enum/integratedbutton.md): Placement is the same as Integrated, except that the inactive search bar is always shown as a button even when space permits a search field.
- [UINavigationItem.SearchBarPlacement.integratedCentered](searchbarplacement-swift.enum/integratedcentered.md): Placement is the same as Integrated, except that in regular width on iPad, the search bar is centered in the navigation bar. Only respected when used in a view controller that is a descendant of a tab bar controller or when using a navigation item style that requires a leading aligned title

### Initializers

- [init(rawValue:)](searchbarplacement-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Integrating search into your interface

- [searchController](searchcontroller.md): The search controller to integrate into your navigation interface.
- [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md): A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.
- [searchBarPlacement](searchbarplacement-swift.property.md): The placement of the search bar in the navigation bar.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementAllowsToolbarIntegration](searchbarplacementallowstoolbarintegration.md): A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.
- [searchBarPlacementBarButtonItem](searchbarplacementbarbuttonitem.md): An item you use to control the placement of the search bar in a toolbar on iPhone.

# UINavigationItemSearchBarPlacement (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that determine where the search bar appears in the navigation bar.

## Declaration

```objectivec
enum UINavigationItemSearchBarPlacement : NSInteger;
```

<a id="Overview"></a>

## Overview

Use these constants to specify the placement of the search bar that belongs to the navigation item’s search controller ([searchController](searchcontroller.md)).

## Topics

### Constants

- [UINavigationItemSearchBarPlacementAutomatic](searchbarplacement-swift.enum/automatic.md): A constant that places the search bar according to the current layout.
- [UINavigationItemSearchBarPlacementInline](searchbarplacement-swift.enum/inline.md): Deprecated. A constant that places the search bar on the trailing edge of the navigation bar, inline with the other content.
- [UINavigationItemSearchBarPlacementStacked](searchbarplacement-swift.enum/stacked.md): A constant that stacks the search bar vertically below the other content in the navigation bar.

### Enumeration Cases

- [UINavigationItemSearchBarPlacementIntegrated](searchbarplacement-swift.enum/integrated.md): The navigation bar will place the search bar inline with other content, on the trailing edge. On iPhone, when the navigation bar belongs to a UINavigationController, the search bar may be integrated into the toolbar.
- [UINavigationItemSearchBarPlacementIntegratedButton](searchbarplacement-swift.enum/integratedbutton.md): Placement is the same as Integrated, except that the inactive search bar is always shown as a button even when space permits a search field.
- [UINavigationItemSearchBarPlacementIntegratedCentered](searchbarplacement-swift.enum/integratedcentered.md): Placement is the same as Integrated, except that in regular width on iPad, the search bar is centered in the navigation bar. Only respected when used in a view controller that is a descendant of a tab bar controller or when using a navigation item style that requires a leading aligned title

## See Also

### Integrating search into your interface

- [searchController](searchcontroller.md): The search controller to integrate into your navigation interface.
- [hidesSearchBarWhenScrolling](hidessearchbarwhenscrolling.md): A Boolean value that indicates whether the app hides the integrated search bar when scrolling any underlying content.
- [searchBarPlacement](searchbarplacement-swift.property.md): The placement of the search bar in the navigation bar.
- [preferredSearchBarPlacement](preferredsearchbarplacement.md): The preferred placement of the search bar in the navigation bar.
- [searchBarPlacementAllowsExternalIntegration](searchbarplacementallowsexternalintegration.md): A Boolean value that indicates whether an alternate object may integrate the search bar somewhere other than the navigation bar or toolbar.
- [searchBarPlacementAllowsToolbarIntegration](searchbarplacementallowstoolbarintegration.md): A Boolean value that indicates whether the system can place the search bar among other toolbar items on iPhone.
- [searchBarPlacementBarButtonItem](searchbarplacementbarbuttonitem.md): An item you use to control the placement of the search bar in a toolbar on iPhone.
