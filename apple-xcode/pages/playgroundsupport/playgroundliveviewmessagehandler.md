> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundliveviewmessagehandler](https://developer.apple.com/documentation/playgroundsupport/playgroundliveviewmessagehandler)

# PlaygroundLiveViewMessageHandler

**Framework:** Playground Support  
**Kind:** Protocol  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A handler you use to send and receive messages between the always-on live view and its corresponding playground page.

## Declaration

```swift
protocol PlaygroundLiveViewMessageHandler : AnyObject
```

## Topics

### Sending Messages

- [send(\_:)](playgroundliveviewmessagehandler/3029542-send.md): Allows the handler to send a message to a remote object.

### Receiving Messages

- [receive(\_:)](playgroundliveviewmessagehandler/3029540-receive.md): Allows the handler to receive a live view message from a remote object.

### Handling Connection Changes

- [liveViewMessageConnectionOpened()](playgroundliveviewmessagehandler/3029538-liveviewmessageconnectionopened.md): Informs the handler that it has connected to a remote object.
- [liveViewMessageConnectionClosed()](playgroundliveviewmessagehandler/3029536-liveviewmessageconnectionclosed.md): Informs the handler that the connection between the proxy and the remote object was closed.

## Relationships

### Conforming Types

- [PlaygroundRemoteLiveViewProxy](playgroundremoteliveviewproxy.md)

## See Also

### Page-View Communication

- [Messaging Between a Playground Page and the Always-On Live View](messaging_between_a_playground_page_and_the_always-on_live_view.md): Display the results of running a playground page's code in a persistent live view.
- [PlaygroundRemoteLiveViewProxy](playgroundremoteliveviewproxy.md): A proxy that facilitates message passing between the always-on live view and its corresponding playground page.
- [PlaygroundRemoteLiveViewProxyDelegate](playgroundremoteliveviewproxydelegate.md): A delegate you use to receive messages from the always-on live view.
