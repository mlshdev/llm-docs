> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstore](https://developer.apple.com/documentation/coredata/nsincrementalstore)

# NSIncrementalStore (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An abstract superclass defining the API through which Core Data communicates with a store.

## Declaration

```swift
class NSIncrementalStore
```

<a id="overview"></a>

## Overview

You use this interface to create persistent stores that load and save data incrementally, allowing for the management of large and/or shared datasets.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

<a id="Methods-to-Override"></a>

#### Methods to Override

In a subclass of `NSIncrementalStore`, you *must* override the following methods to provide behavior appropriate for your store:

- [loadMetadata()](nsincrementalstore/loadmetadata%28%29.md)
- [execute(\_:with:)](nsincrementalstore/execute%28__with_%29.md)
- [newValuesForObject(with:with:)](nsincrementalstore/newvaluesforobject%28with_with_%29.md)
- [newValue(forRelationship:forObjectWith:with:)](nsincrementalstore/newvalue%28forrelationship_forobjectwith_with_%29.md)
- [obtainPermanentIDs(for:)](nsincrementalstore/obtainpermanentids%28for_%29.md)

You can also optionally override the following methods:

- [identifierForNewStore(at:)](nsincrementalstore/identifierfornewstore%28at_%29.md)
- [managedObjectContextDidRegisterObjects(with:)](nsincrementalstore/managedobjectcontextdidregisterobjects%28with_%29.md)
- [managedObjectContextDidUnregisterObjects(with:)](nsincrementalstore/managedobjectcontextdidunregisterobjects%28with_%29.md)

There is no need to override the methods that you must otherwise override for a subclass of [NSPersistentStore](nspersistentstore.md).

<a id="Methods-that-Should-Not-Be-Overridden"></a>

#### Methods that Should Not Be Overridden

In a subclass of `NSIncrementalStore`, you should not override the following methods:

- [newObjectID(for:referenceObject:)](nsincrementalstore/newobjectid%28for_referenceobject_%29.md)
- [referenceObject(for:)](nsincrementalstore/referenceobject%28for_%29.md)

## Topics

### Manipulating Managed Objects

- [execute(\_:with:)](nsincrementalstore/execute%28__with_%29.md): Returns a value as appropriate for the given request, or nil if the request cannot be completed.
- [newValuesForObject(with:with:)](nsincrementalstore/newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [newValue(forRelationship:forObjectWith:with:)](nsincrementalstore/newvalue%28forrelationship_forobjectwith_with_%29.md): Returns the relationship for the given relationship of the object with a given object ID.
- [obtainPermanentIDs(for:)](nsincrementalstore/obtainpermanentids%28for_%29.md): Returns an array containing the object IDs for a given array of newly-inserted objects.
- [newObjectID(for:referenceObject:)](nsincrementalstore/newobjectid%28for_referenceobject_%29.md): Returns a new object ID that uses given data as the key.
- [referenceObject(for:)](nsincrementalstore/referenceobject%28for_%29.md): Returns the reference data used to construct a given object ID.

### Responding to Context Changes

- [managedObjectContextDidRegisterObjects(with:)](nsincrementalstore/managedobjectcontextdidregisterobjects%28with_%29.md): Indicates that objects identified by a given array of object IDs are in use in a managed object context.
- [managedObjectContextDidUnregisterObjects(with:)](nsincrementalstore/managedobjectcontextdidunregisterobjects%28with_%29.md): Indicates that objects identified by a given array of object IDs are no longer being used by a managed object context.

### Accessing Metadata

- [identifierForNewStore(at:)](nsincrementalstore/identifierfornewstore%28at_%29.md): Returns the identifier for the store at a given URL.
- [loadMetadata()](nsincrementalstore/loadmetadata%28%29.md): Loads the metadata for the store.

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
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.

# NSIncrementalStore (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An abstract superclass defining the API through which Core Data communicates with a store.

## Declaration

```objectivec
@interface NSIncrementalStore : NSPersistentStore
```

<a id="overview"></a>

## Overview

You use this interface to create persistent stores that load and save data incrementally, allowing for the management of large and/or shared datasets.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

<a id="Methods-to-Override"></a>

#### Methods to Override

In a subclass of `NSIncrementalStore`, you *must* override the following methods to provide behavior appropriate for your store:

- [loadMetadata:](nsincrementalstore/loadmetadata%28%29.md)
- [executeRequest:withContext:error:](nsincrementalstore/execute%28__with_%29.md)
- [newValuesForObjectWithID:withContext:error:](nsincrementalstore/newvaluesforobject%28with_with_%29.md)
- [newValueForRelationship:forObjectWithID:withContext:error:](nsincrementalstore/newvalue%28forrelationship_forobjectwith_with_%29.md)
- [obtainPermanentIDsForObjects:error:](nsincrementalstore/obtainpermanentids%28for_%29.md)

You can also optionally override the following methods:

- [identifierForNewStoreAtURL:](nsincrementalstore/identifierfornewstore%28at_%29.md)
- [managedObjectContextDidRegisterObjectsWithIDs:](nsincrementalstore/managedobjectcontextdidregisterobjects%28with_%29.md)
- [managedObjectContextDidUnregisterObjectsWithIDs:](nsincrementalstore/managedobjectcontextdidunregisterobjects%28with_%29.md)

There is no need to override the methods that you must otherwise override for a subclass of [NSPersistentStore](nspersistentstore.md).

<a id="Methods-that-Should-Not-Be-Overridden"></a>

#### Methods that Should Not Be Overridden

In a subclass of `NSIncrementalStore`, you should not override the following methods:

- [newObjectIDForEntity:referenceObject:](nsincrementalstore/newobjectid%28for_referenceobject_%29.md)
- [referenceObjectForObjectID:](nsincrementalstore/referenceobject%28for_%29.md)

## Topics

### Manipulating Managed Objects

- [executeRequest:withContext:error:](nsincrementalstore/execute%28__with_%29.md): Returns a value as appropriate for the given request, or nil if the request cannot be completed.
- [newValuesForObjectWithID:withContext:error:](nsincrementalstore/newvaluesforobject%28with_with_%29.md): Returns an incremental store node encapsulating the persistent external values of the object with a given object ID.
- [newValueForRelationship:forObjectWithID:withContext:error:](nsincrementalstore/newvalue%28forrelationship_forobjectwith_with_%29.md): Returns the relationship for the given relationship of the object with a given object ID.
- [obtainPermanentIDsForObjects:error:](nsincrementalstore/obtainpermanentids%28for_%29.md): Returns an array containing the object IDs for a given array of newly-inserted objects.
- [newObjectIDForEntity:referenceObject:](nsincrementalstore/newobjectid%28for_referenceobject_%29.md): Returns a new object ID that uses given data as the key.
- [referenceObjectForObjectID:](nsincrementalstore/referenceobject%28for_%29.md): Returns the reference data used to construct a given object ID.

### Responding to Context Changes

- [managedObjectContextDidRegisterObjectsWithIDs:](nsincrementalstore/managedobjectcontextdidregisterobjects%28with_%29.md): Indicates that objects identified by a given array of object IDs are in use in a managed object context.
- [managedObjectContextDidUnregisterObjectsWithIDs:](nsincrementalstore/managedobjectcontextdidunregisterobjects%28with_%29.md): Indicates that objects identified by a given array of object IDs are no longer being used by a managed object context.

### Accessing Metadata

- [identifierForNewStoreAtURL:](nsincrementalstore/identifierfornewstore%28at_%29.md): Returns the identifier for the store at a given URL.
- [loadMetadata:](nsincrementalstore/loadmetadata%28%29.md): Loads the metadata for the store.

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
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.
