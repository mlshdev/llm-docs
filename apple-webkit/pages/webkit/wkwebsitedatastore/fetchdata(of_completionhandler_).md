> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/fetchdata(of:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/fetchdata(of:completionhandler:))

# fetchData(of:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func fetchData(of dataTypes: Set<String>, completionHandler: @escaping @MainActor @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func fetchData(of dataTypes: Set<String>) async throws -> Data
```

# fetchDataOfTypes:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (void) fetchDataOfTypes:(NSSet<NSString *> *) dataTypes completionHandler:(void (^)(NSData *, NSError *)) completionHandler;
```
