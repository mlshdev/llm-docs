> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/restoredata(_:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/restoredata(_:completionhandler:))

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

# restoreData:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (void) restoreData:(NSData *) data completionHandler:(void (^)(NSError *)) completionHandler;
```
