> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionmessenger/send(_:to:)-2a4ku](https://developer.apple.com/documentation/groupactivities/groupsessionmessenger/send(_:to:)-2a4ku)

# send(\_:to:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Sends a custom type asynchronously to other participants in the group session.

## Declaration

```swift
final func send<Message>(_ value: Message, to participants: Participants = .all) async throws where Message : Decodable, Message : Encodable
```

## Parameters

- `participants`: The recipients of the message. The default value of this parameter is the set of all active participants in the session. Use the [Participants.only(\_:)](../participants/only%28__%29-swift.enum.case.md) option to specify a subset of participants.

<a id="discussion"></a>

## Discussion

Use this method to send data that you package into a custom class or structure. The method encodes your custom structure’s type information, and delivers the data only to message sequences of the same type.

## See Also

### Sending data to the group

- [send(\_:to:)](send%28__to_%29-4o52m.md): Sends a standard data object asynchronously to other participants in the group session.
- [send(\_:to:completion:)](send%28__to_completion_%29-zufl.md): Sends a standard data object to other participants in the group session.
- [send(\_:to:completion:)](send%28__to_completion_%29-9e0sn.md): Sends a custom type to other participants in the group session.
- [Participants](../participants.md): The set of participants to include in messages.
