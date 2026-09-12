> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/content](https://developer.apple.com/documentation/appkit/nscollectionview/content)

# content (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array that provides data for the collection view.

## Declaration

```swift
var content: [Any] { get set }
```

<a id="Discussion"></a>

## Discussion

The content object manages the data in the collection view. Use this object to specify an array of items directly. This property is observable using key-value observing. The collection view also exposes a `content` binding value so that you can specify the array of items using an ArrayController object in Interface Builder.

To specify the data for your collection view, assign a value to this property or to the [dataSource](datasource.md) property, but not both. If you specify a value for the [dataSource](datasource.md) property, the collection view ignores the value in this property.

## See Also

### Configuring the Collection View

- [delegate](delegate.md): The collection view’s delegate object.
- [NSCollectionViewDelegate](../nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [backgroundView](backgroundview.md): The background view placed behind all items and supplementary views.
- [backgroundColors](backgroundcolors.md): An array containing the collection view’s background colors.
- [backgroundViewScrollsWithContent](backgroundviewscrollswithcontent.md): A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.

# content (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array that provides data for the collection view.

## Declaration

```objectivec
@property (copy) NSArray<id> * content;
```

<a id="Discussion"></a>

## Discussion

The content object manages the data in the collection view. Use this object to specify an array of items directly. This property is observable using key-value observing. The collection view also exposes a `content` binding value so that you can specify the array of items using an ArrayController object in Interface Builder.

To specify the data for your collection view, assign a value to this property or to the [dataSource](datasource.md) property, but not both. If you specify a value for the [dataSource](datasource.md) property, the collection view ignores the value in this property.

## See Also

### Configuring the Collection View

- [delegate](delegate.md): The collection view’s delegate object.
- [NSCollectionViewDelegate](../nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [backgroundView](backgroundview.md): The background view placed behind all items and supplementary views.
- [backgroundColors](backgroundcolors.md): An array containing the collection view’s background colors.
- [backgroundViewScrollsWithContent](backgroundviewscrollswithcontent.md): A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.
