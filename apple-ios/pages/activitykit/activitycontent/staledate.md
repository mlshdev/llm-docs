> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activitycontent/staledate](https://developer.apple.com/documentation/activitykit/activitycontent/staledate)

# staleDate

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.2+ · iPadOS 16.2+

The date when the system considers the Live Activity to be out of date.

## Declaration

```swift
let staleDate: Date?
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

<a id="discussion"></a>

## Discussion

When time reaches the configured stale date, the system considers the Live Activity out of date, and the [ActivityState](../activitystate.md) of the Live Activity changes to [ActivityState.stale](../activitystate/stale.md).

## See Also

### Describing a Live Activity

- [init(state:staleDate:relevanceScore:)](init%28state_staledate_relevancescore_%29.md): Creates the object that describes the state and configuration of a Live Activity.
- [state](state.md): The current state of a Live Activity in its life cycle.
- [relevanceScore](relevancescore.md): A score you assign that determines the order in which your Live Activities appear when you start several Live Activities for your app.
