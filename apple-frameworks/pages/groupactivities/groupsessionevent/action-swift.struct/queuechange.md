> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange](https://developer.apple.com/documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange)

# GroupSessionEvent.Action.QueueChange

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A type that describes a modification to the playback queue.

## Declaration

```swift
struct QueueChange
```

<a id="overview"></a>

## Overview

Use this type to inform the participant about changes to the playback queue associated with the current activity. Your app manages the queue, along with any additions or changes. You use this type to communicate those changes back to the participant using the system UI.

When a change occurs, configure this type with information about the change, and wrap it in a [GroupSessionEvent.Action](../action-swift.struct.md) type. Pass the action to the [showNotice(\_:)](../../groupsession/shownotice%28__%29.md) method to display the change to the participant.

## Topics

### Specifying the type of change

- [added(\_:)](queuechange/added%28__%29.md): Returns a queue change for an added item.
- [setUpNext(\_:)](queuechange/setupnext%28__%29.md): Returns a queue change for a new up-next item.

### Getting the changed item

- [GroupSessionEvent.Action.QueueChange.Item](queuechange/item.md): Detailed information about an item involved in a queue change.

## See Also

### Getting change-related actions

- [updatedQueue(\_:)](updatedqueue%28__%29.md): Returns an action that represents a change to the playback queue.
- [updatedQueue](updatedqueue.md): An action that represents a nonspecific change to the queue.
