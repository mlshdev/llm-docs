> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/fetchdata(of:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/fetchdata(of:completionhandler:))

# fetchData(of:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func fetchData(of dataTypes: WKWebViewDataType, completionHandler: @escaping @MainActor @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func fetchData(of dataTypes: WKWebViewDataType) async throws -> Data
```

## See Also

### Saving and restoring data

- [restoreData(\_:completionHandler:)](restoredata%28__completionhandler_%29.md)
- [WKWebViewDataType](../wkwebviewdatatype.md)

# fetchDataOfTypes:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (void) fetchDataOfTypes:(WKWebViewDataType) dataTypes completionHandler:(void (^)(NSData *, NSError *)) completionHandler;
```

## See Also

### Saving and restoring data

- [restoreData:completionHandler:](restoredata%28__completionhandler_%29.md)
- [WKWebViewDataType](../wkwebviewdatatype.md)
