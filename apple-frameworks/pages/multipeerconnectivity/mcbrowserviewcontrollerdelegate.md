> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcbrowserviewcontrollerdelegate](https://developer.apple.com/documentation/multipeerconnectivity/mcbrowserviewcontrollerdelegate)

# MCBrowserViewControllerDelegate (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCBrowserViewControllerDelegate` protocol defines the methods that your delegate object can implement to handle events related to the `MCBrowserViewController` class.

> Use Network Framework instead

## Declaration

```swift
protocol MCBrowserViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

No assumption should be made about which queue the delegate methods are called on. It is the receiver’s responsibility to ensure that any UIKit-related updates are called on the main thread.

## Topics

### Peer Notifications

- [browserViewController(\_:shouldPresentNearbyPeer:withDiscoveryInfo:)](mcbrowserviewcontrollerdelegate/browserviewcontroller%28__shouldpresentnearbypeer_withdiscoveryinfo_%29.md): Deprecated. Called when a new peer is discovered to decide whether to show it in the user interface.

### User Action Notifications

- [browserViewControllerDidFinish(\_:)](mcbrowserviewcontrollerdelegate/browserviewcontrollerdidfinish%28__%29.md): Deprecated. Called when the browser view controller is dismissed with peers connected in a session.
- [browserViewControllerWasCancelled(\_:)](mcbrowserviewcontrollerdelegate/browserviewcontrollerwascancelled%28__%29.md): Deprecated. Called when the user cancels the browser view controller.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Protocols

- [MCAdvertiserAssistantDelegate](mcadvertiserassistantdelegate.md): Deprecated. The `MCAdvertiserAssistantDelegate` protocol describes the methods that the delegate object for an `MCAdvertiserAssistant` instance can implement to handle advertising-related events.
- [MCNearbyServiceAdvertiserDelegate](mcnearbyserviceadvertiserdelegate.md): Deprecated. The `MCNearbyServiceAdvertiserDelegate` protocol describes the methods that the delegate object for an `MCNearbyServiceAdvertiser` instance can implement for handling events from the `MCNearbyServiceAdvertiser` class.
- [MCNearbyServiceBrowserDelegate](mcnearbyservicebrowserdelegate.md): Deprecated. The `MCNearbyServiceBrowserDelegate` protocol defines methods that a `MCNearbyServiceBrowser` object’s delegate can implement to handle browser-related events.
- [MCSessionDelegate](mcsessiondelegate.md): Deprecated. The `MCSessionDelegate` protocol defines methods that a delegate of the `MCSession` class can implement to handle session-related events. For more information, see [MCSession](mcsession.md).

# MCBrowserViewControllerDelegate (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCBrowserViewControllerDelegate` protocol defines the methods that your delegate object can implement to handle events related to the `MCBrowserViewController` class.

> Use Network Framework instead

## Declaration

```objectivec
@protocol MCBrowserViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

No assumption should be made about which queue the delegate methods are called on. It is the receiver’s responsibility to ensure that any UIKit-related updates are called on the main thread.

## Topics

### Peer Notifications

- [browserViewController:shouldPresentNearbyPeer:withDiscoveryInfo:](mcbrowserviewcontrollerdelegate/browserviewcontroller%28__shouldpresentnearbypeer_withdiscoveryinfo_%29.md): Deprecated. Called when a new peer is discovered to decide whether to show it in the user interface.

### User Action Notifications

- [browserViewControllerDidFinish:](mcbrowserviewcontrollerdelegate/browserviewcontrollerdidfinish%28__%29.md): Deprecated. Called when the browser view controller is dismissed with peers connected in a session.
- [browserViewControllerWasCancelled:](mcbrowserviewcontrollerdelegate/browserviewcontrollerwascancelled%28__%29.md): Deprecated. Called when the user cancels the browser view controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Protocols

- [MCAdvertiserAssistantDelegate](mcadvertiserassistantdelegate.md): Deprecated. The `MCAdvertiserAssistantDelegate` protocol describes the methods that the delegate object for an `MCAdvertiserAssistant` instance can implement to handle advertising-related events.
- [MCNearbyServiceAdvertiserDelegate](mcnearbyserviceadvertiserdelegate.md): Deprecated. The `MCNearbyServiceAdvertiserDelegate` protocol describes the methods that the delegate object for an `MCNearbyServiceAdvertiser` instance can implement for handling events from the `MCNearbyServiceAdvertiser` class.
- [MCNearbyServiceBrowserDelegate](mcnearbyservicebrowserdelegate.md): Deprecated. The `MCNearbyServiceBrowserDelegate` protocol defines methods that a `MCNearbyServiceBrowser` object’s delegate can implement to handle browser-related events.
- [MCSessionDelegate](mcsessiondelegate.md): Deprecated. The `MCSessionDelegate` protocol defines methods that a delegate of the `MCSession` class can implement to handle session-related events. For more information, see [MCSession](mcsession.md).
