> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectionpppstatus](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectionpppstatus)

# SCNetworkConnectionPPPStatus (Swift)

**Framework:** System Configuration  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The PPP-specific status of the network connection.

## Declaration

```swift
enum SCNetworkConnectionPPPStatus
```

<a id="overview"></a>

## Overview

This status is returned as part of the extended information for a PPP service. Note that additional status might be returned in the future. Therefore, your application should be prepared to receive an unknown value.

## Topics

### Constants

- [SCNetworkConnectionPPPStatus.disconnected](scnetworkconnectionpppstatus/disconnected.md): PPP is disconnected.
- [SCNetworkConnectionPPPStatus.initializing](scnetworkconnectionpppstatus/initializing.md): PPP is initializing.
- [SCNetworkConnectionPPPStatus.connectingLink](scnetworkconnectionpppstatus/connectinglink.md): PPP is connecting the lower connection layer (for example, the modem is dialing out).
- [SCNetworkConnectionPPPStatus.dialOnTraffic](scnetworkconnectionpppstatus/dialontraffic.md): PPP is waiting for networking traffic to automatically establish the connection.
- [SCNetworkConnectionPPPStatus.negotiatingLink](scnetworkconnectionpppstatus/negotiatinglink.md): The PPP lower layer is connected and PPP is negotiating the link layer (LCP protocol).
- [SCNetworkConnectionPPPStatus.authenticating](scnetworkconnectionpppstatus/authenticating.md): PPP is authenticating to the server (PAP, CHAP, MS-CHAP, or EAP protocols).
- [SCNetworkConnectionPPPStatus.waitingForCallBack](scnetworkconnectionpppstatus/waitingforcallback.md): PPP is waiting for the server to call back.
- [SCNetworkConnectionPPPStatus.negotiatingNetwork](scnetworkconnectionpppstatus/negotiatingnetwork.md): PPP is now authenticated and negotiating the networking layer (IPCP or IPv6CP protocols).
- [SCNetworkConnectionPPPStatus.connected](scnetworkconnectionpppstatus/connected.md): PPP is now fully connected for at least one networking layer. Additional networking protocol might still be negotiating.
- [SCNetworkConnectionPPPStatus.terminating](scnetworkconnectionpppstatus/terminating.md): PPP networking and link protocols are terminating.
- [SCNetworkConnectionPPPStatus.disconnectingLink](scnetworkconnectionpppstatus/disconnectinglink.md): PPP is disconnecting the lower level (for example, the modem is hanging up).
- [SCNetworkConnectionPPPStatus.holdingLinkOff](scnetworkconnectionpppstatus/holdinglinkoff.md): PPP is disconnected and maintaining the link temporarily off.
- [SCNetworkConnectionPPPStatus.suspended](scnetworkconnectionpppstatus/suspended.md): PPP is suspended as a result of the suspend command (for example, when a V.92 Modem is On Hold).
- [SCNetworkConnectionPPPStatus.waitingForRedial](scnetworkconnectionpppstatus/waitingforredial.md): PPP has found a busy server and is waiting for redial.

### Initializers

- [init(rawValue:)](scnetworkconnectionpppstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [SCNetworkConnectionStatus](scnetworkconnectionstatus.md): The current status of the network connection.
- [Statistics Dictionary Keys](statistics-dictionary-keys.md): Keys associated with values in the statistics dictionary.
- [Selection Options Dictionary Keys](selection-options-dictionary-keys.md): Keys used with the [SCNetworkConnectionCopyUserPreferences(\_:\_:\_:)](scnetworkconnectioncopyuserpreferences%28______%29.md) selection options dictionary.

# SCNetworkConnectionPPPStatus (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The PPP-specific status of the network connection.

## Declaration

```objectivec
enum SCNetworkConnectionPPPStatus : int32_t;
```

<a id="overview"></a>

## Overview

This status is returned as part of the extended information for a PPP service. Note that additional status might be returned in the future. Therefore, your application should be prepared to receive an unknown value.

## Topics

### Constants

- [kSCNetworkConnectionPPPDisconnected](scnetworkconnectionpppstatus/disconnected.md): PPP is disconnected.
- [kSCNetworkConnectionPPPInitializing](scnetworkconnectionpppstatus/initializing.md): PPP is initializing.
- [kSCNetworkConnectionPPPConnectingLink](scnetworkconnectionpppstatus/connectinglink.md): PPP is connecting the lower connection layer (for example, the modem is dialing out).
- [kSCNetworkConnectionPPPDialOnTraffic](scnetworkconnectionpppstatus/dialontraffic.md): PPP is waiting for networking traffic to automatically establish the connection.
- [kSCNetworkConnectionPPPNegotiatingLink](scnetworkconnectionpppstatus/negotiatinglink.md): The PPP lower layer is connected and PPP is negotiating the link layer (LCP protocol).
- [kSCNetworkConnectionPPPAuthenticating](scnetworkconnectionpppstatus/authenticating.md): PPP is authenticating to the server (PAP, CHAP, MS-CHAP, or EAP protocols).
- [kSCNetworkConnectionPPPWaitingForCallBack](scnetworkconnectionpppstatus/waitingforcallback.md): PPP is waiting for the server to call back.
- [kSCNetworkConnectionPPPNegotiatingNetwork](scnetworkconnectionpppstatus/negotiatingnetwork.md): PPP is now authenticated and negotiating the networking layer (IPCP or IPv6CP protocols).
- [kSCNetworkConnectionPPPConnected](scnetworkconnectionpppstatus/connected.md): PPP is now fully connected for at least one networking layer. Additional networking protocol might still be negotiating.
- [kSCNetworkConnectionPPPTerminating](scnetworkconnectionpppstatus/terminating.md): PPP networking and link protocols are terminating.
- [kSCNetworkConnectionPPPDisconnectingLink](scnetworkconnectionpppstatus/disconnectinglink.md): PPP is disconnecting the lower level (for example, the modem is hanging up).
- [kSCNetworkConnectionPPPHoldingLinkOff](scnetworkconnectionpppstatus/holdinglinkoff.md): PPP is disconnected and maintaining the link temporarily off.
- [kSCNetworkConnectionPPPSuspended](scnetworkconnectionpppstatus/suspended.md): PPP is suspended as a result of the suspend command (for example, when a V.92 Modem is On Hold).
- [kSCNetworkConnectionPPPWaitingForRedial](scnetworkconnectionpppstatus/waitingforredial.md): PPP has found a busy server and is waiting for redial.

## See Also

### Constants

- [SCNetworkConnectionStatus](scnetworkconnectionstatus.md): The current status of the network connection.
- [Statistics Dictionary Keys](statistics-dictionary-keys.md): Keys associated with values in the statistics dictionary.
- [Selection Options Dictionary Keys](selection-options-dictionary-keys.md): Keys used with the [SCNetworkConnectionCopyUserPreferences](scnetworkconnectioncopyuserpreferences%28______%29.md) selection options dictionary.
