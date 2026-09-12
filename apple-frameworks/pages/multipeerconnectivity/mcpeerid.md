> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcpeerid](https://developer.apple.com/documentation/multipeerconnectivity/mcpeerid)

# MCPeerID (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An  `MCPeerID` object represents a peer in a multipeer session.

> Use Network Framework instead

## Declaration

```swift
class MCPeerID
```

<a id="overview"></a>

## Overview

You create a single peer ID object that represents the instance of your app running on the local device. The Multipeer Connectivity framework is responsible for creating peer ID objects that represent other devices.

To create a new peer ID for the local app and associate a display name with that ID, call [init(displayName:)](mcpeerid/init%28displayname_%29.md). The peer’s name must be no longer than 63 bytes in UTF-8 encoding.

Each peer ID your app creates with [init(displayName:)](mcpeerid/init%28displayname_%29.md) is unique, even when supplying the same display name. If you want a device’s peer ID to be stable over time, don’t create a new peer ID every time your app begins advertising or browsing. Instead, archive the ID when you create it, and then unarchive it the next time you need it. If you need the peer ID to be tied to the display name, you can archive the name as well, and only create a new peer ID when the name changes, as illustrated in the following code fragment:

```objc
NSString *displayName = <#Get a name#>;
 
NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
NSString *oldDisplayName = [defaults stringForKey:kDisplayNameKey];
MCPeerID *peerID;
 
if ([oldDisplayName isEqualToString:displayName]) {
    NSData *peerIDData = [defaults dataForKey:kPeerIDKey];
    peerID = [NSKeyedUnarchiver unarchiveObjectWithData:peerIDData];
} else {
    peerID = [[MCPeerID alloc] initWithDisplayName:displayName];
    NSData *peerIDData = [NSKeyedArchiver archivedDataWithRootObject:peerID];
    [defaults setObject:peerIDData forKey:kPeerIDKey];
    [defaults setObject:displayName forKey:kDisplayNameKey];
    [defaults synchronize];
}
```

## Topics

### Peer Methods

- [init(displayName:)](mcpeerid/init%28displayname_%29.md): Deprecated. Initializes a peer.
- [displayName](mcpeerid/displayname.md): Deprecated. The display name for this peer.

### Initializers

- [init(coder:)](mcpeerid/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SynchronizationPeerID](../realitykit/synchronizationpeerid.md)

## See Also

### Classes

- [MCAdvertiserAssistant](mcadvertiserassistant.md): Deprecated. The `MCAdvertiserAssistant` is a convenience class that handles advertising, presents incoming invitations to the user, and handles users’ responses. Use this class to provide a user interface for handling invitations when your app does not require programmatic control over the invitation process.
- [MCBrowserViewController](mcbrowserviewcontroller.md): Deprecated. The `MCBrowserViewController` class presents nearby devices to the user and enables the user to invite nearby devices to a session. To use this class in iOS or tvOS, call methods from the underlying `UIViewController` class ([prepare(for:sender:)](../uikit/uiviewcontroller/prepare%28for_sender_%29.md) and [performSegue(withIdentifier:sender:)](../uikit/uiviewcontroller/performsegue%28withidentifier_sender_%29.md) for storyboards or [present(\_:animated:completion:)](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) and [dismiss(animated:completion:)](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) for nib-based views) to present and dismiss the view controller. In macOS, use the comparable `NSViewController` methods [presentAsSheet(\_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet%28_:%29) and [dismiss(\_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss%28_:%29-91my5) instead.
- [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md): Deprecated. The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.
- [MCNearbyServiceBrowser](mcnearbyservicebrowser.md): Deprecated. Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).
- [MCSession](mcsession.md): Deprecated. An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.

# MCPeerID (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An  `MCPeerID` object represents a peer in a multipeer session.

> Use Network Framework instead

## Declaration

```objectivec
@interface MCPeerID : NSObject
```

<a id="overview"></a>

## Overview

You create a single peer ID object that represents the instance of your app running on the local device. The Multipeer Connectivity framework is responsible for creating peer ID objects that represent other devices.

To create a new peer ID for the local app and associate a display name with that ID, call [initWithDisplayName:](mcpeerid/init%28displayname_%29.md). The peer’s name must be no longer than 63 bytes in UTF-8 encoding.

Each peer ID your app creates with [initWithDisplayName:](mcpeerid/init%28displayname_%29.md) is unique, even when supplying the same display name. If you want a device’s peer ID to be stable over time, don’t create a new peer ID every time your app begins advertising or browsing. Instead, archive the ID when you create it, and then unarchive it the next time you need it. If you need the peer ID to be tied to the display name, you can archive the name as well, and only create a new peer ID when the name changes, as illustrated in the following code fragment:

```objc
NSString *displayName = <#Get a name#>;
 
NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
NSString *oldDisplayName = [defaults stringForKey:kDisplayNameKey];
MCPeerID *peerID;
 
if ([oldDisplayName isEqualToString:displayName]) {
    NSData *peerIDData = [defaults dataForKey:kPeerIDKey];
    peerID = [NSKeyedUnarchiver unarchiveObjectWithData:peerIDData];
} else {
    peerID = [[MCPeerID alloc] initWithDisplayName:displayName];
    NSData *peerIDData = [NSKeyedArchiver archivedDataWithRootObject:peerID];
    [defaults setObject:peerIDData forKey:kPeerIDKey];
    [defaults setObject:displayName forKey:kDisplayNameKey];
    [defaults synchronize];
}
```

## Topics

### Peer Methods

- [initWithDisplayName:](mcpeerid/init%28displayname_%29.md): Deprecated. Initializes a peer.
- [displayName](mcpeerid/displayname.md): Deprecated. The display name for this peer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SynchronizationPeerID](../realitykit/synchronizationpeerid.md)

## See Also

### Classes

- [MCAdvertiserAssistant](mcadvertiserassistant.md): Deprecated. The `MCAdvertiserAssistant` is a convenience class that handles advertising, presents incoming invitations to the user, and handles users’ responses. Use this class to provide a user interface for handling invitations when your app does not require programmatic control over the invitation process.
- [MCBrowserViewController](mcbrowserviewcontroller.md): Deprecated. The `MCBrowserViewController` class presents nearby devices to the user and enables the user to invite nearby devices to a session. To use this class in iOS or tvOS, call methods from the underlying `UIViewController` class ([prepareForSegue:sender:](../uikit/uiviewcontroller/prepare%28for_sender_%29.md) and [performSegueWithIdentifier:sender:](../uikit/uiviewcontroller/performsegue%28withidentifier_sender_%29.md) for storyboards or [presentViewController:animated:completion:](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) and [dismissViewControllerAnimated:completion:](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) for nib-based views) to present and dismiss the view controller. In macOS, use the comparable `NSViewController` methods [presentViewControllerAsSheet:](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet%28_:%29) and [dismissViewController:](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss%28_:%29-91my5) instead.
- [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md): Deprecated. The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.
- [MCNearbyServiceBrowser](mcnearbyservicebrowser.md): Deprecated. Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).
- [MCSession](mcsession.md): Deprecated. An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.
