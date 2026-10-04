> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uinavigationitem/attributedtitle-25fxb

# attributedTitle

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An attributed string that the system renders as the title in the navigation bar.

## Declaration

```swift
@MainActor @preconcurrency var attributedTitle: AttributedString? { get set }
```

<a id="Discussion"></a>

## Discussion

If [titleView](titleview.md) is non-`nil`, the system ignores this property.

> **Note**

>  `NSToolbar` doesn’t support an attributed title when the system displays a navigation bar’s content in a toolbar for an app built with Mac Catalyst. For more information, see [Display content in a toolbar on Mac](title.md#Display-content-in-a-toolbar-on-Mac).

## See Also

### Configuring the title

- [title](title.md): The navigation item’s title that displays in the navigation bar.
- [largeTitle](largetitle.md): String to be used as the large title.
- [largeTitleDisplayMode](largetitledisplaymode-swift.property.md): The mode for displaying the title of the navigation bar.
- [UINavigationItem.LargeTitleDisplayMode](largetitledisplaymode-swift.enum.md): Constants that indicate how to size the title of this item.
