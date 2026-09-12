> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historyupdate](https://developer.apple.com/documentation/swiftdata/historyupdate)

# HistoryUpdate

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
protocol HistoryUpdate<Model> : Sendable
```

## Topics

### Associated Types

- [ChangeIdentifier](historyupdate/changeidentifier-swift.associatedtype.md)
- [Model](historyupdate/model.md)
- [TransactionIdentifier](historyupdate/transactionidentifier-swift.associatedtype.md)

### Instance Properties

- [changeIdentifier](historyupdate/changeidentifier-swift.property.md)
- [changedPersistentIdentifier](historyupdate/changedpersistentidentifier.md)
- [transactionIdentifier](historyupdate/transactionidentifier-swift.property.md)
- [updatedAttributes](historyupdate/updatedattributes.md)

### Type Aliases

- [HistoryUpdate.PropertyUpdate](historyupdate/propertyupdate.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DefaultHistoryUpdate](defaulthistoryupdate.md)

## See Also

### History life cycle

- [HistoryChange](historychange.md): Values that describe data history transactions.
- [HistoryDelete](historydelete.md): An interface that enables a custom data store to delete items from the history of changes to its persisted models.
- [HistoryInsert](historyinsert.md)
- [HistoryToken](historytoken.md)
- [HistoryTransaction](historytransaction.md)
- [HistoryTombstone](historytombstone.md)
- [DefaultHistoryInsert](defaulthistoryinsert.md)
- [DefaultHistoryUpdate](defaulthistoryupdate.md)
- [DefaultHistoryDelete](defaulthistorydelete.md)
- [DefaultHistoryToken](defaulthistorytoken.md)
- [DefaultHistoryTransaction](defaulthistorytransaction.md)
