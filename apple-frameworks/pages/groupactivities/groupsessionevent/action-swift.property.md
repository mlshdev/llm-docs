> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionevent/action-swift.property](https://developer.apple.com/documentation/groupactivities/groupsessionevent/action-swift.property)

# action

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The reason for the event.

## Declaration

```swift
let action: GroupSessionEvent.Action
```

<a id="discussion"></a>

## Discussion

The system uses this information to craft a message in the system UI.

## See Also

### Getting the event details

- [originator](originator.md): The participant that initiated the event.
- [url](url.md): The URL to open when the participant taps the event link in the system UI.
- [GroupSessionEvent.Action](action-swift.struct.md): A playback-related change that occurs during the session.
