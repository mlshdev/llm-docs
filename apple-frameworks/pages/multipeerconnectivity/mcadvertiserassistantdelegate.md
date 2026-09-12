> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcadvertiserassistantdelegate](https://developer.apple.com/documentation/multipeerconnectivity/mcadvertiserassistantdelegate)

# MCAdvertiserAssistantDelegate (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCAdvertiserAssistantDelegate` protocol describes the methods that the delegate object for an `MCAdvertiserAssistant` instance can implement to handle advertising-related events.

> Use Network Framework instead

## Declaration

```swift
protocol MCAdvertiserAssistantDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

No assumption should be made about which queue the delegate methods are called on. It is the delegate’s responsibility to ensure that any UIKit-related updates are called on the main thread.

## Topics

### Advertiser Assistant Delegate Methods

- [advertiserAssistantWillPresentInvitation(\_:)](mcadvertiserassistantdelegate/advertiserassistantwillpresentinvitation%28__%29.md): Deprecated. Indicates that the advertiser assistant is about to present an invitation to the user.
- [advertiserAssistantDidDismissInvitation(\_:)](mcadvertiserassistantdelegate/advertiserassistantdiddismissinvitation%28__%29.md): Deprecated. Indicates that the advertiser assistant finished showing the invitation to the user.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Protocols

- [MCBrowserViewControllerDelegate](mcbrowserviewcontrollerdelegate.md): Deprecated. The `MCBrowserViewControllerDelegate` protocol defines the methods that your delegate object can implement to handle events related to the `MCBrowserViewController` class.
- [MCNearbyServiceAdvertiserDelegate](mcnearbyserviceadvertiserdelegate.md): Deprecated. The `MCNearbyServiceAdvertiserDelegate` protocol describes the methods that the delegate object for an `MCNearbyServiceAdvertiser` instance can implement for handling events from the `MCNearbyServiceAdvertiser` class.
- [MCNearbyServiceBrowserDelegate](mcnearbyservicebrowserdelegate.md): Deprecated. The `MCNearbyServiceBrowserDelegate` protocol defines methods that a `MCNearbyServiceBrowser` object’s delegate can implement to handle browser-related events.
- [MCSessionDelegate](mcsessiondelegate.md): Deprecated. The `MCSessionDelegate` protocol defines methods that a delegate of the `MCSession` class can implement to handle session-related events. For more information, see [MCSession](mcsession.md).

# MCAdvertiserAssistantDelegate (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Protocol  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `MCAdvertiserAssistantDelegate` protocol describes the methods that the delegate object for an `MCAdvertiserAssistant` instance can implement to handle advertising-related events.

> Use Network Framework instead

## Declaration

```objectivec
@protocol MCAdvertiserAssistantDelegate <NSObject>
```

<a id="overview"></a>

## Overview

No assumption should be made about which queue the delegate methods are called on. It is the delegate’s responsibility to ensure that any UIKit-related updates are called on the main thread.

## Topics

### Advertiser Assistant Delegate Methods

- [advertiserAssistantWillPresentInvitation:](mcadvertiserassistantdelegate/advertiserassistantwillpresentinvitation%28__%29.md): Deprecated. Indicates that the advertiser assistant is about to present an invitation to the user.
- [advertiserAssistantDidDismissInvitation:](mcadvertiserassistantdelegate/advertiserassistantdiddismissinvitation%28__%29.md): Deprecated. Indicates that the advertiser assistant finished showing the invitation to the user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Protocols

- [MCBrowserViewControllerDelegate](mcbrowserviewcontrollerdelegate.md): Deprecated. The `MCBrowserViewControllerDelegate` protocol defines the methods that your delegate object can implement to handle events related to the `MCBrowserViewController` class.
- [MCNearbyServiceAdvertiserDelegate](mcnearbyserviceadvertiserdelegate.md): Deprecated. The `MCNearbyServiceAdvertiserDelegate` protocol describes the methods that the delegate object for an `MCNearbyServiceAdvertiser` instance can implement for handling events from the `MCNearbyServiceAdvertiser` class.
- [MCNearbyServiceBrowserDelegate](mcnearbyservicebrowserdelegate.md): Deprecated. The `MCNearbyServiceBrowserDelegate` protocol defines methods that a `MCNearbyServiceBrowser` object’s delegate can implement to handle browser-related events.
- [MCSessionDelegate](mcsessiondelegate.md): Deprecated. The `MCSessionDelegate` protocol defines methods that a delegate of the `MCSession` class can implement to handle session-related events. For more information, see [MCSession](mcsession.md).
