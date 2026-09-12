> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activityuidismissalpolicy/default](https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy/default)

# default

**Framework:** ActivityKit  
**Kind:** Type Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The system’s default dismissal policy for the Live Activity.

## Declaration

```swift
static let `default`: ActivityUIDismissalPolicy
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

<a id="discussion"></a>

## Discussion

With the default dismissal policy, the system keeps a Live Activity that ended on the Lock Screen for up to four hours after it ends or a person removes it. The [ActivityState](../activitystate.md) doesn’t change to [ActivityState.dismissed](../activitystate/dismissed.md) until a person or the system removes the Live Activity user interface.

## See Also

### Dismissing a Live Activity

- [immediate](immediate.md): The system immediately removes the Live Activity that ended.
- [after(\_:)](after%28__%29.md): The system removes the Live Activity that ended at the specified time within a four-hour window.
