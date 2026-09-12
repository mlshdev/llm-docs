> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore](https://developer.apple.com/documentation/coredata/nspersistentstore)

# NSPersistentStore (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The abstract base class for all Core Data persistent stores.

## Declaration

```swift
class NSPersistentStore
```

<a id="overview"></a>

## Overview

Core Data provides four store types—SQLite, Binary, XML, and In-Memory (the XML store is not available on iOS); these are described in Persistent Store Features. Core Data also provides subclasses of `NSPersistentStore` that you can use to define your own store types: [NSAtomicStore](nsatomicstore.md) and [NSIncrementalStore](nsincrementalstore.md). The Binary and XML stores are examples of atomic stores that inherit functionality from `NSAtomicStore`.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You should not subclass `NSPersistentStore` directly. Core Data only supports subclassing of [NSAtomicStore](nsatomicstore.md) and [NSIncrementalStore](nsincrementalstore.md).

The designated initializer is [init(persistentStoreCoordinator:configurationName:at:options:)](nspersistentstore/init%28persistentstorecoordinator_configurationname_at_options_%29.md). When you implement the initializer, you must ensure you load metadata during initialization and set it using [metadata](nspersistentstore/metadata.md).

You must override these methods:

- [type](nspersistentstore/type.md)
- [metadata](nspersistentstore/metadata.md)
- [metadataForPersistentStore(with:)](nspersistentstore/metadataforpersistentstore%28with_%29.md)
- [setMetadata(\_:forPersistentStoreAt:)](nspersistentstore/setmetadata%28__forpersistentstoreat_%29.md)

## Topics

### Creating a Persistent Store

- [init(persistentStoreCoordinator:configurationName:at:options:)](nspersistentstore/init%28persistentstorecoordinator_configurationname_at_options_%29.md): Returns a store initialized with the given arguments.

### Getting Store Configuration

- [configurationName](nspersistentstore/configurationname.md): The name of the managed object model configuration that creates the persistent store.
- [options](nspersistentstore/options.md): The options that Core Data uses to create the store.
- [persistentStoreCoordinator](nspersistentstore/persistentstorecoordinator.md): The persistent store coordinator that loads the persistent store.
- [type](nspersistentstore/type.md): The type string of the persistent store.
- [NSPersistentStore.StoreType](nspersistentstore/storetype.md): The types of persistent stores that Core Data supports.
- [Persistent Store Types](persistent-store-types.md): Persist data through the available store types.

### Managing Store Attributes

- [identifier](nspersistentstore/identifier.md): The unique identifier for the persistent store.
- [isReadOnly](nspersistentstore/isreadonly.md): A Boolean value that indicates whether the persistent store is read-only.
- [url](nspersistentstore/url.md): The URL for the persistent store.

### Managing Store Metadata

- [metadataForPersistentStore(with:)](nspersistentstore/metadataforpersistentstore%28with_%29.md): Returns the metadata from the persistent store at the given URL.
- [setMetadata(\_:forPersistentStoreAt:)](nspersistentstore/setmetadata%28__forpersistentstoreat_%29.md): Sets the metadata for the store at a given URL.
- [loadMetadata()](nspersistentstore/loadmetadata%28%29.md): Instructs the persistent store to load its metadata.
- [metadata](nspersistentstore/metadata.md): The metadata for the persistent store.

### Responding to the Store Life Cycle

- [didAdd(to:)](nspersistentstore/didadd%28to_%29.md): Invoked after the persistent store has been added to the persistent store coordinator.
- [willRemove(from:)](nspersistentstore/willremove%28from_%29.md): Invoked before the persistent store is removed from the persistent store coordinator.

### Integrating with Spotlight

- [coreSpotlightExporter](nspersistentstore/corespotlightexporter.md): The spotlight exporter associated with this persistent store.

### Providing a Migration Manager

- [migrationManagerClass()](nspersistentstore/migrationmanagerclass%28%29.md): Returns the migration manager class for this store class.

### Initializers

- [init(persistentStoreCoordinator:configurationName:URL:options:)](nspersistentstore/init%28persistentstorecoordinator_configurationname_url_options_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSAtomicStore](nsatomicstore.md)
- [NSIncrementalStore](nsincrementalstore.md)

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
- [NSPersistentStoreDescription](nspersistentstoredescription.md): A description object used to create and load a persistent store.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreResult](nspersistentstoreresult.md): The abstract base class for results returned from a persistent store coordinator.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSSaveChangesRequest](nssavechangesrequest.md): An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.

# NSPersistentStore (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The abstract base class for all Core Data persistent stores.

## Declaration

```objectivec
@interface NSPersistentStore : NSObject
```

<a id="overview"></a>

## Overview

Core Data provides four store types—SQLite, Binary, XML, and In-Memory (the XML store is not available on iOS); these are described in Persistent Store Features. Core Data also provides subclasses of `NSPersistentStore` that you can use to define your own store types: [NSAtomicStore](nsatomicstore.md) and [NSIncrementalStore](nsincrementalstore.md). The Binary and XML stores are examples of atomic stores that inherit functionality from `NSAtomicStore`.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You should not subclass `NSPersistentStore` directly. Core Data only supports subclassing of [NSAtomicStore](nsatomicstore.md) and [NSIncrementalStore](nsincrementalstore.md).

The designated initializer is [initWithPersistentStoreCoordinator:configurationName:URL:options:](nspersistentstore/init%28persistentstorecoordinator_configurationname_at_options_%29.md). When you implement the initializer, you must ensure you load metadata during initialization and set it using [metadata](nspersistentstore/metadata.md).

You must override these methods:

- [type](nspersistentstore/type.md)
- [metadata](nspersistentstore/metadata.md)
- [metadataForPersistentStoreWithURL:error:](nspersistentstore/metadataforpersistentstore%28with_%29.md)
- [setMetadata:forPersistentStoreWithURL:error:](nspersistentstore/setmetadata%28__forpersistentstoreat_%29.md)

## Topics

### Creating a Persistent Store

- [initWithPersistentStoreCoordinator:configurationName:URL:options:](nspersistentstore/init%28persistentstorecoordinator_configurationname_at_options_%29.md): Returns a store initialized with the given arguments.

### Getting Store Configuration

- [configurationName](nspersistentstore/configurationname.md): The name of the managed object model configuration that creates the persistent store.
- [options](nspersistentstore/options.md): The options that Core Data uses to create the store.
- [persistentStoreCoordinator](nspersistentstore/persistentstorecoordinator.md): The persistent store coordinator that loads the persistent store.
- [type](nspersistentstore/type.md): The type string of the persistent store.
- [Persistent Store Types](persistent-store-types.md): Persist data through the available store types.

### Managing Store Attributes

- [identifier](nspersistentstore/identifier.md): The unique identifier for the persistent store.
- [readOnly](nspersistentstore/isreadonly.md): A Boolean value that indicates whether the persistent store is read-only.
- [URL](nspersistentstore/url.md): The URL for the persistent store.

### Managing Store Metadata

- [metadataForPersistentStoreWithURL:error:](nspersistentstore/metadataforpersistentstore%28with_%29.md): Returns the metadata from the persistent store at the given URL.
- [setMetadata:forPersistentStoreWithURL:error:](nspersistentstore/setmetadata%28__forpersistentstoreat_%29.md): Sets the metadata for the store at a given URL.
- [loadMetadata:](nspersistentstore/loadmetadata%28%29.md): Instructs the persistent store to load its metadata.
- [metadata](nspersistentstore/metadata.md): The metadata for the persistent store.

### Responding to the Store Life Cycle

- [didAddToPersistentStoreCoordinator:](nspersistentstore/didadd%28to_%29.md): Invoked after the persistent store has been added to the persistent store coordinator.
- [willRemoveFromPersistentStoreCoordinator:](nspersistentstore/willremove%28from_%29.md): Invoked before the persistent store is removed from the persistent store coordinator.

### Integrating with Spotlight

- [coreSpotlightExporter](nspersistentstore/corespotlightexporter.md): The spotlight exporter associated with this persistent store.

### Providing a Migration Manager

- [migrationManagerClass](nspersistentstore/migrationmanagerclass%28%29.md): Returns the migration manager class for this store class.

### Notifications

- [NSPersistentStoreRemoteChangeNotification](nspersistentstoreremotechangenotification.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSAtomicStore](nsatomicstore.md)
- [NSIncrementalStore](nsincrementalstore.md)

## See Also

### Store Coordination

- [NSPersistentStoreCoordinator](nspersistentstorecoordinator.md): An object that enables an app’s contexts and the underlying persistent stores to work together.
- [NSPersistentStoreDescription](nspersistentstoredescription.md): A description object used to create and load a persistent store.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreResult](nspersistentstoreresult.md): The abstract base class for results returned from a persistent store coordinator.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSSaveChangesRequest](nssavechangesrequest.md): An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.
