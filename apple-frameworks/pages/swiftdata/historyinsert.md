> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historyinsert](https://developer.apple.com/documentation/swiftdata/historyinsert)

# HistoryInsert

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
protocol HistoryInsert<Model> : Sendable
```

## Topics

### Associated Types

- [ChangeIdentifier](historyinsert/changeidentifier-swift.associatedtype.md)
- [Model](historyinsert/model.md)
- [TransactionIdentifier](historyinsert/transactionidentifier-swift.associatedtype.md)

### Instance Properties

- [changeIdentifier](historyinsert/changeidentifier-swift.property.md)
- [changedPersistentIdentifier](historyinsert/changedpersistentidentifier.md)
- [transactionIdentifier](historyinsert/transactionidentifier-swift.property.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DefaultHistoryInsert](defaulthistoryinsert.md)

## See Also

### History life cycle

- [HistoryChange](historychange.md): Values that describe data history transactions.
- [HistoryDelete](historydelete.md): An interface that enables a custom data store to delete items from the history of changes to its persisted models.
- [HistoryToken](historytoken.md)
- [HistoryTransaction](historytransaction.md)
- [HistoryUpdate](historyupdate.md)
- [HistoryTombstone](historytombstone.md)
- [DefaultHistoryInsert](defaulthistoryinsert.md)
- [DefaultHistoryUpdate](defaulthistoryupdate.md)
- [DefaultHistoryDelete](defaulthistorydelete.md)
- [DefaultHistoryToken](defaulthistorytoken.md)
- [DefaultHistoryTransaction](defaulthistorytransaction.md)
