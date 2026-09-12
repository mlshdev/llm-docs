> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsbatchdeleterequestresulttype](https://developer.apple.com/documentation/coredata/nsbatchdeleterequestresulttype)

# NSBatchDeleteRequestResultType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The types of result a batch delete request can provide when it executes.

## Declaration

```swift
enum NSBatchDeleteRequestResultType
```

## Topics

### Result Types

- [NSBatchDeleteRequestResultType.resultTypeCount](nsbatchdeleterequestresulttype/resulttypecount.md): Returns the number of managed objects the request deletes.
- [NSBatchDeleteRequestResultType.resultTypeObjectIDs](nsbatchdeleterequestresulttype/resulttypeobjectids.md): Returns an array of the deleted managed objects’ identifiers.
- [NSBatchDeleteRequestResultType.resultTypeStatusOnly](nsbatchdeleterequestresulttype/resulttypestatusonly.md): Returns a Boolean value that indicates if the request succeeds.

### Initializers

- [init(rawValue:)](nsbatchdeleterequestresulttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the Result Type

- [resultType](nsbatchdeleterequest/resulttype.md): The type of result the request provides when it executes.

# NSBatchDeleteRequestResultType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The types of result a batch delete request can provide when it executes.

## Declaration

```objectivec
enum NSBatchDeleteRequestResultType : NSUInteger;
```

## Topics

### Result Types

- [NSBatchDeleteResultTypeCount](nsbatchdeleterequestresulttype/resulttypecount.md): Returns the number of managed objects the request deletes.
- [NSBatchDeleteResultTypeObjectIDs](nsbatchdeleterequestresulttype/resulttypeobjectids.md): Returns an array of the deleted managed objects’ identifiers.
- [NSBatchDeleteResultTypeStatusOnly](nsbatchdeleterequestresulttype/resulttypestatusonly.md): Returns a Boolean value that indicates if the request succeeds.

## See Also

### Configuring the Result Type

- [resultType](nsbatchdeleterequest/resulttype.md): The type of result the request provides when it executes.
