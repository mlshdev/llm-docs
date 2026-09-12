> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/datasource](https://developer.apple.com/documentation/appkit/nscollectionview/datasource)

# dataSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

An object that provides data for the collection view.

## Declaration

```swift
weak var dataSource: (any NSCollectionViewDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

The data source object manages the data in the collection view. Use this object to specify how many items are in the collection view and to create the visual representation of those items. The object you specify must adopt the [NSCollectionViewDataSource](../nscollectionviewdatasource.md) protocol.

To specify the data for your collection view, assign a value to this property or to the [content](content.md) property, but not both. If you specify a value for this property, the collection view ignores the [content](content.md) property and the `content` binding.

## See Also

### Providing the Collection View’s Data

- [NSCollectionViewDataSource](../nscollectionviewdatasource.md): A set of methods that a data source object implements to provide the information and view objects that a collection view requires to present content.

# dataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

An object that provides data for the collection view.

## Declaration

```objectivec
@property (weak, nullable) id<NSCollectionViewDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

The data source object manages the data in the collection view. Use this object to specify how many items are in the collection view and to create the visual representation of those items. The object you specify must adopt the [NSCollectionViewDataSource](../nscollectionviewdatasource.md) protocol.

To specify the data for your collection view, assign a value to this property or to the [content](content.md) property, but not both. If you specify a value for this property, the collection view ignores the [content](content.md) property and the `content` binding.

## See Also

### Providing the Collection View’s Data

- [NSCollectionViewDataSource](../nscollectionviewdatasource.md): A set of methods that a data source object implements to provide the information and view objects that a collection view requires to present content.
