> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychangerequest/fetchhistory(after:)-9cuj5](https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/fetchhistory(after:)-9cuj5)

# fetchHistory(after:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Retrieves history since a given transaction.

## Declaration

```swift
class func fetchHistory(after transaction: NSPersistentHistoryTransaction?) -> Self
```

## Parameters

- `transaction`: The transaction that marks the beginning of the history request.

<a id="return-value"></a>

## Return Value

A persistent history fetch request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) with an initial transaction boundary.

## See Also

### Fetching History

- [fetchHistory(after:)](fetchhistory%28after_%29-qi5b.md): Retrieves history since a given date.
- [fetchHistory(after:)](fetchhistory%28after_%29-3rmfm.md): Retrieves the request history after a given token.
- [fetchHistory(withFetch:)](fetchhistory%28withfetch_%29.md): Retrieves history based on a fetch request.

# fetchHistoryAfterTransaction: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Retrieves history since a given transaction.

## Declaration

```objectivec
+ (instancetype) fetchHistoryAfterTransaction:(NSPersistentHistoryTransaction *) transaction;
```

## Parameters

- `transaction`: The transaction that marks the beginning of the history request.

<a id="return-value"></a>

## Return Value

A persistent history fetch request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) with an initial transaction boundary.

## See Also

### Fetching History

- [fetchHistoryAfterDate:](fetchhistory%28after_%29-qi5b.md): Retrieves history since a given date.
- [fetchHistoryAfterToken:](fetchhistory%28after_%29-3rmfm.md): Retrieves the request history after a given token.
- [fetchHistoryWithFetchRequest:](fetchhistory%28withfetch_%29.md): Retrieves history based on a fetch request.
