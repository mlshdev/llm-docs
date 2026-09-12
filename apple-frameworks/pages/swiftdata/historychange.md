> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historychange](https://developer.apple.com/documentation/swiftdata/historychange)

# HistoryChange

**Framework:** SwiftData  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

Values that describe data history transactions.

## Declaration

```swift
enum HistoryChange
```

## Topics

### Operations

- [HistoryChange.delete(\_:)](historychange/delete%28__%29.md): A value that indicates a delete operation.
- [HistoryChange.insert(\_:)](historychange/insert%28__%29.md): A value that indicates an insertion operation.
- [HistoryChange.update(\_:)](historychange/update%28__%29.md): A value that indicates an update operation.

### Getting information about a change

- [changedPersistentIdentifier](historychange/changedpersistentidentifier.md): The persistent identifier of the change.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### History life cycle

- [HistoryDelete](historydelete.md): An interface that enables a custom data store to delete items from the history of changes to its persisted models.
- [HistoryInsert](historyinsert.md)
- [HistoryToken](historytoken.md)
- [HistoryTransaction](historytransaction.md)
- [HistoryUpdate](historyupdate.md)
- [HistoryTombstone](historytombstone.md)
- [DefaultHistoryInsert](defaulthistoryinsert.md)
- [DefaultHistoryUpdate](defaulthistoryupdate.md)
- [DefaultHistoryDelete](defaulthistorydelete.md)
- [DefaultHistoryToken](defaulthistorytoken.md)
- [DefaultHistoryTransaction](defaulthistorytransaction.md)
