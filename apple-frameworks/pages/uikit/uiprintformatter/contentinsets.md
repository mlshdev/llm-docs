> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/contentinsets](https://developer.apple.com/documentation/uikit/uiprintformatter/contentinsets)

# contentInsets (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The distances the edges of content are inset from the printing rectangle.

## Declaration

```swift
var contentInsets: UIEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

This property adjusts the margins for content printed by the formatter. The printing rectangle defines the area the printer is capable of printing in; each inset is an inward distance, in points, from a side of the printing area. The top inset is used only on the first page that the formatter draws. The bottom inset is not used. You can use the [init(top:left:bottom:right:)](../uiedgeinsets/init%28top_left_bottom_right_%29-1s1t9.md) macro to create a [UIEdgeInsets](../uiedgeinsets.md) structure.

The default value of this property is [zero](../uiedgeinsets/zero.md).

## See Also

### Laying out the content

- [perPageContentInsets](perpagecontentinsets.md): The margins for each printed page.
- [maximumContentHeight](maximumcontentheight.md): The maximum height of the content area.
- [maximumContentWidth](maximumcontentwidth.md): The maximum width of the content area.

# contentInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The distances the edges of content are inset from the printing rectangle.

## Declaration

```objectivec
@property (nonatomic) UIEdgeInsets contentInsets;
```

<a id="Discussion"></a>

## Discussion

This property adjusts the margins for content printed by the formatter. The printing rectangle defines the area the printer is capable of printing in; each inset is an inward distance, in points, from a side of the printing area. The top inset is used only on the first page that the formatter draws. The bottom inset is not used. You can use the [UIEdgeInsetsMake](../uiedgeinsets/init%28top_left_bottom_right_%29-1s1t9.md) macro to create a [UIEdgeInsets](../uiedgeinsets.md) structure.

The default value of this property is [UIEdgeInsetsZero](../uiedgeinsets/zero.md).

## See Also

### Laying out the content

- [perPageContentInsets](perpagecontentinsets.md): The margins for each printed page.
- [maximumContentHeight](maximumcontentheight.md): The maximum height of the content area.
- [maximumContentWidth](maximumcontentwidth.md): The maximum width of the content area.
