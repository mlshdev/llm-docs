> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activitycontent/init(state:staledate:relevancescore:)](https://developer.apple.com/documentation/activitykit/activitycontent/init(state:staledate:relevancescore:))

# init(state:staleDate:relevanceScore:)

**Framework:** ActivityKit  
**Kind:** Initializer  
**Availability:** iOS 16.2+ · iPadOS 16.2+

Creates the object that describes the state and configuration of a Live Activity.

## Declaration

```swift
init(state: State, staleDate: Date?, relevanceScore: Double = 0.0)
```

## See Also

### Describing a Live Activity

- [state](state.md): The current state of a Live Activity in its life cycle.
- [staleDate](staledate.md): The date when the system considers the Live Activity to be out of date.
- [relevanceScore](relevancescore.md): A score you assign that determines the order in which your Live Activities appear when you start several Live Activities for your app.
