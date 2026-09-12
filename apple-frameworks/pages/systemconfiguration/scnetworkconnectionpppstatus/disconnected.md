> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectionpppstatus/disconnected](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectionpppstatus/disconnected)

# SCNetworkConnectionPPPStatus.disconnected (Swift)

**Framework:** System Configuration  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

PPP is disconnected.

## Declaration

```swift
case disconnected
```

## See Also

### Constants

- [SCNetworkConnectionPPPStatus.initializing](initializing.md): PPP is initializing.
- [SCNetworkConnectionPPPStatus.connectingLink](connectinglink.md): PPP is connecting the lower connection layer (for example, the modem is dialing out).
- [SCNetworkConnectionPPPStatus.dialOnTraffic](dialontraffic.md): PPP is waiting for networking traffic to automatically establish the connection.
- [SCNetworkConnectionPPPStatus.negotiatingLink](negotiatinglink.md): The PPP lower layer is connected and PPP is negotiating the link layer (LCP protocol).
- [SCNetworkConnectionPPPStatus.authenticating](authenticating.md): PPP is authenticating to the server (PAP, CHAP, MS-CHAP, or EAP protocols).
- [SCNetworkConnectionPPPStatus.waitingForCallBack](waitingforcallback.md): PPP is waiting for the server to call back.
- [SCNetworkConnectionPPPStatus.negotiatingNetwork](negotiatingnetwork.md): PPP is now authenticated and negotiating the networking layer (IPCP or IPv6CP protocols).
- [SCNetworkConnectionPPPStatus.connected](connected.md): PPP is now fully connected for at least one networking layer. Additional networking protocol might still be negotiating.
- [SCNetworkConnectionPPPStatus.terminating](terminating.md): PPP networking and link protocols are terminating.
- [SCNetworkConnectionPPPStatus.disconnectingLink](disconnectinglink.md): PPP is disconnecting the lower level (for example, the modem is hanging up).
- [SCNetworkConnectionPPPStatus.holdingLinkOff](holdinglinkoff.md): PPP is disconnected and maintaining the link temporarily off.
- [SCNetworkConnectionPPPStatus.suspended](suspended.md): PPP is suspended as a result of the suspend command (for example, when a V.92 Modem is On Hold).
- [SCNetworkConnectionPPPStatus.waitingForRedial](waitingforredial.md): PPP has found a busy server and is waiting for redial.

# kSCNetworkConnectionPPPDisconnected (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

PPP is disconnected.

## Declaration

```objectivec
kSCNetworkConnectionPPPDisconnected
```

## See Also

### Constants

- [kSCNetworkConnectionPPPInitializing](initializing.md): PPP is initializing.
- [kSCNetworkConnectionPPPConnectingLink](connectinglink.md): PPP is connecting the lower connection layer (for example, the modem is dialing out).
- [kSCNetworkConnectionPPPDialOnTraffic](dialontraffic.md): PPP is waiting for networking traffic to automatically establish the connection.
- [kSCNetworkConnectionPPPNegotiatingLink](negotiatinglink.md): The PPP lower layer is connected and PPP is negotiating the link layer (LCP protocol).
- [kSCNetworkConnectionPPPAuthenticating](authenticating.md): PPP is authenticating to the server (PAP, CHAP, MS-CHAP, or EAP protocols).
- [kSCNetworkConnectionPPPWaitingForCallBack](waitingforcallback.md): PPP is waiting for the server to call back.
- [kSCNetworkConnectionPPPNegotiatingNetwork](negotiatingnetwork.md): PPP is now authenticated and negotiating the networking layer (IPCP or IPv6CP protocols).
- [kSCNetworkConnectionPPPConnected](connected.md): PPP is now fully connected for at least one networking layer. Additional networking protocol might still be negotiating.
- [kSCNetworkConnectionPPPTerminating](terminating.md): PPP networking and link protocols are terminating.
- [kSCNetworkConnectionPPPDisconnectingLink](disconnectinglink.md): PPP is disconnecting the lower level (for example, the modem is hanging up).
- [kSCNetworkConnectionPPPHoldingLinkOff](holdinglinkoff.md): PPP is disconnected and maintaining the link temporarily off.
- [kSCNetworkConnectionPPPSuspended](suspended.md): PPP is suspended as a result of the suspend command (for example, when a V.92 Modem is On Hold).
- [kSCNetworkConnectionPPPWaitingForRedial](waitingforredial.md): PPP has found a busy server and is waiting for redial.
