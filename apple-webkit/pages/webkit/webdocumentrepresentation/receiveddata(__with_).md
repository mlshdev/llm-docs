> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentrepresentation/receiveddata(_:with:)](https://developer.apple.com/documentation/webkit/webdocumentrepresentation/receiveddata(_:with:))

# receivedData(\_:with:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a data source has received some data.

## Declaration

```swift
func receivedData(_ data: Data!, with dataSource: WebDataSource!)
```

## Parameters

- `data`: An `NSData` object containing the data received.
- `dataSource`: A `WebDataSource` object that identifies the request that generated this data.

<a id="Discussion"></a>

## Discussion

Data is loaded incrementally, so this method may be invoked multiple times. The receiver is responsible for accumulating this data.

## See Also

### Loading content

- [receivedError(\_:with:)](receivederror%28__with_%29.md): Deprecated. Invoked when a data source receives an error loading its content.
- [finishedLoading(with:)](finishedloading%28with_%29.md): Deprecated. Invoked when a data source finishes loading its content.

# receivedData:withDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a data source has received some data.

## Declaration

```objectivec
- (void) receivedData:(NSData *) data withDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `data`: An `NSData` object containing the data received.
- `dataSource`: A `WebDataSource` object that identifies the request that generated this data.

<a id="Discussion"></a>

## Discussion

Data is loaded incrementally, so this method may be invoked multiple times. The receiver is responsible for accumulating this data.

## See Also

### Loading content

- [receivedError:withDataSource:](receivederror%28__with_%29.md): Deprecated. Invoked when a data source receives an error loading its content.
- [finishedLoadingWithDataSource:](finishedloading%28with_%29.md): Deprecated. Invoked when a data source finishes loading its content.
