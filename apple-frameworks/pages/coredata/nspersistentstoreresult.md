> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoreresult](https://developer.apple.com/documentation/coredata/nspersistentstoreresult)

# NSPersistentStoreResult (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The abstract base class for results returned from a persistent store coordinator.

## Declaration

```swift
class NSPersistentStoreResult
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSBatchDeleteResult](nsbatchdeleteresult.md)
- [NSBatchInsertResult](nsbatchinsertresult.md)
- [NSBatchUpdateResult](nsbatchupdateresult.md)
- [NSPersistentCloudKitContainerEventResult](nspersistentcloudkitcontainereventresult.md)
- [NSPersistentHistoryResult](nspersistenthistoryresult.md)
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Store Coordination

- [NSPersistentStoreCoordinator](nspersistentstorecoordinator.md): An object that enables an app’s contexts and the underlying persistent stores to work together.
- [NSPersistentStore](nspersistentstore.md): The abstract base class for all Core Data persistent stores.
- [NSPersistentStoreDescription](nspersistentstoredescription.md): A description object used to create and load a persistent store.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSSaveChangesRequest](nssavechangesrequest.md): An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.

# NSPersistentStoreResult (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The abstract base class for results returned from a persistent store coordinator.

## Declaration

```objectivec
@interface NSPersistentStoreResult : NSObject
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSBatchDeleteResult](nsbatchdeleteresult.md)
- [NSBatchInsertResult](nsbatchinsertresult.md)
- [NSBatchUpdateResult](nsbatchupdateresult.md)
- [NSPersistentCloudKitContainerEventResult](nspersistentcloudkitcontainereventresult.md)
- [NSPersistentHistoryResult](nspersistenthistoryresult.md)
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md)

## See Also

### Store Coordination

- [NSPersistentStoreCoordinator](nspersistentstorecoordinator.md): An object that enables an app’s contexts and the underlying persistent stores to work together.
- [NSPersistentStore](nspersistentstore.md): The abstract base class for all Core Data persistent stores.
- [NSPersistentStoreDescription](nspersistentstoredescription.md): A description object used to create and load a persistent store.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSSaveChangesRequest](nssavechangesrequest.md): An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.
