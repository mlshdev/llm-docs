> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekentitytype](https://developer.apple.com/documentation/eventkit/ekentitytype)

# EKEntityType (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The type of entities allowed for a source.

## Declaration

```swift
enum EKEntityType
```

## Topics

### Specifying Multiple Entities

- [EKEntityMask](ekentitymask.md): A bitmask of `EKEntityType` for specifying multiple entities at once.

### Constants

- [EKEntityType.event](ekentitytype/event.md): Represents an event.
- [EKEntityType.reminder](ekentitytype/reminder.md): Represents a reminder.

### Initializers

- [init(rawValue:)](ekentitytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# EKEntityType (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The type of entities allowed for a source.

## Declaration

```objectivec
enum EKEntityType : NSUInteger;
```

## Topics

### Specifying Multiple Entities

- [EKEntityMask](ekentitymask.md): A bitmask of `EKEntityType` for specifying multiple entities at once.

### Constants

- [EKEntityTypeEvent](ekentitytype/event.md): Represents an event.
- [EKEntityTypeReminder](ekentitytype/reminder.md): Represents a reminder.
