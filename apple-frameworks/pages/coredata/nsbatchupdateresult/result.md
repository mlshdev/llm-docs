> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchupdateresult/result](https://developer.apple.com/documentation/coredata/nsbatchupdateresult/result)

# result (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The result of a batch-update request, either the number of updated objects, the identifiers of the updated objects, or a status value.

## Declaration

```swift
var result: Any? { get }
```

## See Also

### Accessing Results

- [resultType](resulttype.md): The type of result that Core Data returns from the request.
- [NSBatchUpdateRequestResultType](../nsbatchupdaterequestresulttype.md): Result types for a batch-update request.

# result (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The result of a batch-update request, either the number of updated objects, the identifiers of the updated objects, or a status value.

## Declaration

```objectivec
@property (strong, readonly, nullable) id result;
```

## See Also

### Accessing Results

- [resultType](resulttype.md): The type of result that Core Data returns from the request.
- [NSBatchUpdateRequestResultType](../nsbatchupdaterequestresulttype.md): Result types for a batch-update request.
