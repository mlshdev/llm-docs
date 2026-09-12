> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertrequest/resulttype](https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/resulttype)

# resultType (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of result that Core Data returns from this request.

## Declaration

```swift
var resultType: NSBatchInsertRequestResultType { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [NSBatchInsertRequestResultType.statusOnly](../nsbatchinsertrequestresulttype/statusonly.md).

## See Also

### Configuring a Request

- [dictionaryHandler](dictionaryhandler.md): A closure that provides a dictionary for your app to insert data into.
- [entity](entity.md): The managed entity to insert data into.
- [entityName](entityname.md): The name of the managed entity to insert data into.
- [managedObjectHandler](managedobjecthandler.md): A closure that provides a managed object for your app to insert data into.
- [objectsToInsert](objectstoinsert.md): An array of dictionaries that represents the objects to insert with the keys as attribute names and their assigned values.

# resultType (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of result that Core Data returns from this request.

## Declaration

```objectivec
@property NSBatchInsertRequestResultType resultType;
```

<a id="Discussion"></a>

## Discussion

The default is [NSBatchInsertRequestResultTypeStatusOnly](../nsbatchinsertrequestresulttype/statusonly.md).

## See Also

### Configuring a Request

- [dictionaryHandler](dictionaryhandler.md): A closure that provides a dictionary for your app to insert data into.
- [entity](entity.md): The managed entity to insert data into.
- [entityName](entityname.md): The name of the managed entity to insert data into.
- [managedObjectHandler](managedobjecthandler.md): A closure that provides a managed object for your app to insert data into.
- [objectsToInsert](objectstoinsert.md): An array of dictionaries that represents the objects to insert with the keys as attribute names and their assigned values.
