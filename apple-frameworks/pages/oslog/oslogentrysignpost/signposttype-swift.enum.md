> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogentrysignpost/signposttype-swift.enum](https://developer.apple.com/documentation/oslog/oslogentrysignpost/signposttype-swift.enum)

# OSLogEntrySignpost.SignpostType (Swift)

**Framework:** OSLog  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The available signpost types.

## Declaration

```swift
enum SignpostType
```

## Topics

### Enumeration Cases

- [OSLogEntrySignpost.SignpostType.undefined](signposttype-swift.enum/undefined.md): The signpost does not have a type.
- [OSLogEntrySignpost.SignpostType.intervalBegin](signposttype-swift.enum/intervalbegin.md): The signpost marks the start of a time interval.
- [OSLogEntrySignpost.SignpostType.intervalEnd](signposttype-swift.enum/intervalend.md): The signpost marks the end of a time interval.
- [OSLogEntrySignpost.SignpostType.event](signposttype-swift.enum/event.md): The signpost marks an event.

### Initializers

- [init(rawValue:)](signposttype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Signpost Types

- [signpostType](signposttype-swift.property.md): The signpost’s type.

# OSLogEntrySignpostType (Objective-C)

**Framework:** OSLog  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The available signpost types.

## Declaration

```objectivec
enum OSLogEntrySignpostType : NSInteger;
```

## Topics

### Enumeration Cases

- [OSLogEntrySignpostTypeUndefined](signposttype-swift.enum/undefined.md): The signpost does not have a type.
- [OSLogEntrySignpostTypeIntervalBegin](signposttype-swift.enum/intervalbegin.md): The signpost marks the start of a time interval.
- [OSLogEntrySignpostTypeIntervalEnd](signposttype-swift.enum/intervalend.md): The signpost marks the end of a time interval.
- [OSLogEntrySignpostTypeEvent](signposttype-swift.enum/event.md): The signpost marks an event.

## See Also

### Accessing Signpost Types

- [signpostType](signposttype-swift.property.md): The signpost’s type.
