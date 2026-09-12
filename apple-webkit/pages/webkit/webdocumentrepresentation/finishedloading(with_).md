> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentrepresentation/finishedloading(with:)](https://developer.apple.com/documentation/webkit/webdocumentrepresentation/finishedloading(with:))

# finishedLoading(with:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a data source finishes loading its content.

## Declaration

```swift
func finishedLoading(with dataSource: WebDataSource!)
```

## Parameters

- `dataSource`: A `WebDataSource` object that identifies the request that finished loading.

## See Also

### Related Documentation

- [setDataSource(\_:)](setdatasource%28__%29.md): Deprecated. Sets the receiver’s data source.

### Loading content

- [receivedData(\_:with:)](receiveddata%28__with_%29.md): Deprecated. Invoked when a data source has received some data.
- [receivedError(\_:with:)](receivederror%28__with_%29.md): Deprecated. Invoked when a data source receives an error loading its content.

# finishedLoadingWithDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a data source finishes loading its content.

## Declaration

```objectivec
- (void) finishedLoadingWithDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `dataSource`: A `WebDataSource` object that identifies the request that finished loading.

## See Also

### Related Documentation

- [setDataSource:](setdatasource%28__%29.md): Deprecated. Sets the receiver’s data source.

### Loading content

- [receivedData:withDataSource:](receiveddata%28__with_%29.md): Deprecated. Invoked when a data source has received some data.
- [receivedError:withDataSource:](receivederror%28__with_%29.md): Deprecated. Invoked when a data source receives an error loading its content.
