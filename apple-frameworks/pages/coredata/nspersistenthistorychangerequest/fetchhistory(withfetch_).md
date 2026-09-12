> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychangerequest/fetchhistory(withfetch:)](https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/fetchhistory(withfetch:))

# fetchHistory(withFetch:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves history based on a fetch request.

## Declaration

```swift
class func fetchHistory(withFetch fetchRequest: NSFetchRequest<any NSFetchRequestResult>) -> Self
```

## Parameters

- `fetchRequest`: The fetch request that defines the history bounds.

<a id="return-value"></a>

## Return Value

A persistent history fetch request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) built using an existing fetch request.

## See Also

### Fetching History

- [fetchHistory(after:)](fetchhistory%28after_%29-qi5b.md): Retrieves history since a given date.
- [fetchHistory(after:)](fetchhistory%28after_%29-3rmfm.md): Retrieves the request history after a given token.
- [fetchHistory(after:)](fetchhistory%28after_%29-9cuj5.md): Retrieves history since a given transaction.

# fetchHistoryWithFetchRequest: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves history based on a fetch request.

## Declaration

```objectivec
+ (instancetype) fetchHistoryWithFetchRequest:(NSFetchRequest *) fetchRequest;
```

## Parameters

- `fetchRequest`: The fetch request that defines the history bounds.

<a id="return-value"></a>

## Return Value

A persistent history fetch request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) built using an existing fetch request.

## See Also

### Fetching History

- [fetchHistoryAfterDate:](fetchhistory%28after_%29-qi5b.md): Retrieves history since a given date.
- [fetchHistoryAfterToken:](fetchhistory%28after_%29-3rmfm.md): Retrieves the request history after a given token.
- [fetchHistoryAfterTransaction:](fetchhistory%28after_%29-9cuj5.md): Retrieves history since a given transaction.
