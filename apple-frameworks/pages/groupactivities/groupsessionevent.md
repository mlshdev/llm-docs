> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent](https://developer.apple.com/documentation/groupactivities/groupsessionevent)

# GroupSessionEvent

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A session-related event that appears in the system UI.

## Declaration

```swift
struct GroupSessionEvent
```

<a id="overview"></a>

## Overview

Use this structure to specify the contents of custom activity-related events. The AV Foundation framework posts media-related events to the system on your app’s behalf; create an instance of this structure if your app posts additional events that don’t route through AV Foundation.

After creating an instance of this structure, post it to the system using the [showNotice(\_:)](groupsession/shownotice%28__%29.md) method of [GroupSession](groupsession.md).

## Topics

### Creating a group session event

- [init(originator:action:url:)](groupsessionevent/init%28originator_action_url_%29.md): Creates a new event with the specified participant and action details.

### Getting the event details

- [originator](groupsessionevent/originator.md): The participant that initiated the event.
- [url](groupsessionevent/url.md): The URL to open when the participant taps the event link in the system UI.
- [action](groupsessionevent/action-swift.property.md): The reason for the event.
- [GroupSessionEvent.Action](groupsessionevent/action-swift.struct.md): A playback-related change that occurs during the session.

## See Also

### Notifying participants of playback changes

- [showNotice(\_:)](groupsession/shownotice%28__%29.md): Conforms when `ActivityType` conforms to `GroupActivity`. Posts an event to the system, which displays the information in the system UI.
