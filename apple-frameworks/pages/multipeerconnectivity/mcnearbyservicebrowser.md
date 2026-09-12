> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyservicebrowser](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyservicebrowser)

# MCNearbyServiceBrowser (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).

> Use Network Framework instead

## Declaration

```swift
class MCNearbyServiceBrowser
```

## Topics

### Initializing the Browser

- [init(peer:serviceType:)](mcnearbyservicebrowser/init%28peer_servicetype_%29.md): Deprecated. Initializes the nearby service browser object.
- [delegate](mcnearbyservicebrowser/delegate.md): Deprecated. The delegate object that handles browser-related events.
- [myPeerID](mcnearbyservicebrowser/mypeerid.md): Deprecated. The local peer ID for this instance.
- [serviceType](mcnearbyservicebrowser/servicetype.md): Deprecated. The service type to browse for.

### Browsing for Peers

- [startBrowsingForPeers()](mcnearbyservicebrowser/startbrowsingforpeers%28%29.md): Deprecated. Starts browsing for peers.
- [stopBrowsingForPeers()](mcnearbyservicebrowser/stopbrowsingforpeers%28%29.md): Deprecated. Stops browsing for peers.

### Inviting Peers

- [invitePeer(\_:to:withContext:timeout:)](mcnearbyservicebrowser/invitepeer%28__to_withcontext_timeout_%29.md): Deprecated. Invites a discovered peer to join a Multipeer Connectivity session.

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
- [MCPeerID](mcpeerid.md): Deprecated. An `MCPeerID` object represents a peer in a multipeer session.
- [MCSession](mcsession.md): Deprecated. An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.

# MCNearbyServiceBrowser (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).

> Use Network Framework instead

## Declaration

```objectivec
@interface MCNearbyServiceBrowser : NSObject
```

## Topics

### Initializing the Browser

- [initWithPeer:serviceType:](mcnearbyservicebrowser/init%28peer_servicetype_%29.md): Deprecated. Initializes the nearby service browser object.
- [delegate](mcnearbyservicebrowser/delegate.md): Deprecated. The delegate object that handles browser-related events.
- [myPeerID](mcnearbyservicebrowser/mypeerid.md): Deprecated. The local peer ID for this instance.
- [serviceType](mcnearbyservicebrowser/servicetype.md): Deprecated. The service type to browse for.

### Browsing for Peers

- [startBrowsingForPeers](mcnearbyservicebrowser/startbrowsingforpeers%28%29.md): Deprecated. Starts browsing for peers.
- [stopBrowsingForPeers](mcnearbyservicebrowser/stopbrowsingforpeers%28%29.md): Deprecated. Stops browsing for peers.

### Inviting Peers

- [invitePeer:toSession:withContext:timeout:](mcnearbyservicebrowser/invitepeer%28__to_withcontext_timeout_%29.md): Deprecated. Invites a discovered peer to join a Multipeer Connectivity session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Classes

- [MCAdvertiserAssistant](mcadvertiserassistant.md): Deprecated. The `MCAdvertiserAssistant` is a convenience class that handles advertising, presents incoming invitations to the user, and handles users’ responses. Use this class to provide a user interface for handling invitations when your app does not require programmatic control over the invitation process.
- [MCBrowserViewController](mcbrowserviewcontroller.md): Deprecated. The `MCBrowserViewController` class presents nearby devices to the user and enables the user to invite nearby devices to a session. To use this class in iOS or tvOS, call methods from the underlying `UIViewController` class ([prepareForSegue:sender:](../uikit/uiviewcontroller/prepare%28for_sender_%29.md) and [performSegueWithIdentifier:sender:](../uikit/uiviewcontroller/performsegue%28withidentifier_sender_%29.md) for storyboards or [presentViewController:animated:completion:](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) and [dismissViewControllerAnimated:completion:](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) for nib-based views) to present and dismiss the view controller. In macOS, use the comparable `NSViewController` methods [presentViewControllerAsSheet:](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet%28_:%29) and [dismissViewController:](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss%28_:%29-91my5) instead.
- [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md): Deprecated. The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.
- [MCPeerID](mcpeerid.md): Deprecated. An `MCPeerID` object represents a peer in a multipeer session.
- [MCSession](mcsession.md): Deprecated. An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.
