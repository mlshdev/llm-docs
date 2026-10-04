> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uinavigationitem/attributedtitle-9l8p2

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

An attributed string that the system renders as the title in the navigation bar.

<a id="Discussion"></a>

## Discussion

If [titleView](titleview.md) is non-`nil`, the system ignores this property.

> **Note**

>  `NSToolbar` doesn’t support an attributed title when the system displays the navigation bar’s content in a toolbar for an app built with Mac Catalyst. For more information, see [Display content in a toolbar on Mac](title.md#Display-content-in-a-toolbar-on-Mac).

## See Also

### Configuring the title

- [title](title.md): The navigation item’s title that displays in the navigation bar.
- [largeTitle](largetitle.md): String to be used as the large title.
- [largeTitleDisplayMode](largetitledisplaymode-swift.property.md): The mode for displaying the title of the navigation bar.
- [UINavigationItemLargeTitleDisplayMode](largetitledisplaymode-swift.enum.md): Constants that indicate how to size the title of this item.
