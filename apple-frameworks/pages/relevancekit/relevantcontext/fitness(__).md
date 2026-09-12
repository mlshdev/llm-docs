> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/relevancekit/relevantcontext/fitness(_:)](https://developer.apple.com/documentation/relevancekit/relevantcontext/fitness(_:))

# fitness(\_:)

**Framework:** RelevanceKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Tells the system a widget is relevant because of a person’s fitness activity.

## Declaration

```swift
static func fitness(_ condition: RelevantContext.FitnessCondition) -> RelevantContext
```

## Parameters

- `condition`: A value that describes whether a person is working out or has incomplete activity rings.

<a id="return-value"></a>

## Return Value

A contextual clue the system uses to determine the relevance of a widget in the Smart Stack on Apple Watch.

<a id="discussion"></a>

## Discussion

To indicate relevance based on a fitness condition, request permission to access HealthKit data:

- The [workoutActive](fitnesscondition/workoutactive.md) condition requires usage of [HKWorkoutType](../../healthkit/hkworkouttype.md)
- The [activityRingsIncomplete](fitnesscondition/activityringsincomplete.md) condition requires usage of [appleExerciseTime](../../healthkit/hkquantitytypeidentifier/appleexercisetime.md), [appleMoveTime](../../healthkit/hkquantitytypeidentifier/applemovetime.md), and [appleStandTime](../../healthkit/hkquantitytypeidentifier/applestandtime.md).

If contextual fitness information isn’t available to the system, fitness clues to signal relevance don’t have an effect. For more information about requesting HealthKit permissions, refer to [Authorizing access to health data](../../healthkit/authorizing-access-to-health-data.md).

> **Note**

> Smart Stacks are available in iOS, iPadOS, and watchOS. However, functionality provided by RelevanceKit API is only available in watchOS. Calling its API on other platforms doesn’t have any effect. For more information, refer to [Increasing the visibility of widgets in Smart Stacks](../../widgetkit/widget-suggestions-in-smart-stacks.md).

## See Also

### Fitness clues

- [RelevantContext.FitnessCondition](fitnesscondition.md): Values that represent a person’s fitness activity.
