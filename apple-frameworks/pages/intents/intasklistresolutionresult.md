> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intasklistresolutionresult](https://developer.apple.com/documentation/intents/intasklistresolutionresult)

# INTaskListResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A resolution result for a list of tasks.

> INTaskListResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INTaskListResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INTaskListResolutionResult](intasklistresolutionresult.md) object when resolving parameters containing an [INTaskList](intasklist.md) object. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](intasklistresolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](intasklistresolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
- [disambiguation(with:)](intasklistresolutionresult/disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INAddTasksTargetTaskListResolutionResult](inaddtaskstargettasklistresolutionresult.md)
- [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md)

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
- [INAddTasksTemporalEventTriggerResolutionResult](inaddtaskstemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
- [INDateSearchTypeResolutionResult](indatesearchtyperesolutionresult.md): Deprecated. A resolution result for the types of dates supported by a search.
- [INLocationSearchTypeResolutionResult](inlocationsearchtyperesolutionresult.md): Deprecated. A resolution result for location-based searches.
- [INNoteResolutionResult](innoteresolutionresult.md): Deprecated. A resolution result for notes.
- [INNoteContentResolutionResult](innotecontentresolutionresult.md): Deprecated. A resolution result for the content of notes.
- [INNotebookItemTypeResolutionResult](innotebookitemtyperesolutionresult.md): Deprecated. A resolution result for the type of items to look for during a search of notes and tasks.
- [INSetTaskAttributeTemporalEventTriggerResolutionResult](insettaskattributetemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
- [INSnoozeTasksTaskResolutionResult](insnoozetaskstaskresolutionresult.md): Deprecated. A resolution result for snoozing a task.
- [INSpatialEventTriggerResolutionResult](inspatialeventtriggerresolutionresult.md): A resolution result for the location-based trigger associated with a task.
- [INTaskResolutionResult](intaskresolutionresult.md): Deprecated. A resolution result for a single task within a task list.
- [INTaskStatusResolutionResult](intaskstatusresolutionresult.md): Deprecated. A resolution result for the status of a task.
- [INTemporalEventTriggerResolutionResult](intemporaleventtriggerresolutionresult.md): A resolution result for the time-based trigger associated with a task.
- [INTaskPriorityResolutionResult](intaskpriorityresolutionresult.md): Deprecated. A resolution result for the priority associated with a task.

# INTaskListResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A resolution result for a list of tasks.

> INTaskListResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INTaskListResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INTaskListResolutionResult](intasklistresolutionresult.md) object when resolving parameters containing an [INTaskList](intasklist.md) object. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedTaskList:](intasklistresolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithTaskListToConfirm:](intasklistresolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
- [disambiguationWithTaskListsToDisambiguate:](intasklistresolutionresult/disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INAddTasksTargetTaskListResolutionResult](inaddtaskstargettasklistresolutionresult.md)
- [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md)

## See Also

### Resolution Results

- [INAddTasksTargetTaskListResolutionResult](inaddtaskstargettasklistresolutionresult.md): Deprecated. A resolution result that adds tasks to a target task list.
- [INAddTasksTemporalEventTriggerResolutionResult](inaddtaskstemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
- [INDateSearchTypeResolutionResult](indatesearchtyperesolutionresult.md): Deprecated. A resolution result for the types of dates supported by a search.
- [INLocationSearchTypeResolutionResult](inlocationsearchtyperesolutionresult.md): Deprecated. A resolution result for location-based searches.
- [INNoteResolutionResult](innoteresolutionresult.md): Deprecated. A resolution result for notes.
- [INNoteContentResolutionResult](innotecontentresolutionresult.md): Deprecated. A resolution result for the content of notes.
- [INNotebookItemTypeResolutionResult](innotebookitemtyperesolutionresult.md): Deprecated. A resolution result for the type of items to look for during a search of notes and tasks.
- [INSetTaskAttributeTemporalEventTriggerResolutionResult](insettaskattributetemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
- [INSnoozeTasksTaskResolutionResult](insnoozetaskstaskresolutionresult.md): Deprecated. A resolution result for snoozing a task.
- [INSpatialEventTriggerResolutionResult](inspatialeventtriggerresolutionresult.md): A resolution result for the location-based trigger associated with a task.
- [INTaskResolutionResult](intaskresolutionresult.md): Deprecated. A resolution result for a single task within a task list.
- [INTaskStatusResolutionResult](intaskstatusresolutionresult.md): Deprecated. A resolution result for the status of a task.
- [INTemporalEventTriggerResolutionResult](intemporaleventtriggerresolutionresult.md): A resolution result for the time-based trigger associated with a task.
- [INTaskPriorityResolutionResult](intaskpriorityresolutionresult.md): Deprecated. A resolution result for the priority associated with a task.
