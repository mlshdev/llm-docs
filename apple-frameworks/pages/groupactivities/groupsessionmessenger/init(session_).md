> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/groupsessionmessenger/init(session:)

# init(session:)

**Framework:** Group Activities  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new group session messenger with [GroupSessionMessenger.DeliveryMode.reliable](deliverymode-swift.enum/reliable.md) delivery mode and associates it with the specified session object.

## Declaration

```swift
init<Activity>(session: GroupSession<Activity>) where Activity : GroupActivity
```

## Parameters

- `session`: The group session to use for communication with participants. Specify a session object that is in either the [GroupSession.State.waiting](../groupsession/state-swift.enum/waiting.md) or [GroupSession.State.joined](../groupsession/state-swift.enum/joined.md) state for this parameter. However, a session must be in the joined state to send or receive messages.
