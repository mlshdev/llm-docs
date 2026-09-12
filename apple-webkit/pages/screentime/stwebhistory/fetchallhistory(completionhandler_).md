> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebhistory/fetchallhistory(completionhandler:)](https://developer.apple.com/documentation/screentime/stwebhistory/fetchallhistory(completionhandler:))

# fetchAllHistory(completionHandler:) (Swift)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+

Fetches all web history associated with the bundle identifier and profile identifier you specified during initialization.

## Declaration

```swift
func fetchAllHistory(completionHandler: @escaping @Sendable (Set<URL>?, (any Error)?) -> Void)
```

```swift
func fetchAllHistory() async throws -> Set<URL>
```

# fetchAllHistoryWithCompletionHandler: (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+

Fetches all web history associated with the bundle identifier and profile identifier you specified during initialization.

## Declaration

```objectivec
- (void) fetchAllHistoryWithCompletionHandler:(void (^)(NSSet<NSURL *> *urls, NSError *error)) completionHandler;
```
