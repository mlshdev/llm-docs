> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychangerequest/fetchhistory(after:)-3rmfm](https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/fetchhistory(after:)-3rmfm)

# fetchHistory(after:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Retrieves the request history after a given token.

## Declaration

```swift
class func fetchHistory(after token: NSPersistentHistoryToken?) -> Self
```

## Parameters

- `token`: The bookmark that defines the start of the request history.

<a id="return-value"></a>

## Return Value

A persistent history fetch request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) with an initial token bookmark boundary.

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

## See Also

### Fetching History

- [fetchHistory(after:)](fetchhistory%28after_%29-qi5b.md): Retrieves history since a given date.
- [fetchHistory(after:)](fetchhistory%28after_%29-9cuj5.md): Retrieves history since a given transaction.
- [fetchHistory(withFetch:)](fetchhistory%28withfetch_%29.md): Retrieves history based on a fetch request.

# fetchHistoryAfterToken: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Retrieves the request history after a given token.

## Declaration

```objectivec
+ (instancetype) fetchHistoryAfterToken:(NSPersistentHistoryToken *) token;
```

## Parameters

- `token`: The bookmark that defines the start of the request history.

<a id="return-value"></a>

## Return Value

A persistent history fetch request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) with an initial token bookmark boundary.

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

## See Also

### Fetching History

- [fetchHistoryAfterDate:](fetchhistory%28after_%29-qi5b.md): Retrieves history since a given date.
- [fetchHistoryAfterTransaction:](fetchhistory%28after_%29-9cuj5.md): Retrieves history since a given transaction.
- [fetchHistoryWithFetchRequest:](fetchhistory%28withfetch_%29.md): Retrieves history based on a fetch request.
