> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertrequest/init(entity:managedobjecthandler:)](https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/init(entity:managedobjecthandler:))

# init(entity:managedObjectHandler:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.

## Declaration

```swift
convenience init(entity: NSEntityDescription, managedObjectHandler handler: @escaping (NSManagedObject) -> Bool)
```

## Parameters

- `entity`: A managed entity to insert data into.
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
- [init(entityName:dictionaryHandler:)](init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [init(entityName:managedObjectHandler:)](init%28entityname_managedobjecthandler_%29-7dr6p.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.
- [init(entity:objects:)](init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [init(entityName:objects:)](init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [init()](init%28%29.md): Deprecated. Creates a Core Data batch-insertion request.

# initWithEntity:managedObjectHandler: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.

## Declaration

```objectivec
- (instancetype) initWithEntity:(NSEntityDescription *) entity managedObjectHandler:(BOOL (^)(NSManagedObject *obj)) handler;
```

## Parameters

- `entity`: A managed entity to insert data into.
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
- [batchInsertRequestWithEntityName:dictionaryHandler:](init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [batchInsertRequestWithEntityName:managedObjectHandler:](init%28entityname_managedobjecthandler_%29-7dr6p.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.
- [initWithEntity:objects:](init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [initWithEntityName:objects:](init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [batchInsertRequestWithEntityName:objects:](batchinsertrequestwithentityname_objects_.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [init](init%28%29.md): Deprecated. Creates a Core Data batch-insertion request.
