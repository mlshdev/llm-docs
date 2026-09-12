> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/prefetchdatasource](https://developer.apple.com/documentation/uikit/uitableview/prefetchdatasource)

# prefetchDataSource (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The object that acts as the prefetching data source for the table view, receiving notifications of upcoming cell data requirements.

## Declaration

```swift
weak var prefetchDataSource: (any UITableViewDataSourcePrefetching)? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign an object that conforms to the [UITableViewDataSourcePrefetching](../uitableviewdatasourceprefetching.md) protocol to facilitate prefetching of data for cells to be displayed in the near future. To disable prefetching behavior, set this property to `nil`. This object isn’t retained.

## See Also

### Providing the data and cells

- [dataSource](datasource.md): The object that acts as the data source of the table view.
- [isPrefetchingEnabled](isprefetchingenabled.md): A Boolean value that indicates whether to allow cell and data prefetching.
- [UITableViewDataSource](../uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](../uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.

# prefetchDataSource (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The object that acts as the prefetching data source for the table view, receiving notifications of upcoming cell data requirements.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITableViewDataSourcePrefetching> prefetchDataSource;
```

<a id="Discussion"></a>

## Discussion

Assign an object that conforms to the [UITableViewDataSourcePrefetching](../uitableviewdatasourceprefetching.md) protocol to facilitate prefetching of data for cells to be displayed in the near future. To disable prefetching behavior, set this property to `nil`. This object isn’t retained.

## See Also

### Providing the data and cells

- [dataSource](datasource.md): The object that acts as the data source of the table view.
- [prefetchingEnabled](isprefetchingenabled.md): A Boolean value that indicates whether to allow cell and data prefetching.
- [UITableViewDataSource](../uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](../uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.
