> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/backgroundviewscrollswithcontent](https://developer.apple.com/documentation/appkit/nscollectionview/backgroundviewscrollswithcontent)

# backgroundViewScrollsWithContent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.

## Declaration

```swift
var backgroundViewScrollsWithContent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which means that [backgroundView](backgroundview.md) (if it exists) fills the collection view’s visible area and remains stationary when the collection view’s content is scrolled. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), [backgroundView](backgroundview.md) matches the collection view’s frame and scrolls with the collection view’s items and other content.

Changing the value of this property also changes the background view’s parent. When [backgroundView](backgroundview.md) floats behind the scrolling content, it is a sibling of the collection view’s clip view. When it scrolls with the collection view’s content, it is a subview of the collection view.

## See Also

### Configuring the Collection View

- [delegate](delegate.md): The collection view’s delegate object.
- [NSCollectionViewDelegate](../nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [content](content.md): An array that provides data for the collection view.
- [backgroundView](backgroundview.md): The background view placed behind all items and supplementary views.
- [backgroundColors](backgroundcolors.md): An array containing the collection view’s background colors.

# backgroundViewScrollsWithContent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.

## Declaration

```objectivec
@property BOOL backgroundViewScrollsWithContent;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which means that [backgroundView](backgroundview.md) (if it exists) fills the collection view’s visible area and remains stationary when the collection view’s content is scrolled. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), [backgroundView](backgroundview.md) matches the collection view’s frame and scrolls with the collection view’s items and other content.

Changing the value of this property also changes the background view’s parent. When [backgroundView](backgroundview.md) floats behind the scrolling content, it is a sibling of the collection view’s clip view. When it scrolls with the collection view’s content, it is a subview of the collection view.

## See Also

### Configuring the Collection View

- [delegate](delegate.md): The collection view’s delegate object.
- [NSCollectionViewDelegate](../nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [content](content.md): An array that provides data for the collection view.
- [backgroundView](backgroundview.md): The background view placed behind all items and supplementary views.
- [backgroundColors](backgroundcolors.md): An array containing the collection view’s background colors.
