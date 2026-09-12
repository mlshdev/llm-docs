> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstorecachenode](https://developer.apple.com/documentation/coredata/nsatomicstorecachenode)

# NSAtomicStoreCacheNode (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A concrete class that you use to represent basic nodes in a Core Data atomic store.

## Declaration

```swift
class NSAtomicStoreCacheNode
```

<a id="overview"></a>

## Overview

A node represents a single record in a persistent store.

You can subclass `NSAtomicStoreCacheNode` to provide custom behavior.

## Topics

### Initializing a Cache Node

- [init(objectID:)](nsatomicstorecachenode/init%28objectid_%29.md): Returns a cache node for the given managed object ID.

### Managing Node Data

- [objectID](nsatomicstorecachenode/objectid.md): The managed object ID of the node.
- [propertyCache](nsatomicstorecachenode/propertycache.md): The property cache dictionary of the node.
- [value(forKey:)](nsatomicstorecachenode/value%28forkey_%29.md): Returns the value for a given key.
- [setValue(\_:forKey:)](nsatomicstorecachenode/setvalue%28__forkey_%29.md): Sets the value for the given key.

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
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.

# NSAtomicStoreCacheNode (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A concrete class that you use to represent basic nodes in a Core Data atomic store.

## Declaration

```objectivec
@interface NSAtomicStoreCacheNode : NSObject
```

<a id="overview"></a>

## Overview

A node represents a single record in a persistent store.

You can subclass `NSAtomicStoreCacheNode` to provide custom behavior.

## Topics

### Initializing a Cache Node

- [initWithObjectID:](nsatomicstorecachenode/init%28objectid_%29.md): Returns a cache node for the given managed object ID.

### Managing Node Data

- [objectID](nsatomicstorecachenode/objectid.md): The managed object ID of the node.
- [propertyCache](nsatomicstorecachenode/propertycache.md): The property cache dictionary of the node.
- [valueForKey:](nsatomicstorecachenode/value%28forkey_%29.md): Returns the value for a given key.
- [setValue:forKey:](nsatomicstorecachenode/setvalue%28__forkey_%29.md): Sets the value for the given key.

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
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.
