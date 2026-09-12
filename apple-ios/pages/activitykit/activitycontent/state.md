> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activitycontent/state](https://developer.apple.com/documentation/activitykit/activitycontent/state)

# state

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.2+ · iPadOS 16.2+

The current state of a Live Activity in its life cycle.

## Declaration

```swift
let state: State
```

<a id="discussion"></a>

## Discussion

This value is the same as [activityState](../activity/activitystate.md).

## See Also

### Describing a Live Activity

- [init(state:staleDate:relevanceScore:)](init%28state_staledate_relevancescore_%29.md): Creates the object that describes the state and configuration of a Live Activity.
- [staleDate](staledate.md): The date when the system considers the Live Activity to be out of date.
- [relevanceScore](relevancescore.md): A score you assign that determines the order in which your Live Activities appear when you start several Live Activities for your app.
