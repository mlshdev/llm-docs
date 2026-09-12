> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchupdaterequest/init(entityname:)](https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/init(entityname:))

# init(entityName:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a batch-update request for a named managed entity.

## Declaration

```swift
init(entityName: String)
```

## Parameters

- `entityName`: The name of the managed entity to update data for.

## See Also

### Creating a Request

- [init(entity:)](init%28entity_%29.md): Creates a batch-update request for a managed entity.

# initWithEntityName: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a batch-update request for a named managed entity.

## Declaration

```objectivec
- (instancetype) initWithEntityName:(NSString *) entityName;
```

## Parameters

- `entityName`: The name of the managed entity to update data for.

## See Also

### Creating a Request

- [initWithEntity:](init%28entity_%29.md): Creates a batch-update request for a managed entity.
- [batchUpdateRequestWithEntityName:](batchupdaterequestwithentityname_.md): Creates a batch-update request for a named managed entity.
