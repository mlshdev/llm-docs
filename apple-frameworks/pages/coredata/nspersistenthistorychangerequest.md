> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychangerequest](https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest)

# NSPersistentHistoryChangeRequest (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A request to fetch or purge persistent history.

## Declaration

```swift
class NSPersistentHistoryChangeRequest
```

## Mentioned In

- [Consuming relevant store changes](consuming-relevant-store-changes.md)

## Topics

### Configuring the Request

- [fetchRequest](nspersistenthistorychangerequest/fetchrequest.md): The specified fetch request, when retrieving history.
- [resultType](nspersistenthistorychangerequest/resulttype.md): The type of result that this request returns.

### Getting the Token

- [token](nspersistenthistorychangerequest/token.md): The specified token, when retrieving history defined by a token.

### Fetching History

- [fetchHistory(after:)](nspersistenthistorychangerequest/fetchhistory%28after_%29-qi5b.md): Retrieves history since a given date.
- [fetchHistory(after:)](nspersistenthistorychangerequest/fetchhistory%28after_%29-3rmfm.md): Retrieves the request history after a given token.
- [fetchHistory(after:)](nspersistenthistorychangerequest/fetchhistory%28after_%29-9cuj5.md): Retrieves history since a given transaction.
- [fetchHistory(withFetch:)](nspersistenthistorychangerequest/fetchhistory%28withfetch_%29.md): Retrieves history based on a fetch request.

### Purging History

- [deleteHistory(before:)](nspersistenthistorychangerequest/deletehistory%28before_%29-7t2th.md): Purges history older than a given date.
- [deleteHistory(before:)](nspersistenthistorychangerequest/deletehistory%28before_%29-5kghb.md): Purges history older than that defined by a given token.
- [deleteHistory(before:)](nspersistenthistorychangerequest/deletehistory%28before_%29-9l06p.md): Purges history older than a given transaction.

## Relationships

### Inherits From

- [NSPersistentStoreRequest](nspersistentstorerequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Requesting History

- [NSPersistentHistoryResult](nspersistenthistoryresult.md): The result of a request to fetch persistent history.

# NSPersistentHistoryChangeRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A request to fetch or purge persistent history.

## Declaration

```objectivec
@interface NSPersistentHistoryChangeRequest : NSPersistentStoreRequest
```

## Mentioned In

- [Consuming relevant store changes](consuming-relevant-store-changes.md)

## Topics

### Configuring the Request

- [fetchRequest](nspersistenthistorychangerequest/fetchrequest.md): The specified fetch request, when retrieving history.
- [resultType](nspersistenthistorychangerequest/resulttype.md): The type of result that this request returns.

### Getting the Token

- [token](nspersistenthistorychangerequest/token.md): The specified token, when retrieving history defined by a token.

### Fetching History

- [fetchHistoryAfterDate:](nspersistenthistorychangerequest/fetchhistory%28after_%29-qi5b.md): Retrieves history since a given date.
- [fetchHistoryAfterToken:](nspersistenthistorychangerequest/fetchhistory%28after_%29-3rmfm.md): Retrieves the request history after a given token.
- [fetchHistoryAfterTransaction:](nspersistenthistorychangerequest/fetchhistory%28after_%29-9cuj5.md): Retrieves history since a given transaction.
- [fetchHistoryWithFetchRequest:](nspersistenthistorychangerequest/fetchhistory%28withfetch_%29.md): Retrieves history based on a fetch request.

### Purging History

- [deleteHistoryBeforeDate:](nspersistenthistorychangerequest/deletehistory%28before_%29-7t2th.md): Purges history older than a given date.
- [deleteHistoryBeforeToken:](nspersistenthistorychangerequest/deletehistory%28before_%29-5kghb.md): Purges history older than that defined by a given token.
- [deleteHistoryBeforeTransaction:](nspersistenthistorychangerequest/deletehistory%28before_%29-9l06p.md): Purges history older than a given transaction.

## Relationships

### Inherits From

- [NSPersistentStoreRequest](nspersistentstorerequest.md)

## See Also

### Requesting History

- [NSPersistentHistoryResult](nspersistenthistoryresult.md): The result of a request to fetch persistent history.
