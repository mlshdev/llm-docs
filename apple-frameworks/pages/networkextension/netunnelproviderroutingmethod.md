> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelproviderroutingmethod](https://developer.apple.com/documentation/networkextension/netunnelproviderroutingmethod)

# NETunnelProviderRoutingMethod (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

## Declaration

```swift
enum NETunnelProviderRoutingMethod
```

## Topics

### Routing Methods

- [NETunnelProviderRoutingMethod.destinationIP](netunnelproviderroutingmethod/destinationip.md): Route network traffic to the tunnel based on destination IP.
- [NETunnelProviderRoutingMethod.sourceApplication](netunnelproviderroutingmethod/sourceapplication.md): Route network traffic to the tunnel based on source application.
- [NETunnelProviderRoutingMethod.networkRule](netunnelproviderroutingmethod/networkrule.md): A routing method that routes traffic based on network rule objects specified by the provider.

### Initializers

- [init(rawValue:)](netunnelproviderroutingmethod/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting tunnel configuration properties

- [routingMethod](netunnelprovidermanager/routingmethod.md): The method that the system uses to route network traffic to the tunnel.

# NETunnelProviderRoutingMethod (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

## Declaration

```objectivec
enum NETunnelProviderRoutingMethod : NSInteger;
```

## Topics

### Routing Methods

- [NETunnelProviderRoutingMethodDestinationIP](netunnelproviderroutingmethod/destinationip.md): Route network traffic to the tunnel based on destination IP.
- [NETunnelProviderRoutingMethodSourceApplication](netunnelproviderroutingmethod/sourceapplication.md): Route network traffic to the tunnel based on source application.
- [NETunnelProviderRoutingMethodNetworkRule](netunnelproviderroutingmethod/networkrule.md): A routing method that routes traffic based on network rule objects specified by the provider.

## See Also

### Getting tunnel configuration properties

- [routingMethod](netunnelprovidermanager/routingmethod.md): The method that the system uses to route network traffic to the tunnel.
