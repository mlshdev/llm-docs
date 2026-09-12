> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/restoredata(_:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/restoredata(_:completionhandler:))

# restoreData(\_:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func restoreData(_ data: Data, completionHandler: @escaping @MainActor @Sendable ((any Error)?) -> Void)
```

```swift
func restoreData(_ data: Data) async throws
```

## See Also

### Saving and restoring data

- [fetchData(of:completionHandler:)](fetchdata%28of_completionhandler_%29.md)
- [WKWebViewDataType](../wkwebviewdatatype.md)

# restoreData:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (void) restoreData:(NSData *) data completionHandler:(void (^)(NSError *)) completionHandler;
```

## See Also

### Saving and restoring data

- [fetchDataOfTypes:completionHandler:](fetchdata%28of_completionhandler_%29.md)
- [WKWebViewDataType](../wkwebviewdatatype.md)
