> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtaskstargettasklistresolutionresult](https://developer.apple.com/documentation/intents/inaddtaskstargettasklistresolutionresult)

# INAddTasksTargetTaskListResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A resolution result that adds tasks to a target task list.

## Declaration

```swift
class INAddTasksTargetTaskListResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INAddTasksTargetTaskListResolutionResult](inaddtaskstargettasklistresolutionresult.md) object when resolving parameters containing an [INAddTasksTargetTaskListConfirmationReason](inaddtaskstargettasklistconfirmationreason.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [init(taskListResolutionResult:)](inaddtaskstargettasklistresolutionresult/init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified task list.
- [confirmationRequired(with:forReason:)](inaddtaskstargettasklistresolutionresult/confirmationrequired%28with_forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the reason for creating a new task list before proceeding.
- [INAddTasksTargetTaskListConfirmationReason](inaddtaskstargettasklistconfirmationreason.md): Deprecated. Constants that indicate the reason for confirming a task list.

## Relationships

### Inherits From

- [INTaskListResolutionResult](intasklistresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Resolution Results

- [INAddTasksTemporalEventTriggerResolutionResult](inaddtaskstemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
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

# INAddTasksTargetTaskListResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A resolution result that adds tasks to a target task list.

## Declaration

```objectivec
@interface INAddTasksTargetTaskListResolutionResult : INTaskListResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INAddTasksTargetTaskListResolutionResult](inaddtaskstargettasklistresolutionresult.md) object when resolving parameters containing an [INAddTasksTargetTaskListConfirmationReason](inaddtaskstargettasklistconfirmationreason.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [initWithTaskListResolutionResult:](inaddtaskstargettasklistresolutionresult/init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified task list.
- [confirmationRequiredWithTaskListToConfirm:forReason:](inaddtaskstargettasklistresolutionresult/confirmationrequired%28with_forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the reason for creating a new task list before proceeding.
- [INAddTasksTargetTaskListConfirmationReason](inaddtaskstargettasklistconfirmationreason.md): Deprecated. Constants that indicate the reason for confirming a task list.

## Relationships

### Inherits From

- [INTaskListResolutionResult](intasklistresolutionresult.md)

## See Also

### Resolution Results

- [INAddTasksTemporalEventTriggerResolutionResult](inaddtaskstemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
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
