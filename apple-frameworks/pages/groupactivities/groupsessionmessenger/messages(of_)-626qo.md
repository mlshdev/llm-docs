> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionmessenger/messages(of:)-626qo](https://developer.apple.com/documentation/groupactivities/groupsessionmessenger/messages(of:)-626qo)

# messages(of:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the asynchronous sequence of messages that contain a generic data object.

## Declaration

```swift
final func messages(of type: Data.Type) -> GroupSessionMessenger.Messages<Data>
```

## Parameters

- `type`: The type of the [Data](../../foundation/data.md) class. Specify `Data.self`.

<a id="discussion"></a>

## Discussion

Call this method to receive the messages that other participants send to the group. This method returns a [GroupSessionMessenger.Messages](messages.md) structure, which conforms to the `AsyncSequence` protocol. This sequence contains all, some, or none of the messages sent over time. You retrieve messages by iterating over them using an asynchronous `for`-`in` loop, as shown in the following example:

```swift
let sessionMessenger = GroupSessionMessenger(session: groupSession)

async {
    for await dataMessage in sessionMessenger.messages(of: Data.self) {
        self.processDataMessage(dataMessage)
    }
}
```

## See Also

### Receiving data from other participants

- [messages(of:)](messages%28of_%29-jvoz.md): Returns the asynchronous sequence of messages that match the app-specific type.
- [GroupSessionMessenger.Messages](messages.md): An asynchronous sequence of messages sent to the session.
- [GroupSessionMessenger.MessageContext](messagecontext.md): A structure that contains additional information about an incoming message, such as which device sent it.
