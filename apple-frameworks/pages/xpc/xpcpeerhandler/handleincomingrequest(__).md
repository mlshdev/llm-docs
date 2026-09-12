> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcpeerhandler/handleincomingrequest(_:)](https://developer.apple.com/documentation/xpc/xpcpeerhandler/handleincomingrequest(_:))

# handleIncomingRequest(\_:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A closure that receives a message from a client and optionally provides a reply.

## Declaration

```swift
func handleIncomingRequest(_: Self.Input) -> Self.Output?
```

<a id="return-value"></a>

## Return Value

A response message, if any, to send back to the client; otherwise [nil](../../objectivec/nil-227m0.md).

<a id="Discussion"></a>

## Discussion

If the closure returns [nil](../../objectivec/nil-227m0.md), you can still send use [send(message:)](../xpcsession/send%28message_%29.md) to send an asynchronous reply after handling the message.

## See Also

### Receiving client messages

- [Input](input.md): A type that represents a message from a client.
- [Output](output.md): A type that represents a response to an incoming request.
