> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertrequest/init()](https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/init())

# init() (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.15+ (deprecated in 11.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

Creates a Core Data batch-insertion request.

## Declaration

```swift
convenience init()
```

## See Also

### Creating a Request

- [init(entity:dictionaryHandler:)](init%28entity_dictionaryhandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that provides data dictionaries for insertion.
- [init(entity:managedObjectHandler:)](init%28entity_managedobjecthandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.
- [init(entityName:dictionaryHandler:)](init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [init(entityName:managedObjectHandler:)](init%28entityname_managedobjecthandler_%29-7dr6p.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.
- [init(entity:objects:)](init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [init(entityName:objects:)](init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.

# init (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.15+ (deprecated in 11.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

Creates a Core Data batch-insertion request.

## Declaration

```objectivec
- (instancetype) init;
```

## See Also

### Creating a Request

- [initWithEntity:dictionaryHandler:](init%28entity_dictionaryhandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that provides data dictionaries for insertion.
- [initWithEntity:managedObjectHandler:](init%28entity_managedobjecthandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.
- [batchInsertRequestWithEntityName:dictionaryHandler:](init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [batchInsertRequestWithEntityName:managedObjectHandler:](init%28entityname_managedobjecthandler_%29-7dr6p.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.
- [initWithEntity:objects:](init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [initWithEntityName:objects:](init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [batchInsertRequestWithEntityName:objects:](batchinsertrequestwithentityname_objects_.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
