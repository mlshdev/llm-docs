> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/participants](https://developer.apple.com/documentation/groupactivities/participants)

# Participants

**Framework:** Group Activities  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The set of participants to include in messages.

## Declaration

```swift
enum Participants
```

## Topics

### Getting the set of participants

- [Participants.all](participants/all.md): The set of all participants.
- [Participants.only(\_:)](participants/only%28__%29-swift.enum.case.md): A custom subset of participants.
- [only(\_:)](participants/only%28__%29-swift.type.method.md): Returns a set containing the specified participant.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending data to the group

- [send(\_:to:)](groupsessionmessenger/send%28__to_%29-4o52m.md): Sends a standard data object asynchronously to other participants in the group session.
- [send(\_:to:)](groupsessionmessenger/send%28__to_%29-2a4ku.md): Sends a custom type asynchronously to other participants in the group session.
- [send(\_:to:completion:)](groupsessionmessenger/send%28__to_completion_%29-zufl.md): Sends a standard data object to other participants in the group session.
- [send(\_:to:completion:)](groupsessionmessenger/send%28__to_completion_%29-9e0sn.md): Sends a custom type to other participants in the group session.
