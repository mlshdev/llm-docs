> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/largetitle](https://developer.apple.com/documentation/uikit/uinavigationitem/largetitle)

# largeTitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

String to be used as the large title.

## Declaration

```swift
var largeTitle: String? { get set }
```

<a id="discussion"></a>

## Discussion

When `nil`, the navigation bar will use the navigation item’s current title.

## See Also

### Configuring the title

- [title](title.md): The navigation item’s title that displays in the navigation bar.
- [attributedTitle](attributedtitle-25fxb.md)
- [largeTitleDisplayMode](largetitledisplaymode-swift.property.md): The mode for displaying the title of the navigation bar.
- [UINavigationItem.LargeTitleDisplayMode](largetitledisplaymode-swift.enum.md): Constants that indicate how to size the title of this item.

# largeTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

String to be used as the large title.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * largeTitle;
```

<a id="discussion"></a>

## Discussion

When `nil`, the navigation bar will use the navigation item’s current title.

## See Also

### Configuring the title

- [title](title.md): The navigation item’s title that displays in the navigation bar.
- [attributedTitle](attributedtitle-9l8p2.md): An attributed string that is rendered as the title in the navigation bar.
- [largeTitleDisplayMode](largetitledisplaymode-swift.property.md): The mode for displaying the title of the navigation bar.
- [UINavigationItemLargeTitleDisplayMode](largetitledisplaymode-swift.enum.md): Constants that indicate how to size the title of this item.
