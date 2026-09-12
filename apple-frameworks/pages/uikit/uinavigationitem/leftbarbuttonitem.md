> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/leftbarbuttonitem](https://developer.apple.com/documentation/uikit/uinavigationitem/leftbarbuttonitem)

# leftBarButtonItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A custom bar button item that displays on the left (or leading) edge of the navigation bar when the navigation item is the top item.

## Declaration

```swift
var leftBarButtonItem: UIBarButtonItem? { get set }
```

<a id="Discussion"></a>

## Discussion

The contents of this property always refer to the first bar button item in the [leftBarButtonItems](leftbarbuttonitems.md) array. Assigning a new value to this property replaces the first item in the [leftBarButtonItems](leftbarbuttonitems.md) array with the new value. Setting this property to `nil` removes the first item in the array. If the bar button item is already in the array, it is moved from its current location to the front of the array.

In a right-to-left user interface, the position of the left bar button item is automatically flipped.

## See Also

### Specifying custom views

- [centerItemGroups](centeritemgroups.md): Customizable item groups to display in the center section of the navigation bar.
- [leadingItemGroups](leadingitemgroups.md): Item groups to display in the leading section of the navigation bar.
- [trailingItemGroups](trailingitemgroups.md): Item groups to display in the trailing section of the navigation bar.
- [pinnedTrailingGroup](pinnedtrailinggroup.md): The item group to display on the trailing edge of the navigation bar, on the trailing side of the overflow and search items.
- [titleView](titleview.md): A custom view that displays in the center of the navigation bar when the receiver is the top item.
- [subtitleView](subtitleview.md): A custom view to display below the title in the navigation bar.
- [largeSubtitleView](largesubtitleview.md): A custom view to display below the large title.
- [leftBarButtonItems](leftbarbuttonitems.md): An array of custom bar button items to display on the left (or leading) side of the navigation bar when the navigation item is the top item.
- [rightBarButtonItems](rightbarbuttonitems.md): An array of custom bar button items to display on the right (or trailing) side of the navigation bar when the navigation item is the top item.
- [rightBarButtonItem](rightbarbuttonitem.md): A custom bar button item that displays on the right (or trailing) edge of the navigation bar when the navigation item is the top item.
- [setLeftBarButtonItems(\_:animated:)](setleftbarbuttonitems%28__animated_%29.md): Sets the left bar button items, optionally animating the transition to the new items.
- [setLeftBarButton(\_:animated:)](setleftbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the new item.
- [setRightBarButtonItems(\_:animated:)](setrightbarbuttonitems%28__animated_%29.md): Sets the right bar button items, optionally animating the transition to the new items.
- [setRightBarButton(\_:animated:)](setrightbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the view.

# leftBarButtonItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A custom bar button item that displays on the left (or leading) edge of the navigation bar when the navigation item is the top item.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIBarButtonItem * leftBarButtonItem;
```

<a id="Discussion"></a>

## Discussion

The contents of this property always refer to the first bar button item in the [leftBarButtonItems](leftbarbuttonitems.md) array. Assigning a new value to this property replaces the first item in the [leftBarButtonItems](leftbarbuttonitems.md) array with the new value. Setting this property to `nil` removes the first item in the array. If the bar button item is already in the array, it is moved from its current location to the front of the array.

In a right-to-left user interface, the position of the left bar button item is automatically flipped.

## See Also

### Specifying custom views

- [centerItemGroups](centeritemgroups.md): Customizable item groups to display in the center section of the navigation bar.
- [leadingItemGroups](leadingitemgroups.md): Item groups to display in the leading section of the navigation bar.
- [trailingItemGroups](trailingitemgroups.md): Item groups to display in the trailing section of the navigation bar.
- [pinnedTrailingGroup](pinnedtrailinggroup.md): The item group to display on the trailing edge of the navigation bar, on the trailing side of the overflow and search items.
- [titleView](titleview.md): A custom view that displays in the center of the navigation bar when the receiver is the top item.
- [subtitleView](subtitleview.md): A custom view to display below the title in the navigation bar.
- [largeSubtitleView](largesubtitleview.md): A custom view to display below the large title.
- [leftBarButtonItems](leftbarbuttonitems.md): An array of custom bar button items to display on the left (or leading) side of the navigation bar when the navigation item is the top item.
- [rightBarButtonItems](rightbarbuttonitems.md): An array of custom bar button items to display on the right (or trailing) side of the navigation bar when the navigation item is the top item.
- [rightBarButtonItem](rightbarbuttonitem.md): A custom bar button item that displays on the right (or trailing) edge of the navigation bar when the navigation item is the top item.
- [setLeftBarButtonItems:animated:](setleftbarbuttonitems%28__animated_%29.md): Sets the left bar button items, optionally animating the transition to the new items.
- [setLeftBarButtonItem:animated:](setleftbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the new item.
- [setRightBarButtonItems:animated:](setrightbarbuttonitems%28__animated_%29.md): Sets the right bar button items, optionally animating the transition to the new items.
- [setRightBarButtonItem:animated:](setrightbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the view.
