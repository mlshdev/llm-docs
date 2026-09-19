> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/predicate

# predicate (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A predicate that identifies the objects to update.

## Declaration

```swift
var predicate: NSPredicate? { get set }
```

## See Also

### Configuring a Request

- [entity](entity.md): The managed entity to update data for.
- [entityName](entityname.md): The name of the managed entity to update data for.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether to update subentities.
- [propertiesToUpdate](propertiestoupdate.md): A dictionary of property description pairs that describe the updates.
- [resultType](resulttype.md): The type of result that Core Data returns from the request.

# predicate (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A predicate that identifies the objects to update.

## Declaration

```objectivec
@property (strong, nullable) NSPredicate * predicate;
```

## See Also

### Configuring a Request

- [entity](entity.md): The managed entity to update data for.
- [entityName](entityname.md): The name of the managed entity to update data for.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether to update subentities.
- [propertiesToUpdate](propertiestoupdate.md): A dictionary of property description pairs that describe the updates.
- [resultType](resulttype.md): The type of result that Core Data returns from the request.
