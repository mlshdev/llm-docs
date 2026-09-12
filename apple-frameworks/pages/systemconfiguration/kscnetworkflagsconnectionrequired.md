> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/kscnetworkflagsconnectionrequired](https://developer.apple.com/documentation/systemconfiguration/kscnetworkflagsconnectionrequired)

# kSCNetworkFlagsConnectionRequired (Swift)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The specified node name or address can be reached using the current network configuration, but a connection must first be established.

## Declaration

```swift
var kSCNetworkFlagsConnectionRequired: Int { get }
```

<a id="Discussion"></a>

## Discussion

For example, this status would be returned for a dialup connection that was not currently active, but could handle network traffic for the target system.

## See Also

### Constants

- [kSCNetworkFlagsTransientConnection](kscnetworkflagstransientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [kSCNetworkFlagsReachable](kscnetworkflagsreachable.md): The specified node name or address can be reached using the current network configuration.
- [kSCNetworkFlagsConnectionAutomatic](kscnetworkflagsconnectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsInterventionRequired](kscnetworkflagsinterventionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsIsLocalAddress](kscnetworkflagsislocaladdress.md): The specified node name or address is one associated with a network interface on the current system.
- [kSCNetworkFlagsIsDirect](kscnetworkflagsisdirect.md): Network traffic to the specified node name or address does not go through a gateway, but is routed directly to one of the interfaces in the system.

# kSCNetworkFlagsConnectionRequired (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The specified node name or address can be reached using the current network configuration, but a connection must first be established.

## Declaration

```objectivec
kSCNetworkFlagsConnectionRequired
```

<a id="Discussion"></a>

## Discussion

For example, this status would be returned for a dialup connection that was not currently active, but could handle network traffic for the target system.

## See Also

### Constants

- [kSCNetworkFlagsTransientConnection](kscnetworkflagstransientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [kSCNetworkFlagsReachable](kscnetworkflagsreachable.md): The specified node name or address can be reached using the current network configuration.
- [kSCNetworkFlagsConnectionAutomatic](kscnetworkflagsconnectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsInterventionRequired](kscnetworkflagsinterventionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsIsLocalAddress](kscnetworkflagsislocaladdress.md): The specified node name or address is one associated with a network interface on the current system.
- [kSCNetworkFlagsIsDirect](kscnetworkflagsisdirect.md): Network traffic to the specified node name or address does not go through a gateway, but is routed directly to one of the interfaces in the system.
