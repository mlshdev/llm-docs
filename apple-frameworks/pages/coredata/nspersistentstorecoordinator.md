> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator)

# NSPersistentStoreCoordinator (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that enables an app’s contexts and the underlying persistent stores to work together.

## Declaration

```swift
class NSPersistentStoreCoordinator
```

## Mentioned In

- [Setting up a Core Data stack manually](setting-up-a-core-data-stack-manually.md)
- [Setting up a Core Data stack](setting-up-a-core-data-stack.md)

<a id="overview"></a>

## Overview

A managed object context uses a coordinator to facilitate the persistence of its entities in the coordinator’s registered stores. A context can’t function without a coordinator because it relies on the coordinator’s access to the managed object model. The coordinator presents its registered stores as an aggregate, allowing a context to operate on the union of those stores instead of on each individually. A coordinator performs its work on a private queue and executes that work serially. You can use multiple coordinators if the work requires separate queues.

Use a coordinator to add or remove persistent stores, change the type or location on-disk of those stores, query the metadata of a specific store, defer a store’s migrations, determine whether two objects originate from the same store, and so on.

## Topics

### Creating a persistent store coordinator

- [init(managedObjectModel:)](nspersistentstorecoordinator/init%28managedobjectmodel_%29.md): Creates a persistent store coordinator with the specified managed object model.
- [Store options](store-options.md): The options keys that configure the behavior and characteristics of a persistent store.
- [Migration options](migration-options.md): The options keys that configure the migration behavior of a persistent store.
- [Store versions](store-versions.md): The metadata keys you use when comparing store versions.

### Managing configuration

- [name](nspersistentstorecoordinator/name.md): The coordinator’s name.
- [managedObjectModel](nspersistentstorecoordinator/managedobjectmodel.md): The coordinator’s managed object model.
- [persistentStores](nspersistentstorecoordinator/persistentstores.md): The coordinator’s persistent stores.

### Registering store types

- [registerStoreClass(\_:type:)](nspersistentstorecoordinator/registerstoreclass%28__type_%29.md): Registers a persistent store subclass using the specified store type.
- [registerStoreClass(\_:forStoreType:)](nspersistentstorecoordinator/registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [registeredStoreTypes](nspersistentstorecoordinator/registeredstoretypes.md): The coordinator’s registered store types.

### Adding or removing a store

- [addPersistentStore(type:configuration:at:options:)](nspersistentstorecoordinator/addpersistentstore%28type_configuration_at_options_%29.md): Adds a specific type of persistent store at the provided location.
- [addPersistentStore(ofType:configurationName:at:options:)](nspersistentstorecoordinator/addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [addPersistentStore(with:completionHandler:)](nspersistentstorecoordinator/addpersistentstore%28with_completionhandler_%29.md): Adds a persistent store using the provided description.
- [remove(\_:)](nspersistentstorecoordinator/remove%28__%29.md): Removes the specified persistent store from the coordinator.

### Modifying a store

- [destroyPersistentStore(at:type:options:)](nspersistentstorecoordinator/destroypersistentstore%28at_type_options_%29.md): Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore(\_:to:options:type:)](nspersistentstorecoordinator/migratepersistentstore%28__to_options_type_%29.md): Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:type:)](nspersistentstorecoordinator/replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_type_%29.md): Replaces one persistent store with another.
- [destroyPersistentStore(at:ofType:options:)](nspersistentstorecoordinator/destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore(\_:to:options:withType:)](nspersistentstorecoordinator/migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:ofType:)](nspersistentstorecoordinator/replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.

### Managing a store’s location

- [setURL(\_:for:)](nspersistentstorecoordinator/seturl%28__for_%29.md): Changes the location of the specified persistent store.
- [persistentStore(for:)](nspersistentstorecoordinator/persistentstore%28for_%29.md): Returns the persistent store for the specified file URL.
- [url(for:)](nspersistentstorecoordinator/url%28for_%29.md): Returns the location of the provided persistent store.

### Managing a store’s metadata

- [setMetadata(\_:type:at:options:)](nspersistentstorecoordinator/setmetadata%28__type_at_options_%29.md): Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(type:at:options:)](nspersistentstorecoordinator/metadataforpersistentstore%28type_at_options_%29.md): Returns the metadata of a specific type of persistent store at the provided location.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](nspersistentstorecoordinator/setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(ofType:at:options:)](nspersistentstorecoordinator/metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadata(for:)](nspersistentstorecoordinator/metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata(\_:for:)](nspersistentstorecoordinator/setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](nsstoreuuidkey.md): A key that provides the store’s UUID.

### Deferring a store’s migrations

- [NSPersistentStoreDeferredLightweightMigrationOptionKey](nspersistentstoredeferredlightweightmigrationoptionkey.md): The key for enabling deferred lightweight migrations.
- [finishDeferredLightweightMigrationTask()](nspersistentstorecoordinator/finishdeferredlightweightmigrationtask%28%29.md): Executes a single pending task of a deferred lightweight migration.
- [finishDeferredLightweightMigration()](nspersistentstorecoordinator/finishdeferredlightweightmigration%28%29.md): Executes all remaining tasks of a deferred lightweight migration.

### Performing tasks

- [perform(\_:)](nspersistentstorecoordinator/perform%28__%29-74udx.md): Executes the provided closure asynchronously on the coordinator’s queue and awaits the result.
- [performAndWait(\_:)](nspersistentstorecoordinator/performandwait%28__%29-15ude.md): Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [perform(\_:)](nspersistentstorecoordinator/perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performAndWait(\_:)](nspersistentstorecoordinator/performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [execute(\_:with:)](nspersistentstorecoordinator/execute%28__with_%29.md): Executes the specified request on each of the coordinator’s persistent stores.

### Maintaining a record of changes

- [NSPersistentHistoryTrackingKey](nspersistenthistorytrackingkey.md): The key you use to enable persistent history tracking.
- [currentPersistentHistoryToken(fromStores:)](nspersistentstorecoordinator/currentpersistenthistorytoken%28fromstores_%29.md): Returns a single persistent history token representing all of the specified stores.

### Integrating with Spotlight

- [NSCoreDataCoreSpotlightExporter](nscoredatacorespotlightexporter.md): The key you use to specify your Core Spotlight delegate.
- [NSCoreDataCoreSpotlightDelegate](nscoredatacorespotlightdelegate.md): A set of methods that enable integration with Core Spotlight.
- [Spotlight record keys](spotlight-record-keys.md): The keys for the values that exist in Spotlight’s external record files.
- [Showcase App Data in Spotlight](showcase-app-data-in-spotlight.md): Index app data so users can find it by using Spotlight search.

### Getting individual object identifiers

- [managedObjectID(forURIRepresentation:)](nspersistentstorecoordinator/managedobjectid%28forurirepresentation_%29.md): Returns the object identifier for the specified URI representation.

### Responding to changes of the coordinator’s registered stores

- [NSPersistentStoreCoordinatorStoresWillChange](../foundation/nsnotification/name-swift.struct/nspersistentstorecoordinatorstoreswillchange.md): A notification that posts before a coordinator changes its registered stores.
- [NSPersistentStoreCoordinatorStoresDidChange](../foundation/nsnotification/name-swift.struct/nspersistentstorecoordinatorstoresdidchange.md): A notification that the coordinator posts after its registered stores change.
- [NSPersistentStoreCoordinatorWillRemoveStore](../foundation/nsnotification/name-swift.struct/nspersistentstorecoordinatorwillremovestore.md): A notification that posts before a coordinator removes a store.
- [Notification keys](notification-keys.md): The keys you use to retrieve values from a notification’s user info dictionary.

### Deprecated

- [Deprecated Symbols](nspersistentstorecoordinator-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Methods

- [managedObjectID(for:)](nspersistentstorecoordinator/managedobjectid%28for_%29.md)

### Structures

- [NSPersistentStoreCoordinator.RemoteChangeMessage](nspersistentstorecoordinator/remotechangemessage.md): Posted when a store receives a remote change notification from another process.
- [NSPersistentStoreCoordinator.StoresDidChangeAsyncMessage](nspersistentstorecoordinator/storesdidchangeasyncmessage.md): Posted when stores are added to or removed from the persistent store coordinator on a background queue.
- [NSPersistentStoreCoordinator.StoresDidChangeMessage](nspersistentstorecoordinator/storesdidchangemessage.md): Posted when stores are added to or removed from the persistent store coordinator on the main queue.

### Type Methods

- [cachedModelForPersistentStore(at:options:)](nspersistentstorecoordinator/cachedmodelforpersistentstore%28at_options_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSLocking](../foundation/nslocking.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Store Coordination

- [NSPersistentStore](nspersistentstore.md): The abstract base class for all Core Data persistent stores.
- [NSPersistentStoreDescription](nspersistentstoredescription.md): A description object used to create and load a persistent store.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreResult](nspersistentstoreresult.md): The abstract base class for results returned from a persistent store coordinator.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSSaveChangesRequest](nssavechangesrequest.md): An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.

# NSPersistentStoreCoordinator (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that enables an app’s contexts and the underlying persistent stores to work together.

## Declaration

```objectivec
@interface NSPersistentStoreCoordinator : NSObject
```

## Mentioned In

- [Setting up a Core Data stack manually](setting-up-a-core-data-stack-manually.md)
- [Setting up a Core Data stack](setting-up-a-core-data-stack.md)

<a id="overview"></a>

## Overview

A managed object context uses a coordinator to facilitate the persistence of its entities in the coordinator’s registered stores. A context can’t function without a coordinator because it relies on the coordinator’s access to the managed object model. The coordinator presents its registered stores as an aggregate, allowing a context to operate on the union of those stores instead of on each individually. A coordinator performs its work on a private queue and executes that work serially. You can use multiple coordinators if the work requires separate queues.

Use a coordinator to add or remove persistent stores, change the type or location on-disk of those stores, query the metadata of a specific store, defer a store’s migrations, determine whether two objects originate from the same store, and so on.

## Topics

### Creating a persistent store coordinator

- [initWithManagedObjectModel:](nspersistentstorecoordinator/init%28managedobjectmodel_%29.md): Creates a persistent store coordinator with the specified managed object model.
- [Store options](store-options.md): The options keys that configure the behavior and characteristics of a persistent store.
- [Migration options](migration-options.md): The options keys that configure the migration behavior of a persistent store.
- [Store versions](store-versions.md): The metadata keys you use when comparing store versions.

### Managing configuration

- [name](nspersistentstorecoordinator/name.md): The coordinator’s name.
- [managedObjectModel](nspersistentstorecoordinator/managedobjectmodel.md): The coordinator’s managed object model.
- [persistentStores](nspersistentstorecoordinator/persistentstores.md): The coordinator’s persistent stores.

### Registering store types

- [registerStoreClass:forStoreType:](nspersistentstorecoordinator/registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [registeredStoreTypes](nspersistentstorecoordinator/registeredstoretypes.md): The coordinator’s registered store types.

### Adding or removing a store

- [addPersistentStoreWithType:configuration:URL:options:error:](nspersistentstorecoordinator/addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [addPersistentStoreWithDescription:completionHandler:](nspersistentstorecoordinator/addpersistentstore%28with_completionhandler_%29.md): Adds a persistent store using the provided description.
- [removePersistentStore:error:](nspersistentstorecoordinator/remove%28__%29.md): Removes the specified persistent store from the coordinator.

### Modifying a store

- [destroyPersistentStoreAtURL:withType:options:error:](nspersistentstorecoordinator/destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore:toURL:options:withType:error:](nspersistentstorecoordinator/migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStoreAtURL:destinationOptions:withPersistentStoreFromURL:sourceOptions:storeType:error:](nspersistentstorecoordinator/replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.

### Managing a store’s location

- [setURL:forPersistentStore:](nspersistentstorecoordinator/seturl%28__for_%29.md): Changes the location of the specified persistent store.
- [persistentStoreForURL:](nspersistentstorecoordinator/persistentstore%28for_%29.md): Returns the persistent store for the specified file URL.
- [URLForPersistentStore:](nspersistentstorecoordinator/url%28for_%29.md): Returns the location of the provided persistent store.

### Managing a store’s metadata

- [setMetadata:forPersistentStoreOfType:URL:options:error:](nspersistentstorecoordinator/setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStoreOfType:URL:options:error:](nspersistentstorecoordinator/metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore:](nspersistentstorecoordinator/metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata:forPersistentStore:](nspersistentstorecoordinator/setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](nsstoreuuidkey.md): A key that provides the store’s UUID.

### Deferring a store’s migrations

- [NSPersistentStoreDeferredLightweightMigrationOptionKey](nspersistentstoredeferredlightweightmigrationoptionkey.md): The key for enabling deferred lightweight migrations.
- [finishDeferredLightweightMigrationTask:](nspersistentstorecoordinator/finishdeferredlightweightmigrationtask%28%29.md): Executes a single pending task of a deferred lightweight migration.
- [finishDeferredLightweightMigration:](nspersistentstorecoordinator/finishdeferredlightweightmigration%28%29.md): Executes all remaining tasks of a deferred lightweight migration.

### Performing tasks

- [performBlock:](nspersistentstorecoordinator/perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performBlockAndWait:](nspersistentstorecoordinator/performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [executeRequest:withContext:error:](nspersistentstorecoordinator/execute%28__with_%29.md): Executes the specified request on each of the coordinator’s persistent stores.

### Maintaining a record of changes

- [NSPersistentHistoryTrackingKey](nspersistenthistorytrackingkey.md): The key you use to enable persistent history tracking.
- [currentPersistentHistoryTokenFromStores:](nspersistentstorecoordinator/currentpersistenthistorytoken%28fromstores_%29.md): Returns a single persistent history token representing all of the specified stores.

### Integrating with Spotlight

- [NSCoreDataCoreSpotlightExporter](nscoredatacorespotlightexporter.md): The key you use to specify your Core Spotlight delegate.
- [NSCoreDataCoreSpotlightDelegate](nscoredatacorespotlightdelegate.md): A set of methods that enable integration with Core Spotlight.
- [Spotlight record keys](spotlight-record-keys.md): The keys for the values that exist in Spotlight’s external record files.
- [Showcase App Data in Spotlight](showcase-app-data-in-spotlight.md): Index app data so users can find it by using Spotlight search.

### Getting individual object identifiers

- [managedObjectIDForURIRepresentation:](nspersistentstorecoordinator/managedobjectid%28forurirepresentation_%29.md): Returns the object identifier for the specified URI representation.

### Responding to changes of the coordinator’s registered stores

- [Notification keys](notification-keys.md): The keys you use to retrieve values from a notification’s user info dictionary.

### Deprecated

- [Deprecated Symbols](nspersistentstorecoordinator-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Methods

- [managedObjectIDFromUTF8String:length:](nspersistentstorecoordinator/managedobjectidfromutf8string_length_.md)
- [setStoresFastSyncDetailsAtURL:forPersistentStore:](nspersistentstorecoordinator/setstoresfastsyncdetailsaturl_forpersistentstore_.md): Deprecated.
- [syncWithClient:inBackground:handler:error:](nspersistentstorecoordinator/syncwithclient_inbackground_handler_error_.md): Deprecated.

### Type Methods

- [cachedModelForPersistentStoreAtURL:options:error:](nspersistentstorecoordinator/cachedmodelforpersistentstore%28at_options_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSLocking](../foundation/nslocking.md)

## See Also

### Store Coordination

- [NSPersistentStore](nspersistentstore.md): The abstract base class for all Core Data persistent stores.
- [NSPersistentStoreDescription](nspersistentstoredescription.md): A description object used to create and load a persistent store.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreResult](nspersistentstoreresult.md): The abstract base class for results returned from a persistent store coordinator.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSSaveChangesRequest](nssavechangesrequest.md): An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.
