> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/perpagecontentinsets](https://developer.apple.com/documentation/uikit/uiprintformatter/perpagecontentinsets)

# perPageContentInsets (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The margins for each printed page.

## Declaration

```swift
var perPageContentInsets: UIEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

This property specifies the margins to apply to each printed page. All margins are respected, so the top inset value represents the top margin of every page, the left inset value represents the left margin of every page, and so on. If the per-page insets are smaller than the printable area of the page, or smaller than the printable area after the values in the [contentInsets](contentinsets.md) property are applied, the value in this property is effectively ignored.

The default value of this property is [zero](../uiedgeinsets/zero.md).

## See Also

### Laying out the content

- [maximumContentHeight](maximumcontentheight.md): The maximum height of the content area.
- [maximumContentWidth](maximumcontentwidth.md): The maximum width of the content area.
- [contentInsets](contentinsets.md): Deprecated. The distances the edges of content are inset from the printing rectangle.

# perPageContentInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The margins for each printed page.

## Declaration

```objectivec
@property (nonatomic) UIEdgeInsets perPageContentInsets;
```

<a id="Discussion"></a>

## Discussion

This property specifies the margins to apply to each printed page. All margins are respected, so the top inset value represents the top margin of every page, the left inset value represents the left margin of every page, and so on. If the per-page insets are smaller than the printable area of the page, or smaller than the printable area after the values in the [contentInsets](contentinsets.md) property are applied, the value in this property is effectively ignored.

The default value of this property is [UIEdgeInsetsZero](../uiedgeinsets/zero.md).

## See Also

### Laying out the content

- [maximumContentHeight](maximumcontentheight.md): The maximum height of the content area.
- [maximumContentWidth](maximumcontentwidth.md): The maximum width of the content area.
- [contentInsets](contentinsets.md): Deprecated. The distances the edges of content are inset from the printing rectangle.
