> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activityuidismissalpolicy/immediate](https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy/immediate)

# immediate

**Framework:** ActivityKit  
**Kind:** Type Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The system immediately removes the Live Activity that ended.

## Declaration

```swift
static let immediate: ActivityUIDismissalPolicy
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

<a id="discussion"></a>

## Discussion

With the `immediate` dismissal policy, the system immediately removes the ended Live Activity and the [ActivityState](../activitystate.md) changes to [ActivityState.dismissed](../activitystate/dismissed.md).

## See Also

### Dismissing a Live Activity

- [default](default.md): The system’s default dismissal policy for the Live Activity.
- [after(\_:)](after%28__%29.md): The system removes the Live Activity that ended at the specified time within a four-hour window.
