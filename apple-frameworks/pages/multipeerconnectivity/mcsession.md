> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsession](https://developer.apple.com/documentation/multipeerconnectivity/mcsession)

# MCSession (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.

> Use Network Framework instead

## Declaration

```swift
class MCSession
```

<a id="Initiating-a-Session"></a>

### Initiating a Session

To set up a session:

1. Use the [init(displayName:)](mcpeerid/init%28displayname_%29.md) method of the [MCPeerID](mcpeerid.md) to create a peer ID that represents the local peer, or retrieve a peer ID that you previously archived (to maintain a stable peer ID over time).
2. Use the peer ID with the method [init(peer:)](mcsession/init%28peer_%29.md) to initialize the session object.
3. Invite peers to join the session using an [MCNearbyServiceBrowser](mcnearbyservicebrowser.md) object, an [MCBrowserViewController](mcbrowserviewcontroller.md) object, or your own peer discovery code. (Sessions currently support up to 8 peers, including the local peer.)
4. Set up an [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md) object or [MCAdvertiserAssistant](mcadvertiserassistant.md) object to allow other devices to ask your app to join a session that they create.

If you use one of the framework’s browser objects for peer discovery, when a peer accepts an invitation, the session calls its delegate object’s [session(\_:peer:didChange:)](mcsessiondelegate/session%28__peer_didchange_%29.md) method with [MCSessionState.connected](mcsessionstate/connected.md) as the new state, along with an object that tells you which peer became connected. See Creating a Session for related methods.

If instead you write your own peer discovery code, you are responsible for managing the connection manually. See the [Managing Peers Manually](mcsession.md#Managing-Peers-Manually) section for more information.

<a id="Communicating-with-Peers"></a>

### Communicating with Peers

Once you have set up the session, your app can send data to other peers by calling one of the following methods, found in Sending Data and Resources:

- [send(\_:toPeers:with:)](mcsession/send%28__topeers_with_%29.md) sends an `NSData` object to the specified peers.

  On each recipient device, the delegate object’s [session(\_:didReceive:fromPeer:)](mcsessiondelegate/session%28__didreceive_frompeer_%29.md) method is called with the data object when the data has been fully received.
- [sendResource(at:withName:toPeer:withCompletionHandler:)](mcsession/sendresource%28at_withname_topeer_withcompletionhandler_%29.md) sends the contents from an `NSURL` object to the specified peer. The URL can be either a local file URL or a web URL. The `completionHandler` block is called when the resource is fully received by the recipient peer or when an error occurs during transmission.

  This method returns an `NSProgress` object that you can use to cancel the transfer or check the current status of the transfer.

  On the recipient device, the session calls its delegate object’s [session(\_:didStartReceivingResourceWithName:fromPeer:with:)](mcsessiondelegate/session%28__didstartreceivingresourcewithname_frompeer_with_%29.md) method when the device begins receiving the resource, and calls its [session(\_:didFinishReceivingResourceWithName:fromPeer:at:withError:)](mcsessiondelegate/session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md) method when the resource has been fully received or when an error occurs.
- [startStream(withName:toPeer:)](mcsession/startstream%28withname_topeer_%29.md) creates a connected byte stream (`NSOutputStream`) that you can use to send data to the specified peer.

  On the recipient device, the session calls its delegate object’s [session(\_:didReceive:withName:fromPeer:)](mcsessiondelegate/session%28__didreceive_withname_frompeer_%29.md) method with an `NSInputStream` object that represents the other endpoint of communication.

  On both sides, your code must set the stream’s delegate, schedule the stream on a run loop, and open the stream. Your code must also implement stream delegate methods to manage sending and receiving stream data.

> **Important**

>  Delegate calls occur on a private operation queue. If your app needs to perform an action on a particular run loop or operation queue, its delegate method should explicitly dispatch or schedule that work.

<a id="Managing-Peers-Manually"></a>

### Managing Peers Manually

If instead of using the framework’s browser and advertiser objects to perform peer discovery, you decide to write your own peer discovery code (with `NSNetService` or the Bonjour C API, for example), you can manually connect nearby peers into a session. To do this:

1. Establish a connection from your app to nearby peers, and exchange peer IDs with those peers.

Each peer should serialize its own local `MCPeerID` object with `NSKeyedArchiver`, and the receiving peer should unserialize it with `NSKeyedUnarchiver`.

> **Important**

>  Do not attempt to construct a peer ID object for a nonlocal peer using [init(displayName:)](mcpeerid/init%28displayname_%29.md). A peer ID object must be constructed *on the device that it represents*.

2. Exchange connection data. After you have obtained the nearby peer’s ID object, call [nearbyConnectionData(forPeer:withCompletionHandler:)](mcsession/nearbyconnectiondata%28forpeer_withcompletionhandler_%29.md) to obtain a connection data object specific to that nearby peer.

When the completion handler block is called, send the resulting connection data object to that peer.

> **Note**

>  Each device in the session must perform this step for each nonlocal peer in the session. So if there are four devices in the session, each device must generate a connection data object for each of the other three devices.

3. When your app receives connection data from another peer, it must call [connectPeer(\_:withNearbyConnectionData:)](mcsession/connectpeer%28__withnearbyconnectiondata_%29.md) to add that peer to the session.

> **Note**

>  Each of the nonlocal peers must also call [connectPeer(\_:withNearbyConnectionData:)](mcsession/connectpeer%28__withnearbyconnectiondata_%29.md) with the connection data that it received from your app and other nonlocal peers.

You can also cancel an outstanding connection attempt by calling [cancelConnectPeer(\_:)](mcsession/cancelconnectpeer%28__%29.md). These methods are described in the Managing Peers Manually group.

<a id="Disconnecting"></a>

### Disconnecting

To leave a session, your app must call [disconnect()](mcsession/disconnect%28%29.md). For more details, see Leaving a Session.

## Topics

### Creating a Session

- [init(peer:)](mcsession/init%28peer_%29.md): Deprecated. Creates a Multipeer Connectivity session.
- [init(peer:securityIdentity:encryptionPreference:)](mcsession/init%28peer_securityidentity_encryptionpreference_%29.md): Deprecated. Creates a Multipeer Connectivity session, providing security information.
- [delegate](mcsession/delegate.md): Deprecated. The delegate object that handles session-related events.
- [encryptionPreference](mcsession/encryptionpreference.md): Deprecated. A value indicating whether the connection prefers encrypted connections, unencrypted connections, or has no preference.
- [myPeerID](mcsession/mypeerid.md): Deprecated. A local identifier that represents the device on which your app is currently running.
- [securityIdentity](mcsession/securityidentity.md): Deprecated. The security identity of the local peer.

### Managing Peers Manually

- [connectPeer(\_:withNearbyConnectionData:)](mcsession/connectpeer%28__withnearbyconnectiondata_%29.md): Call this method to connect a peer to the session when using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object.
- [cancelConnectPeer(\_:)](mcsession/cancelconnectpeer%28__%29.md): Cancels an attempt to connect to a peer.
- [connectedPeers](mcsession/connectedpeers.md): Deprecated. An array of all peers that are currently connected to this session.
- [nearbyConnectionData(forPeer:withCompletionHandler:)](mcsession/nearbyconnectiondata%28forpeer_withcompletionhandler_%29.md): Obtains connection data for the specified peer.

### Sending Data and Resources

- [send(\_:toPeers:with:)](mcsession/send%28__topeers_with_%29.md): Deprecated. Sends a message to nearby peers.
- [sendResource(at:withName:toPeer:withCompletionHandler:)](mcsession/sendresource%28at_withname_topeer_withcompletionhandler_%29.md): Deprecated. Sends the contents of a URL to a peer.
- [startStream(withName:toPeer:)](mcsession/startstream%28withname_topeer_%29.md): Deprecated. Opens a byte stream to a nearby peer.

### Leaving a Session

- [disconnect()](mcsession/disconnect%28%29.md): Deprecated. Disconnects the local peer from the session.

### Constants

- [MCSessionSendDataMode](mcsessionsenddatamode.md): Deprecated. Indicates whether delivery of data should be guaranteed.
- [MCSessionState](mcsessionstate.md): Deprecated. Indicates the current state of a given peer within a session.
- [MCEncryptionPreference](mcencryptionpreference.md): Deprecated. Indicates whether a session should use encryption when communicating with nearby peers.
- [MCError.Code](mcerror/code.md): Deprecated. Error codes found in [MCErrorDomain](mcerrordomain.md) error domain `NSError` objects returned by methods in the Multipeer Connectivity framework.
- [Multipeer Connectivity Error Domain](multipeer_connectivity_error_domain.md): The error domain for errors specific to Multipeer Connectivity.
- [Minimum and Maximum Supported Peers](minimum_and_maximum_supported_peers.md): Constants that define the minimum and maximum number of peers supported in a session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Classes

- [MCAdvertiserAssistant](mcadvertiserassistant.md): Deprecated. The `MCAdvertiserAssistant` is a convenience class that handles advertising, presents incoming invitations to the user, and handles users’ responses. Use this class to provide a user interface for handling invitations when your app does not require programmatic control over the invitation process.
- [MCBrowserViewController](mcbrowserviewcontroller.md): Deprecated. The `MCBrowserViewController` class presents nearby devices to the user and enables the user to invite nearby devices to a session. To use this class in iOS or tvOS, call methods from the underlying `UIViewController` class ([prepare(for:sender:)](../uikit/uiviewcontroller/prepare%28for_sender_%29.md) and [performSegue(withIdentifier:sender:)](../uikit/uiviewcontroller/performsegue%28withidentifier_sender_%29.md) for storyboards or [present(\_:animated:completion:)](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) and [dismiss(animated:completion:)](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) for nib-based views) to present and dismiss the view controller. In macOS, use the comparable `NSViewController` methods [presentAsSheet(\_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet%28_:%29) and [dismiss(\_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss%28_:%29-91my5) instead.
- [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md): Deprecated. The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.
- [MCNearbyServiceBrowser](mcnearbyservicebrowser.md): Deprecated. Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).
- [MCPeerID](mcpeerid.md): Deprecated. An `MCPeerID` object represents a peer in a multipeer session.

# MCSession (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.

> Use Network Framework instead

## Declaration

```objectivec
@interface MCSession : NSObject
```

<a id="Initiating-a-Session"></a>

### Initiating a Session

To set up a session:

1. Use the [initWithDisplayName:](mcpeerid/init%28displayname_%29.md) method of the [MCPeerID](mcpeerid.md) to create a peer ID that represents the local peer, or retrieve a peer ID that you previously archived (to maintain a stable peer ID over time).
2. Use the peer ID with the method [initWithPeer:](mcsession/init%28peer_%29.md) to initialize the session object.
3. Invite peers to join the session using an [MCNearbyServiceBrowser](mcnearbyservicebrowser.md) object, an [MCBrowserViewController](mcbrowserviewcontroller.md) object, or your own peer discovery code. (Sessions currently support up to 8 peers, including the local peer.)
4. Set up an [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md) object or [MCAdvertiserAssistant](mcadvertiserassistant.md) object to allow other devices to ask your app to join a session that they create.

If you use one of the framework’s browser objects for peer discovery, when a peer accepts an invitation, the session calls its delegate object’s [session:peer:didChangeState:](mcsessiondelegate/session%28__peer_didchange_%29.md) method with [MCSessionStateConnected](mcsessionstate/connected.md) as the new state, along with an object that tells you which peer became connected. See Creating a Session for related methods.

If instead you write your own peer discovery code, you are responsible for managing the connection manually. See the [Managing Peers Manually](mcsession.md#Managing-Peers-Manually) section for more information.

<a id="Communicating-with-Peers"></a>

### Communicating with Peers

Once you have set up the session, your app can send data to other peers by calling one of the following methods, found in Sending Data and Resources:

- [sendData:toPeers:withMode:error:](mcsession/send%28__topeers_with_%29.md) sends an `NSData` object to the specified peers.

  On each recipient device, the delegate object’s [session:didReceiveData:fromPeer:](mcsessiondelegate/session%28__didreceive_frompeer_%29.md) method is called with the data object when the data has been fully received.
- [sendResourceAtURL:withName:toPeer:withCompletionHandler:](mcsession/sendresource%28at_withname_topeer_withcompletionhandler_%29.md) sends the contents from an `NSURL` object to the specified peer. The URL can be either a local file URL or a web URL. The `completionHandler` block is called when the resource is fully received by the recipient peer or when an error occurs during transmission.

  This method returns an `NSProgress` object that you can use to cancel the transfer or check the current status of the transfer.

  On the recipient device, the session calls its delegate object’s [session:didStartReceivingResourceWithName:fromPeer:withProgress:](mcsessiondelegate/session%28__didstartreceivingresourcewithname_frompeer_with_%29.md) method when the device begins receiving the resource, and calls its [session:didFinishReceivingResourceWithName:fromPeer:atURL:withError:](mcsessiondelegate/session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md) method when the resource has been fully received or when an error occurs.
- [startStreamWithName:toPeer:error:](mcsession/startstream%28withname_topeer_%29.md) creates a connected byte stream (`NSOutputStream`) that you can use to send data to the specified peer.

  On the recipient device, the session calls its delegate object’s [session:didReceiveStream:withName:fromPeer:](mcsessiondelegate/session%28__didreceive_withname_frompeer_%29.md) method with an `NSInputStream` object that represents the other endpoint of communication.

  On both sides, your code must set the stream’s delegate, schedule the stream on a run loop, and open the stream. Your code must also implement stream delegate methods to manage sending and receiving stream data.

> **Important**

>  Delegate calls occur on a private operation queue. If your app needs to perform an action on a particular run loop or operation queue, its delegate method should explicitly dispatch or schedule that work.

<a id="Managing-Peers-Manually"></a>

### Managing Peers Manually

If instead of using the framework’s browser and advertiser objects to perform peer discovery, you decide to write your own peer discovery code (with `NSNetService` or the Bonjour C API, for example), you can manually connect nearby peers into a session. To do this:

1. Establish a connection from your app to nearby peers, and exchange peer IDs with those peers.

Each peer should serialize its own local `MCPeerID` object with `NSKeyedArchiver`, and the receiving peer should unserialize it with `NSKeyedUnarchiver`.

> **Important**

>  Do not attempt to construct a peer ID object for a nonlocal peer using [initWithDisplayName:](mcpeerid/init%28displayname_%29.md). A peer ID object must be constructed *on the device that it represents*.

2. Exchange connection data. After you have obtained the nearby peer’s ID object, call [nearbyConnectionDataForPeer:withCompletionHandler:](mcsession/nearbyconnectiondata%28forpeer_withcompletionhandler_%29.md) to obtain a connection data object specific to that nearby peer.

When the completion handler block is called, send the resulting connection data object to that peer.

> **Note**

>  Each device in the session must perform this step for each nonlocal peer in the session. So if there are four devices in the session, each device must generate a connection data object for each of the other three devices.

3. When your app receives connection data from another peer, it must call [connectPeer:withNearbyConnectionData:](mcsession/connectpeer%28__withnearbyconnectiondata_%29.md) to add that peer to the session.

> **Note**

>  Each of the nonlocal peers must also call [connectPeer:withNearbyConnectionData:](mcsession/connectpeer%28__withnearbyconnectiondata_%29.md) with the connection data that it received from your app and other nonlocal peers.

You can also cancel an outstanding connection attempt by calling [cancelConnectPeer:](mcsession/cancelconnectpeer%28__%29.md). These methods are described in the Managing Peers Manually group.

<a id="Disconnecting"></a>

### Disconnecting

To leave a session, your app must call [disconnect](mcsession/disconnect%28%29.md). For more details, see Leaving a Session.

## Topics

### Creating a Session

- [initWithPeer:](mcsession/init%28peer_%29.md): Deprecated. Creates a Multipeer Connectivity session.
- [initWithPeer:securityIdentity:encryptionPreference:](mcsession/init%28peer_securityidentity_encryptionpreference_%29.md): Deprecated. Creates a Multipeer Connectivity session, providing security information.
- [delegate](mcsession/delegate.md): Deprecated. The delegate object that handles session-related events.
- [encryptionPreference](mcsession/encryptionpreference.md): Deprecated. A value indicating whether the connection prefers encrypted connections, unencrypted connections, or has no preference.
- [myPeerID](mcsession/mypeerid.md): Deprecated. A local identifier that represents the device on which your app is currently running.
- [securityIdentity](mcsession/securityidentity.md): Deprecated. The security identity of the local peer.

### Managing Peers Manually

- [connectPeer:withNearbyConnectionData:](mcsession/connectpeer%28__withnearbyconnectiondata_%29.md): Call this method to connect a peer to the session when using your own service discovery code instead of an `MCNearbyServiceBrowser` or `MCBrowserViewController` object.
- [cancelConnectPeer:](mcsession/cancelconnectpeer%28__%29.md): Cancels an attempt to connect to a peer.
- [connectedPeers](mcsession/connectedpeers.md): Deprecated. An array of all peers that are currently connected to this session.
- [nearbyConnectionDataForPeer:withCompletionHandler:](mcsession/nearbyconnectiondata%28forpeer_withcompletionhandler_%29.md): Obtains connection data for the specified peer.

### Sending Data and Resources

- [sendData:toPeers:withMode:error:](mcsession/send%28__topeers_with_%29.md): Deprecated. Sends a message to nearby peers.
- [sendResourceAtURL:withName:toPeer:withCompletionHandler:](mcsession/sendresource%28at_withname_topeer_withcompletionhandler_%29.md): Deprecated. Sends the contents of a URL to a peer.
- [startStreamWithName:toPeer:error:](mcsession/startstream%28withname_topeer_%29.md): Deprecated. Opens a byte stream to a nearby peer.

### Leaving a Session

- [disconnect](mcsession/disconnect%28%29.md): Deprecated. Disconnects the local peer from the session.

### Constants

- [MCSessionSendDataMode](mcsessionsenddatamode.md): Deprecated. Indicates whether delivery of data should be guaranteed.
- [MCSessionState](mcsessionstate.md): Deprecated. Indicates the current state of a given peer within a session.
- [MCEncryptionPreference](mcencryptionpreference.md): Deprecated. Indicates whether a session should use encryption when communicating with nearby peers.
- [MCErrorCode](mcerror/code.md): Deprecated. Error codes found in [MCErrorDomain](mcerrordomain.md) error domain `NSError` objects returned by methods in the Multipeer Connectivity framework.
- [Multipeer Connectivity Error Domain](multipeer_connectivity_error_domain.md): The error domain for errors specific to Multipeer Connectivity.
- [Minimum and Maximum Supported Peers](minimum_and_maximum_supported_peers.md): Constants that define the minimum and maximum number of peers supported in a session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Classes

- [MCAdvertiserAssistant](mcadvertiserassistant.md): Deprecated. The `MCAdvertiserAssistant` is a convenience class that handles advertising, presents incoming invitations to the user, and handles users’ responses. Use this class to provide a user interface for handling invitations when your app does not require programmatic control over the invitation process.
- [MCBrowserViewController](mcbrowserviewcontroller.md): Deprecated. The `MCBrowserViewController` class presents nearby devices to the user and enables the user to invite nearby devices to a session. To use this class in iOS or tvOS, call methods from the underlying `UIViewController` class ([prepareForSegue:sender:](../uikit/uiviewcontroller/prepare%28for_sender_%29.md) and [performSegueWithIdentifier:sender:](../uikit/uiviewcontroller/performsegue%28withidentifier_sender_%29.md) for storyboards or [presentViewController:animated:completion:](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) and [dismissViewControllerAnimated:completion:](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) for nib-based views) to present and dismiss the view controller. In macOS, use the comparable `NSViewController` methods [presentViewControllerAsSheet:](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet%28_:%29) and [dismissViewController:](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss%28_:%29-91my5) instead.
- [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md): Deprecated. The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.
- [MCNearbyServiceBrowser](mcnearbyservicebrowser.md): Deprecated. Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).
- [MCPeerID](mcpeerid.md): Deprecated. An `MCPeerID` object represents a peer in a multipeer session.
