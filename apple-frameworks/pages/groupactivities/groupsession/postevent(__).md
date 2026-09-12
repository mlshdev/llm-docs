> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession/postevent(_:)](https://developer.apple.com/documentation/groupactivities/groupsession/postevent(_:))

# postEvent(\_:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Posts an event to the system, which displays the information in the system UI.

> Use GroupSessionEvent

## Declaration

```swift
final func postEvent(_ event: GroupSession<ActivityType>.Event)
```

## Parameters

- `event`: The event to display in the system UI.

<a id="discussion"></a>

## Discussion

Call this method to update the system’s UI with information about session-related events. For example, a music-listening app might post an event to notify the group that a participant added a song to a shared playlist. The system displays the event information only on the current device. It doesn’t forward events to other devices.
