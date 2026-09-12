> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcadvertiserassistant](https://developer.apple.com/documentation/multipeerconnectivity/mcadvertiserassistant)

# MCAdvertiserAssistant (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCAdvertiserAssistant` is a convenience class that handles advertising, presents incoming invitations to the user, and handles users’ responses. Use this class to provide a user interface for handling invitations when your app does not require programmatic control over the invitation process.

> Use Network Framework instead

## Declaration

```swift
class MCAdvertiserAssistant
```

<a id="overview"></a>

## Overview

Before you can advertise a service, you must create an `MCPeerID` object that identifies your app and the user to nearby devices.

## Topics

### Initializing and Configuring

- [init(serviceType:discoveryInfo:session:)](mcadvertiserassistant/init%28servicetype_discoveryinfo_session_%29.md): Deprecated. Initializes an advertiser assistant object.
- [session](mcadvertiserassistant/session.md): Deprecated. The session into which new peers are added after accepting an invitation.
- [delegate](mcadvertiserassistant/delegate.md): Deprecated. The delegate object that handles advertising-assistant-related events.
- [discoveryInfo](mcadvertiserassistant/discoveryinfo.md): Deprecated. The `info` dictionary that was passed when this object was initialized.
- [serviceType](mcadvertiserassistant/servicetype.md): Deprecated. The service type that your app is advertising.

### Starting and Stopping the Assistant

- [start()](mcadvertiserassistant/start%28%29.md): Deprecated. Begins advertising the service provided by a local peer and starts the assistant.
- [stop()](mcadvertiserassistant/stop%28%29.md): Deprecated. Stops advertising the service provided by a local peer and stops the assistant.

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

- [MCBrowserViewController](mcbrowserviewcontroller.md): Deprecated. The `MCBrowserViewController` class presents nearby devices to the user and enables the user to invite nearby devices to a session. To use this class in iOS or tvOS, call methods from the underlying `UIViewController` class ([prepare(for:sender:)](../uikit/uiviewcontroller/prepare%28for_sender_%29.md) and [performSegue(withIdentifier:sender:)](../uikit/uiviewcontroller/performsegue%28withidentifier_sender_%29.md) for storyboards or [present(\_:animated:completion:)](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) and [dismiss(animated:completion:)](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) for nib-based views) to present and dismiss the view controller. In macOS, use the comparable `NSViewController` methods [presentAsSheet(\_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet%28_:%29) and [dismiss(\_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss%28_:%29-91my5) instead.
- [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md): Deprecated. The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.
- [MCNearbyServiceBrowser](mcnearbyservicebrowser.md): Deprecated. Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).
- [MCPeerID](mcpeerid.md): Deprecated. An `MCPeerID` object represents a peer in a multipeer session.
- [MCSession](mcsession.md): Deprecated. An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.

# MCAdvertiserAssistant (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCAdvertiserAssistant` is a convenience class that handles advertising, presents incoming invitations to the user, and handles users’ responses. Use this class to provide a user interface for handling invitations when your app does not require programmatic control over the invitation process.

> Use Network Framework instead

## Declaration

```objectivec
@interface MCAdvertiserAssistant : NSObject
```

<a id="overview"></a>

## Overview

Before you can advertise a service, you must create an `MCPeerID` object that identifies your app and the user to nearby devices.

## Topics

### Initializing and Configuring

- [initWithServiceType:discoveryInfo:session:](mcadvertiserassistant/init%28servicetype_discoveryinfo_session_%29.md): Deprecated. Initializes an advertiser assistant object.
- [session](mcadvertiserassistant/session.md): Deprecated. The session into which new peers are added after accepting an invitation.
- [delegate](mcadvertiserassistant/delegate.md): Deprecated. The delegate object that handles advertising-assistant-related events.
- [discoveryInfo](mcadvertiserassistant/discoveryinfo.md): Deprecated. The `info` dictionary that was passed when this object was initialized.
- [serviceType](mcadvertiserassistant/servicetype.md): Deprecated. The service type that your app is advertising.

### Starting and Stopping the Assistant

- [start](mcadvertiserassistant/start%28%29.md): Deprecated. Begins advertising the service provided by a local peer and starts the assistant.
- [stop](mcadvertiserassistant/stop%28%29.md): Deprecated. Stops advertising the service provided by a local peer and stops the assistant.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Classes

- [MCBrowserViewController](mcbrowserviewcontroller.md): Deprecated. The `MCBrowserViewController` class presents nearby devices to the user and enables the user to invite nearby devices to a session. To use this class in iOS or tvOS, call methods from the underlying `UIViewController` class ([prepareForSegue:sender:](../uikit/uiviewcontroller/prepare%28for_sender_%29.md) and [performSegueWithIdentifier:sender:](../uikit/uiviewcontroller/performsegue%28withidentifier_sender_%29.md) for storyboards or [presentViewController:animated:completion:](../uikit/uiviewcontroller/present%28__animated_completion_%29.md) and [dismissViewControllerAnimated:completion:](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) for nib-based views) to present and dismiss the view controller. In macOS, use the comparable `NSViewController` methods [presentViewControllerAsSheet:](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentassheet%28_:%29) and [dismissViewController:](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss%28_:%29-91my5) instead.
- [MCNearbyServiceAdvertiser](mcnearbyserviceadvertiser.md): Deprecated. The `MCNearbyServiceAdvertiser` class publishes an advertisement for a specific service that your app provides through the Multipeer Connectivity framework and notifies its delegate about invitations from nearby peers.
- [MCNearbyServiceBrowser](mcnearbyservicebrowser.md): Deprecated. Searches (by service type) for services offered by nearby devices using infrastructure Wi-Fi, peer-to-peer Wi-Fi, and Bluetooth (in iOS) or Ethernet (in macOS and tvOS), and provides the ability to easily invite those devices to a Multipeer Connectivity session (`MCSession`).
- [MCPeerID](mcpeerid.md): Deprecated. An `MCPeerID` object represents a peer in a multipeer session.
- [MCSession](mcsession.md): Deprecated. An `MCSession` object enables and manages communication among all peers in a Multipeer Connectivity session.
