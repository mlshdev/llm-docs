> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intaskstatus](https://developer.apple.com/documentation/intents/intaskstatus)

# INTaskStatus (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the completion state of a task.

> INTaskStatus is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
enum INTaskStatus
```

## Topics

### Constants

- [INTaskStatus.unknown](intaskstatus/unknown.md): Deprecated. A constant indicating to search for tasks whose status is unknown.
- [INTaskStatus.notCompleted](intaskstatus/notcompleted.md): Deprecated. A constant indicating to search for tasks whose status is not complete.
- [INTaskStatus.completed](intaskstatus/completed.md): Deprecated. A constant indicating to search for tasks whose status is complete.

### Initializers

- [init(rawValue:)](intaskstatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Searching for Tasks by Their Status

- [status](insearchfornotebookitemsintent/status.md): Deprecated. The completion state to look for when searching for tasks.

# INTaskStatus (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the completion state of a task.

> INTaskStatus is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INTaskStatus : NSInteger;
```

## Topics

### Constants

- [INTaskStatusUnknown](intaskstatus/unknown.md): Deprecated. A constant indicating to search for tasks whose status is unknown.
- [INTaskStatusNotCompleted](intaskstatus/notcompleted.md): Deprecated. A constant indicating to search for tasks whose status is not complete.
- [INTaskStatusCompleted](intaskstatus/completed.md): Deprecated. A constant indicating to search for tasks whose status is complete.

## See Also

### Searching for Tasks by Their Status

- [status](insearchfornotebookitemsintent/status.md): Deprecated. The completion state to look for when searching for tasks.
