> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historydelete](https://developer.apple.com/documentation/swiftdata/historydelete)

# HistoryDelete

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

An interface that enables a custom data store to delete items from the history of changes to its persisted models.

## Declaration

```swift
protocol HistoryDelete<Model> : Sendable
```

## Topics

### History deletion properites

- [changeIdentifier](historydelete/changeidentifier-swift.property.md): The change identifier of the delete operation.
- [changedPersistentIdentifier](historydelete/changedpersistentidentifier.md): The changed persistent identifier of the delete operation.
- [tombstone](historydelete/tombstone.md): The value the framework uses to represent information about data the Swift Data previously deleted from a model.
- [transactionIdentifier](historydelete/transactionidentifier-swift.property.md): The delete operation’s transaction identifier.

### Associated types

- [ChangeIdentifier](historydelete/changeidentifier-swift.associatedtype.md): The type associated with the change identifier.
- [Model](historydelete/model.md): The type associated with the persistent model.
- [TransactionIdentifier](historydelete/transactionidentifier-swift.associatedtype.md): The type associated with the transaction identifier.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DefaultHistoryDelete](defaulthistorydelete.md)

## See Also

### History life cycle

- [HistoryChange](historychange.md): Values that describe data history transactions.
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
