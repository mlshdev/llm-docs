> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/relevancekit/relevantcontext/sleep(_:)](https://developer.apple.com/documentation/relevancekit/relevantcontext/sleep(_:))

# sleep(\_:)

**Framework:** RelevanceKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Tells the system a widget is relevant because of a person’s sleep schedule.

## Declaration

```swift
static func sleep(_ condition: RelevantContext.SleepCondition) -> RelevantContext
```

## Parameters

- `condition`: A value that describes a person’s typical bedtime or wakeup time.

<a id="return-value"></a>

## Return Value

A contextual clue that the system uses to determine the relevance of a widget in the Smart Stack on Apple Watch.

<a id="discussion"></a>

## Discussion

To indicate relevance based on a sleep condition, request the [sleepAnalysis](../../healthkit/hkcategorytypeidentifier/sleepanalysis.md) permission. If contextual sleep information isn’t available to the system, sleep clues to signal relevance don’t have an effect. For more information about requesting HealthKit permissions, refer to [Authorizing access to health data](../../healthkit/authorizing-access-to-health-data.md).

> **Note**

> Smart Stacks are available in iOS, iPadOS, and watchOS. However, functionality provided by RelevanceKit API is only available in watchOS. Calling its API on other platforms doesn’t have any effect. For more information, refer to [Increasing the visibility of widgets in Smart Stacks](../../widgetkit/widget-suggestions-in-smart-stacks.md).

## See Also

### Sleep clues

- [RelevantContext.SleepCondition](sleepcondition.md): Values that represent a person’s typical bedtime or wakeup time.
