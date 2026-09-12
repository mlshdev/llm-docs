> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession/id](https://developer.apple.com/documentation/groupactivities/groupsession/id)

# id

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The unique identifier of the current session.

## Declaration

```swift
final let id: UUID
```

<a id="discussion"></a>

## Discussion

The system assigns a globally unique identifier to each session. This identifier is valid only for the lifetime of the session object.

## See Also

### Getting the session details

- [state](state-swift.property.md): The current state of the session.
- [GroupSession.State](state-swift.enum.md): The possible states of a session.
