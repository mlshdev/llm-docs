> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychangerequest/fetchhistory(after:)-qi5b](https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/fetchhistory(after:)-qi5b)

# fetchHistory(after:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Retrieves history since a given date.

## Declaration

```swift
class func fetchHistory(after date: Date) -> Self
```

## Parameters

- `date`: The date used to define the start of the fetch history.

<a id="return-value"></a>

## Return Value

A persistent history fetch request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) with an initial date boundary.

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

## See Also

### Fetching History

- [fetchHistory(after:)](fetchhistory%28after_%29-3rmfm.md): Retrieves the request history after a given token.
- [fetchHistory(after:)](fetchhistory%28after_%29-9cuj5.md): Retrieves history since a given transaction.
- [fetchHistory(withFetch:)](fetchhistory%28withfetch_%29.md): Retrieves history based on a fetch request.

# fetchHistoryAfterDate: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Retrieves history since a given date.

## Declaration

```objectivec
+ (instancetype) fetchHistoryAfterDate:(NSDate *) date;
```

## Parameters

- `date`: The date used to define the start of the fetch history.

<a id="return-value"></a>

## Return Value

A persistent history fetch request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) with an initial date boundary.

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

## See Also

### Fetching History

- [fetchHistoryAfterToken:](fetchhistory%28after_%29-3rmfm.md): Retrieves the request history after a given token.
- [fetchHistoryAfterTransaction:](fetchhistory%28after_%29-9cuj5.md): Retrieves history since a given transaction.
- [fetchHistoryWithFetchRequest:](fetchhistory%28withfetch_%29.md): Retrieves history based on a fetch request.
