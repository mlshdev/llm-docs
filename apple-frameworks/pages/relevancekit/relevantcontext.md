> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/relevancekit/relevantcontext](https://developer.apple.com/documentation/relevancekit/relevantcontext)

# RelevantContext

**Framework:** RelevanceKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Contextual clues the system uses to show relevant widgets in the Smart Stack on watchOS.

## Declaration

```swift
struct RelevantContext
```

<a id="overview"></a>

## Overview

> **Note**

> Smart Stacks are available in iOS, iPadOS, and watchOS. However, functionality provided by RelevanceKit API is only available in watchOS. Calling its API on other platforms doesn’t have any effect. For more information about widgets in Smart Stacks, refer to [Increasing the visibility of widgets in Smart Stacks](../widgetkit/widget-suggestions-in-smart-stacks.md).

## Topics

### Fitness clues

- [fitness(\_:)](relevantcontext/fitness%28__%29.md): Tells the system a widget is relevant because of a person’s fitness activity.
- [RelevantContext.FitnessCondition](relevantcontext/fitnesscondition.md): Values that represent a person’s fitness activity.

### Hardware clues

- [hardware(headphones:)](relevantcontext/hardware%28headphones_%29.md): Tells the system a widget is relevant when a person’s headphones are connected.
- [RelevantContext.HeadphonesCondition](relevantcontext/headphonescondition.md): A structure that indicates whether a person’s headphones are connected.

### Location clues

- [location(category:)](relevantcontext/location%28category_%29.md): Tells the system a widget is relevant close to points of interest of a specific category.
- [location(\_:)](relevantcontext/location%28__%29.md): Tells the system a widget is relevant at a specific location.
- [location(inferred:)](relevantcontext/location%28inferred_%29.md): Tells the system a widget is relevant at a person’s inferred location.
- [RelevantContext.InferredLocation](relevantcontext/inferredlocation.md): A structure with values for a person’s inferred home, work, school, and commute locations.

### Sleep clues

- [sleep(\_:)](relevantcontext/sleep%28__%29.md): Tells the system a widget is relevant because of a person’s sleep schedule.
- [RelevantContext.SleepCondition](relevantcontext/sleepcondition.md): Values that represent a person’s typical bedtime or wakeup time.

### Time clues

- [date(\_:)](relevantcontext/date%28__%29.md): Tells the system a widget is relevant at a specific date.
- [date(\_:kind:)](relevantcontext/date%28__kind_%29.md): Tells the system a widget is relevant at a specific date and provides an additional contextual hint.
- [date(interval:kind:)](relevantcontext/date%28interval_kind_%29.md): Tells the system a widget is relevant for a time interval and provides an additional contextual hint.
- [date(range:kind:)](relevantcontext/date%28range_kind_%29.md): Tells the system a widget is relevant for a known date range and provides an additional contextual hint.
- [RelevantContext.DateKind](relevantcontext/datekind.md): Values the system uses as additional context for time-based relevance clues.
- [date(from:to:)](relevantcontext/date%28from_to_%29.md): Deprecated. Tells the system a widget is relevant between two dates.

## See Also

### Providing relevance information

- [Increasing the visibility of widgets in Smart Stacks](../widgetkit/widget-suggestions-in-smart-stacks.md): Provide contextual information and donate intents to the system to make sure your widget appears prominently in Smart Stacks.
