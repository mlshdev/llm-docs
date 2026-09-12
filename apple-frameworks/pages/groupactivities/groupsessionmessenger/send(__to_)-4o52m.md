> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionmessenger/send(_:to:)-4o52m](https://developer.apple.com/documentation/groupactivities/groupsessionmessenger/send(_:to:)-4o52m)

# send(\_:to:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Sends a standard data object asynchronously to other participants in the group session.

## Declaration

```swift
final func send(_ value: Data, to participants: Participants = .all) async throws
```

## Parameters

- `participants`: The recipients of the message. The default value of this parameter is the set of all active participants in the session. Use the [Participants.only(\_:)](../participants/only%28__%29-swift.enum.case.md) option to specify a subset of participants.

<a id="discussion"></a>

## Discussion

Use this method to send data with a standard data object. Your app is responsible for decoding and using the data it receives.

## See Also

### Sending data to the group

- [send(\_:to:)](send%28__to_%29-2a4ku.md): Sends a custom type asynchronously to other participants in the group session.
- [send(\_:to:completion:)](send%28__to_completion_%29-zufl.md): Sends a standard data object to other participants in the group session.
- [send(\_:to:completion:)](send%28__to_completion_%29-9e0sn.md): Sends a custom type to other participants in the group session.
- [Participants](../participants.md): The set of participants to include in messages.
