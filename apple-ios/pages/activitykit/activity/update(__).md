> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/update(_:)](https://developer.apple.com/documentation/activitykit/activity/update(_:))

# update(\_:)

**Framework:** ActivityKit  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+

Updates the dynamic content of the Live Activity.

## Declaration

```swift
func update(_ content: ActivityContent<Activity<Attributes>.ContentState>) async
```

## Parameters

- `content`: The updated dynamic content for the Live Activity. The size of its [state](../activitycontent/state.md) property can’t exceed 4KB in size.

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

<a id="discussion"></a>

## Discussion

Use this function to update the Live Activity while your app is in the foreground or while it’s in the background — for example, by using [Background Tasks](https://developer.apple.com/documentation/backgroundtasks).

> **Note**

> The system ignores attempts to update a Live Activity that ended.

## See Also

### Updating a Live Activity

- [update(\_:alertConfiguration:)](update%28__alertconfiguration_%29.md): Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.
- [AlertConfiguration](../alertconfiguration.md): A structure you use to configure an alert that appears when you update your Live Activity.
- [update(\_:alertConfiguration:timestamp:)](update%28__alertconfiguration_timestamp_%29.md): Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.
