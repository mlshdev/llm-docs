> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertrequest/managedobjecthandler](https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/managedobjecthandler)

# managedObjectHandler (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A closure that provides a managed object for your app to insert data into.

## Declaration

```swift
var managedObjectHandler: ((NSManagedObject) -> Bool)? { get set }
```

## See Also

### Configuring a Request

- [dictionaryHandler](dictionaryhandler.md): A closure that provides a dictionary for your app to insert data into.
- [entity](entity.md): The managed entity to insert data into.
- [entityName](entityname.md): The name of the managed entity to insert data into.
- [objectsToInsert](objectstoinsert.md): An array of dictionaries that represents the objects to insert with the keys as attribute names and their assigned values.
- [resultType](resulttype.md): The type of result that Core Data returns from this request.

# managedObjectHandler (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A closure that provides a managed object for your app to insert data into.

## Declaration

```objectivec
@property (copy, nullable) BOOL (^managedObjectHandler)(NSManagedObject *obj);
```

## See Also

### Configuring a Request

- [dictionaryHandler](dictionaryhandler.md): A closure that provides a dictionary for your app to insert data into.
- [entity](entity.md): The managed entity to insert data into.
- [entityName](entityname.md): The name of the managed entity to insert data into.
- [objectsToInsert](objectstoinsert.md): An array of dictionaries that represents the objects to insert with the keys as attribute names and their assigned values.
- [resultType](resulttype.md): The type of result that Core Data returns from this request.
