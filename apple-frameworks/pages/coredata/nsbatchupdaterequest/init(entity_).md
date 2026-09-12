> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchupdaterequest/init(entity:)](https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/init(entity:))

# init(entity:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a batch-update request for a managed entity.

## Declaration

```swift
init(entity: NSEntityDescription)
```

## Parameters

- `entity`: The managed entity to update data for.

## See Also

### Creating a Request

- [init(entityName:)](init%28entityname_%29.md): Creates a batch-update request for a named managed entity.

# initWithEntity: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a batch-update request for a managed entity.

## Declaration

```objectivec
- (instancetype) initWithEntity:(NSEntityDescription *) entity;
```

## Parameters

- `entity`: The managed entity to update data for.

## See Also

### Creating a Request

- [initWithEntityName:](init%28entityname_%29.md): Creates a batch-update request for a named managed entity.
- [batchUpdateRequestWithEntityName:](batchupdaterequestwithentityname_.md): Creates a batch-update request for a named managed entity.
