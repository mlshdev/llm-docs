> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainereventresult/resulttype-swift.enum](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventresult/resulttype-swift.enum)

# NSPersistentCloudKitContainerEventResult.ResultType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The types of results from a persistent CloudKit container event fetch request.

## Declaration

```swift
enum ResultType
```

## Topics

### Result Types

- [NSPersistentCloudKitContainerEventResult.ResultType.events](resulttype-swift.enum/events.md): The persistent CloudKit container events that match the event request.
- [NSPersistentCloudKitContainerEventResult.ResultType.countEvents](resulttype-swift.enum/countevents.md): The number of CloudKit container events that match the event request.

### Initializers

- [init(rawValue:)](resulttype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Event Results

- [result](result.md): The result of the persistent CloudKit container event request, which the result type determines.
- [resultType](resulttype-swift.property.md): The type of result that the CloudKit container event fetch request returns.

# NSPersistentCloudKitContainerEventResultType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The types of results from a persistent CloudKit container event fetch request.

## Declaration

```objectivec
enum NSPersistentCloudKitContainerEventResultType : NSInteger;
```

## Topics

### Result Types

- [NSPersistentCloudKitContainerEventResultTypeEvents](resulttype-swift.enum/events.md): The persistent CloudKit container events that match the event request.
- [NSPersistentCloudKitContainerEventResultTypeCountEvents](resulttype-swift.enum/countevents.md): The number of CloudKit container events that match the event request.

## See Also

### Handling Event Results

- [result](result.md): The result of the persistent CloudKit container event request, which the result type determines.
- [resultType](resulttype-swift.property.md): The type of result that the CloudKit container event fetch request returns.
