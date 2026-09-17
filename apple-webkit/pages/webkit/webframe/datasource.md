> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webframe/datasource

# dataSource (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The committed data source.

## Declaration

```swift
var dataSource: WebDataSource? { get }
```

<a id="Discussion"></a>

## Discussion

`nil` if the provisional data source is not done loading.

## See Also

### Getting the Data Source

- [provisionalDataSource](provisionaldatasource.md): Deprecated. The provisional data source, or `nil` if either a load request is not in progress or a load request has completed.

# dataSource (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The committed data source.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WebDataSource * dataSource;
```

<a id="Discussion"></a>

## Discussion

`nil` if the provisional data source is not done loading.

## See Also

### Getting the Data Source

- [provisionalDataSource](provisionaldatasource.md): Deprecated. The provisional data source, or `nil` if either a load request is not in progress or a load request has completed.
