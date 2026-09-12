> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertrequest/batchinsertrequestwithentityname:objects:](https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/batchinsertrequestwithentityname:objects:)

# batchInsertRequestWithEntityName:objects:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.

## Declaration

```objectivec
+ (instancetype) batchInsertRequestWithEntityName:(NSString *) entityName objects:(NSArray<NSDictionary<NSString *,id> *> *) dictionaries;
```

## Parameters

- `entityName`: The name of a managed entity to insert data into.
- `dictionaries`: An array of dictionaries that represents the objects to insert. Each dictionary contains an attribute name key and a value.

<a id="return-value"></a>

## Return Value

A batch-insertion request.

## See Also

### Creating a Request

- [initWithEntity:dictionaryHandler:](init%28entity_dictionaryhandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that provides data dictionaries for insertion.
- [initWithEntity:managedObjectHandler:](init%28entity_managedobjecthandler_%29.md): Creates a batch-insertion request for a managed entity, and specifies a closure that inserts data into the entity.
- [batchInsertRequestWithEntityName:dictionaryHandler:](init%28entityname_dictionaryhandler_%29-5l4ps.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that provides data dictionaries for insertion.
- [batchInsertRequestWithEntityName:managedObjectHandler:](init%28entityname_managedobjecthandler_%29-7dr6p.md): Creates a batch-insertion request for a named managed entity, and specifies a closure that inserts data into the entity.
- [initWithEntity:objects:](init%28entity_objects_%29.md): Creates a batch-insertion request for a managed entity, and provides an array of data dictionaries for insertion.
- [initWithEntityName:objects:](init%28entityname_objects_%29.md): Creates a batch-insertion request for a named managed entity, and provides an array of data dictionaries for insertion.
- [init](init%28%29.md): Deprecated. Creates a Core Data batch-insertion request.
