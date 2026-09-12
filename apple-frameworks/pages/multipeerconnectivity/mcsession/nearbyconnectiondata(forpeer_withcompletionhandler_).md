> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession/nearbyconnectiondata(forpeer:withcompletionhandler:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsession/nearbyconnectiondata(forpeer:withcompletionhandler:))

# nearbyConnectionData(forPeer:withCompletionHandler:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 10.0+ · visionOS 1.0+

Obtains connection data for the specified peer.

## Declaration

```swift
func nearbyConnectionData(forPeer peerID: MCPeerID, withCompletionHandler completionHandler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func nearbyConnectionData(forPeer peerID: MCPeerID) async throws -> Data
```

## Parameters

- `peerID`: A peer ID object obtained from the nearby peer that you want to add to a session.
- `completionHandler`: A handler that is called when connection data is available or when an error occurs.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func nearbyConnectionData(forPeer peerID: MCPeerID) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method provides connection data that is required when adding a specific nearby peer to a session if you are using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object. For more information, see the [Managing Peers Manually](../mcsession.md#Managing-Peers-Manually) section in the overview of the `MCSession` class reference.

## See Also

### Managing Peers Manually

- [connectPeer(\_:withNearbyConnectionData:)](connectpeer%28__withnearbyconnectiondata_%29.md): Call this method to connect a peer to the session when using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object.
- [cancelConnectPeer(\_:)](cancelconnectpeer%28__%29.md): Cancels an attempt to connect to a peer.
- [connectedPeers](connectedpeers.md): Deprecated. An array of all peers that are currently connected to this session.

# nearbyConnectionDataForPeer:withCompletionHandler: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 10.0+ · visionOS 1.0+

Obtains connection data for the specified peer.

## Declaration

```objectivec
- (void) nearbyConnectionDataForPeer:(MCPeerID *) peerID withCompletionHandler:(void (^)(NSData *connectionData, NSError *error)) completionHandler;
```

## Parameters

- `peerID`: A peer ID object obtained from the nearby peer that you want to add to a session.
- `completionHandler`: A handler that is called when connection data is available or when an error occurs.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func nearbyConnectionData(forPeer peerID: MCPeerID) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method provides connection data that is required when adding a specific nearby peer to a session if you are using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object. For more information, see the [Managing Peers Manually](../mcsession.md#Managing-Peers-Manually) section in the overview of the `MCSession` class reference.

## See Also

### Managing Peers Manually

- [connectPeer:withNearbyConnectionData:](connectpeer%28__withnearbyconnectiondata_%29.md): Call this method to connect a peer to the session when using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object.
- [cancelConnectPeer:](cancelconnectpeer%28__%29.md): Cancels an attempt to connect to a peer.
- [connectedPeers](connectedpeers.md): Deprecated. An array of all peers that are currently connected to this session.
