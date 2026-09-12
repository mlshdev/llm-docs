> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundremoteliveviewproxydelegate](https://developer.apple.com/documentation/playgroundsupport/playgroundremoteliveviewproxydelegate)

# PlaygroundRemoteLiveViewProxyDelegate

**Framework:** Playground Support  
**Kind:** Protocol  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A delegate you use to receive messages from the always-on live view.

## Declaration

```swift
protocol PlaygroundRemoteLiveViewProxyDelegate : AnyObject
```

## Topics

### Receiving Messages

- [remoteLiveViewProxy(\_:received:)](playgroundremoteliveviewproxydelegate/3029572-remoteliveviewproxy.md): Tells the delegate that a message was received from the always-on live view.

### Handling Connection Changes

- [remoteLiveViewProxyConnectionClosed(\_:)](playgroundremoteliveviewproxydelegate/3029573-remoteliveviewproxyconnectionclo.md): Tells the delegate that it has disconnected from the always-on live view.

## See Also

### Page-View Communication

- [Messaging Between a Playground Page and the Always-On Live View](messaging_between_a_playground_page_and_the_always-on_live_view.md): Display the results of running a playground page's code in a persistent live view.
- [PlaygroundRemoteLiveViewProxy](playgroundremoteliveviewproxy.md): A proxy that facilitates message passing between the always-on live view and its corresponding playground page.
- [PlaygroundLiveViewMessageHandler](playgroundliveviewmessagehandler.md): A handler you use to send and receive messages between the always-on live view and its corresponding playground page.
