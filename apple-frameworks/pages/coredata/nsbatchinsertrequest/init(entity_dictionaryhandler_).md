> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertrequest/init(entity:dictionaryhandler:)](https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/init(entity:dictionaryhandler:))

# init(entity:dictionaryHandler:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a batch-insertion request for a managed entity, and specifies a closure that provides data dictionaries for insertion.

## Declaration

```swift
convenience init(entity: NSEntityDescription, dictionaryHandler handler: @escaping (NSMutableDictionary) -> Bool)
```

## Parameters

- `entity`: A managed entity to insert data into.
- `handler`: A closure that provides a dictionary that represents an object to insert. The dictionary contains an attribute name key and a value.

<a id="return-value"></a>

## Return Value

A batch-insertion request.

<a id="Discussion"></a>

## Discussion

Core Data repeatedly calls the provided closure until it returns `true`, then finishes the request and saves the data.

## See Also

### Creating a Request

- [init(entity:managedObjectHandler:)](init%28entity_managedobjecthandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.
- [init(entityName:dictionaryHandler:)](init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [init(entityName:managedObjectHandler:)](init%28entityname_managedobjecthandler_%29-7dr6p.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.
- [init(entity:objects:)](init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [init(entityName:objects:)](init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [init()](init%28%29.md): Deprecated. Creates a Core Data batch-insertion request.

# initWithEntity:dictionaryHandler: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a batch-insertion request for a managed entity, and specifies a closure that provides data dictionaries for insertion.

## Declaration

```objectivec
- (instancetype) initWithEntity:(NSEntityDescription *) entity dictionaryHandler:(BOOL (^)(NSMutableDictionary<NSString *,id> *obj)) handler;
```

## Parameters

- `entity`: A managed entity to insert data into.
- `handler`: A closure that provides a dictionary that represents an object to insert. The dictionary contains an attribute name key and a value.

<a id="return-value"></a>

## Return Value

A batch-insertion request.

<a id="Discussion"></a>

## Discussion

Core Data repeatedly calls the provided closure until it returns `true`, then finishes the request and saves the data.

## See Also

### Creating a Request

- [initWithEntity:managedObjectHandler:](init%28entity_managedobjecthandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.
- [batchInsertRequestWithEntityName:dictionaryHandler:](init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [batchInsertRequestWithEntityName:managedObjectHandler:](init%28entityname_managedobjecthandler_%29-7dr6p.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.
- [initWithEntity:objects:](init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [initWithEntityName:objects:](init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [batchInsertRequestWithEntityName:objects:](batchinsertrequestwithentityname_objects_.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [init](init%28%29.md): Deprecated. Creates a Core Data batch-insertion request.
