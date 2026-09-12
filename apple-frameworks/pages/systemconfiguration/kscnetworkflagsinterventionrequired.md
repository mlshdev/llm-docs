> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/kscnetworkflagsinterventionrequired](https://developer.apple.com/documentation/systemconfiguration/kscnetworkflagsinterventionrequired)

# kSCNetworkFlagsInterventionRequired (Swift)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The specified node name or address can be reached using the current network configuration, but a connection must first be established.

## Declaration

```swift
var kSCNetworkFlagsInterventionRequired: Int { get }
```

<a id="Discussion"></a>

## Discussion

In addition, some form of user intervention will be required to establish this connection, such as providing a password, an authentication token, etc.

Currently, this flag is returned when there is a dial-on-traffic configuration (`ConnectionAutomatic`), an attempt to connect has already been made, and when some error (for example, no dial tone, no answer, bad password, etc.) was encountered during the automatic connection attempt. In this case the PPP controller stops attempting to establish a connection until the user has intervened.

## See Also

### Constants

- [kSCNetworkFlagsTransientConnection](kscnetworkflagstransientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [kSCNetworkFlagsReachable](kscnetworkflagsreachable.md): The specified node name or address can be reached using the current network configuration.
- [kSCNetworkFlagsConnectionRequired](kscnetworkflagsconnectionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsConnectionAutomatic](kscnetworkflagsconnectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsIsLocalAddress](kscnetworkflagsislocaladdress.md): The specified node name or address is one associated with a network interface on the current system.
- [kSCNetworkFlagsIsDirect](kscnetworkflagsisdirect.md): Network traffic to the specified node name or address does not go through a gateway, but is routed directly to one of the interfaces in the system.

# kSCNetworkFlagsInterventionRequired (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The specified node name or address can be reached using the current network configuration, but a connection must first be established.

## Declaration

```objectivec
kSCNetworkFlagsInterventionRequired
```

<a id="Discussion"></a>

## Discussion

In addition, some form of user intervention will be required to establish this connection, such as providing a password, an authentication token, etc.

Currently, this flag is returned when there is a dial-on-traffic configuration (`ConnectionAutomatic`), an attempt to connect has already been made, and when some error (for example, no dial tone, no answer, bad password, etc.) was encountered during the automatic connection attempt. In this case the PPP controller stops attempting to establish a connection until the user has intervened.

## See Also

### Constants

- [kSCNetworkFlagsTransientConnection](kscnetworkflagstransientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [kSCNetworkFlagsReachable](kscnetworkflagsreachable.md): The specified node name or address can be reached using the current network configuration.
- [kSCNetworkFlagsConnectionRequired](kscnetworkflagsconnectionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsConnectionAutomatic](kscnetworkflagsconnectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsIsLocalAddress](kscnetworkflagsislocaladdress.md): The specified node name or address is one associated with a network interface on the current system.
- [kSCNetworkFlagsIsDirect](kscnetworkflagsisdirect.md): Network traffic to the specified node name or address does not go through a gateway, but is routed directly to one of the interfaces in the system.
