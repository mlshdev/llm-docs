> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilityflags/interventionrequired](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilityflags/interventionrequired)

# interventionRequired (Swift)

**Framework:** System Configuration  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The specified node name or address can be reached using the current network configuration, but a connection must first be established.

## Declaration

```swift
static var interventionRequired: SCNetworkReachabilityFlags { get }
```

<a id="Discussion"></a>

## Discussion

In addition, some form of user intervention will be required to establish this connection, such as providing a password, an authentication token, etc.

Currently, this flag is returned only when there is a dial-on-traffic configuration (`kSCNetworkReachabilityFlagsConnectionOnTraffic`), an attempt to connect has already been made, and when some error (such as no dial tone, no answer, bad password, etc.) occurred during the automatic connection attempt. In this case the PPP controller stops attempting to establish a connection until the user has intervened.

## See Also

### Constants

- [transientConnection](transientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [reachable](reachable.md): The specified node name or address can be reached using the current network configuration.
- [connectionRequired](connectionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. If this flag is set, the `kSCNetworkReachabilityFlagsConnectionOnTraffic` flag, `kSCNetworkReachabilityFlagsConnectionOnDemand` flag, or `kSCNetworkReachabilityFlagsIsWWAN` flag is also typically set to indicate the type of connection required. If the user must manually make the connection, the `kSCNetworkReachabilityFlagsInterventionRequired` flag is also set.
- [connectionOnTraffic](connectionontraffic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection.
- [connectionOnDemand](connectionondemand.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [isLocalAddress](islocaladdress.md): The specified node name or address is one that is associated with a network interface on the current system.
- [isDirect](isdirect.md): Network traffic to the specified node name or address will not go through a gateway, but is routed directly to one of the interfaces in the system.
- [isWWAN](iswwan.md): The specified node name or address can be reached via a cellular connection, such as EDGE or GPRS.
- [connectionAutomatic](connectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection. This flag is a synonym for [connectionOnTraffic](connectionontraffic.md).

# kSCNetworkReachabilityFlagsInterventionRequired (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The specified node name or address can be reached using the current network configuration, but a connection must first be established.

## Declaration

```objectivec
kSCNetworkReachabilityFlagsInterventionRequired
```

<a id="Discussion"></a>

## Discussion

In addition, some form of user intervention will be required to establish this connection, such as providing a password, an authentication token, etc.

Currently, this flag is returned only when there is a dial-on-traffic configuration (`kSCNetworkReachabilityFlagsConnectionOnTraffic`), an attempt to connect has already been made, and when some error (such as no dial tone, no answer, bad password, etc.) occurred during the automatic connection attempt. In this case the PPP controller stops attempting to establish a connection until the user has intervened.

## See Also

### Constants

- [kSCNetworkReachabilityFlagsTransientConnection](transientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [kSCNetworkReachabilityFlagsReachable](reachable.md): The specified node name or address can be reached using the current network configuration.
- [kSCNetworkReachabilityFlagsConnectionRequired](connectionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. If this flag is set, the `kSCNetworkReachabilityFlagsConnectionOnTraffic` flag, `kSCNetworkReachabilityFlagsConnectionOnDemand` flag, or `kSCNetworkReachabilityFlagsIsWWAN` flag is also typically set to indicate the type of connection required. If the user must manually make the connection, the `kSCNetworkReachabilityFlagsInterventionRequired` flag is also set.
- [kSCNetworkReachabilityFlagsConnectionOnTraffic](connectionontraffic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection.
- [kSCNetworkReachabilityFlagsConnectionOnDemand](connectionondemand.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkReachabilityFlagsIsLocalAddress](islocaladdress.md): The specified node name or address is one that is associated with a network interface on the current system.
- [kSCNetworkReachabilityFlagsIsDirect](isdirect.md): Network traffic to the specified node name or address will not go through a gateway, but is routed directly to one of the interfaces in the system.
- [kSCNetworkReachabilityFlagsIsWWAN](iswwan.md): The specified node name or address can be reached via a cellular connection, such as EDGE or GPRS.
- [kSCNetworkReachabilityFlagsConnectionAutomatic](connectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection. This flag is a synonym for [kSCNetworkReachabilityFlagsConnectionOnTraffic](connectionontraffic.md).
