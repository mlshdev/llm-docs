> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange/item](https://developer.apple.com/documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange/item)

# GroupSessionEvent.Action.QueueChange.Item

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Detailed information about an item involved in a queue change.

## Declaration

```swift
struct Item
```

<a id="overview"></a>

## Overview

Before you notify a participant about a queue-related change, create an item that contains the name of the song or container that changed. Use this item to configure a [GroupSessionEvent.Action.QueueChange](../queuechange.md) structure with additional details about the change.

## Topics

### Creating the item

- [song(\_:)](item/song%28__%29.md): Creates an item that contains the name of a song.
- [container(\_:)](item/container%28__%29.md): Creates an item that contains the name of a container.
