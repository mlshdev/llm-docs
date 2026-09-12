> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/relevancekit/relevantcontext/hardware(headphones:)](https://developer.apple.com/documentation/relevancekit/relevantcontext/hardware(headphones:))

# hardware(headphones:)

**Framework:** RelevanceKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Tells the system a widget is relevant when a person’s headphones are connected.

## Declaration

```swift
static func hardware(headphones: RelevantContext.HeadphonesCondition) -> RelevantContext
```

## Parameters

- `headphones`: A value that indicates connected headphones.

<a id="return-value"></a>

## Return Value

A contextual clue that the system uses to determine the relevance of a widget in the Smart Stack on Apple Watch.

<a id="discussion"></a>

## Discussion

Setting a [RelevantContext.HeadphonesCondition](headphonescondition.md) to signal relevance to the system doesn’t give you access to fitness activity and information. If contextual fitness information isn’t available to the system, fitness clues to signal relevance don’t have an effect.

> **Note**

> Smart Stacks are available in iOS, iPadOS, and watchOS. However, functionality provided by RelevanceKit API is only available in watchOS. Calling its API on other platforms doesn’t have any effect. For more information, refer to [Increasing the visibility of widgets in Smart Stacks](../../widgetkit/widget-suggestions-in-smart-stacks.md).

## See Also

### Hardware clues

- [RelevantContext.HeadphonesCondition](headphonescondition.md): A structure that indicates whether a person’s headphones are connected.
