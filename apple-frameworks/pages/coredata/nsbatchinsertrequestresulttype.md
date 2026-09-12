> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchinsertrequestresulttype](https://developer.apple.com/documentation/coredata/nsbatchinsertrequestresulttype)

# NSBatchInsertRequestResultType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Result types for a batch-insertion request.

## Declaration

```swift
enum NSBatchInsertRequestResultType
```

## Topics

### Request Types

- [NSBatchInsertRequestResultType.statusOnly](nsbatchinsertrequestresulttype/statusonly.md): A value that indicates that the return type is a Boolean value representing whether the batch-insertion request succeeded.
- [NSBatchInsertRequestResultType.objectIDs](nsbatchinsertrequestresulttype/objectids.md): A value that indicates the return type is an array of object IDs that corresponds to the inserted rows.
- [NSBatchInsertRequestResultType.count](nsbatchinsertrequestresulttype/count.md): A value that indicates that the return type is the number of inserted rows.

### Initializers

- [init(rawValue:)](nsbatchinsertrequestresulttype/init%28rawvalue_%29.md)

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

- [result](nsbatchinsertresult/result.md): The result of a batch-insertion request.
- [resultType](nsbatchinsertresult/resulttype.md): The type of result that Core Data returns from this request.

# NSBatchInsertRequestResultType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Result types for a batch-insertion request.

## Declaration

```objectivec
enum NSBatchInsertRequestResultType : NSUInteger;
```

## Topics

### Request Types

- [NSBatchInsertRequestResultTypeStatusOnly](nsbatchinsertrequestresulttype/statusonly.md): A value that indicates that the return type is a Boolean value representing whether the batch-insertion request succeeded.
- [NSBatchInsertRequestResultTypeObjectIDs](nsbatchinsertrequestresulttype/objectids.md): A value that indicates the return type is an array of object IDs that corresponds to the inserted rows.
- [NSBatchInsertRequestResultTypeCount](nsbatchinsertrequestresulttype/count.md): A value that indicates that the return type is the number of inserted rows.

## See Also

### Accessing Results

- [result](nsbatchinsertresult/result.md): The result of a batch-insertion request.
- [resultType](nsbatchinsertresult/resulttype.md): The type of result that Core Data returns from this request.
