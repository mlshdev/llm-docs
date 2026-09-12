> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription](https://developer.apple.com/documentation/coredata/nspersistentstoredescription)

# NSPersistentStoreDescription (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A description object used to create and load a persistent store.

## Declaration

```swift
class NSPersistentStoreDescription
```

## Mentioned In

- [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md)

## Topics

### Creating a Persistent Store Description

- [init(url:)](nspersistentstoredescription/init%28url_%29-ko0l.md): Initializes the receiver with a URL for the store.

### Configuring a Persistent Store Description

- [url](nspersistentstoredescription/url.md): The URL that the store will use for its location.
- [configuration](nspersistentstoredescription/configuration.md): The name of the configuration used by this store.
- [timeout](nspersistentstoredescription/timeout.md): The connection timeout for the associated store.
- [type](nspersistentstoredescription/type.md): The type of store this description represents.
- [isReadOnly](nspersistentstoredescription/isreadonly.md): A flag that indicates whether this store will be read-only.
- [shouldAddStoreAsynchronously](nspersistentstoredescription/shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldInferMappingModelAutomatically](nspersistentstoredescription/shouldinfermappingmodelautomatically.md): A flag indicating whether a mapping model should be created automatically.
- [shouldMigrateStoreAutomatically](nspersistentstoredescription/shouldmigratestoreautomatically.md): A flag indicating whether the associated persistent store should be migrated automatically.
- [setOption(\_:forKey:)](nspersistentstoredescription/setoption%28__forkey_%29.md): Sets an option on the store.
- [setValue(\_:forPragmaNamed:)](nspersistentstoredescription/setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

### Accessing the Configuration Options

- [options](nspersistentstoredescription/options.md): A dictionary representation of the options set on the associated persistent store.
- [sqlitePragmas](nspersistentstoredescription/sqlitepragmas.md): The SQLite pragmas set for the associated persistent store. (read-only)

### Syncing to CloudKit

- [cloudKitContainerOptions](nspersistentstoredescription/cloudkitcontaineroptions.md): Options that customize how this store description aligns with a CloudKit database.

### Initializers

- [init(URL:)](nspersistentstoredescription/init%28url_%29-3snc6.md)
- [init(URL:)](nspersistentstoredescription/init%28url_%29-58ysp.md)

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

### Store Coordination

- [NSPersistentStoreCoordinator](nspersistentstorecoordinator.md): An object that enables an app’s contexts and the underlying persistent stores to work together.
- [NSPersistentStore](nspersistentstore.md): The abstract base class for all Core Data persistent stores.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreResult](nspersistentstoreresult.md): The abstract base class for results returned from a persistent store coordinator.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSSaveChangesRequest](nssavechangesrequest.md): An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.

# NSPersistentStoreDescription (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A description object used to create and load a persistent store.

## Declaration

```objectivec
@interface NSPersistentStoreDescription : NSObject
```

## Mentioned In

- [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md)

## Topics

### Creating a Persistent Store Description

- [initWithURL:](nspersistentstoredescription/init%28url_%29-ko0l.md): Initializes the receiver with a URL for the store.
- [persistentStoreDescriptionWithURL:](nspersistentstoredescription/persistentstoredescriptionwithurl_.md): Initializes and returns a persistent store description with the given URL.

### Configuring a Persistent Store Description

- [URL](nspersistentstoredescription/url.md): The URL that the store will use for its location.
- [configuration](nspersistentstoredescription/configuration.md): The name of the configuration used by this store.
- [timeout](nspersistentstoredescription/timeout.md): The connection timeout for the associated store.
- [type](nspersistentstoredescription/type.md): The type of store this description represents.
- [readOnly](nspersistentstoredescription/isreadonly.md): A flag that indicates whether this store will be read-only.
- [shouldAddStoreAsynchronously](nspersistentstoredescription/shouldaddstoreasynchronously.md): A flag that determines whether the store is added asynchronously.
- [shouldInferMappingModelAutomatically](nspersistentstoredescription/shouldinfermappingmodelautomatically.md): A flag indicating whether a mapping model should be created automatically.
- [shouldMigrateStoreAutomatically](nspersistentstoredescription/shouldmigratestoreautomatically.md): A flag indicating whether the associated persistent store should be migrated automatically.
- [setOption:forKey:](nspersistentstoredescription/setoption%28__forkey_%29.md): Sets an option on the store.
- [setValue:forPragmaNamed:](nspersistentstoredescription/setvalue%28__forpragmanamed_%29.md): Allows you to set pragmas for the SQLite store.

### Accessing the Configuration Options

- [options](nspersistentstoredescription/options.md): A dictionary representation of the options set on the associated persistent store.
- [sqlitePragmas](nspersistentstoredescription/sqlitepragmas.md): The SQLite pragmas set for the associated persistent store. (read-only)

### Syncing to CloudKit

- [cloudKitContainerOptions](nspersistentstoredescription/cloudkitcontaineroptions.md): Options that customize how this store description aligns with a CloudKit database.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Store Coordination

- [NSPersistentStoreCoordinator](nspersistentstorecoordinator.md): An object that enables an app’s contexts and the underlying persistent stores to work together.
- [NSPersistentStore](nspersistentstore.md): The abstract base class for all Core Data persistent stores.
- [NSPersistentStoreRequest](nspersistentstorerequest.md): Criteria used to retrieve data from or save data to a persistent store.
- [NSPersistentStoreResult](nspersistentstoreresult.md): The abstract base class for results returned from a persistent store coordinator.
- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md): A concrete class used to represent the results of an asynchronous request.
- [NSSaveChangesRequest](nssavechangesrequest.md): An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
- [NSAtomicStore](nsatomicstore.md): An abstract superclass that you subclass to create a Core Data atomic store.
- [NSAtomicStoreCacheNode](nsatomicstorecachenode.md): A concrete class that you use to represent basic nodes in a Core Data atomic store.
- [NSIncrementalStore](nsincrementalstore.md): An abstract superclass defining the API through which Core Data communicates with a store.
- [NSIncrementalStoreNode](nsincrementalstorenode.md): A concrete class used to represent basic nodes in a Core Data incremental store.
