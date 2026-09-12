> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activitycontent/relevancescore](https://developer.apple.com/documentation/activitykit/activitycontent/relevancescore)

# relevanceScore

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.2+ · iPadOS 16.2+

A score you assign that determines the order in which your Live Activities appear when you start several Live Activities for your app.

## Declaration

```swift
let relevanceScore: Double
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

<a id="discussion"></a>

## Discussion

If you start more than one Live Activity in your app, the Live Activity with the highest relevance score appears in the Dynamic Island. If Live Activities have the same relevance score, the system displays the Live Activity that started first. Additionally, the `relevanceScore` determines the order of your Live Activities on the Lock Screen.

## See Also

### Describing a Live Activity

- [init(state:staleDate:relevanceScore:)](init%28state_staledate_relevancescore_%29.md): Creates the object that describes the state and configuration of a Live Activity.
- [state](state.md): The current state of a Live Activity in its life cycle.
- [staleDate](staledate.md): The date when the system considers the Live Activity to be out of date.
