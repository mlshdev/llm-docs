> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/defaulthistoryupdate](https://developer.apple.com/documentation/swiftdata/defaulthistoryupdate)

# DefaultHistoryUpdate

**Framework:** SwiftData  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

## Declaration

```swift
struct DefaultHistoryUpdate<Model> where Model : PersistentModel
```

## Topics

### Operators

- [==(\_:\_:)](defaulthistoryupdate/==%28____%29.md)

### Instance Methods

- [hash(into:)](defaulthistoryupdate/hash%28into_%29.md)

### Type Aliases

- [DefaultHistoryUpdate.PropertyUpdate](defaulthistoryupdate/propertyupdate.md)

## Relationships

### Conforms To

- [HistoryUpdate](historyupdate.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### History life cycle

- [HistoryChange](historychange.md): Values that describe data history transactions.
- [HistoryDelete](historydelete.md): An interface that enables a custom data store to delete items from the history of changes to its persisted models.
- [HistoryInsert](historyinsert.md)
- [HistoryToken](historytoken.md)
- [HistoryTransaction](historytransaction.md)
- [HistoryUpdate](historyupdate.md)
- [HistoryTombstone](historytombstone.md)
- [DefaultHistoryInsert](defaulthistoryinsert.md)
- [DefaultHistoryDelete](defaulthistorydelete.md)
- [DefaultHistoryToken](defaulthistorytoken.md)
- [DefaultHistoryTransaction](defaulthistorytransaction.md)
