> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentrepresentation/receivederror(_:with:)](https://developer.apple.com/documentation/webkit/webdocumentrepresentation/receivederror(_:with:))

# receivedError(\_:with:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a data source receives an error loading its content.

## Declaration

```swift
func receivedError(_ error: (any Error)!, with dataSource: WebDataSource!)
```

## Parameters

- `error`: An `NSError` object that indicates what error occurred.
- `dataSource`: A `WebDataSource` object that identifies the request that caused this error.

<a id="Discussion"></a>

## Discussion

The `error` argument contains details on the error that occurred.

## See Also

### Loading content

- [receivedData(\_:with:)](receiveddata%28__with_%29.md): Deprecated. Invoked when a data source has received some data.
- [finishedLoading(with:)](finishedloading%28with_%29.md): Deprecated. Invoked when a data source finishes loading its content.

# receivedError:withDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a data source receives an error loading its content.

## Declaration

```objectivec
- (void) receivedError:(NSError *) error withDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `error`: An `NSError` object that indicates what error occurred.
- `dataSource`: A `WebDataSource` object that identifies the request that caused this error.

<a id="Discussion"></a>

## Discussion

The `error` argument contains details on the error that occurred.

## See Also

### Loading content

- [receivedData:withDataSource:](receiveddata%28__with_%29.md): Deprecated. Invoked when a data source has received some data.
- [finishedLoadingWithDataSource:](finishedloading%28with_%29.md): Deprecated. Invoked when a data source finishes loading its content.
