> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession/sessions](https://developer.apple.com/documentation/groupactivities/groupsession/sessions)

# GroupSession.Sessions

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An asynchronous sequence of sessions you use to manage a specific activity.

## Declaration

```swift
struct Sessions
```

<a id="overview"></a>

## Overview

When a participant engages one of your app’s activities, a `Sessions` structure provides the session you use to handle synchronization. Iterate over the contents of this structure asynchronously to retrieve each new session the system delivers to your app. The system delivers only one [GroupSession](../groupsession.md) for each activity. To monitor changes to that session, configure subscribers to its published properties.

Don’t create this structure directly. Instead, use the [sessions()](../groupactivity/sessions%28%29.md) method to retrieve the sessions.

## Topics

### Creating an iterator

- [GroupSession.Sessions.Iterator](sessions/iterator.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
