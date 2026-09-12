> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebhistory/fetchhistory(during:completionhandler:)](https://developer.apple.com/documentation/screentime/stwebhistory/fetchhistory(during:completionhandler:))

# fetchHistory(during:completionHandler:) (Swift)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+

Fetches web history that occurred during the date interval you specify.

## Declaration

```swift
func fetchHistory(during interval: DateInterval, completionHandler: @escaping @Sendable (Set<URL>?, (any Error)?) -> Void)
```

```swift
func fetchHistory(during interval: DateInterval) async throws -> Set<URL>
```

## Parameters

- `interval`: The date interval of web history you want to fetch.

# fetchHistoryDuringInterval:completionHandler: (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+

Fetches web history that occurred during the date interval you specify.

## Declaration

```objectivec
- (void) fetchHistoryDuringInterval:(NSDateInterval *) interval completionHandler:(void (^)(NSSet<NSURL *> *urls, NSError *error)) completionHandler;
```

## Parameters

- `interval`: The date interval of web history you want to fetch.
