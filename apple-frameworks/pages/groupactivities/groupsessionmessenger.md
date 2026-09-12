> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionmessenger](https://developer.apple.com/documentation/groupactivities/groupsessionmessenger)

# GroupSessionMessenger

**Framework:** Group Activities  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that transfers app-specific data between the devices joined in a group session.

## Declaration

```swift
final class GroupSessionMessenger
```

## Mentioned In

- [Synchronizing data during a SharePlay activity](synchronizing-data-during-a-shareplay-activity.md)
- [Configure your visionOS app for sharing with people nearby](configure-your-app-for-sharing-with-people-nearby.md)

<a id="overview"></a>

## Overview

Use a `GroupSessionMessenger` object to coordinate your app’s behavior across the devices attached to a group session. This object leverages the existing FaceTime communication channel to send app-specific data related to a SharePlay experience. For example, a movie-watching app might share user comments or tags while the movie plays.

You create a `GroupSessionMessenger` object directly and use it to send and receive app data. Create the messenger using an active [GroupSession](groupsession.md) object, which manages the underlying communication channel. Store a strong reference to your `GroupSessionMessenger` object for the lifetime of the session. The following example shows a custom object for managing a movie-watching experience. The object stores the GroupSession object associated with the experience and creates a `GroupSessionMessenger` for sending messages between participants.

```swift
class CowatchingExperience : ObservableObject {
    let groupSession: GroupSession<Trailer>
    let messenger: GroupSessionMessenger

    init(groupSession: GroupSession<Trailer>, item: Trailer) {
        self.groupSession = groupSession
        self.messenger = GroupSessionMessenger(session: groupSession)

        self.groupSession.join()
        // …
    }
}
```

For more information about establishing a group session, see [GroupSession](groupsession.md).

<a id="Receive-Messages-from-Other-Devices"></a>

### Receive Messages from Other Devices

The system delivers messages to your app asynchronously when they arrive and adds them to a message sequence. Use the [messages(of:)](groupsessionmessenger/messages%28of_%29-626qo.md) or [messages(of:)](groupsessionmessenger/messages%28of_%29-jvoz.md) method to retrieve the sequence you want and iterate over its results. Use a `for`-`in` loop with the `await` keyword to iterate asynchronously over the results. The following example shows how a Tic Tac Toe game might retrieve moves sent by the current opponent. After receiving each move, the code adds that move to the current participant’s board.

```swift
let sessionMessenger = GroupSessionMessenger(session: groupSession)

async {
    for await move in sessionMessenger.messages(of: TicTacToe.Move.self) {
        self.board.addMove(move)
    }
}
```

## Topics

### Creating a group session messenger

- [init(session:)](groupsessionmessenger/init%28session_%29.md): Creates a new group session messenger with [GroupSessionMessenger.DeliveryMode.reliable](groupsessionmessenger/deliverymode-swift.enum/reliable.md) delivery mode and associates it with the specified session object.

### Sending data to the group

- [send(\_:to:)](groupsessionmessenger/send%28__to_%29-4o52m.md): Sends a standard data object asynchronously to other participants in the group session.
- [send(\_:to:)](groupsessionmessenger/send%28__to_%29-2a4ku.md): Sends a custom type asynchronously to other participants in the group session.
- [send(\_:to:completion:)](groupsessionmessenger/send%28__to_completion_%29-zufl.md): Sends a standard data object to other participants in the group session.
- [send(\_:to:completion:)](groupsessionmessenger/send%28__to_completion_%29-9e0sn.md): Sends a custom type to other participants in the group session.
- [Participants](participants.md): The set of participants to include in messages.

### Receiving data from other participants

- [messages(of:)](groupsessionmessenger/messages%28of_%29-626qo.md): Returns the asynchronous sequence of messages that contain a generic data object.
- [messages(of:)](groupsessionmessenger/messages%28of_%29-jvoz.md): Returns the asynchronous sequence of messages that match the app-specific type.
- [GroupSessionMessenger.Messages](groupsessionmessenger/messages.md): An asynchronous sequence of messages sent to the session.
- [GroupSessionMessenger.MessageContext](groupsessionmessenger/messagecontext.md): A structure that contains additional information about an incoming message, such as which device sent it.

### Initializers

- [init(session:deliveryMode:)](groupsessionmessenger/init%28session_deliverymode_%29.md): Creates a new group session messenger with the specified delivery mode, [GroupSessionMessenger.DeliveryMode](groupsessionmessenger/deliverymode-swift.enum.md), and associates it with the specified session object.

### Instance Properties

- [deliveryMode](groupsessionmessenger/deliverymode-swift.property.md): The [GroupSessionMessenger.DeliveryMode](groupsessionmessenger/deliverymode-swift.enum.md) specified at initialization time (defaults to `reliable`).

### Enumerations

- [GroupSessionMessenger.DeliveryMode](groupsessionmessenger/deliverymode-swift.enum.md): The transmission characteristics to apply to the delivery of messages.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### File and data transfer

- [Creating a collaborative photo gallery with SharePlay](creating-a-collaborative-photo-gallery-with-shareplay.md): Build a shared photo gallery by using SharePlay to synchronize images among participants.
- [Synchronizing data during a SharePlay activity](synchronizing-data-during-a-shareplay-activity.md): Send custom messages and data between devices to synchronize content for your activity, and incorporate messages your app receives from other participants.
- [GroupSessionJournal](groupsessionjournal.md): An object that manages file and data transfers between participants joined in a group session.
