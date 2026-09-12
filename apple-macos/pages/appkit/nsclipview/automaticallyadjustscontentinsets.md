> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/automaticallyadjustscontentinsets](https://developer.apple.com/documentation/appkit/nsclipview/automaticallyadjustscontentinsets)

# automaticallyAdjustsContentInsets (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates if the clip view automatically accounts for other scroll view subviews.

## Declaration

```swift
var automaticallyAdjustsContentInsets: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), and the clip view is used as the [contentView](../nsscrollview/contentview.md) of an [NSScrollView](../nsscrollview.md), the clip view automatically accounts for other scroll view subviews, such as rulers and headers. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the Content Insets

- [contentInsets](contentinsets.md): The distance that the content view is inset from the enclosing scroll view.

# automaticallyAdjustsContentInsets (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates if the clip view automatically accounts for other scroll view subviews.

## Declaration

```objectivec
@property BOOL automaticallyAdjustsContentInsets;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), and the clip view is used as the [contentView](../nsscrollview/contentview.md) of an [NSScrollView](../nsscrollview.md), the clip view automatically accounts for other scroll view subviews, such as rulers and headers. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the Content Insets

- [contentInsets](contentinsets.md): The distance that the content view is inset from the enclosing scroll view.
