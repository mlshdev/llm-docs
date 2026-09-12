> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession/sendresource(at:withname:topeer:withcompletionhandler:)](https://developer.apple.com/documentation/multipeerconnectivity/mcsession/sendresource(at:withname:topeer:withcompletionhandler:))

# sendResource(at:withName:toPeer:withCompletionHandler:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sends the contents of a URL to a peer.

> Use Network Framework instead

## Declaration

```swift
func sendResource(at resourceURL: URL, withName resourceName: String, toPeer peerID: MCPeerID, withCompletionHandler completionHandler: (((any Error)?) -> Void)? = nil) -> Progress?
```

## Parameters

- `resourceURL`: A file or HTTP URL.
- `resourceName`: A name for the resource.
- `peerID`: The peer that should receive this resource.
- `completionHandler`: A block that gets called when delivery succeeds or fails. Upon success, the handler is called with an error value of `nil`. Upon failure, the handle is called with an error object that indicates what went wrong.

<a id="return-value"></a>

## Return Value

An `NSProgress` object that can be used to query the status of the transfer or cancel the transfer.

<a id="Discussion"></a>

## Discussion

This method is asynchronous (nonblocking).

On the local device, the completion handler block is called when delivery succeeds or when an error occurs.

On the recipient device, the session calls its delegate’s [session(\_:didStartReceivingResourceWithName:fromPeer:with:)](../mcsessiondelegate/session%28__didstartreceivingresourcewithname_frompeer_with_%29.md) method as soon as it begins receiving the resource. This method provides an `NSProgress` object that your app can use to cancel the transfer or check its status.

Upon successful delivery, on the recipient device, the session calls its delegate’s [session(\_:didFinishReceivingResourceWithName:fromPeer:at:withError:)](../mcsessiondelegate/session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md) method. The received resource is written to a file in a temporary location with the same base name; the app is responsible for opening the file or moving it to a permanent location before that delegate method returns.

## See Also

### Sending Data and Resources

- [send(\_:toPeers:with:)](send%28__topeers_with_%29.md): Deprecated. Sends a message to nearby peers.
- [startStream(withName:toPeer:)](startstream%28withname_topeer_%29.md): Deprecated. Opens a byte stream to a nearby peer.

# sendResourceAtURL:withName:toPeer:withCompletionHandler: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sends the contents of a URL to a peer.

> Use Network Framework instead

## Declaration

```objectivec
- (NSProgress *) sendResourceAtURL:(NSURL *) resourceURL withName:(NSString *) resourceName toPeer:(MCPeerID *) peerID withCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `resourceURL`: A file or HTTP URL.
- `resourceName`: A name for the resource.
- `peerID`: The peer that should receive this resource.
- `completionHandler`: A block that gets called when delivery succeeds or fails. Upon success, the handler is called with an error value of `nil`. Upon failure, the handle is called with an error object that indicates what went wrong.

<a id="return-value"></a>

## Return Value

An `NSProgress` object that can be used to query the status of the transfer or cancel the transfer.

<a id="Discussion"></a>

## Discussion

This method is asynchronous (nonblocking).

On the local device, the completion handler block is called when delivery succeeds or when an error occurs.

On the recipient device, the session calls its delegate’s [session:didStartReceivingResourceWithName:fromPeer:withProgress:](../mcsessiondelegate/session%28__didstartreceivingresourcewithname_frompeer_with_%29.md) method as soon as it begins receiving the resource. This method provides an `NSProgress` object that your app can use to cancel the transfer or check its status.

Upon successful delivery, on the recipient device, the session calls its delegate’s [session:didFinishReceivingResourceWithName:fromPeer:atURL:withError:](../mcsessiondelegate/session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md) method. The received resource is written to a file in a temporary location with the same base name; the app is responsible for opening the file or moving it to a permanent location before that delegate method returns.

## See Also

### Sending Data and Resources

- [sendData:toPeers:withMode:error:](send%28__topeers_with_%29.md): Deprecated. Sends a message to nearby peers.
- [startStreamWithName:toPeer:error:](startstream%28withname_topeer_%29.md): Deprecated. Opens a byte stream to a nearby peer.
