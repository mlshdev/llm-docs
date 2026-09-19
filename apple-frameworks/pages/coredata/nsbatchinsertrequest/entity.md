> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/entity

# entity (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The managed entity to insert data into.

## Declaration

```swift
var entity: NSEntityDescription? { get }
```

## See Also

### Configuring a Request

- [dictionaryHandler](dictionaryhandler.md): A closure that provides a dictionary for your app to insert data into.
- [entityName](entityname.md): The name of the managed entity to insert data into.
- [managedObjectHandler](managedobjecthandler.md): A closure that provides a managed object for your app to insert data into.
- [objectsToInsert](objectstoinsert.md): An array of dictionaries that represents the objects to insert with the keys as attribute names and their assigned values.
- [resultType](resulttype.md): The type of result that Core Data returns from this request.

# entity (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The managed entity to insert data into.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSEntityDescription * entity;
```

## See Also

### Configuring a Request

- [dictionaryHandler](dictionaryhandler.md): A closure that provides a dictionary for your app to insert data into.
- [entityName](entityname.md): The name of the managed entity to insert data into.
- [managedObjectHandler](managedobjecthandler.md): A closure that provides a managed object for your app to insert data into.
- [objectsToInsert](objectstoinsert.md): An array of dictionaries that represents the objects to insert with the keys as attribute names and their assigned values.
- [resultType](resulttype.md): The type of result that Core Data returns from this request.
