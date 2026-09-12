> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/action-swift.struct/skip(item:)](https://developer.apple.com/documentation/groupactivities/groupsessionevent/action-swift.struct/skip(item:))

# skip(item:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns an event that indicates a skipped track or playback item.

## Declaration

```swift
static func skip(item: String) -> GroupSessionEvent.Action
```

## Parameters

- `item`: The name of the skipped item.

<a id="discussion"></a>

## Discussion

This function creates an action that represents a skipped playback item. If your app’s activity manages a playlist of items, you might use this action to indicate a participant skipped an item. For example, you might name a skipped song in a shared playlist.

## See Also

### Getting playback-related actions

- [play](play.md): An action that indicates the start of playback.
- [pause](pause.md): An action that indicates an end to playback.
- [seek](seek.md): An event that indicates a change to the current playback location.
