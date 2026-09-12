> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertrequest/init(entityname:managedobjecthandler:)-7dr6p](https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/init(entityname:managedobjecthandler:)-7dr6p)

# init(entityName:managedObjectHandler:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.

## Declaration

```swift
convenience init(entityName: String, managedObjectHandler handler: @escaping (NSManagedObject) -> Bool)
```

## Parameters

- `entityName`: The name of the managed entity that defines the object to create.
- `handler`: A closure that inserts data into the managed entity.

<a id="return-value"></a>

## Return Value

A batch-insertion request.

<a id="Discussion"></a>

## Discussion

Core Data repeatedly calls the provided closure until it returns `true`, then finishes the request and saves the data.

## See Also

### Creating a Request

- [init(entity:dictionaryHandler:)](init%28entity_dictionaryhandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that provides data dictionaries for insertion.
- [init(entity:managedObjectHandler:)](init%28entity_managedobjecthandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.
- [init(entityName:dictionaryHandler:)](init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [init(entity:objects:)](init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [init(entityName:objects:)](init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [init()](init%28%29.md): Deprecated. Creates a Core Data batch-insertion request.

# batchInsertRequestWithEntityName:managedObjectHandler: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.

## Declaration

```objectivec
+ (instancetype) batchInsertRequestWithEntityName:(NSString *) entityName managedObjectHandler:(BOOL (^)(NSManagedObject *obj)) handler;
```

## Parameters

- `entityName`: The name of the managed entity that defines the object to create.
- `handler`: A closure that inserts data into the managed entity.

<a id="return-value"></a>

## Return Value

A batch-insertion request.

<a id="Discussion"></a>

## Discussion

Core Data repeatedly calls the provided closure until it returns `true`, then finishes the request and saves the data.

## See Also

### Creating a Request

- [initWithEntity:dictionaryHandler:](init%28entity_dictionaryhandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that provides data dictionaries for insertion.
- [initWithEntity:managedObjectHandler:](init%28entity_managedobjecthandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.
- [batchInsertRequestWithEntityName:dictionaryHandler:](init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [initWithEntity:objects:](init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [initWithEntityName:objects:](init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [batchInsertRequestWithEntityName:objects:](batchinsertrequestwithentityname_objects_.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [init](init%28%29.md): Deprecated. Creates a Core Data batch-insertion request.
