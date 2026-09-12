> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore](https://developer.apple.com/documentation/coredata/nsatomicstore)

# NSAtomicStore (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An abstract superclass that you subclass to create a Core Data atomic store.

## Declaration

```swift
class NSAtomicStore
```

<a id="overview"></a>

## Overview

Use an atomic store to handle data sets that can be expressed in memory. The atomic store API favors simplicity over performance.

This class provides default implementations of some utility methods. Create a custom atomic store subclass when you have a custom file format that you want to integrate with a Core Data app. When you create a subclass, override the following [NSAtomicStore](nsatomicstore.md) methods:

- [load()](nsatomicstore/load%28%29.md)
- [newCacheNode(for:)](nsatomicstore/newcachenode%28for_%29.md)
- [newReferenceObject(for:)](nsatomicstore/newreferenceobject%28for_%29.md)
- [save()](nsatomicstore/save%28%29.md)
- [updateCacheNode(\_:from:)](nsatomicstore/updatecachenode%28__from_%29.md)

Also override the following properties and methods of [NSPersistentStore](nspersistentstore.md), from which the atomic store class inherits:

- [type](nspersistentstore/type.md)
- [identifier](nspersistentstore/identifier.md)
- [metadata](nspersistentstore/metadata.md)
- [metadataForPersistentStore(with:)](nspersistentstore/metadataforpersistentstore%28with_%29.md)
- [setMetadata(\_:forPersistentStoreAt:)](nspersistentstore/setmetadata%28__forpersistentstoreat_%29.md)

`NSAtomicStore` provides a default dictionary of metadata. This dictionary contains the store type and identifier ([NSStoreTypeKey](nsstoretypekey.md) and [NSStoreUUIDKey](nsstoreuuidkey.md)) as well as store versioning information. Subclasses must ensure that the metadata is saved along with the store data.

## Topics

### Initializing a Store

- [init(persistentStoreCoordinator:configurationName:at:options:)](nsatomicstore/init%28persistentstorecoordinator_configurationname_at_options_%29.md): Creates an atomic store at the specified location.

### Loading a Store

- [load()](nsatomicstore/load%28%29.md): Loads the cache nodes for the receiver.
- [objectID(for:withReferenceObject:)](nsatomicstore/objectid%28for_withreferenceobject_%29.md): Returns a managed object ID from the reference data for a specified entity.
- [addCacheNodes(\_:)](nsatomicstore/addcachenodes%28__%29.md): Registers a set of cache nodes with the receiver.

### Updating Cache Nodes

- [newCacheNode(for:)](nsatomicstore/newcachenode%28for_%29.md): Returns a new cache node for a given managed object.
- [newReferenceObject(for:)](nsatomicstore/newreferenceobject%28for_%29.md): Returns a new reference object for a given managed object.
- [updateCacheNode(\_:from:)](nsatomicstore/updatecachenode%28__from_%29.md): Updates the given cache node using the values in a given managed object.
- [willRemoveCacheNodes(\_:)](nsatomicstore/willremovecachenodes%28__%29.md): Method invoked before the store removes the given collection of cache nodes.

### Saving a Store

- [save()](nsatomicstore/save%28%29.md): Saves the cache nodes.

### Utility Methods

- [cacheNodes()](nsatomicstore/cachenodes%28%29.md): Returns the set of cache nodes registered with the receiver.
- [cacheNode(for:)](nsatomicstore/cachenode%28for_%29.md): Returns the cache node for a given managed object ID.
- [referenceObject(for:)](nsatomicstore/referenceobject%28for_%29.md): Returns the reference object for a given managed object ID.

## Relationships

### Inherits From

- [NSPersistentStore](nspersistentstore.md)

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
- [NSPersistentStoreResult](nspersistentstoreresult.md): The abstract base class for results returned from a persistent store coordinator.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSSaveChangesRequest](nssavechangesrequest.md): An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.

# NSAtomicStore (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An abstract superclass that you subclass to create a Core Data atomic store.

## Declaration

```objectivec
@interface NSAtomicStore : NSPersistentStore
```

<a id="overview"></a>

## Overview

Use an atomic store to handle data sets that can be expressed in memory. The atomic store API favors simplicity over performance.

This class provides default implementations of some utility methods. Create a custom atomic store subclass when you have a custom file format that you want to integrate with a Core Data app. When you create a subclass, override the following [NSAtomicStore](nsatomicstore.md) methods:

- [load:](nsatomicstore/load%28%29.md)
- [newCacheNodeForManagedObject:](nsatomicstore/newcachenode%28for_%29.md)
- [newReferenceObjectForManagedObject:](nsatomicstore/newreferenceobject%28for_%29.md)
- [save:](nsatomicstore/save%28%29.md)
- [updateCacheNode:fromManagedObject:](nsatomicstore/updatecachenode%28__from_%29.md)

Also override the following properties and methods of [NSPersistentStore](nspersistentstore.md), from which the atomic store class inherits:

- [type](nspersistentstore/type.md)
- [identifier](nspersistentstore/identifier.md)
- [metadata](nspersistentstore/metadata.md)
- [metadataForPersistentStoreWithURL:error:](nspersistentstore/metadataforpersistentstore%28with_%29.md)
- [setMetadata:forPersistentStoreWithURL:error:](nspersistentstore/setmetadata%28__forpersistentstoreat_%29.md)

`NSAtomicStore` provides a default dictionary of metadata. This dictionary contains the store type and identifier ([NSStoreTypeKey](nsstoretypekey.md) and [NSStoreUUIDKey](nsstoreuuidkey.md)) as well as store versioning information. Subclasses must ensure that the metadata is saved along with the store data.

## Topics

### Initializing a Store

- [initWithPersistentStoreCoordinator:configurationName:URL:options:](nsatomicstore/init%28persistentstorecoordinator_configurationname_at_options_%29.md): Creates an atomic store at the specified location.

### Loading a Store

- [load:](nsatomicstore/load%28%29.md): Loads the cache nodes for the receiver.
- [objectIDForEntity:referenceObject:](nsatomicstore/objectid%28for_withreferenceobject_%29.md): Returns a managed object ID from the reference data for a specified entity.
- [addCacheNodes:](nsatomicstore/addcachenodes%28__%29.md): Registers a set of cache nodes with the receiver.

### Updating Cache Nodes

- [newCacheNodeForManagedObject:](nsatomicstore/newcachenode%28for_%29.md): Returns a new cache node for a given managed object.
- [newReferenceObjectForManagedObject:](nsatomicstore/newreferenceobject%28for_%29.md): Returns a new reference object for a given managed object.
- [updateCacheNode:fromManagedObject:](nsatomicstore/updatecachenode%28__from_%29.md): Updates the given cache node using the values in a given managed object.
- [willRemoveCacheNodes:](nsatomicstore/willremovecachenodes%28__%29.md): Method invoked before the store removes the given collection of cache nodes.

### Saving a Store

- [save:](nsatomicstore/save%28%29.md): Saves the cache nodes.

### Utility Methods

- [cacheNodes](nsatomicstore/cachenodes%28%29.md): Returns the set of cache nodes registered with the receiver.
- [cacheNodeForObjectID:](nsatomicstore/cachenode%28for_%29.md): Returns the cache node for a given managed object ID.
- [referenceObjectForObjectID:](nsatomicstore/referenceobject%28for_%29.md): Returns the reference object for a given managed object ID.

## Relationships

### Inherits From

- [NSPersistentStore](nspersistentstore.md)

## See Also

### Store Coordination

- [NSPersistentStoreCoordinator](nspersistentstorecoordinator.md): An object that enables an app’s contexts and the underlying persistent stores to work together.
- [NSPersistentStore](nspersistentstore.md): The abstract base class for all Core Data persistent stores.
- [NSPersistentStoreDescription](nspersistentstoredescription.md): A description object used to create and load a persistent store.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreResult](nspersistentstoreresult.md): The abstract base class for results returned from a persistent store coordinator.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSSaveChangesRequest](nssavechangesrequest.md): An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.
