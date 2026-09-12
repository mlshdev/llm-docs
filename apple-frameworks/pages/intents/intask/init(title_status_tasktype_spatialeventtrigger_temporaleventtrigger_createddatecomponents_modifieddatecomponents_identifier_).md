> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intask/init(title:status:tasktype:spatialeventtrigger:temporaleventtrigger:createddatecomponents:modifieddatecomponents:identifier:)](https://developer.apple.com/documentation/intents/intask/init(title:status:tasktype:spatialeventtrigger:temporaleventtrigger:createddatecomponents:modifieddatecomponents:identifier:))

# init(title:status:taskType:spatialEventTrigger:temporalEventTrigger:createdDateComponents:modifiedDateComponents:identifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes a task object with the specified content and triggers.

> INTask is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
convenience init(title: INSpeakableString, status: INTaskStatus, taskType: INTaskType, spatialEventTrigger: INSpatialEventTrigger?, temporalEventTrigger: INTemporalEventTrigger?, createdDateComponents: DateComponents?, modifiedDateComponents: DateComponents?, identifier: String?)
```

## Parameters

- `title`: The title text that describes the task. This string is what the user enters for the task details.
- `status`: The current state of the task. Tasks can be completed or not completed.
- `taskType`: Information about how the task behaves in your app. Use this parameter to specify whether the task can be marked as completed.
- `spatialEventTrigger`: A location-based trigger that reminds the user to complete the task.
- `temporalEventTrigger`: A time-based trigger that reminds the user to complete the task.
- `createdDateComponents`: The date on which the task was initially created.
- `modifiedDateComponents`: The last date on which the task was updated.
- `identifier`: The unique identifier that your app uses to identify the task.

<a id="return-value"></a>

## Return Value

An initialized task object or `nil` if the object could not be created.

## See Also

### Initializing a Task Object

- [init(title:status:taskType:spatialEventTrigger:temporalEventTrigger:createdDateComponents:modifiedDateComponents:identifier:priority:)](init%28title_status_tasktype_spatialeventtrigger_temporaleventtrigger_createddatecomponents_modifieddatecomponents_identifier_priority_%29.md): Deprecated. Initializes a task object with the specified content and triggers.

# initWithTitle:status:taskType:spatialEventTrigger:temporalEventTrigger:createdDateComponents:modifiedDateComponents:identifier: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Initializes a task object with the specified content and triggers.

> INTask is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (instancetype) initWithTitle:(INSpeakableString *) title status:(INTaskStatus) status taskType:(INTaskType) taskType spatialEventTrigger:(INSpatialEventTrigger *) spatialEventTrigger temporalEventTrigger:(INTemporalEventTrigger *) temporalEventTrigger createdDateComponents:(NSDateComponents *) createdDateComponents modifiedDateComponents:(NSDateComponents *) modifiedDateComponents identifier:(NSString *) identifier;
```

## Parameters

- `title`: The title text that describes the task. This string is what the user enters for the task details.
- `status`: The current state of the task. Tasks can be completed or not completed.
- `taskType`: Information about how the task behaves in your app. Use this parameter to specify whether the task can be marked as completed.
- `spatialEventTrigger`: A location-based trigger that reminds the user to complete the task.
- `temporalEventTrigger`: A time-based trigger that reminds the user to complete the task.
- `createdDateComponents`: The date on which the task was initially created.
- `modifiedDateComponents`: The last date on which the task was updated.
- `identifier`: The unique identifier that your app uses to identify the task.

<a id="return-value"></a>

## Return Value

An initialized task object or `nil` if the object could not be created.

## See Also

### Initializing a Task Object

- [initWithTitle:status:taskType:spatialEventTrigger:temporalEventTrigger:createdDateComponents:modifiedDateComponents:identifier:priority:](init%28title_status_tasktype_spatialeventtrigger_temporaleventtrigger_createddatecomponents_modifieddatecomponents_identifier_priority_%29.md): Deprecated. Initializes a task object with the specified content and triggers.
