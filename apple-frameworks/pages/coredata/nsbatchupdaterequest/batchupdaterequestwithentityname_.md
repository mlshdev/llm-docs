> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchupdaterequest/batchupdaterequestwithentityname:](https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/batchupdaterequestwithentityname:)

# batchUpdateRequestWithEntityName:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a batch-update request for a named managed entity.

## Declaration

```objectivec
+ (instancetype) batchUpdateRequestWithEntityName:(NSString *) entityName;
```

## Parameters

- `entityName`: The name of the managed entity to update data for.

<a id="return-value"></a>

## Return Value

A batch-update request.

## See Also

### Creating a Request

- [initWithEntity:](init%28entity_%29.md): Creates a batch-update request for a managed entity.
- [initWithEntityName:](init%28entityname_%29.md): Creates a batch-update request for a named managed entity.
