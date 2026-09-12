> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/automaticallyadjustscontentinsets](https://developer.apple.com/documentation/appkit/nsscrollview/automaticallyadjustscontentinsets)

# automaticallyAdjustsContentInsets (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean that indicates whether the scroll view automatically adjusts its content insets.

## Declaration

```swift
var automaticallyAdjustsContentInsets: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view automatically sets its [contentInsets](contentinsets.md) property to account for any overlapping title or tool bar. To overlap with the title or tool bar, the window style mask must include `NSFullSizeContentViewWindowMask` and the title bar must not be transparent.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Insets

- [contentInsets](contentinsets.md): The distance that the scroll view’s subviews are inset from the enclosing scroll view during tiling.
- [scrollerInsets](scrollerinsets.md): The distance the scrollers are inset from the edge of the scroll view.

# automaticallyAdjustsContentInsets (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean that indicates whether the scroll view automatically adjusts its content insets.

## Declaration

```objectivec
@property BOOL automaticallyAdjustsContentInsets;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view automatically sets its [contentInsets](contentinsets.md) property to account for any overlapping title or tool bar. To overlap with the title or tool bar, the window style mask must include `NSFullSizeContentViewWindowMask` and the title bar must not be transparent.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Insets

- [contentInsets](contentinsets.md): The distance that the scroll view’s subviews are inset from the enclosing scroll view during tiling.
- [scrollerInsets](scrollerinsets.md): The distance the scrollers are inset from the edge of the scroll view.
