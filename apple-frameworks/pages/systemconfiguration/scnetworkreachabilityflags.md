> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilityflags](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilityflags)

# SCNetworkReachabilityFlags (Swift)

**Framework:** System Configuration  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Flags that indicate the reachability of a network node name or address, including whether a connection is required, and whether some user intervention might be required when establishing a connection.

## Declaration

```swift
struct SCNetworkReachabilityFlags
```

## Topics

### Constants

- [transientConnection](scnetworkreachabilityflags/transientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [reachable](scnetworkreachabilityflags/reachable.md): The specified node name or address can be reached using the current network configuration.
- [connectionRequired](scnetworkreachabilityflags/connectionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. If this flag is set, the `kSCNetworkReachabilityFlagsConnectionOnTraffic` flag, `kSCNetworkReachabilityFlagsConnectionOnDemand` flag, or `kSCNetworkReachabilityFlagsIsWWAN` flag is also typically set to indicate the type of connection required. If the user must manually make the connection, the `kSCNetworkReachabilityFlagsInterventionRequired` flag is also set.
- [connectionOnTraffic](scnetworkreachabilityflags/connectionontraffic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection.
- [interventionRequired](scnetworkreachabilityflags/interventionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [connectionOnDemand](scnetworkreachabilityflags/connectionondemand.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [isLocalAddress](scnetworkreachabilityflags/islocaladdress.md): The specified node name or address is one that is associated with a network interface on the current system.
- [isDirect](scnetworkreachabilityflags/isdirect.md): Network traffic to the specified node name or address will not go through a gateway, but is routed directly to one of the interfaces in the system.
- [isWWAN](scnetworkreachabilityflags/iswwan.md): The specified node name or address can be reached via a cellular connection, such as EDGE or GPRS.
- [connectionAutomatic](scnetworkreachabilityflags/connectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection. This flag is a synonym for [connectionOnTraffic](scnetworkreachabilityflags/connectionontraffic.md).

### Initializers

- [init(rawValue:)](scnetworkreachabilityflags/init%28rawvalue_%29.md): Creates a network reachability flags structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SCNetworkReachabilityFlags (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Flags that indicate the reachability of a network node name or address, including whether a connection is required, and whether some user intervention might be required when establishing a connection.

## Declaration

```objectivec
enum SCNetworkReachabilityFlags : uint32_t;
```

## Topics

### Constants

- [kSCNetworkReachabilityFlagsTransientConnection](scnetworkreachabilityflags/transientconnection.md): The specified node name or address can be reached via a transient connection, such as PPP.
- [kSCNetworkReachabilityFlagsReachable](scnetworkreachabilityflags/reachable.md): The specified node name or address can be reached using the current network configuration.
- [kSCNetworkReachabilityFlagsConnectionRequired](scnetworkreachabilityflags/connectionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. If this flag is set, the `kSCNetworkReachabilityFlagsConnectionOnTraffic` flag, `kSCNetworkReachabilityFlagsConnectionOnDemand` flag, or `kSCNetworkReachabilityFlagsIsWWAN` flag is also typically set to indicate the type of connection required. If the user must manually make the connection, the `kSCNetworkReachabilityFlagsInterventionRequired` flag is also set.
- [kSCNetworkReachabilityFlagsConnectionOnTraffic](scnetworkreachabilityflags/connectionontraffic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection.
- [kSCNetworkReachabilityFlagsInterventionRequired](scnetworkreachabilityflags/interventionrequired.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkReachabilityFlagsConnectionOnDemand](scnetworkreachabilityflags/connectionondemand.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established.
- [kSCNetworkReachabilityFlagsIsLocalAddress](scnetworkreachabilityflags/islocaladdress.md): The specified node name or address is one that is associated with a network interface on the current system.
- [kSCNetworkReachabilityFlagsIsDirect](scnetworkreachabilityflags/isdirect.md): Network traffic to the specified node name or address will not go through a gateway, but is routed directly to one of the interfaces in the system.
- [kSCNetworkReachabilityFlagsIsWWAN](scnetworkreachabilityflags/iswwan.md): The specified node name or address can be reached via a cellular connection, such as EDGE or GPRS.
- [kSCNetworkReachabilityFlagsConnectionAutomatic](scnetworkreachabilityflags/connectionautomatic.md): The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection. This flag is a synonym for [kSCNetworkReachabilityFlagsConnectionOnTraffic](scnetworkreachabilityflags/connectionontraffic.md).
