> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/kscnetworkflagsisdirect](https://developer.apple.com/documentation/systemconfiguration/kscnetworkflagsisdirect)

# kSCNetworkFlagsIsDirect (Swift)

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Network traffic to the specified node name or address does not go through a gateway, but is routed directly to one of the interfaces in the system.

## Declaration

```swift
var kSCNetworkFlagsIsDirect: Int { get }
```

## See Also

### Constants

- [kSCNetworkFlagsTransientConnection](kscnetworkflagstransientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [kSCNetworkFlagsReachable](kscnetworkflagsreachable.md): The specified node name or address can be reached using the current network configuration.
- [kSCNetworkFlagsConnectionRequired](kscnetworkflagsconnectionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsConnectionAutomatic](kscnetworkflagsconnectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsInterventionRequired](kscnetworkflagsinterventionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsIsLocalAddress](kscnetworkflagsislocaladdress.md): The specified node name or address is one associated with a network interface on the current system.

# kSCNetworkFlagsIsDirect (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Network traffic to the specified node name or address does not go through a gateway, but is routed directly to one of the interfaces in the system.

## Declaration

```objectivec
kSCNetworkFlagsIsDirect
```

## See Also

### Constants

- [kSCNetworkFlagsTransientConnection](kscnetworkflagstransientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [kSCNetworkFlagsReachable](kscnetworkflagsreachable.md): The specified node name or address can be reached using the current network configuration.
- [kSCNetworkFlagsConnectionRequired](kscnetworkflagsconnectionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsConnectionAutomatic](kscnetworkflagsconnectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsInterventionRequired](kscnetworkflagsinterventionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkFlagsIsLocalAddress](kscnetworkflagsislocaladdress.md): The specified node name or address is one associated with a network interface on the current system.
