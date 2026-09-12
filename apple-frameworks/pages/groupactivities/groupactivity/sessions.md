> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivity/sessions](https://developer.apple.com/documentation/groupactivities/groupactivity/sessions)

# GroupActivity.Sessions

**Framework:** Group Activities  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A type that provides asynchronous, sequential, iterated access to the sessions for the activity.

## Declaration

```swift
typealias Sessions = GroupSession<Self>.Sessions
```

<a id="discussion"></a>

## Discussion

A `Sessions` type contains a sequence of [GroupSession](../groupsession.md) objects specific to the current activity. The [sessions()](sessions%28%29.md) method returns this type, and you use it to retrieve the current session, if any, for that activity. The system creates only one [GroupSession](../groupsession.md) object for each new activity. To detect changes to the session’s state, activity type, or active participants, subscribe to the corresponding properties.

## See Also

### Receiving an activity-related session

- [sessions()](sessions%28%29.md): Returns the sessions for this activity as an asynchronous sequence.
