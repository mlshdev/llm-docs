> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/attributedtitle-9l8p2](https://developer.apple.com/documentation/uikit/uinavigationitem/attributedtitle-9l8p2)

# attributedTitle

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An attributed string that is rendered as the title in the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSAttributedString * attributedTitle;
```

<a id="discussion"></a>

## Discussion

If `titleView` is non-nil, this property is ignored.

## See Also

### Configuring the title

- [title](title.md): The navigation item’s title that displays in the navigation bar.
- [largeTitle](largetitle.md): String to be used as the large title.
- [largeTitleDisplayMode](largetitledisplaymode-swift.property.md): The mode for displaying the title of the navigation bar.
- [UINavigationItemLargeTitleDisplayMode](largetitledisplaymode-swift.enum.md): Constants that indicate how to size the title of this item.
