> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertrequest/objectstoinsert](https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/objectstoinsert)

# objectsToInsert (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of dictionaries that represents the objects to insert with the keys as attribute names and their assigned values.

## Declaration

```swift
var objectsToInsert: [[String : Any]]? { get set }
```

## See Also

### Configuring a Request

- [dictionaryHandler](dictionaryhandler.md): A closure that provides a dictionary for your app to insert data into.
- [entity](entity.md): The managed entity to insert data into.
- [entityName](entityname.md): The name of the managed entity to insert data into.
- [managedObjectHandler](managedobjecthandler.md): A closure that provides a managed object for your app to insert data into.
- [resultType](resulttype.md): The type of result that Core Data returns from this request.

# objectsToInsert (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of dictionaries that represents the objects to insert with the keys as attribute names and their assigned values.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSDictionary<NSString *,id> *> * objectsToInsert;
```

## See Also

### Configuring a Request

- [dictionaryHandler](dictionaryhandler.md): A closure that provides a dictionary for your app to insert data into.
- [entity](entity.md): The managed entity to insert data into.
- [entityName](entityname.md): The name of the managed entity to insert data into.
- [managedObjectHandler](managedobjecthandler.md): A closure that provides a managed object for your app to insert data into.
- [resultType](resulttype.md): The type of result that Core Data returns from this request.
