> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/subtitleview](https://developer.apple.com/documentation/uikit/uinavigationitem/subtitleview)

# subtitleView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A custom view to display below the title in the navigation bar.

## Declaration

```swift
@NSCopying var subtitleView: UIView? { get set }
```

<a id="discussion"></a>

## Discussion

If non-nil, this property takes precedence over the `subtitle` and `attributedSubtitle` properties. The view’s layout constraints will determine its size, or the view may override `sizeThatFits(_:)` to return its desired size.

## See Also

### Specifying custom views

- [centerItemGroups](centeritemgroups.md): Customizable item groups to display in the center section of the navigation bar.
- [leadingItemGroups](leadingitemgroups.md): Item groups to display in the leading section of the navigation bar.
- [trailingItemGroups](trailingitemgroups.md): Item groups to display in the trailing section of the navigation bar.
- [pinnedTrailingGroup](pinnedtrailinggroup.md): The item group to display on the trailing edge of the navigation bar, on the trailing side of the overflow and search items.
- [titleView](titleview.md): A custom view that displays in the center of the navigation bar when the receiver is the top item.
- [largeSubtitleView](largesubtitleview.md): A custom view to display below the large title.
- [leftBarButtonItems](leftbarbuttonitems.md): An array of custom bar button items to display on the left (or leading) side of the navigation bar when the navigation item is the top item.
- [leftBarButtonItem](leftbarbuttonitem.md): A custom bar button item that displays on the left (or leading) edge of the navigation bar when the navigation item is the top item.
- [rightBarButtonItems](rightbarbuttonitems.md): An array of custom bar button items to display on the right (or trailing) side of the navigation bar when the navigation item is the top item.
- [rightBarButtonItem](rightbarbuttonitem.md): A custom bar button item that displays on the right (or trailing) edge of the navigation bar when the navigation item is the top item.
- [setLeftBarButtonItems(\_:animated:)](setleftbarbuttonitems%28__animated_%29.md): Sets the left bar button items, optionally animating the transition to the new items.
- [setLeftBarButton(\_:animated:)](setleftbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the new item.
- [setRightBarButtonItems(\_:animated:)](setrightbarbuttonitems%28__animated_%29.md): Sets the right bar button items, optionally animating the transition to the new items.
- [setRightBarButton(\_:animated:)](setrightbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the view.

# subtitleView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A custom view to display below the title in the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIView * subtitleView;
```

<a id="discussion"></a>

## Discussion

If non-nil, this property takes precedence over the `subtitle` and `attributedSubtitle` properties. The view’s layout constraints will determine its size, or the view may override `sizeThatFits(_:)` to return its desired size.

## See Also

### Specifying custom views

- [centerItemGroups](centeritemgroups.md): Customizable item groups to display in the center section of the navigation bar.
- [leadingItemGroups](leadingitemgroups.md): Item groups to display in the leading section of the navigation bar.
- [trailingItemGroups](trailingitemgroups.md): Item groups to display in the trailing section of the navigation bar.
- [pinnedTrailingGroup](pinnedtrailinggroup.md): The item group to display on the trailing edge of the navigation bar, on the trailing side of the overflow and search items.
- [titleView](titleview.md): A custom view that displays in the center of the navigation bar when the receiver is the top item.
- [largeSubtitleView](largesubtitleview.md): A custom view to display below the large title.
- [leftBarButtonItems](leftbarbuttonitems.md): An array of custom bar button items to display on the left (or leading) side of the navigation bar when the navigation item is the top item.
- [leftBarButtonItem](leftbarbuttonitem.md): A custom bar button item that displays on the left (or leading) edge of the navigation bar when the navigation item is the top item.
- [rightBarButtonItems](rightbarbuttonitems.md): An array of custom bar button items to display on the right (or trailing) side of the navigation bar when the navigation item is the top item.
- [rightBarButtonItem](rightbarbuttonitem.md): A custom bar button item that displays on the right (or trailing) edge of the navigation bar when the navigation item is the top item.
- [setLeftBarButtonItems:animated:](setleftbarbuttonitems%28__animated_%29.md): Sets the left bar button items, optionally animating the transition to the new items.
- [setLeftBarButtonItem:animated:](setleftbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the new item.
- [setRightBarButtonItems:animated:](setrightbarbuttonitems%28__animated_%29.md): Sets the right bar button items, optionally animating the transition to the new items.
- [setRightBarButtonItem:animated:](setrightbarbutton%28__animated_%29.md): Sets the custom bar button item, optionally animating the transition to the view.
