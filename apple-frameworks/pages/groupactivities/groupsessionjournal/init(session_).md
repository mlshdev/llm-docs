> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionjournal/init(session:)](https://developer.apple.com/documentation/groupactivities/groupsessionjournal/init(session:))

# init(session:)

**Framework:** Group Activities  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a journal and associates it with the specified session of a group activity.

## Declaration

```swift
convenience init<Activity>(session: GroupSession<Activity>) where Activity : GroupActivity
```

## Parameters

- `session`: The session you use for communicating with participants. The session must be in the [GroupSession.State.waiting](../groupsession/state-swift.enum/waiting.md) or [GroupSession.State.joined](../groupsession/state-swift.enum/joined.md) state when you create the journal, and the session must be in the [GroupSession.State.joined](../groupsession/state-swift.enum/joined.md) state before you can send or receive attachments.

<a id="return-value"></a>

## Return Value

A [GroupSessionJournal](../groupsessionjournal.md) object configured for the specified session.
