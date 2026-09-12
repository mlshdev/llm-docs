> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertrequest](https://developer.apple.com/documentation/coredata/nsbatchinsertrequest)

# NSBatchInsertRequest (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A request to insert a batch of data in a persistent store.

## Declaration

```swift
class NSBatchInsertRequest
```

## Topics

### Creating a Request

- [init(entity:dictionaryHandler:)](nsbatchinsertrequest/init%28entity_dictionaryhandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that provides data dictionaries for insertion.
- [init(entity:managedObjectHandler:)](nsbatchinsertrequest/init%28entity_managedobjecthandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.
- [init(entityName:dictionaryHandler:)](nsbatchinsertrequest/init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [init(entityName:managedObjectHandler:)](nsbatchinsertrequest/init%28entityname_managedobjecthandler_%29-7dr6p.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.
- [init(entity:objects:)](nsbatchinsertrequest/init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [init(entityName:objects:)](nsbatchinsertrequest/init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [init()](nsbatchinsertrequest/init%28%29.md): Deprecated. Creates a Core Data batch-insertion request.

### Configuring a Request

- [dictionaryHandler](nsbatchinsertrequest/dictionaryhandler.md): A closure that provides a dictionary for your app to insert data into.
- [entity](nsbatchinsertrequest/entity.md): The managed entity to insert data into.
- [entityName](nsbatchinsertrequest/entityname.md): The name of the managed entity to insert data into.
- [managedObjectHandler](nsbatchinsertrequest/managedobjecthandler.md): A closure that provides a managed object for your app to insert data into.
- [objectsToInsert](nsbatchinsertrequest/objectstoinsert.md): An array of dictionaries that represents the objects to insert with the keys as attribute names and their assigned values.
- [resultType](nsbatchinsertrequest/resulttype.md): The type of result that Core Data returns from this request.

### Initializers

- [init(entityName:dictionaryHandler:)](nsbatchinsertrequest/init%28entityname_dictionaryhandler_%29-74gtn.md)
- [init(entityName:managedObjectHandler:)](nsbatchinsertrequest/init%28entityname_managedobjecthandler_%29-2dgkw.md)

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

### Data Inserts

- [NSBatchInsertResult](nsbatchinsertresult.md): The result that Core Data returns when executing a batch-insertion request.

# NSBatchInsertRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A request to insert a batch of data in a persistent store.

## Declaration

```objectivec
@interface NSBatchInsertRequest : NSPersistentStoreRequest
```

## Topics

### Creating a Request

- [initWithEntity:dictionaryHandler:](nsbatchinsertrequest/init%28entity_dictionaryhandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that provides data dictionaries for insertion.
- [initWithEntity:managedObjectHandler:](nsbatchinsertrequest/init%28entity_managedobjecthandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.
- [batchInsertRequestWithEntityName:dictionaryHandler:](nsbatchinsertrequest/init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [batchInsertRequestWithEntityName:managedObjectHandler:](nsbatchinsertrequest/init%28entityname_managedobjecthandler_%29-7dr6p.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.
- [initWithEntity:objects:](nsbatchinsertrequest/init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [initWithEntityName:objects:](nsbatchinsertrequest/init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [batchInsertRequestWithEntityName:objects:](nsbatchinsertrequest/batchinsertrequestwithentityname_objects_.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [init](nsbatchinsertrequest/init%28%29.md): Deprecated. Creates a Core Data batch-insertion request.

### Configuring a Request

- [dictionaryHandler](nsbatchinsertrequest/dictionaryhandler.md): A closure that provides a dictionary for your app to insert data into.
- [entity](nsbatchinsertrequest/entity.md): The managed entity to insert data into.
- [entityName](nsbatchinsertrequest/entityname.md): The name of the managed entity to insert data into.
- [managedObjectHandler](nsbatchinsertrequest/managedobjecthandler.md): A closure that provides a managed object for your app to insert data into.
- [objectsToInsert](nsbatchinsertrequest/objectstoinsert.md): An array of dictionaries that represents the objects to insert with the keys as attribute names and their assigned values.
- [resultType](nsbatchinsertrequest/resulttype.md): The type of result that Core Data returns from this request.

### Instance Methods

- [initWithEntityName:dictionaryHandler:](nsbatchinsertrequest/init%28entityname_dictionaryhandler_%29-74gtn.md)
- [initWithEntityName:managedObjectHandler:](nsbatchinsertrequest/init%28entityname_managedobjecthandler_%29-2dgkw.md)

## Relationships

### Inherits From

- [NSPersistentStoreRequest](nspersistentstorerequest.md)

## See Also

### Data Inserts

- [NSBatchInsertResult](nsbatchinsertresult.md): The result that Core Data returns when executing a batch-insertion request.
