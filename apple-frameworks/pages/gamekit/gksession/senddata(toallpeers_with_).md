> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/senddata(toallpeers:with:)](https://developer.apple.com/documentation/gamekit/gksession/senddata(toallpeers:with:))

# sendData(toAllPeers:with:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

Transmits a collection of bytes to all connected peers.

> No longer supported.

## Declaration

```swift
func sendData(toAllPeers data: Data!, with mode: GKSendDataMode) throws
```

## Parameters

- `data`: The bytes to be sent.
- `mode`: The mechanism used to send the data.

<a id="Discussion"></a>

## Discussion

The session queues the data and transmits it when the network is free.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Working with Connected Peers

- [setDataReceiveHandler(\_:withContext:)](setdatareceivehandler%28__withcontext_%29.md): Deprecated. Sets the object that handles data received from other peers connected to the session.
- [send(\_:toPeers:with:)](send%28__topeers_with_%29.md): Deprecated. Transmits a collection of bytes to a list of connected peers.
- [disconnectTimeout](disconnecttimeout.md): Deprecated. A time interval that expresses how long the session waits before it disconnects a nonresponsive peer.
- [disconnectFromAllPeers()](disconnectfromallpeers%28%29.md): Deprecated. Disconnects the session from all connected peers.
- [disconnectPeer(fromAllPeers:)](disconnectpeer%28fromallpeers_%29.md): Deprecated. Disconnects a connected peer from all peers connected to the session.

# sendDataToAllPeers:withDataMode:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

Transmits a collection of bytes to all connected peers.

> No longer supported.

## Declaration

```objectivec
- (BOOL) sendDataToAllPeers:(NSData *) data withDataMode:(GKSendDataMode) mode error:(NSError **) error;
```

## Parameters

- `data`: The bytes to be sent.
- `mode`: The mechanism used to send the data.
- `error`: If the data could not be queued, an `NSError` object describing the error.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully queued for transmission; [false](https://developer.apple.com/documentation/swift/false) if the session object was unable to queue the data.

<a id="Discussion"></a>

## Discussion

The session queues the data and transmits it when the network is free.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Working with Connected Peers

- [setDataReceiveHandler:withContext:](setdatareceivehandler%28__withcontext_%29.md): Deprecated. Sets the object that handles data received from other peers connected to the session.
- [sendData:toPeers:withDataMode:error:](send%28__topeers_with_%29.md): Deprecated. Transmits a collection of bytes to a list of connected peers.
- [disconnectTimeout](disconnecttimeout.md): Deprecated. A time interval that expresses how long the session waits before it disconnects a nonresponsive peer.
- [disconnectFromAllPeers](disconnectfromallpeers%28%29.md): Deprecated. Disconnects the session from all connected peers.
- [disconnectPeerFromAllPeers:](disconnectpeer%28fromallpeers_%29.md): Deprecated. Disconnects a connected peer from all peers connected to the session.
