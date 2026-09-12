> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtaskstemporaleventtriggerresolutionresult](https://developer.apple.com/documentation/intents/inaddtaskstemporaleventtriggerresolutionresult)

# INAddTasksTemporalEventTriggerResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A resolution result for a temporal event trigger.

## Declaration

```swift
class INAddTasksTemporalEventTriggerResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INAddTasksTemporalEventTriggerResolutionResult](inaddtaskstemporaleventtriggerresolutionresult.md) object when resolving parameters that contain an [INTemporalEventTrigger](intemporaleventtrigger.md) value for an [INAddTasksIntent](inaddtasksintent.md). Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution operators, see [INTemporalEventTriggerResolutionResult](intemporaleventtriggerresolutionresult.md).

## Topics

### Creating a Resolution Result

- [init(temporalEventTriggerResolutionResult:)](inaddtaskstemporaleventtriggerresolutionresult/init%28temporaleventtriggerresolutionresult_%29.md): Deprecated. Creates an object whose resolution successfully matches the specified temporal event.
- [unsupported(forReason:)](inaddtaskstemporaleventtriggerresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution provides a reason why the temporal event trigger cannot be applied to the task the user intends to create.
- [INAddTasksTemporalEventTriggerUnsupportedReason](inaddtaskstemporaleventtriggerunsupportedreason.md): Deprecated. Reasons the app can’t create a task with a particular temporal event trigger.

## Relationships

### Inherits From

- [INTemporalEventTriggerResolutionResult](intemporaleventtriggerresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resolution Results

- [INAddTasksTargetTaskListResolutionResult](inaddtaskstargettasklistresolutionresult.md): Deprecated. A resolution result that adds tasks to a target task list.
- [INDateSearchTypeResolutionResult](indatesearchtyperesolutionresult.md): Deprecated. A resolution result for the types of dates supported by a search.
- [INLocationSearchTypeResolutionResult](inlocationsearchtyperesolutionresult.md): Deprecated. A resolution result for location-based searches.
- [INNoteResolutionResult](innoteresolutionresult.md): Deprecated. A resolution result for notes.
- [INNoteContentResolutionResult](innotecontentresolutionresult.md): Deprecated. A resolution result for the content of notes.
- [INNotebookItemTypeResolutionResult](innotebookitemtyperesolutionresult.md): Deprecated. A resolution result for the type of items to look for during a search of notes and tasks.
- [INSetTaskAttributeTemporalEventTriggerResolutionResult](insettaskattributetemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
- [INSnoozeTasksTaskResolutionResult](insnoozetaskstaskresolutionresult.md): Deprecated. A resolution result for snoozing a task.
- [INSpatialEventTriggerResolutionResult](inspatialeventtriggerresolutionresult.md): A resolution result for the location-based trigger associated with a task.
- [INTaskListResolutionResult](intasklistresolutionresult.md): Deprecated. A resolution result for a list of tasks.
- [INTaskResolutionResult](intaskresolutionresult.md): Deprecated. A resolution result for a single task within a task list.
- [INTaskStatusResolutionResult](intaskstatusresolutionresult.md): Deprecated. A resolution result for the status of a task.
- [INTemporalEventTriggerResolutionResult](intemporaleventtriggerresolutionresult.md): A resolution result for the time-based trigger associated with a task.
- [INTaskPriorityResolutionResult](intaskpriorityresolutionresult.md): Deprecated. A resolution result for the priority associated with a task.

# INAddTasksTemporalEventTriggerResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A resolution result for a temporal event trigger.

## Declaration

```objectivec
@interface INAddTasksTemporalEventTriggerResolutionResult : INTemporalEventTriggerResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INAddTasksTemporalEventTriggerResolutionResult](inaddtaskstemporaleventtriggerresolutionresult.md) object when resolving parameters that contain an [INTemporalEventTrigger](intemporaleventtrigger.md) value for an [INAddTasksIntent](inaddtasksintent.md). Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution operators, see [INTemporalEventTriggerResolutionResult](intemporaleventtriggerresolutionresult.md).

## Topics

### Creating a Resolution Result

- [initWithTemporalEventTriggerResolutionResult:](inaddtaskstemporaleventtriggerresolutionresult/init%28temporaleventtriggerresolutionresult_%29.md): Deprecated. Creates an object whose resolution successfully matches the specified temporal event.
- [unsupportedForReason:](inaddtaskstemporaleventtriggerresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution provides a reason why the temporal event trigger cannot be applied to the task the user intends to create.
- [INAddTasksTemporalEventTriggerUnsupportedReason](inaddtaskstemporaleventtriggerunsupportedreason.md): Deprecated. Reasons the app can’t create a task with a particular temporal event trigger.

## Relationships

### Inherits From

- [INTemporalEventTriggerResolutionResult](intemporaleventtriggerresolutionresult.md)

## See Also

### Resolution Results

- [INAddTasksTargetTaskListResolutionResult](inaddtaskstargettasklistresolutionresult.md): Deprecated. A resolution result that adds tasks to a target task list.
- [INDateSearchTypeResolutionResult](indatesearchtyperesolutionresult.md): Deprecated. A resolution result for the types of dates supported by a search.
- [INLocationSearchTypeResolutionResult](inlocationsearchtyperesolutionresult.md): Deprecated. A resolution result for location-based searches.
- [INNoteResolutionResult](innoteresolutionresult.md): Deprecated. A resolution result for notes.
- [INNoteContentResolutionResult](innotecontentresolutionresult.md): Deprecated. A resolution result for the content of notes.
- [INNotebookItemTypeResolutionResult](innotebookitemtyperesolutionresult.md): Deprecated. A resolution result for the type of items to look for during a search of notes and tasks.
- [INSetTaskAttributeTemporalEventTriggerResolutionResult](insettaskattributetemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
- [INSnoozeTasksTaskResolutionResult](insnoozetaskstaskresolutionresult.md): Deprecated. A resolution result for snoozing a task.
- [INSpatialEventTriggerResolutionResult](inspatialeventtriggerresolutionresult.md): A resolution result for the location-based trigger associated with a task.
- [INTaskListResolutionResult](intasklistresolutionresult.md): Deprecated. A resolution result for a list of tasks.
- [INTaskResolutionResult](intaskresolutionresult.md): Deprecated. A resolution result for a single task within a task list.
- [INTaskStatusResolutionResult](intaskstatusresolutionresult.md): Deprecated. A resolution result for the status of a task.
- [INTemporalEventTriggerResolutionResult](intemporaleventtriggerresolutionresult.md): A resolution result for the time-based trigger associated with a task.
- [INTaskPriorityResolutionResult](intaskpriorityresolutionresult.md): Deprecated. A resolution result for the priority associated with a task.
