> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/contentinsets](https://developer.apple.com/documentation/appkit/nsscrollview/contentinsets)

# contentInsets (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The distance that the scroll view’s subviews are inset from the enclosing scroll view during tiling.

## Declaration

```swift
var contentInsets: NSEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is equal to `NSEdgeInsetsZero`, traditional tiling is performed. Rulers, headers, and other subviews are tiled with the [contentView](contentview.md) frame filling the remaining space. When the value of this property is not equal to `NSEdgeInsetsZero`, the rulers, headers, and other subviews are inset as specified. The [contentView](contentview.md) is placed underneath these sibling views and is only inset by the scroll view border and non-overlay scrollers.

See [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets) for possible values.

When the value of the [automaticallyAdjustsContentInsets](automaticallyadjustscontentinsets.md) property is [true](https://developer.apple.com/documentation/swift/true), any value of this property is overridden during tiling.

## See Also

### Managing Insets

- [automaticallyAdjustsContentInsets](automaticallyadjustscontentinsets.md): A Boolean that indicates whether the scroll view automatically adjusts its content insets.
- [scrollerInsets](scrollerinsets.md): The distance the scrollers are inset from the edge of the scroll view.

# contentInsets (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The distance that the scroll view’s subviews are inset from the enclosing scroll view during tiling.

## Declaration

```objectivec
@property NSEdgeInsets contentInsets;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is equal to `NSEdgeInsetsZero`, traditional tiling is performed. Rulers, headers, and other subviews are tiled with the [contentView](contentview.md) frame filling the remaining space. When the value of this property is not equal to `NSEdgeInsetsZero`, the rulers, headers, and other subviews are inset as specified. The [contentView](contentview.md) is placed underneath these sibling views and is only inset by the scroll view border and non-overlay scrollers.

See [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets) for possible values.

When the value of the [automaticallyAdjustsContentInsets](automaticallyadjustscontentinsets.md) property is [true](https://developer.apple.com/documentation/swift/true), any value of this property is overridden during tiling.

## See Also

### Managing Insets

- [automaticallyAdjustsContentInsets](automaticallyadjustscontentinsets.md): A Boolean that indicates whether the scroll view automatically adjusts its content insets.
- [scrollerInsets](scrollerinsets.md): The distance the scrollers are inset from the edge of the scroll view.
