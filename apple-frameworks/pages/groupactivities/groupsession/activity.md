> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession/activity](https://developer.apple.com/documentation/groupactivities/groupsession/activity)

# activity

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The current activity associated with the session.

## Declaration

```swift
@Published<ActivityType> final var activity: ActivityType { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to fetch information about the selected activity. The value in this property conforms to the [GroupActivity](../groupactivity.md) protocol. Use it to fetch the activity details.

The participants of a session may change the current activity at any time, and the session updates this property dynamically to reflect any changes. Subscribe to the property to listen for changes, and update your app’s activity to match.

> **Important**

> Update this property only when the activity is in the [GroupSession.State.joined](state-swift.enum/joined.md) state; otherwise, the behavior is undefined.
