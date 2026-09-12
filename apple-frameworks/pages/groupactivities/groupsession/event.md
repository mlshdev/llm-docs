> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession/event](https://developer.apple.com/documentation/groupactivities/groupsession/event)

# GroupSession.Event

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A session-related event to display in the system UI.

## Declaration

```swift
struct Event
```

<a id="overview"></a>

## Overview

Use this structure to specify the contents of custom activity-related events. The AV Foundation framework posts media-related events to the system on your app’s behalf; create an instance of this structure if your app posts additional events that don’t route through AV Foundation.

After creating an instance of this structure, post it to the system using the [showNotice(\_:)](shownotice%28__%29.md) method of [GroupSession](../groupsession.md).

## Topics

### Getting the event details

- [originator](event/originator.md): Deprecated. The participant that initiated the event.

### Initializers

- [init(originator:localizedDescription:)](event/init%28originator_localizeddescription_%29.md): Deprecated. Conforms when `ActivityType` conforms to `GroupActivity`.

### Instance Properties

- [localizedDescription](event/localizeddescription.md): Deprecated. Conforms when `ActivityType` conforms to `GroupActivity`. A localized description of the event
