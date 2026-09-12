> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange/item/container(_:)](https://developer.apple.com/documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange/item/container(_:))

# container(\_:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates an item that contains the name of a container.

## Declaration

```swift
static func container(_ name: String) -> GroupSessionEvent.Action.QueueChange.Item
```

## Parameters

- `name`: The name of the container.

<a id="discussion"></a>

## Discussion

When a participant changes an entire queue, call this method to create an item with the queue name. When you show the change notice, SharePlay displays the container name to the participant.

## See Also

### Creating the item

- [song(\_:)](song%28__%29.md): Creates an item that contains the name of a song.
