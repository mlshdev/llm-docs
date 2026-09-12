> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyserviceadvertiser](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyserviceadvertiser)

# MCNearbyServiceAdvertiser (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.

> Use Network Framework instead

## Declaration

```swift
class MCNearbyServiceAdvertiser
```

<a id="overview"></a>

## Overview

Before you can advertise a service, you must create an `MCPeerID` object that identifies your app and the user to nearby devices.

The `serviceType` parameter is a short text string used to describe the app’s networking protocol.  It should be in the same format as a Bonjour service type: 1–15 characters long and valid characters include ASCII lowercase letters, numbers, and the hyphen, containing at least one letter and no adjacent hyphens.  A short name that distinguishes itself from unrelated services is recommended; for example, a text chat app made by ABC company could use the service type `"abc-txtchat"`. For more information about service types, read [Domain Naming Conventions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Articles/domainnames.html#//apple_ref/doc/uid/TP40002460).

The `discoveryInfo` parameter is a dictionary of string key/value pairs that will be advertised for browsers to see.  The content of `discoveryInfo` will be advertised within Bonjour TXT records, so you should keep the dictionary small for better discovery performance.

For more information about TXT records, read [Bonjour Operations](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Articles/NetServicesArchitecture.html#//apple_ref/doc/uid/20001074).

## Topics

### Configuring and Initialization

- [init(peer:discoveryInfo:serviceType:)](mcnearbyserviceadvertiser/init%28peer_discoveryinfo_servicetype_%29.md): Deprecated. Initializes an advertiser object.
- [delegate](mcnearbyserviceadvertiser/delegate.md): Deprecated. The delegate object that handles advertising-related events.
- [discoveryInfo](mcnearbyserviceadvertiser/discoveryinfo.md): Deprecated. The `info` dictionary passed when this object was initialized.
- [myPeerID](mcnearbyserviceadvertiser/mypeerid.md): Deprecated. The local peer ID for this instance.
- [serviceType](mcnearbyserviceadvertiser/servicetype.md): Deprecated. The service type that your app is advertising

### Starting and Stopping Advertisement

- [startAdvertisingPeer()](mcnearbyserviceadvertiser/startadvertisingpeer%28%29.md): Deprecated. Begins advertising the service provided by a local peer.
- [stopAdvertisingPeer()](mcnearbyserviceadvertiser/stopadvertisingpeer%28%29.md): Deprecated. Stops advertising the service provided by a local peer.

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
- [MCNearbyServiceBrowser](mcnearbyservicebrowser.md): Deprecated. Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).
- [MCPeerID](mcpeerid.md): Deprecated. An `MCPeerID` object represents a peer in a multipeer session.
- [MCSession](mcsession.md): Deprecated. An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.

# MCNearbyServiceAdvertiser (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.

> Use Network Framework instead

## Declaration

```objectivec
@interface MCNearbyServiceAdvertiser : NSObject
```

<a id="overview"></a>

## Overview

Before you can advertise a service, you must create an `MCPeerID` object that identifies your app and the user to nearby devices.

The `serviceType` parameter is a short text string used to describe the app’s networking protocol.  It should be in the same format as a Bonjour service type: 1–15 characters long and valid characters include ASCII lowercase letters, numbers, and the hyphen, containing at least one letter and no adjacent hyphens.  A short name that distinguishes itself from unrelated services is recommended; for example, a text chat app made by ABC company could use the service type `"abc-txtchat"`. For more information about service types, read [Domain Naming Conventions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Articles/domainnames.html#//apple_ref/doc/uid/TP40002460).

The `discoveryInfo` parameter is a dictionary of string key/value pairs that will be advertised for browsers to see.  The content of `discoveryInfo` will be advertised within Bonjour TXT records, so you should keep the dictionary small for better discovery performance.

For more information about TXT records, read [Bonjour Operations](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Articles/NetServicesArchitecture.html#//apple_ref/doc/uid/20001074).

## Topics

### Configuring and Initialization

- [initWithPeer:discoveryInfo:serviceType:](mcnearbyserviceadvertiser/init%28peer_discoveryinfo_servicetype_%29.md): Deprecated. Initializes an advertiser object.
- [delegate](mcnearbyserviceadvertiser/delegate.md): Deprecated. The delegate object that handles advertising-related events.
- [discoveryInfo](mcnearbyserviceadvertiser/discoveryinfo.md): Deprecated. The `info` dictionary passed when this object was initialized.
- [myPeerID](mcnearbyserviceadvertiser/mypeerid.md): Deprecated. The local peer ID for this instance.
- [serviceType](mcnearbyserviceadvertiser/servicetype.md): Deprecated. The service type that your app is advertising

### Starting and Stopping Advertisement

- [startAdvertisingPeer](mcnearbyserviceadvertiser/startadvertisingpeer%28%29.md): Deprecated. Begins advertising the service provided by a local peer.
- [stopAdvertisingPeer](mcnearbyserviceadvertiser/stopadvertisingpeer%28%29.md): Deprecated. Stops advertising the service provided by a local peer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Classes

- [MCAdvertiserAssistant](mcadvertiserassistant.md): Deprecated. The `MCAdvertiserAssistant` is a convenience class that handles advertising, presents incoming invitations to the user, and handles users’ responses. Use this class to provide a user interface for handling invitations when your app does not require programmatic control over the invitation process.
- [MCBrowserViewController](mcbrowserviewcontroller.md): Deprecated. The `MCBrowserViewController` class presents nearby devices to the user and enables the user to invite nearby devices to a session. To use this class in iOS or tvOS, call methods from the underlying `UIViewController` class ([prepareForSegue:sender:](../uikit/uiviewcontroller/prepare%28for_sender_%29.md) and [performSegueWithIdentifier:sender:](../uikit/uiviewcontroller/performsegue%28withidentifier_sender_%29.md) for storyboards or [presentViewController:animated:completion:](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) and [dismissViewControllerAnimated:completion:](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) for nib-based views) to present and dismiss the view controller. In macOS, use the comparable `NSViewController` methods [presentViewControllerAsSheet:](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet%28_:%29) and [dismissViewController:](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss%28_:%29-91my5) instead.
- [MCNearbyServiceBrowser](mcnearbyservicebrowser.md): Deprecated. Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).
- [MCPeerID](mcpeerid.md): Deprecated. An `MCPeerID` object represents a peer in a multipeer session.
- [MCSession](mcsession.md): Deprecated. An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.
