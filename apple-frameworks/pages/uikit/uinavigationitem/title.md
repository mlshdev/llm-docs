> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/title](https://developer.apple.com/documentation/uikit/uinavigationitem/title)

# title (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The navigation item’s title that displays in the navigation bar.

## Declaration

```swift
var title: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

When the navigation item is on the navigation item stack and is second from the top — in other words, its view controller manages the views that the user would navigate back to — the value in this property is used for the back button on the top-most navigation bar. If the value of this property is `nil`, the system uses the string “Back” as the text of the back button. In iOS 11 and later, the size and position of the title is determined by the [prefersLargeTitles](../uinavigationbar/preferslargetitles.md) property of the navigation bar and the [largeTitleDisplayMode](largetitledisplaymode-swift.property.md) property of the navigation item.

## See Also

### Related Documentation

- [init(title:)](init%28title_%29.md): Creates a navigation item with the specified title.
- [titleView](titleview.md): A custom view that displays in the center of the navigation bar when the receiver is the top item.
- [UINavigationItem](../uinavigationitem.md): The items that a navigation bar displays when the associated view controller is visible.

### Configuring the title

- [attributedTitle](attributedtitle-25fxb.md)
- [largeTitle](largetitle.md): String to be used as the large title.
- [largeTitleDisplayMode](largetitledisplaymode-swift.property.md): The mode for displaying the title of the navigation bar.
- [UINavigationItem.LargeTitleDisplayMode](largetitledisplaymode-swift.enum.md): Constants that indicate how to size the title of this item.

# title (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The navigation item’s title that displays in the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

When the navigation item is on the navigation item stack and is second from the top — in other words, its view controller manages the views that the user would navigate back to — the value in this property is used for the back button on the top-most navigation bar. If the value of this property is `nil`, the system uses the string “Back” as the text of the back button. In iOS 11 and later, the size and position of the title is determined by the [prefersLargeTitles](../uinavigationbar/preferslargetitles.md) property of the navigation bar and the [largeTitleDisplayMode](largetitledisplaymode-swift.property.md) property of the navigation item.

## See Also

### Related Documentation

- [initWithTitle:](init%28title_%29.md): Creates a navigation item with the specified title.
- [titleView](titleview.md): A custom view that displays in the center of the navigation bar when the receiver is the top item.
- [UINavigationItem](../uinavigationitem.md): The items that a navigation bar displays when the associated view controller is visible.

### Configuring the title

- [attributedTitle](attributedtitle-9l8p2.md): An attributed string that is rendered as the title in the navigation bar.
- [largeTitle](largetitle.md): String to be used as the large title.
- [largeTitleDisplayMode](largetitledisplaymode-swift.property.md): The mode for displaying the title of the navigation bar.
- [UINavigationItemLargeTitleDisplayMode](largetitledisplaymode-swift.enum.md): Constants that indicate how to size the title of this item.
