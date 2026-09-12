> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchupdaterequestresulttype](https://developer.apple.com/documentation/coredata/nsbatchupdaterequestresulttype)

# NSBatchUpdateRequestResultType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Result types for a batch-update request.

## Declaration

```swift
enum NSBatchUpdateRequestResultType
```

## Topics

### Request Types

- [NSBatchUpdateRequestResultType.statusOnlyResultType](nsbatchupdaterequestresulttype/statusonlyresulttype.md): A value that indicates the return type is a Boolean value representing whether the batch-update request succeeds.
- [NSBatchUpdateRequestResultType.updatedObjectIDsResultType](nsbatchupdaterequestresulttype/updatedobjectidsresulttype.md): A value that indicates the return type is an array of object IDs that corresponds to the updated rows.
- [NSBatchUpdateRequestResultType.updatedObjectsCountResultType](nsbatchupdaterequestresulttype/updatedobjectscountresulttype.md): A value that indicates the return type is the number of updated rows.

### Initializers

- [init(rawValue:)](nsbatchupdaterequestresulttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Results

- [result](nsbatchupdateresult/result.md): The result of a batch-update request, either the number of updated objects, the identifiers of the updated objects, or a status value.
- [resultType](nsbatchupdateresult/resulttype.md): The type of result that Core Data returns from the request.

# NSBatchUpdateRequestResultType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Result types for a batch-update request.

## Declaration

```objectivec
enum NSBatchUpdateRequestResultType : NSUInteger;
```

## Topics

### Request Types

- [NSStatusOnlyResultType](nsbatchupdaterequestresulttype/statusonlyresulttype.md): A value that indicates the return type is a Boolean value representing whether the batch-update request succeeds.
- [NSUpdatedObjectIDsResultType](nsbatchupdaterequestresulttype/updatedobjectidsresulttype.md): A value that indicates the return type is an array of object IDs that corresponds to the updated rows.
- [NSUpdatedObjectsCountResultType](nsbatchupdaterequestresulttype/updatedobjectscountresulttype.md): A value that indicates the return type is the number of updated rows.

## See Also

### Accessing Results

- [result](nsbatchupdateresult/result.md): The result of a batch-update request, either the number of updated objects, the identifiers of the updated objects, or a status value.
- [resultType](nsbatchupdateresult/resulttype.md): The type of result that Core Data returns from the request.
