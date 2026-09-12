> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundremoteliveviewproxy](https://developer.apple.com/documentation/playgroundsupport/playgroundremoteliveviewproxy)

# PlaygroundRemoteLiveViewProxy

**Framework:** Playground Support  
**Kind:** Class  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A proxy that facilitates message passing between the always-on live view and its corresponding playground page.

## Declaration

```swift
class PlaygroundRemoteLiveViewProxy
```

<a id="overview"></a>

## Overview

Because playground pages and the always-on live view run in separate processes, you use a [PlaygroundRemoteLiveViewProxy](playgroundremoteliveviewproxy.md) as a wrapper for communicating with the always-on live view.

An instance of [PlaygroundRemoteLiveViewProxy](playgroundremoteliveviewproxy.md) is automatically created when you've configured the always-on live view in a playground page's `LiveView.swift` file. It's assigned as the value of `PlaygroundPage.current.liveView` only when using always-on live view. Otherwise, that property is `nil` or a local view.

<a id="3036822"></a>

**Listing 1**

```swift
guard let remoteView = PlaygroundPage.current.liveView as? PlaygroundRemoteLiveViewProxy else {
    fatalError("The always-on live view wasn't configured in this page's LiveView.swift.")
}
```

## Topics

### Sending Messages

- [send(\_:)](playgroundremoteliveviewproxy/3029570-send.md): Sends a message to the always-on live view.

### Receiving Messages

- [delegate](playgroundremoteliveviewproxy/3029565-delegate.md): A delegate you use to handle messages from the live view.
- [receive(\_:)](playgroundremoteliveviewproxy/3029569-receive.md): Allows the proxy to receive a live view message from a remote object.

### Handling Connection Changes

- [liveViewMessageConnectionOpened()](playgroundremoteliveviewproxy/3029567-liveviewmessageconnectionopened.md): Informs the proxy that it has connected to a remote object.
- [liveViewMessageConnectionClosed()](playgroundremoteliveviewproxy/3029566-liveviewmessageconnectionclosed.md): Informs the proxy that the connection between the proxy and the remote object was closed.

### Inspecting Live View Proxies

- [playgroundLiveViewRepresentation](playgroundremoteliveviewproxy/3029568-playgroundliveviewrepresentation.md): Deprecated. A representation of the live view that this object is a proxy for.

## Relationships

### Conforms To

- [PlaygroundLiveViewMessageHandler](playgroundliveviewmessagehandler.md)
- [PlaygroundLiveViewable](playgroundliveviewable.md)

## See Also

### Page-View Communication

- [Messaging Between a Playground Page and the Always-On Live View](messaging_between_a_playground_page_and_the_always-on_live_view.md): Display the results of running a playground page's code in a persistent live view.
- [PlaygroundRemoteLiveViewProxyDelegate](playgroundremoteliveviewproxydelegate.md): A delegate you use to receive messages from the always-on live view.
- [PlaygroundLiveViewMessageHandler](playgroundliveviewmessagehandler.md): A handler you use to send and receive messages between the always-on live view and its corresponding playground page.
