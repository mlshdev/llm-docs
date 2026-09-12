> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/action-swift.struct](https://developer.apple.com/documentation/groupactivities/groupsessionevent/action-swift.struct)

# GroupSessionEvent.Action

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A playback-related change that occurs during the session.

## Declaration

```swift
struct Action
```

<a id="overview"></a>

## Overview

Use this structure to communicate playback-related changes to participants using the system UI. You can use this structure to communicate the following types of events:

- Transport-related events for a custom player.
- Changes to a playback queue your app manages.

When a change occurs in your custom player or playback queue, create an instance of this structure to describe the change and wrap it in a [GroupSessionEvent](../groupsessionevent.md) structure. To display the event to the participant call the [showNotice(\_:)](../groupsession/shownotice%28__%29.md) method of the session. The system formats and displays the information you provide.

> **Note**

> If your app uses AV Foundation to play content, you don’t need to communicate transport-related events yourself. AV Foundation generates appropriate events when the user plays, pauses, seeks, or skips tracks.

## Topics

### Getting playback-related actions

- [play](action-swift.struct/play.md): An action that indicates the start of playback.
- [pause](action-swift.struct/pause.md): An action that indicates an end to playback.
- [seek](action-swift.struct/seek.md): An event that indicates a change to the current playback location.
- [skip(item:)](action-swift.struct/skip%28item_%29.md): Returns an event that indicates a skipped track or playback item.

### Getting change-related actions

- [updatedQueue(\_:)](action-swift.struct/updatedqueue%28__%29.md): Returns an action that represents a change to the playback queue.
- [updatedQueue](action-swift.struct/updatedqueue.md): An action that represents a nonspecific change to the queue.
- [GroupSessionEvent.Action.QueueChange](action-swift.struct/queuechange.md): A type that describes a modification to the playback queue.

## See Also

### Getting the event details

- [originator](originator.md): The participant that initiated the event.
- [url](url.md): The URL to open when the participant taps the event link in the system UI.
- [action](action-swift.property.md): The reason for the event.
