> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchupdaterequest](https://developer.apple.com/documentation/coredata/nsbatchupdaterequest)

# NSBatchUpdateRequest (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A request to Core Data to do a batch update of data in a persistent store without loading any data into memory.

## Declaration

```swift
class NSBatchUpdateRequest
```

## Topics

### Creating a Request

- [init(entity:)](nsbatchupdaterequest/init%28entity_%29.md): Creates a batch-update request for a managed entity.
- [init(entityName:)](nsbatchupdaterequest/init%28entityname_%29.md): Creates a batch-update request for a named managed entity.

### Configuring a Request

- [entity](nsbatchupdaterequest/entity.md): The managed entity to update data for.
- [entityName](nsbatchupdaterequest/entityname.md): The name of the managed entity to update data for.
- [includesSubentities](nsbatchupdaterequest/includessubentities.md): A Boolean value that indicates whether to update subentities.
- [predicate](nsbatchupdaterequest/predicate.md): A predicate that identifies the objects to update.
- [propertiesToUpdate](nsbatchupdaterequest/propertiestoupdate.md): A dictionary of property description pairs that describe the updates.
- [resultType](nsbatchupdaterequest/resulttype.md): The type of result that Core Data returns from the request.

## Relationships

### Inherits From

- [NSPersistentStoreRequest](nspersistentstorerequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Data Updates

- [NSBatchUpdateResult](nsbatchupdateresult.md): The result returned when executing a batch update request.

# NSBatchUpdateRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A request to Core Data to do a batch update of data in a persistent store without loading any data into memory.

## Declaration

```objectivec
@interface NSBatchUpdateRequest : NSPersistentStoreRequest
```

## Topics

### Creating a Request

- [initWithEntity:](nsbatchupdaterequest/init%28entity_%29.md): Creates a batch-update request for a managed entity.
- [initWithEntityName:](nsbatchupdaterequest/init%28entityname_%29.md): Creates a batch-update request for a named managed entity.
- [batchUpdateRequestWithEntityName:](nsbatchupdaterequest/batchupdaterequestwithentityname_.md): Creates a batch-update request for a named managed entity.

### Configuring a Request

- [entity](nsbatchupdaterequest/entity.md): The managed entity to update data for.
- [entityName](nsbatchupdaterequest/entityname.md): The name of the managed entity to update data for.
- [includesSubentities](nsbatchupdaterequest/includessubentities.md): A Boolean value that indicates whether to update subentities.
- [predicate](nsbatchupdaterequest/predicate.md): A predicate that identifies the objects to update.
- [propertiesToUpdate](nsbatchupdaterequest/propertiestoupdate.md): A dictionary of property description pairs that describe the updates.
- [resultType](nsbatchupdaterequest/resulttype.md): The type of result that Core Data returns from the request.

## Relationships

### Inherits From

- [NSPersistentStoreRequest](nspersistentstorerequest.md)

## See Also

### Data Updates

- [NSBatchUpdateResult](nsbatchupdateresult.md): The result returned when executing a batch update request.
