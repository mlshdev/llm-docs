> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intask](https://developer.apple.com/documentation/intents/intask)

# INTask (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An individual task the user needs to complete.

> INTask is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INTask
```

<a id="overview"></a>

## Overview

Use task objects to represent tasks for the user to complete. Each task object contains a description of the task, its current completion state, and any trigger conditions to remind the user to complete the task.

## Topics

### Initializing a Task Object

- [init(title:status:taskType:spatialEventTrigger:temporalEventTrigger:createdDateComponents:modifiedDateComponents:identifier:priority:)](intask/init%28title_status_tasktype_spatialeventtrigger_temporaleventtrigger_createddatecomponents_modifieddatecomponents_identifier_priority_%29.md): Deprecated. Initializes a task object with the specified content and triggers.
- [init(title:status:taskType:spatialEventTrigger:temporalEventTrigger:createdDateComponents:modifiedDateComponents:identifier:)](intask/init%28title_status_tasktype_spatialeventtrigger_temporaleventtrigger_createddatecomponents_modifieddatecomponents_identifier_%29.md): Deprecated. Initializes a task object with the specified content and triggers.

### Getting the Task Content

- [title](intask/title.md): Deprecated. The text that describes the task.

### Getting the Task Completion Status

- [status](intask/status.md): Deprecated. The current completion state of the task.
- [INTaskStatus](intaskstatus.md): Deprecated. Constants indicating the completion state of a task.

### Getting the Event Triggers

- [temporalEventTrigger](intask/temporaleventtrigger.md): Deprecated. A time-based trigger that reminds the user to complete the task.
- [spatialEventTrigger](intask/spatialeventtrigger.md): Deprecated. A location-based trigger that reminds the user to complete the task.

### Getting the Modification Dates

- [createdDateComponents](intask/createddatecomponents.md): Deprecated. The initial creation date of the task.
- [modifiedDateComponents](intask/modifieddatecomponents.md): Deprecated. The date on which the intent updated the task.

### Getting the Task Type

- [taskType](intask/tasktype.md): Deprecated. Information about the behavior of the task in your app.
- [INTaskType](intasktype.md): Deprecated. Constants indicating how the task behaves.

### Identifying the Task

- [identifier](intask/identifier.md): Deprecated. The unique identifier that your app uses to identify the task.

### Identifying the Task Priority

- [priority](intask/priority.md): Deprecated. The priority for the task.

### Initializers

- [init(coder:)](intask/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Task Objects

- [INTaskList](intasklist.md): Deprecated. A collection of individual tasks.

# INTask (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An individual task the user needs to complete.

> INTask is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INTask : NSObject
```

<a id="overview"></a>

## Overview

Use task objects to represent tasks for the user to complete. Each task object contains a description of the task, its current completion state, and any trigger conditions to remind the user to complete the task.

## Topics

### Initializing a Task Object

- [initWithTitle:status:taskType:spatialEventTrigger:temporalEventTrigger:createdDateComponents:modifiedDateComponents:identifier:priority:](intask/init%28title_status_tasktype_spatialeventtrigger_temporaleventtrigger_createddatecomponents_modifieddatecomponents_identifier_priority_%29.md): Deprecated. Initializes a task object with the specified content and triggers.
- [initWithTitle:status:taskType:spatialEventTrigger:temporalEventTrigger:createdDateComponents:modifiedDateComponents:identifier:](intask/init%28title_status_tasktype_spatialeventtrigger_temporaleventtrigger_createddatecomponents_modifieddatecomponents_identifier_%29.md): Deprecated. Initializes a task object with the specified content and triggers.

### Getting the Task Content

- [title](intask/title.md): Deprecated. The text that describes the task.

### Getting the Task Completion Status

- [status](intask/status.md): Deprecated. The current completion state of the task.
- [INTaskStatus](intaskstatus.md): Deprecated. Constants indicating the completion state of a task.

### Getting the Event Triggers

- [temporalEventTrigger](intask/temporaleventtrigger.md): Deprecated. A time-based trigger that reminds the user to complete the task.
- [spatialEventTrigger](intask/spatialeventtrigger.md): Deprecated. A location-based trigger that reminds the user to complete the task.

### Getting the Modification Dates

- [createdDateComponents](intask/createddatecomponents.md): Deprecated. The initial creation date of the task.
- [modifiedDateComponents](intask/modifieddatecomponents.md): Deprecated. The date on which the intent updated the task.

### Getting the Task Type

- [taskType](intask/tasktype.md): Deprecated. Information about the behavior of the task in your app.
- [INTaskType](intasktype.md): Deprecated. Constants indicating how the task behaves.

### Identifying the Task

- [identifier](intask/identifier.md): Deprecated. The unique identifier that your app uses to identify the task.

### Identifying the Task Priority

- [priority](intask/priority.md): Deprecated. The priority for the task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Task Objects

- [INTaskList](intasklist.md): Deprecated. A collection of individual tasks.
