> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundremoteliveviewproxydelegate/3029572-remoteliveviewproxy](https://developer.apple.com/documentation/playgroundsupport/playgroundremoteliveviewproxydelegate/3029572-remoteliveviewproxy)

# remoteLiveViewProxy(\_:received:)

**Framework:** Playground Support  
**Kind:** Instance Method  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

Tells the delegate that a message was received from the always-on live view.

## Declaration

```swift
func remoteLiveViewProxy(_ remoteLiveViewProxy: PlaygroundRemoteLiveViewProxy, received message: PlaygroundValue)
```

## Parameters

- `remoteLiveViewProxy`: The local proxy for the remote always-on live view.
- `message`: A message sent to the playground page from the always-on live view.
