> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintent/init(targettasklist:tasktitles:spatialeventtrigger:temporaleventtrigger:priority:)](https://developer.apple.com/documentation/intents/inaddtasksintent/init(targettasklist:tasktitles:spatialeventtrigger:temporaleventtrigger:priority:))

# init(targetTaskList:taskTitles:spatialEventTrigger:temporalEventTrigger:priority:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Initializes the intent object with the specified task details.

## Declaration

```swift
init(targetTaskList: INTaskList?, taskTitles: [INSpeakableString]?, spatialEventTrigger: INSpatialEventTrigger?, temporalEventTrigger: INTemporalEventTrigger?, priority: INTaskPriority)
```

## Parameters

- `targetTaskList`: The task list in which to create the new tasks.
- `taskTitles`: An array of strings, each of which represents a task to add to the task list.
- `spatialEventTrigger`: An [INSpatialEventTrigger](../inspatialeventtrigger.md) object that contains details of when reminders should be sent for the tasks. The trigger applies to all tasks being added.
- `temporalEventTrigger`: An [INTemporalEventTrigger](../intemporaleventtrigger.md) object that contains details of when reminders should be sent for the tasks. The trigger applies to all tasks being added.
- `priority`: The priority for the task.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. SiriKit creates instances when the user asks to add tasks to a task list. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Initializing the Intent Object

- [init(targetTaskList:taskTitles:spatialEventTrigger:temporalEventTrigger:)](init%28targettasklist_tasktitles_spatialeventtrigger_temporaleventtrigger_%29.md): Deprecated. Initializes the intent object with the specified task details.

# initWithTargetTaskList:taskTitles:spatialEventTrigger:temporalEventTrigger:priority: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Initializes the intent object with the specified task details.

## Declaration

```objectivec
- (instancetype) initWithTargetTaskList:(INTaskList *) targetTaskList taskTitles:(NSArray<INSpeakableString *> *) taskTitles spatialEventTrigger:(INSpatialEventTrigger *) spatialEventTrigger temporalEventTrigger:(INTemporalEventTrigger *) temporalEventTrigger priority:(INTaskPriority) priority;
```

## Parameters

- `targetTaskList`: The task list in which to create the new tasks.
- `taskTitles`: An array of strings, each of which represents a task to add to the task list.
- `spatialEventTrigger`: An [INSpatialEventTrigger](../inspatialeventtrigger.md) object that contains details of when reminders should be sent for the tasks. The trigger applies to all tasks being added.
- `temporalEventTrigger`: An [INTemporalEventTrigger](../intemporaleventtrigger.md) object that contains details of when reminders should be sent for the tasks. The trigger applies to all tasks being added.
- `priority`: The priority for the task.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. SiriKit creates instances when the user asks to add tasks to a task list. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Initializing the Intent Object

- [initWithTargetTaskList:taskTitles:spatialEventTrigger:temporalEventTrigger:](init%28targettasklist_tasktitles_spatialeventtrigger_temporaleventtrigger_%29.md): Deprecated. Initializes the intent object with the specified task details.
