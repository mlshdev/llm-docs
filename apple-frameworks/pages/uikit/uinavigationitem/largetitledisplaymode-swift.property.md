> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/largetitledisplaymode-swift.property](https://developer.apple.com/documentation/uikit/uinavigationitem/largetitledisplaymode-swift.property)

# largeTitleDisplayMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The mode for displaying the title of the navigation bar.

## Declaration

```swift
var largeTitleDisplayMode: UINavigationItem.LargeTitleDisplayMode { get set }
```

<a id="Discussion"></a>

## Discussion

When large titles are available, this property controls how the navigation bar displays the navigation item’s title. The default value of this property is [UINavigationItem.LargeTitleDisplayMode.automatic](largetitledisplaymode-swift.enum/automatic.md), which causes the title to use the same styling as the previously displayed navigation item. You can change the value of this property to force the navigation bar to display a large title ([UINavigationItem.LargeTitleDisplayMode.always](largetitledisplaymode-swift.enum/always.md)) or a small title ([UINavigationItem.LargeTitleDisplayMode.never](largetitledisplaymode-swift.enum/never.md)) for this item.

If the [prefersLargeTitles](../uinavigationbar/preferslargetitles.md) property of the navigation bar is [false](https://developer.apple.com/documentation/swift/false), this property has no effect and the navigation item’s title is always displayed as a small title.

## See Also

### Configuring the title

- [title](title.md): The navigation item’s title that displays in the navigation bar.
- [attributedTitle](attributedtitle-25fxb.md)
- [largeTitle](largetitle.md): String to be used as the large title.
- [UINavigationItem.LargeTitleDisplayMode](largetitledisplaymode-swift.enum.md): Constants that indicate how to size the title of this item.

# largeTitleDisplayMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The mode for displaying the title of the navigation bar.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UINavigationItemLargeTitleDisplayMode largeTitleDisplayMode;
```

<a id="Discussion"></a>

## Discussion

When large titles are available, this property controls how the navigation bar displays the navigation item’s title. The default value of this property is [UINavigationItemLargeTitleDisplayModeAutomatic](largetitledisplaymode-swift.enum/automatic.md), which causes the title to use the same styling as the previously displayed navigation item. You can change the value of this property to force the navigation bar to display a large title ([UINavigationItemLargeTitleDisplayModeAlways](largetitledisplaymode-swift.enum/always.md)) or a small title ([UINavigationItemLargeTitleDisplayModeNever](largetitledisplaymode-swift.enum/never.md)) for this item.

If the [prefersLargeTitles](../uinavigationbar/preferslargetitles.md) property of the navigation bar is [false](https://developer.apple.com/documentation/swift/false), this property has no effect and the navigation item’s title is always displayed as a small title.

## See Also

### Configuring the title

- [title](title.md): The navigation item’s title that displays in the navigation bar.
- [attributedTitle](attributedtitle-9l8p2.md): An attributed string that is rendered as the title in the navigation bar.
- [largeTitle](largetitle.md): String to be used as the large title.
- [UINavigationItemLargeTitleDisplayMode](largetitledisplaymode-swift.enum.md): Constants that indicate how to size the title of this item.
