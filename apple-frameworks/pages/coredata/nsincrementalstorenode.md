> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstorenode](https://developer.apple.com/documentation/coredata/nsincrementalstorenode)

# NSIncrementalStoreNode (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A concrete class used to represent basic nodes in a Core Data incremental store.

## Declaration

```swift
class NSIncrementalStoreNode
```

<a id="overview"></a>

## Overview

A node represents a single record in a persistent store.

You can subclass `NSIncrementalStoreNode` to provide custom behavior.

## Topics

### Initializing a Node

- [init(objectID:withValues:version:)](nsincrementalstorenode/init%28objectid_withvalues_version_%29.md): Returns an object initialized with the given values.

### Managing Node Data

- [objectID](nsincrementalstorenode/objectid.md): The object ID that identifies the data stored by the receiver.
- [update(withValues:version:)](nsincrementalstorenode/update%28withvalues_version_%29.md): Update the values and version to reflect new data being saved to or loaded from the external store.
- [value(for:)](nsincrementalstorenode/value%28for_%29.md): Returns the value for the given property.
- [version](nsincrementalstorenode/version.md): The version of data in the receiver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.

# NSIncrementalStoreNode (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A concrete class used to represent basic nodes in a Core Data incremental store.

## Declaration

```objectivec
@interface NSIncrementalStoreNode : NSObject
```

<a id="overview"></a>

## Overview

A node represents a single record in a persistent store.

You can subclass `NSIncrementalStoreNode` to provide custom behavior.

## Topics

### Initializing a Node

- [initWithObjectID:withValues:version:](nsincrementalstorenode/init%28objectid_withvalues_version_%29.md): Returns an object initialized with the given values.

### Managing Node Data

- [objectID](nsincrementalstorenode/objectid.md): The object ID that identifies the data stored by the receiver.
- [updateWithValues:version:](nsincrementalstorenode/update%28withvalues_version_%29.md): Update the values and version to reflect new data being saved to or loaded from the external store.
- [valueForPropertyDescription:](nsincrementalstorenode/value%28for_%29.md): Returns the value for the given property.
- [version](nsincrementalstorenode/version.md): The version of data in the receiver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
