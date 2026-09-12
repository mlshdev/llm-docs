> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/delegate](https://developer.apple.com/documentation/appkit/nscollectionview/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The collection view’s delegate object.

## Declaration

```swift
weak var delegate: (any NSCollectionViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the delegate object to manage the selection and highlighting of items, track the addition and removal of items, and manage drag and drop operations. The object you assign to this property must conform to the [NSCollectionViewDelegate](../nscollectionviewdelegate.md) protocol. The default value of this property is `nil`.

## See Also

### Configuring the Collection View

- [NSCollectionViewDelegate](../nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [content](content.md): An array that provides data for the collection view.
- [backgroundView](backgroundview.md): The background view placed behind all items and supplementary views.
- [backgroundColors](backgroundcolors.md): An array containing the collection view’s background colors.
- [backgroundViewScrollsWithContent](backgroundviewscrollswithcontent.md): A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The collection view’s delegate object.

## Declaration

```objectivec
@property (weak, nullable) id<NSCollectionViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use the delegate object to manage the selection and highlighting of items, track the addition and removal of items, and manage drag and drop operations. The object you assign to this property must conform to the [NSCollectionViewDelegate](../nscollectionviewdelegate.md) protocol. The default value of this property is `nil`.

## See Also

### Configuring the Collection View

- [NSCollectionViewDelegate](../nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [content](content.md): An array that provides data for the collection view.
- [backgroundView](backgroundview.md): The background view placed behind all items and supplementary views.
- [backgroundColors](backgroundcolors.md): An array containing the collection view’s background colors.
- [backgroundViewScrollsWithContent](backgroundviewscrollswithcontent.md): A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.
