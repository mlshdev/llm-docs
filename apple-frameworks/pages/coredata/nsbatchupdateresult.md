> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchupdateresult](https://developer.apple.com/documentation/coredata/nsbatchupdateresult)

# NSBatchUpdateResult (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The result returned when executing a batch update request.

## Declaration

```swift
class NSBatchUpdateResult
```

## Topics

### Accessing Results

- [result](nsbatchupdateresult/result.md): The result of a batch-update request, either the number of updated objects, the identifiers of the updated objects, or a status value.
- [resultType](nsbatchupdateresult/resulttype.md): The type of result that Core Data returns from the request.
- [NSBatchUpdateRequestResultType](nsbatchupdaterequestresulttype.md): Result types for a batch-update request.

## Relationships

### Inherits From

- [NSPersistentStoreResult](nspersistentstoreresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Data Updates

- [NSBatchUpdateRequest](nsbatchupdaterequest.md): A request to Core Data to do a batch update of data in a persistent store without loading any data into memory.

# NSBatchUpdateResult (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The result returned when executing a batch update request.

## Declaration

```objectivec
@interface NSBatchUpdateResult : NSPersistentStoreResult
```

## Topics

### Accessing Results

- [result](nsbatchupdateresult/result.md): The result of a batch-update request, either the number of updated objects, the identifiers of the updated objects, or a status value.
- [resultType](nsbatchupdateresult/resulttype.md): The type of result that Core Data returns from the request.
- [NSBatchUpdateRequestResultType](nsbatchupdaterequestresulttype.md): Result types for a batch-update request.

## Relationships

### Inherits From

- [NSPersistentStoreResult](nspersistentstoreresult.md)

## See Also

### Data Updates

- [NSBatchUpdateRequest](nsbatchupdaterequest.md): A request to Core Data to do a batch update of data in a persistent store without loading any data into memory.
