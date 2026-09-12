> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activity/end(_:dismissalpolicy:)](https://developer.apple.com/documentation/activitykit/activity/end(_:dismissalpolicy:))

# end(\_:dismissalPolicy:)

**Framework:** ActivityKit  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+

Ends an active Live Activity.

## Declaration

```swift
func end(_ content: ActivityContent<Activity<Attributes>.ContentState>?, dismissalPolicy: ActivityUIDismissalPolicy = .default) async
```

## Parameters

- `content`: The latest and final dynamic content for the Live Activity that ended. The size of the encoded content can’t exceed 4KB in size.
- `dismissalPolicy`: Describes how and when the system should dismiss a Live Activity and and remove it from the Lock Screen.

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

<a id="discussion"></a>

## Discussion

End an active Live Activity while your app is in the foreground or while it’s in the background — for example, by using [Background Tasks](https://developer.apple.com/documentation/backgroundtasks). When you end a Live Activity, include a final content update using the `content` parameter to ensure the Live Activity shows the latest and final content update after it ends. This is important because the Live Activity may remain visible until the system or the person removes it.

## See Also

### Ending a Live Activity

- [ActivityUIDismissalPolicy](../activityuidismissalpolicy.md): The structure that describes when the system should remove a Live Activity that ended.
- [end(\_:dismissalPolicy:timestamp:)](end%28__dismissalpolicy_timestamp_%29.md): Ends an active Live Activity.
