> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/provisionaldatasource](https://developer.apple.com/documentation/webkit/webframe/provisionaldatasource)

# provisionalDataSource (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The provisional data source, or `nil` if either a load request is not in progress or a load request has completed.

## Declaration

```swift
var provisionalDataSource: WebDataSource! { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:)](load%28__%29-47p2s.md) method to initiate an asynchronous client request, which creates a provisional data source. The provisional data source transitions to a committed data source once any data is received.

## See Also

### Getting the Data Source

- [dataSource](datasource.md): Deprecated. The committed data source.

# provisionalDataSource (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The provisional data source, or `nil` if either a load request is not in progress or a load request has completed.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WebDataSource * provisionalDataSource;
```

<a id="Discussion"></a>

## Discussion

Use the [loadRequest:](load%28__%29-47p2s.md) method to initiate an asynchronous client request, which creates a provisional data source. The provisional data source transitions to a committed data source once any data is received.

## See Also

### Getting the Data Source

- [dataSource](datasource.md): Deprecated. The committed data source.
