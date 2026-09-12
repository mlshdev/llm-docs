> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychangerequest/deletehistory(before:)-9l06p](https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/deletehistory(before:)-9l06p)

# deleteHistory(before:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Purges history older than a given transaction.

## Declaration

```swift
class func deleteHistory(before transaction: NSPersistentHistoryTransaction?) -> Self
```

## Parameters

- `transaction`: The transaction that marks the end of the delete history request.

<a id="return-value"></a>

## Return Value

A delete history change request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) using an end transaction boundary.

## See Also

### Purging History

- [deleteHistory(before:)](deletehistory%28before_%29-7t2th.md): Purges history older than a given date.
- [deleteHistory(before:)](deletehistory%28before_%29-5kghb.md): Purges history older than that defined by a given token.

# deleteHistoryBeforeTransaction: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Purges history older than a given transaction.

## Declaration

```objectivec
+ (instancetype) deleteHistoryBeforeTransaction:(NSPersistentHistoryTransaction *) transaction;
```

## Parameters

- `transaction`: The transaction that marks the end of the delete history request.

<a id="return-value"></a>

## Return Value

A delete history change request ([NSPersistentHistoryChangeRequest](../nspersistenthistorychangerequest.md)) using an end transaction boundary.

## See Also

### Purging History

- [deleteHistoryBeforeDate:](deletehistory%28before_%29-7t2th.md): Purges history older than a given date.
- [deleteHistoryBeforeToken:](deletehistory%28before_%29-5kghb.md): Purges history older than that defined by a given token.
