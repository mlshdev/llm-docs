> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/isprefetchingenabled](https://developer.apple.com/documentation/uikit/uitableview/isprefetchingenabled)

# isPrefetchingEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether to allow cell and data prefetching.

## Declaration

```swift
var isPrefetchingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the table view may request cells in advance of displaying them. When [false](https://developer.apple.com/documentation/swift/false), the table view requests cells when they need to display. Setting this property to [false](https://developer.apple.com/documentation/swift/false) also disables data prefetching. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Providing the data and cells

- [dataSource](datasource.md): The object that acts as the data source of the table view.
- [prefetchDataSource](prefetchdatasource.md): The object that acts as the prefetching data source for the table view, receiving notifications of upcoming cell data requirements.
- [UITableViewDataSource](../uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](../uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.

# prefetchingEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether to allow cell and data prefetching.

## Declaration

```objectivec
@property (nonatomic, getter=isPrefetchingEnabled) BOOL prefetchingEnabled;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the table view may request cells in advance of displaying them. When [false](https://developer.apple.com/documentation/swift/false), the table view requests cells when they need to display. Setting this property to [false](https://developer.apple.com/documentation/swift/false) also disables data prefetching. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Providing the data and cells

- [dataSource](datasource.md): The object that acts as the data source of the table view.
- [prefetchDataSource](prefetchdatasource.md): The object that acts as the prefetching data source for the table view, receiving notifications of upcoming cell data requirements.
- [UITableViewDataSource](../uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](../uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.
