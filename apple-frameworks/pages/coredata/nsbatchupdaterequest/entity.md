> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchupdaterequest/entity](https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/entity)

# entity (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed entity to update data for.

## Declaration

```swift
var entity: NSEntityDescription { get }
```

## See Also

### Configuring a Request

- [entityName](entityname.md): The name of the managed entity to update data for.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether to update subentities.
- [predicate](predicate.md): A predicate that identifies the objects to update.
- [propertiesToUpdate](propertiestoupdate.md): A dictionary of property description pairs that describe the updates.
- [resultType](resulttype.md): The type of result that Core Data returns from the request.

# entity (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The managed entity to update data for.

## Declaration

```objectivec
@property (strong, readonly) NSEntityDescription * entity;
```

## See Also

### Configuring a Request

- [entityName](entityname.md): The name of the managed entity to update data for.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether to update subentities.
- [predicate](predicate.md): A predicate that identifies the objects to update.
- [propertiesToUpdate](propertiestoupdate.md): A dictionary of property description pairs that describe the updates.
- [resultType](resulttype.md): The type of result that Core Data returns from the request.
