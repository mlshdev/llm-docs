> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorytransaction](https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction)

# NSPersistentHistoryTransaction (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A set of changes in the persistent history based on a context save or batch operation.

## Declaration

```swift
class NSPersistentHistoryTransaction
```

## Mentioned In

- [Consuming relevant store changes](consuming-relevant-store-changes.md)

## Topics

### Requesting Notifications

- [objectIDNotification()](nspersistenthistorytransaction/objectidnotification%28%29.md): Obtains a notification for use in merging the transaction’s changes into a managed object context.

### Customizing History Fetch Requests

- [fetchRequest](nspersistenthistorytransaction/fetchrequest.md): A fetch request that has the persistent history transaction as the entity.
- [entityDescription](nspersistenthistorytransaction/entitydescription.md): The entity description of the persistent history transaction entity.
- [entityDescription(with:)](nspersistenthistorytransaction/entitydescription%28with_%29.md): Requests an entity description using the provided context for the managed object type affected by the transaction.

### Inspecting Transaction Details

- [author](nspersistenthistorytransaction/author.md): A granular description of the context that made the persistent history change, if available.
- [bundleID](nspersistenthistorytransaction/bundleid.md): The originating bundle’s identifier.
- [changes](nspersistenthistorytransaction/changes.md): The array of persistent history changes.
- [contextName](nspersistenthistorytransaction/contextname.md): The originating context’s name.
- [processID](nspersistenthistorytransaction/processid.md): The originating process’s identifier.
- [storeID](nspersistenthistorytransaction/storeid.md): The originating store’s identifier.
- [timestamp](nspersistenthistorytransaction/timestamp.md): The date of the persistent history change.
- [token](nspersistenthistorytransaction/token.md): The token that represents this transaction in the persistent history.
- [transactionNumber](nspersistenthistorytransaction/transactionnumber.md): The transaction’s numeric identifier.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Reading History

- [NSPersistentHistoryChange](nspersistenthistorychange.md): A change representing the insertion, update, or deletion of a managed object in the persistent store.

# NSPersistentHistoryTransaction (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A set of changes in the persistent history based on a context save or batch operation.

## Declaration

```objectivec
@interface NSPersistentHistoryTransaction : NSObject
```

## Mentioned In

- [Consuming relevant store changes](consuming-relevant-store-changes.md)

## Topics

### Requesting Notifications

- [objectIDNotification](nspersistenthistorytransaction/objectidnotification%28%29.md): Obtains a notification for use in merging the transaction’s changes into a managed object context.

### Customizing History Fetch Requests

- [fetchRequest](nspersistenthistorytransaction/fetchrequest.md): A fetch request that has the persistent history transaction as the entity.
- [entityDescription](nspersistenthistorytransaction/entitydescription.md): The entity description of the persistent history transaction entity.
- [entityDescriptionWithContext:](nspersistenthistorytransaction/entitydescription%28with_%29.md): Requests an entity description using the provided context for the managed object type affected by the transaction.

### Inspecting Transaction Details

- [author](nspersistenthistorytransaction/author.md): A granular description of the context that made the persistent history change, if available.
- [bundleID](nspersistenthistorytransaction/bundleid.md): The originating bundle’s identifier.
- [changes](nspersistenthistorytransaction/changes.md): The array of persistent history changes.
- [contextName](nspersistenthistorytransaction/contextname.md): The originating context’s name.
- [processID](nspersistenthistorytransaction/processid.md): The originating process’s identifier.
- [storeID](nspersistenthistorytransaction/storeid.md): The originating store’s identifier.
- [timestamp](nspersistenthistorytransaction/timestamp.md): The date of the persistent history change.
- [token](nspersistenthistorytransaction/token.md): The token that represents this transaction in the persistent history.
- [transactionNumber](nspersistenthistorytransaction/transactionnumber.md): The transaction’s numeric identifier.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Reading History

- [NSPersistentHistoryChange](nspersistenthistorychange.md): A change representing the insertion, update, or deletion of a managed object in the persistent store.
