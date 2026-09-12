> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilityflags/isdirect](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilityflags/isdirect)

# isDirect (Swift)

**Framework:** System Configuration  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Network traffic to the specified node name or address will not go through a gateway, but is routed directly to one of the interfaces in the system.

## Declaration

```swift
static var isDirect: SCNetworkReachabilityFlags { get }
```

## See Also

### Constants

- [transientConnection](transientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [reachable](reachable.md): The specified node name or address can be reached using the current network configuration.
- [connectionRequired](connectionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. If this flag is set, the `kSCNetworkReachabilityFlagsConnectionOnTraffic` flag, `kSCNetworkReachabilityFlagsConnectionOnDemand` flag, or `kSCNetworkReachabilityFlagsIsWWAN` flag is also typically set to indicate the type of connection required. If the user must manually make the connection, the `kSCNetworkReachabilityFlagsInterventionRequired` flag is also set.
- [connectionOnTraffic](connectionontraffic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection.
- [interventionRequired](interventionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [connectionOnDemand](connectionondemand.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [isLocalAddress](islocaladdress.md): The specified node name or address is one that is associated with a network interface on the current system.
- [isWWAN](iswwan.md): The specified node name or address can be reached via a cellular connection, such as EDGE or GPRS.
- [connectionAutomatic](connectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection. This flag is a synonym for [connectionOnTraffic](connectionontraffic.md).

# kSCNetworkReachabilityFlagsIsDirect (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Network traffic to the specified node name or address will not go through a gateway, but is routed directly to one of the interfaces in the system.

## Declaration

```objectivec
kSCNetworkReachabilityFlagsIsDirect
```

## See Also

### Constants

- [kSCNetworkReachabilityFlagsTransientConnection](transientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [kSCNetworkReachabilityFlagsReachable](reachable.md): The specified node name or address can be reached using the current network configuration.
- [kSCNetworkReachabilityFlagsConnectionRequired](connectionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. If this flag is set, the `kSCNetworkReachabilityFlagsConnectionOnTraffic` flag, `kSCNetworkReachabilityFlagsConnectionOnDemand` flag, or `kSCNetworkReachabilityFlagsIsWWAN` flag is also typically set to indicate the type of connection required. If the user must manually make the connection, the `kSCNetworkReachabilityFlagsInterventionRequired` flag is also set.
- [kSCNetworkReachabilityFlagsConnectionOnTraffic](connectionontraffic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection.
- [kSCNetworkReachabilityFlagsInterventionRequired](interventionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkReachabilityFlagsConnectionOnDemand](connectionondemand.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkReachabilityFlagsIsLocalAddress](islocaladdress.md): The specified node name or address is one that is associated with a network interface on the current system.
- [kSCNetworkReachabilityFlagsIsWWAN](iswwan.md): The specified node name or address can be reached via a cellular connection, such as EDGE or GPRS.
- [kSCNetworkReachabilityFlagsConnectionAutomatic](connectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection. This flag is a synonym for [kSCNetworkReachabilityFlagsConnectionOnTraffic](connectionontraffic.md).
