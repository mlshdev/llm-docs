> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activityuidismissalpolicy/after(_:)](https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy/after(_:))

# after(\_:)

**Framework:** ActivityKit  
**Kind:** Type Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The system removes the Live Activity that ended at the specified time within a four-hour window.

## Declaration

```swift
static func after(_ date: Date) -> ActivityUIDismissalPolicy
```

## Parameters

- `date`: A date within a four-hour window from the moment the Live Activity ends.

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

<a id="discussion"></a>

## Discussion

Provide a date to tell the system when it should remove a Live Activity that ended. While you can provide any date, the system removes a Live Activity that ended after the specified date or after four hours from the moment the Live Activity ended — whichever comes first. When the system removes the Live Activity,  the [ActivityState](../activitystate.md) changes to [ActivityState.dismissed](../activitystate/dismissed.md).

## See Also

### Dismissing a Live Activity

- [default](default.md): The system’s default dismissal policy for the Live Activity.
- [immediate](immediate.md): The system immediately removes the Live Activity that ended.
