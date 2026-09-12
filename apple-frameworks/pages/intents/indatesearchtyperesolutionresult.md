> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatesearchtyperesolutionresult](https://developer.apple.com/documentation/intents/indatesearchtyperesolutionresult)

# INDateSearchTypeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A resolution result for the types of dates supported by a search.

> INDateSearchTypeResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INDateSearchTypeResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INDateSearchTypeResolutionResult](indatesearchtyperesolutionresult.md) object when resolving parameters that contain an [INDateSearchType](indatesearchtype.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](indatesearchtyperesolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](indatesearchtyperesolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

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

# INDateSearchTypeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A resolution result for the types of dates supported by a search.

> INDateSearchTypeResolutionResult is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INDateSearchTypeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INDateSearchTypeResolutionResult](indatesearchtyperesolutionresult.md) object when resolving parameters that contain an [INDateSearchType](indatesearchtype.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedDateSearchType:](indatesearchtyperesolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithDateSearchTypeToConfirm:](indatesearchtyperesolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Resolution Results

- [INAddTasksTargetTaskListResolutionResult](inaddtaskstargettasklistresolutionresult.md): Deprecated. A resolution result that adds tasks to a target task list.
- [INAddTasksTemporalEventTriggerResolutionResult](inaddtaskstemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
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
