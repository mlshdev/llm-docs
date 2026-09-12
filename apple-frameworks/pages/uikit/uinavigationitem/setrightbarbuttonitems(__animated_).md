> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/setrightbarbuttonitems(_:animated:)](https://developer.apple.com/documentation/uikit/uinavigationitem/setrightbarbuttonitems(_:animated:))

# setRightBarButtonItems(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the right bar button items, optionally animating the transition to the new items.

## Declaration

```swift
func setRightBarButtonItems(_ items: [UIBarButtonItem]?, animated: Bool)
```

## Parameters

- `items`: An array of custom bar button items to display on the right side of the navigation bar.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the transition to the custom bar items when this item is the top item. Specify [false](https://developer.apple.com/documentation/swift/false) to set the items immediately without animating the change.

<a id="Discussion"></a>

## Discussion

If two navigation items have the same custom left or right bar button items, those bar button items remain stationary during the transition when the navigation item is pushed or popped.

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
- [leftBarButtonItem](leftbarbuttonitem.md): A custom bar button item that displays on the left (or leading) edge of the navigation bar when the navigation item is the top item.
- [rightBarButtonItems](rightbarbuttonitems.md): An array of custom bar button items to display on the right (or trailing) side of the navigation bar when the navigation item is the top item.
- [rightBarButtonItem](rightbarbuttonitem.md): A custom bar button item that displays on the right (or trailing) edge of the navigation bar when the navigation item is the top item.
- [setLeftBarButtonItems(\_:animated:)](setleftbarbuttonitems%28__animated_%29.md): Sets the left bar button items, optionally animating the transition to the new items.
- [setLeftBarButton(\_:animated:)](setleftbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the new item.
- [setRightBarButton(\_:animated:)](setrightbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the view.

# setRightBarButtonItems:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the right bar button items, optionally animating the transition to the new items.

## Declaration

```objectivec
- (void) setRightBarButtonItems:(NSArray<UIBarButtonItem *> *) items animated:(BOOL) animated;
```

## Parameters

- `items`: An array of custom bar button items to display on the right side of the navigation bar.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the transition to the custom bar items when this item is the top item. Specify [false](https://developer.apple.com/documentation/swift/false) to set the items immediately without animating the change.

<a id="Discussion"></a>

## Discussion

If two navigation items have the same custom left or right bar button items, those bar button items remain stationary during the transition when the navigation item is pushed or popped.

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
- [leftBarButtonItem](leftbarbuttonitem.md): A custom bar button item that displays on the left (or leading) edge of the navigation bar when the navigation item is the top item.
- [rightBarButtonItems](rightbarbuttonitems.md): An array of custom bar button items to display on the right (or trailing) side of the navigation bar when the navigation item is the top item.
- [rightBarButtonItem](rightbarbuttonitem.md): A custom bar button item that displays on the right (or trailing) edge of the navigation bar when the navigation item is the top item.
- [setLeftBarButtonItems:animated:](setleftbarbuttonitems%28__animated_%29.md): Sets the left bar button items, optionally animating the transition to the new items.
- [setLeftBarButtonItem:animated:](setleftbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the new item.
- [setRightBarButtonItem:animated:](setrightbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the view.
