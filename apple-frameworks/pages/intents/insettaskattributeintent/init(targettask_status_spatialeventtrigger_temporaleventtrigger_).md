> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintent/init(targettask:status:spatialeventtrigger:temporaleventtrigger:)](https://developer.apple.com/documentation/intents/insettaskattributeintent/init(targettask:status:spatialeventtrigger:temporaleventtrigger:))

# init(targetTask:status:spatialEventTrigger:temporalEventTrigger:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Initializes the intent object with information about the task and the changes that you want to make.

> Use the designated initializer instead

## Declaration

```swift
convenience init(targetTask: INTask?, status: INTaskStatus, spatialEventTrigger: INSpatialEventTrigger?, temporalEventTrigger: INTemporalEventTrigger?)
```

## Parameters

- `targetTask`: The task that you want to modify.
- `status`: The new status for the task.
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

- [init(targetTask:taskTitle:status:priority:spatialEventTrigger:temporalEventTrigger:)](init%28targettask_tasktitle_status_priority_spatialeventtrigger_temporaleventtrigger_%29.md): Deprecated. Initializes the intent object with information about the task and the changes that you want to make.

# initWithTargetTask:status:spatialEventTrigger:temporalEventTrigger: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Initializes the intent object with information about the task and the changes that you want to make.

> Use the designated initializer instead

## Declaration

```objectivec
- (instancetype) initWithTargetTask:(INTask *) targetTask status:(INTaskStatus) status spatialEventTrigger:(INSpatialEventTrigger *) spatialEventTrigger temporalEventTrigger:(INTemporalEventTrigger *) temporalEventTrigger;
```

## Parameters

- `targetTask`: The task that you want to modify.
- `status`: The new status for the task.
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

- [initWithTargetTask:taskTitle:status:priority:spatialEventTrigger:temporalEventTrigger:](init%28targettask_tasktitle_status_priority_spatialeventtrigger_temporaleventtrigger_%29.md): Deprecated. Initializes the intent object with information about the task and the changes that you want to make.
