> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyserviceadvertiserdelegate](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyserviceadvertiserdelegate)

# MCNearbyServiceAdvertiserDelegate (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCNearbyServiceAdvertiserDelegate` protocol describes the methods that the delegate object for an `MCNearbyServiceAdvertiser` instance can implement for handling events from the `MCNearbyServiceAdvertiser` class.

> Use Network Framework instead

## Declaration

```swift
protocol MCNearbyServiceAdvertiserDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

No assumption should be made about which queue the delegate methods are called on. It is the receiver’s responsibility to ensure that any `UIKit` updates are called on the main thread.

## Topics

### Error Handling Delegate Methods

- [advertiser(\_:didNotStartAdvertisingPeer:)](mcnearbyserviceadvertiserdelegate/advertiser%28__didnotstartadvertisingpeer_%29.md): Deprecated. Called when advertisement fails.

### Invitation Handling Delegate Methods

- [advertiser(\_:didReceiveInvitationFromPeer:withContext:invitationHandler:)](mcnearbyserviceadvertiserdelegate/advertiser%28__didreceiveinvitationfrompeer_withcontext_invitationhandler_%29.md): Deprecated. Called when an invitation to join a session is received from a nearby peer.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Protocols

- [MCAdvertiserAssistantDelegate](mcadvertiserassistantdelegate.md): Deprecated. The `MCAdvertiserAssistantDelegate` protocol describes the methods that the delegate object for an `MCAdvertiserAssistant` instance can implement to handle advertising-related events.
- [MCBrowserViewControllerDelegate](mcbrowserviewcontrollerdelegate.md): Deprecated. The `MCBrowserViewControllerDelegate` protocol defines the methods that your delegate object can implement to handle events related to the `MCBrowserViewController` class.
- [MCNearbyServiceBrowserDelegate](mcnearbyservicebrowserdelegate.md): Deprecated. The `MCNearbyServiceBrowserDelegate` protocol defines methods that a `MCNearbyServiceBrowser` object’s delegate can implement to handle browser-related events.
- [MCSessionDelegate](mcsessiondelegate.md): Deprecated. The `MCSessionDelegate` protocol defines methods that a delegate of the `MCSession` class can implement to handle session-related events. For more information, see [MCSession](mcsession.md).

# MCNearbyServiceAdvertiserDelegate (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCNearbyServiceAdvertiserDelegate` protocol describes the methods that the delegate object for an `MCNearbyServiceAdvertiser` instance can implement for handling events from the `MCNearbyServiceAdvertiser` class.

> Use Network Framework instead

## Declaration

```objectivec
@protocol MCNearbyServiceAdvertiserDelegate <NSObject>
```

<a id="overview"></a>

## Overview

No assumption should be made about which queue the delegate methods are called on. It is the receiver’s responsibility to ensure that any `UIKit` updates are called on the main thread.

## Topics

### Error Handling Delegate Methods

- [advertiser:didNotStartAdvertisingPeer:](mcnearbyserviceadvertiserdelegate/advertiser%28__didnotstartadvertisingpeer_%29.md): Deprecated. Called when advertisement fails.

### Invitation Handling Delegate Methods

- [advertiser:didReceiveInvitationFromPeer:withContext:invitationHandler:](mcnearbyserviceadvertiserdelegate/advertiser%28__didreceiveinvitationfrompeer_withcontext_invitationhandler_%29.md): Deprecated. Called when an invitation to join a session is received from a nearby peer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Protocols

- [MCAdvertiserAssistantDelegate](mcadvertiserassistantdelegate.md): Deprecated. The `MCAdvertiserAssistantDelegate` protocol describes the methods that the delegate object for an `MCAdvertiserAssistant` instance can implement to handle advertising-related events.
- [MCBrowserViewControllerDelegate](mcbrowserviewcontrollerdelegate.md): Deprecated. The `MCBrowserViewControllerDelegate` protocol defines the methods that your delegate object can implement to handle events related to the `MCBrowserViewController` class.
- [MCNearbyServiceBrowserDelegate](mcnearbyservicebrowserdelegate.md): Deprecated. The `MCNearbyServiceBrowserDelegate` protocol defines methods that a `MCNearbyServiceBrowser` object’s delegate can implement to handle browser-related events.
- [MCSessionDelegate](mcsessiondelegate.md): Deprecated. The `MCSessionDelegate` protocol defines methods that a delegate of the `MCSession` class can implement to handle session-related events. For more information, see [MCSession](mcsession.md).
