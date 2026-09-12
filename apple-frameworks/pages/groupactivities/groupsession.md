> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession](https://developer.apple.com/documentation/groupactivities/groupsession)

# GroupSession

**Framework:** Group Activities  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A session for an in-progress activity that synchronizes content among participant devices.

## Declaration

```swift
final class GroupSession<ActivityType> where ActivityType : GroupActivity
```

## Mentioned In

- [Joining and managing a shared activity](joining-and-managing-a-shared-activity.md)
- [Adding spatial Persona support to an activity](adding-spatial-persona-support-to-an-activity.md)
- [Synchronizing data during a SharePlay activity](synchronizing-data-during-a-shareplay-activity.md)

<a id="overview"></a>

## Overview

A `GroupSession` object contains details about the user’s currently selected activity, its status, and its participants. When a participant engages in an activity, the system binds a session to that activity for you. You use the session object to synchronize your app’s activity-related content, including your app’s UI.

You don’t create `GroupSession` objects directly. Instead, the system creates sessions and makes them available to your app asynchronously. Use the `AsyncSequence` type returned by the [sessions()](groupactivity/sessions%28%29.md) method of your activity to retrieve new sessions when they become available.

Before the system can create a session object, your app must create a `GroupActivity` object and activate it. For information about how to configure group activities, see [GroupActivity](groupactivity.md).

<a id="Start-and-Stop-the-Session"></a>

### Start and Stop the Session

When you receive a new session object, it’s initially in the [GroupSession.State.waiting](groupsession/state-swift.enum/waiting.md) state. As soon as your app is ready to begin the associated activity, call the session’s [join()](groupsession/join%28%29.md) method. Joining a session validates the connection and starts the synchronization process between the current device and other participants’ devices. If your app successfully joins the session, the session transitions to the [GroupSession.State.joined](groupsession/state-swift.enum/joined.md) state.

When the user quits your app, or navigates away from the shared activity, call the session’s [leave()](groupsession/leave%28%29.md) method. Leaving a session gracefully transitions it to the [GroupSession.State.invalidated(reason:)](groupsession/state-swift.enum/invalidated%28reason_%29.md) state, and informs the system that the user isn’t currently engaged in the activity.

## Topics

### Getting the current session

- [GroupSession.Sessions](groupsession/sessions.md): Conforms when `ActivityType` conforms to `GroupActivity`. An asynchronous sequence of sessions you use to manage a specific activity.

### Joining and leaving the session

- [join()](groupsession/join%28%29.md): Starts the shared activity on the current device.
- [leave()](groupsession/leave%28%29.md): Leaves the current activity and stops receiving synchronized data.
- [end()](groupsession/end%28%29.md): Ends the activity for the entire group and stops the transfer of synchronized data.

### Accessing the shared activity

- [activity](groupsession/activity.md): The current activity associated with the session.

### Getting the session details

- [state](groupsession/state-swift.property.md): The current state of the session.
- [GroupSession.State](groupsession/state-swift.enum.md): The possible states of a session.
- [id](groupsession/id.md): The unique identifier of the current session.

### Getting the participants

- [localParticipant](groupsession/localparticipant.md): The participant on the current device.
- [activeParticipants](groupsession/activeparticipants.md): The set of participants currently engaged in the activity.

### Getting the scene-association identifier

- [sceneSessionIdentifier](groupsession/scenesessionidentifier.md): The persistent identifier of the session’s associated scene.

### Getting the participant’s attention

- [requestForegroundPresentation()](groupsession/requestforegroundpresentation%28%29.md): Tells the system that your app needs to be in the foreground to continue an activity.

### Notifying participants of playback changes

- [showNotice(\_:)](groupsession/shownotice%28__%29.md): Conforms when `ActivityType` conforms to `GroupActivity`. Posts an event to the system, which displays the information in the system UI.
- [GroupSessionEvent](groupsessionevent.md): A session-related event that appears in the system UI.

### Structures

- [GroupSession.Event](groupsession/event.md): Deprecated. Conforms when `ActivityType` conforms to `GroupActivity`. A session-related event to display in the system UI.

### Instance Properties

- [$activeParticipants](groupsession/$activeparticipants.md)
- [$activity](groupsession/$activity.md)
- [$state](groupsession/$state.md)
- [isLocallyInitiated](groupsession/islocallyinitiated.md): A Boolean value that is true if the current session was created by the local participant.
- [systemCoordinator](groupsession/systemcoordinator.md): Conforms when `ActivityType` conforms to `GroupActivity`. The system coordinator associated with an active session.

### Instance Methods

- [postEvent(\_:)](groupsession/postevent%28__%29.md): Deprecated. Conforms when `ActivityType` conforms to `GroupActivity`. Posts an event to the system, which displays the information in the system UI.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ObservableObject](../combine/observableobject.md)

## See Also

### Session management

- [Joining and managing a shared activity](joining-and-managing-a-shared-activity.md): Configure the session when a SharePlay activity starts, and handle events that occur during the lifetime of the activity.
- [Drawing content in a group session](drawing-content-in-a-group-session.md): Invite your friends to draw on a shared canvas while on a FaceTime call.
- [CustomMessageIdentifiable](custommessageidentifiable.md): A type that assigns a custom ID string to messages you send to other devices.
- [Participant](participant.md): An active participant in a group session.
