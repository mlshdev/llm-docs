> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historytransaction](https://developer.apple.com/documentation/swiftdata/historytransaction)

# HistoryTransaction

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
protocol HistoryTransaction : Hashable, Identifiable, Sendable
```

## Topics

### Associated Types

- [TokenType](historytransaction/tokentype.md)
- [TransactionIdentifier](historytransaction/transactionidentifier-swift.associatedtype.md)

### Instance Properties

- [author](historytransaction/author.md)
- [changes](historytransaction/changes.md)
- [storeIdentifier](historytransaction/storeidentifier.md)
- [timestamp](historytransaction/timestamp.md)
- [token](historytransaction/token.md)
- [transactionIdentifier](historytransaction/transactionidentifier-swift.property.md)

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DefaultHistoryTransaction](defaulthistorytransaction.md)

## See Also

### History life cycle

- [HistoryChange](historychange.md): Values that describe data history transactions.
- [HistoryDelete](historydelete.md): An interface that enables a custom data store to delete items from the history of changes to its persisted models.
- [HistoryInsert](historyinsert.md)
- [HistoryToken](historytoken.md)
- [HistoryUpdate](historyupdate.md)
- [HistoryTombstone](historytombstone.md)
- [DefaultHistoryInsert](defaulthistoryinsert.md)
- [DefaultHistoryUpdate](defaulthistoryupdate.md)
- [DefaultHistoryDelete](defaulthistorydelete.md)
- [DefaultHistoryToken](defaulthistorytoken.md)
- [DefaultHistoryTransaction](defaulthistorytransaction.md)
