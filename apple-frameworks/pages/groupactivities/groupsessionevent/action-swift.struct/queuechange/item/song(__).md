> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange/item/song(_:)](https://developer.apple.com/documentation/groupactivities/groupsessionevent/action-swift.struct/queuechange/item/song(_:))

# song(\_:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates an item that contains the name of a song.

## Declaration

```swift
static func song(_ name: String) -> GroupSessionEvent.Action.QueueChange.Item
```

## Parameters

- `name`: The name of the song.

<a id="discussion"></a>

## Discussion

When a participant adds a song or changes the next song in the queue, call this method to create an item with the song name. When you show the change notice, SharePlay displays the song name to the participant.

## See Also

### Creating the item

- [container(\_:)](container%28__%29.md): Creates an item that contains the name of a container.
