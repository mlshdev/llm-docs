> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/datasource](https://developer.apple.com/documentation/uikit/uitableview/datasource)

# dataSource (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that acts as the data source of the table view.

## Declaration

```swift
weak var dataSource: (any UITableViewDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

The data source must adopt the [UITableViewDataSource](../uitableviewdatasource.md) protocol. The data source isn’t retained.

## See Also

### Related Documentation

- [delegate](delegate.md): The object that acts as the delegate of the table view.

### Providing the data and cells

- [prefetchDataSource](prefetchdatasource.md): The object that acts as the prefetching data source for the table view, receiving notifications of upcoming cell data requirements.
- [isPrefetchingEnabled](isprefetchingenabled.md): A Boolean value that indicates whether to allow cell and data prefetching.
- [UITableViewDataSource](../uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](../uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.

# dataSource (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that acts as the data source of the table view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITableViewDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

The data source must adopt the [UITableViewDataSource](../uitableviewdatasource.md) protocol. The data source isn’t retained.

## See Also

### Related Documentation

- [delegate](delegate.md): The object that acts as the delegate of the table view.

### Providing the data and cells

- [prefetchDataSource](prefetchdatasource.md): The object that acts as the prefetching data source for the table view, receiving notifications of upcoming cell data requirements.
- [prefetchingEnabled](isprefetchingenabled.md): A Boolean value that indicates whether to allow cell and data prefetching.
- [UITableViewDataSource](../uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](../uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.
