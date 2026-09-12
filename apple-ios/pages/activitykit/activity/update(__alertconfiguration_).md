> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/update(_:alertconfiguration:)](https://developer.apple.com/documentation/activitykit/activity/update(_:alertconfiguration:))

# update(\_:alertConfiguration:)

**Framework:** ActivityKit  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+

Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.

## Declaration

```swift
func update(_ content: ActivityContent<Activity<Attributes>.ContentState>, alertConfiguration: AlertConfiguration? = nil) async
```

## Parameters

- `content`: The updated dynamic content for the Live Activity. The size of its [state](../activitycontent/state.md) property can’t exceed 4KB in size.
- `alertConfiguration`: The alert configuration you use to configure how the system notifies a person about the updated content of the Live Activity.

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

<a id="discussion"></a>

## Discussion

The system ignores updates to a Live Activity that’s in the [ActivityState.ended](../activitystate/ended.md) state.

## See Also

### Updating a Live Activity

- [update(\_:)](update%28__%29.md): Updates the dynamic content of the Live Activity.
- [AlertConfiguration](../alertconfiguration.md): A structure you use to configure an alert that appears when you update your Live Activity.
- [update(\_:alertConfiguration:timestamp:)](update%28__alertconfiguration_timestamp_%29.md): Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.
