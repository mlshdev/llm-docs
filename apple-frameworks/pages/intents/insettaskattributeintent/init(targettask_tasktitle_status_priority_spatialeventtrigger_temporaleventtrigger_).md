> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintent/init(targettask:tasktitle:status:priority:spatialeventtrigger:temporaleventtrigger:)](https://developer.apple.com/documentation/intents/insettaskattributeintent/init(targettask:tasktitle:status:priority:spatialeventtrigger:temporaleventtrigger:))

# init(targetTask:taskTitle:status:priority:spatialEventTrigger:temporalEventTrigger:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Initializes the intent object with information about the task and the changes that you want to make.

## Declaration

```swift
init(targetTask: INTask?, taskTitle: INSpeakableString?, status: INTaskStatus, priority: INTaskPriority, spatialEventTrigger: INSpatialEventTrigger?, temporalEventTrigger: INTemporalEventTrigger?)
```

## Parameters

- `targetTask`: The task that you want to modify.
- `taskTitle`: The title for the task.
- `status`: The new status for the task.
- `priority`: The priority for the task.
- `spatialEventTrigger`: The location-based trigger, if any, that you want to apply to the task.
- `temporalEventTrigger`: The time-based trigger, if any, that you want to apply to the task.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user asks to set the attributes of a task. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Initializing the Intent Object

- [init(targetTask:status:spatialEventTrigger:temporalEventTrigger:)](init%28targettask_status_spatialeventtrigger_temporaleventtrigger_%29.md): Deprecated. Initializes the intent object with information about the task and the changes that you want to make.

# initWithTargetTask:taskTitle:status:priority:spatialEventTrigger:temporalEventTrigger: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Initializes the intent object with information about the task and the changes that you want to make.

## Declaration

```objectivec
- (instancetype) initWithTargetTask:(INTask *) targetTask taskTitle:(INSpeakableString *) taskTitle status:(INTaskStatus) status priority:(INTaskPriority) priority spatialEventTrigger:(INSpatialEventTrigger *) spatialEventTrigger temporalEventTrigger:(INTemporalEventTrigger *) temporalEventTrigger;
```

## Parameters

- `targetTask`: The task that you want to modify.
- `taskTitle`: The title for the task.
- `status`: The new status for the task.
- `priority`: The priority for the task.
- `spatialEventTrigger`: The location-based trigger, if any, that you want to apply to the task.
- `temporalEventTrigger`: The time-based trigger, if any, that you want to apply to the task.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user asks to set the attributes of a task. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Initializing the Intent Object

- [initWithTargetTask:status:spatialEventTrigger:temporalEventTrigger:](init%28targettask_status_spatialeventtrigger_temporaleventtrigger_%29.md): Deprecated. Initializes the intent object with information about the task and the changes that you want to make.
