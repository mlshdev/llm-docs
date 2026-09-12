> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchdeleteresult](https://developer.apple.com/documentation/coredata/nsbatchdeleteresult)

# NSBatchDeleteResult (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that describes the result of a batch delete request.

## Declaration

```swift
class NSBatchDeleteResult
```

## Topics

### Accessing the Result

- [result](nsbatchdeleteresult/result.md): The value the request returns after it executes.
- [resultType](nsbatchdeleteresult/resulttype.md): The data type of the request’s result value.
- [NSBatchDeleteRequestResultType](nsbatchdeleterequestresulttype.md): The types of result a batch delete request can provide when it executes.

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

### Data Deletion

- [NSBatchDeleteRequest](nsbatchdeleterequest.md): A request that deletes objects in the SQLite persistent store without loading them into memory.

# NSBatchDeleteResult (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that describes the result of a batch delete request.

## Declaration

```objectivec
@interface NSBatchDeleteResult : NSPersistentStoreResult
```

## Topics

### Accessing the Result

- [result](nsbatchdeleteresult/result.md): The value the request returns after it executes.
- [resultType](nsbatchdeleteresult/resulttype.md): The data type of the request’s result value.
- [NSBatchDeleteRequestResultType](nsbatchdeleterequestresulttype.md): The types of result a batch delete request can provide when it executes.

## Relationships

### Inherits From

- [NSPersistentStoreResult](nspersistentstoreresult.md)

## See Also

### Data Deletion

- [NSBatchDeleteRequest](nsbatchdeleterequest.md): A request that deletes objects in the SQLite persistent store without loading them into memory.
