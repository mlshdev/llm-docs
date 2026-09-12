> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssavechangesrequest](https://developer.apple.com/documentation/coredata/nssavechangesrequest)

# NSSaveChangesRequest (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.

## Declaration

```swift
class NSSaveChangesRequest
```

## Topics

### Initializing a Request

- [init(inserted:updated:deleted:locked:)](nssavechangesrequest/init%28inserted_updated_deleted_locked_%29.md): Initializes a save changes request with collections of given changes.

### Getting Information about a Request

- [insertedObjects](nssavechangesrequest/insertedobjects.md): The objects that were inserted into the calling context.
- [updatedObjects](nssavechangesrequest/updatedobjects.md): The objects that were modified in the calling context.
- [deletedObjects](nssavechangesrequest/deletedobjects.md): The objects that were deleted in the calling context.
- [lockedObjects](nssavechangesrequest/lockedobjects.md): The objects that were flagged for optimistic locking on the calling context.

### Initializers

- [init(insertedObjects:updatedObjects:deletedObjects:lockedObjects:)](nssavechangesrequest/init%28insertedobjects_updatedobjects_deletedobjects_lockedobjects_%29.md)

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

### Store Coordination

- [NSPersistentStoreCoordinator](nspersistentstorecoordinator.md): An object that enables an app’s contexts and the underlying persistent stores to work together.
- [NSPersistentStore](nspersistentstore.md): The abstract base class for all Core Data persistent stores.
- [NSPersistentStoreDescription](nspersistentstoredescription.md): A description object used to create and load a persistent store.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreResult](nspersistentstoreresult.md): The abstract base class for results returned from a persistent store coordinator.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.

# NSSaveChangesRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.

## Declaration

```objectivec
@interface NSSaveChangesRequest : NSPersistentStoreRequest
```

## Topics

### Initializing a Request

- [initWithInsertedObjects:updatedObjects:deletedObjects:lockedObjects:](nssavechangesrequest/init%28inserted_updated_deleted_locked_%29.md): Initializes a save changes request with collections of given changes.

### Getting Information about a Request

- [insertedObjects](nssavechangesrequest/insertedobjects.md): The objects that were inserted into the calling context.
- [updatedObjects](nssavechangesrequest/updatedobjects.md): The objects that were modified in the calling context.
- [deletedObjects](nssavechangesrequest/deletedobjects.md): The objects that were deleted in the calling context.
- [lockedObjects](nssavechangesrequest/lockedobjects.md): The objects that were flagged for optimistic locking on the calling context.

## Relationships

### Inherits From

- [NSPersistentStoreRequest](nspersistentstorerequest.md)

## See Also

### Store Coordination

- [NSPersistentStoreCoordinator](nspersistentstorecoordinator.md): An object that enables an app’s contexts and the underlying persistent stores to work together.
- [NSPersistentStore](nspersistentstore.md): The abstract base class for all Core Data persistent stores.
- [NSPersistentStoreDescription](nspersistentstoredescription.md): A description object used to create and load a persistent store.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreResult](nspersistentstoreresult.md): The abstract base class for results returned from a persistent store coordinator.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.
