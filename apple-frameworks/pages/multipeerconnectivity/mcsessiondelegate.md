> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcsessiondelegate](https://developer.apple.com/documentation/multipeerconnectivity/mcsessiondelegate)

# MCSessionDelegate (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCSessionDelegate` protocol defines methods that a delegate of the `MCSession` class can implement to handle session-related events. For more information, see [MCSession](mcsession.md).

> Use Network Framework instead

## Declaration

```swift
protocol MCSessionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Delegate calls occur on a private serial queue. If your app needs to perform an action on a particular run loop or operation queue, its delegate method should explicitly dispatch or schedule that work.

## Topics

### MCSession Delegate Methods

- [session(\_:didReceive:fromPeer:)](mcsessiondelegate/session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session(\_:didStartReceivingResourceWithName:fromPeer:with:)](mcsessiondelegate/session%28__didstartreceivingresourcewithname_frompeer_with_%29.md): Deprecated. Indicates that the local peer began receiving a resource from a nearby peer.
- [session(\_:didFinishReceivingResourceWithName:fromPeer:at:withError:)](mcsessiondelegate/session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md): Deprecated. Indicates that the local peer finished receiving a resource from a nearby peer.
- [session(\_:didReceive:withName:fromPeer:)](mcsessiondelegate/session%28__didreceive_withname_frompeer_%29.md): Deprecated. Called when a nearby peer opens a byte stream connection to the local peer.
- [session(\_:peer:didChange:)](mcsessiondelegate/session%28__peer_didchange_%29.md): Deprecated. Called when the state of a nearby peer changes.
- [session(\_:didReceiveCertificate:fromPeer:certificateHandler:)](mcsessiondelegate/session%28__didreceivecertificate_frompeer_certificatehandler_%29.md): Deprecated. Called to validate the client certificate provided by a peer when the connection is first established.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Protocols

- [MCAdvertiserAssistantDelegate](mcadvertiserassistantdelegate.md): Deprecated. The `MCAdvertiserAssistantDelegate` protocol describes the methods that the delegate object for an `MCAdvertiserAssistant` instance can implement to handle advertising-related events.
- [MCBrowserViewControllerDelegate](mcbrowserviewcontrollerdelegate.md): Deprecated. The `MCBrowserViewControllerDelegate` protocol defines the methods that your delegate object can implement to handle events related to the `MCBrowserViewController` class.
- [MCNearbyServiceAdvertiserDelegate](mcnearbyserviceadvertiserdelegate.md): Deprecated. The `MCNearbyServiceAdvertiserDelegate` protocol describes the methods that the delegate object for an `MCNearbyServiceAdvertiser` instance can implement for handling events from the `MCNearbyServiceAdvertiser` class.
- [MCNearbyServiceBrowserDelegate](mcnearbyservicebrowserdelegate.md): Deprecated. The `MCNearbyServiceBrowserDelegate` protocol defines methods that a `MCNearbyServiceBrowser` object’s delegate can implement to handle browser-related events.

# MCSessionDelegate (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCSessionDelegate` protocol defines methods that a delegate of the `MCSession` class can implement to handle session-related events. For more information, see [MCSession](mcsession.md).

> Use Network Framework instead

## Declaration

```objectivec
@protocol MCSessionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Delegate calls occur on a private serial queue. If your app needs to perform an action on a particular run loop or operation queue, its delegate method should explicitly dispatch or schedule that work.

## Topics

### MCSession Delegate Methods

- [session:didReceiveData:fromPeer:](mcsessiondelegate/session%28__didreceive_frompeer_%29.md): Deprecated. Indicates that an `NSData` object has been received from a nearby peer.
- [session:didStartReceivingResourceWithName:fromPeer:withProgress:](mcsessiondelegate/session%28__didstartreceivingresourcewithname_frompeer_with_%29.md): Deprecated. Indicates that the local peer began receiving a resource from a nearby peer.
- [session:didFinishReceivingResourceWithName:fromPeer:atURL:withError:](mcsessiondelegate/session%28__didfinishreceivingresourcewithname_frompeer_at_witherror_%29.md): Deprecated. Indicates that the local peer finished receiving a resource from a nearby peer.
- [session:didReceiveStream:withName:fromPeer:](mcsessiondelegate/session%28__didreceive_withname_frompeer_%29.md): Deprecated. Called when a nearby peer opens a byte stream connection to the local peer.
- [session:peer:didChangeState:](mcsessiondelegate/session%28__peer_didchange_%29.md): Deprecated. Called when the state of a nearby peer changes.
- [session:didReceiveCertificate:fromPeer:certificateHandler:](mcsessiondelegate/session%28__didreceivecertificate_frompeer_certificatehandler_%29.md): Deprecated. Called to validate the client certificate provided by a peer when the connection is first established.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Protocols

- [MCAdvertiserAssistantDelegate](mcadvertiserassistantdelegate.md): Deprecated. The `MCAdvertiserAssistantDelegate` protocol describes the methods that the delegate object for an `MCAdvertiserAssistant` instance can implement to handle advertising-related events.
- [MCBrowserViewControllerDelegate](mcbrowserviewcontrollerdelegate.md): Deprecated. The `MCBrowserViewControllerDelegate` protocol defines the methods that your delegate object can implement to handle events related to the `MCBrowserViewController` class.
- [MCNearbyServiceAdvertiserDelegate](mcnearbyserviceadvertiserdelegate.md): Deprecated. The `MCNearbyServiceAdvertiserDelegate` protocol describes the methods that the delegate object for an `MCNearbyServiceAdvertiser` instance can implement for handling events from the `MCNearbyServiceAdvertiser` class.
- [MCNearbyServiceBrowserDelegate](mcnearbyservicebrowserdelegate.md): Deprecated. The `MCNearbyServiceBrowserDelegate` protocol defines methods that a `MCNearbyServiceBrowser` object’s delegate can implement to handle browser-related events.
