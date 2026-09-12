> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyservicebrowserdelegate](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyservicebrowserdelegate)

# MCNearbyServiceBrowserDelegate (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCNearbyServiceBrowserDelegate` protocol defines methods that a `MCNearbyServiceBrowser` object’s delegate can implement to handle browser-related events.

> Use Network Framework instead

## Declaration

```swift
protocol MCNearbyServiceBrowserDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

No assumption should be made about which queue the delegate methods are called on. It is the receiver’s responsibility to ensure that any `UIKit` updates are called on the main thread.

## Topics

### Error Handling Delegate Methods

- [browser(\_:didNotStartBrowsingForPeers:)](mcnearbyservicebrowserdelegate/browser%28__didnotstartbrowsingforpeers_%29.md): Deprecated. Called when a browser failed to start browsing for peers.

### Peer Discovery Delegate Methods

- [browser(\_:foundPeer:withDiscoveryInfo:)](mcnearbyservicebrowserdelegate/browser%28__foundpeer_withdiscoveryinfo_%29.md): Deprecated. Called when a nearby peer is found.
- [browser(\_:lostPeer:)](mcnearbyservicebrowserdelegate/browser%28__lostpeer_%29.md): Deprecated. Called when a nearby peer is lost.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MCBrowserViewController](mcbrowserviewcontroller.md)

## See Also

### Protocols

- [MCAdvertiserAssistantDelegate](mcadvertiserassistantdelegate.md): Deprecated. The `MCAdvertiserAssistantDelegate` protocol describes the methods that the delegate object for an `MCAdvertiserAssistant` instance can implement to handle advertising-related events.
- [MCBrowserViewControllerDelegate](mcbrowserviewcontrollerdelegate.md): Deprecated. The `MCBrowserViewControllerDelegate` protocol defines the methods that your delegate object can implement to handle events related to the `MCBrowserViewController` class.
- [MCNearbyServiceAdvertiserDelegate](mcnearbyserviceadvertiserdelegate.md): Deprecated. The `MCNearbyServiceAdvertiserDelegate` protocol describes the methods that the delegate object for an `MCNearbyServiceAdvertiser` instance can implement for handling events from the `MCNearbyServiceAdvertiser` class.
- [MCSessionDelegate](mcsessiondelegate.md): Deprecated. The `MCSessionDelegate` protocol defines methods that a delegate of the `MCSession` class can implement to handle session-related events. For more information, see [MCSession](mcsession.md).

# MCNearbyServiceBrowserDelegate (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCNearbyServiceBrowserDelegate` protocol defines methods that a `MCNearbyServiceBrowser` object’s delegate can implement to handle browser-related events.

> Use Network Framework instead

## Declaration

```objectivec
@protocol MCNearbyServiceBrowserDelegate <NSObject>
```

<a id="overview"></a>

## Overview

No assumption should be made about which queue the delegate methods are called on. It is the receiver’s responsibility to ensure that any `UIKit` updates are called on the main thread.

## Topics

### Error Handling Delegate Methods

- [browser:didNotStartBrowsingForPeers:](mcnearbyservicebrowserdelegate/browser%28__didnotstartbrowsingforpeers_%29.md): Deprecated. Called when a browser failed to start browsing for peers.

### Peer Discovery Delegate Methods

- [browser:foundPeer:withDiscoveryInfo:](mcnearbyservicebrowserdelegate/browser%28__foundpeer_withdiscoveryinfo_%29.md): Deprecated. Called when a nearby peer is found.
- [browser:lostPeer:](mcnearbyservicebrowserdelegate/browser%28__lostpeer_%29.md): Deprecated. Called when a nearby peer is lost.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MCBrowserViewController](mcbrowserviewcontroller.md)

## See Also

### Protocols

- [MCAdvertiserAssistantDelegate](mcadvertiserassistantdelegate.md): Deprecated. The `MCAdvertiserAssistantDelegate` protocol describes the methods that the delegate object for an `MCAdvertiserAssistant` instance can implement to handle advertising-related events.
- [MCBrowserViewControllerDelegate](mcbrowserviewcontrollerdelegate.md): Deprecated. The `MCBrowserViewControllerDelegate` protocol defines the methods that your delegate object can implement to handle events related to the `MCBrowserViewController` class.
- [MCNearbyServiceAdvertiserDelegate](mcnearbyserviceadvertiserdelegate.md): Deprecated. The `MCNearbyServiceAdvertiserDelegate` protocol describes the methods that the delegate object for an `MCNearbyServiceAdvertiser` instance can implement for handling events from the `MCNearbyServiceAdvertiser` class.
- [MCSessionDelegate](mcsessiondelegate.md): Deprecated. The `MCSessionDelegate` protocol defines methods that a delegate of the `MCSession` class can implement to handle session-related events. For more information, see [MCSession](mcsession.md).
