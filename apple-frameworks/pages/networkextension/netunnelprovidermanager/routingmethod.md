> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovidermanager/routingmethod](https://developer.apple.com/documentation/networkextension/netunnelprovidermanager/routingmethod)

# routingMethod (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The method that the system uses to route network traffic to the tunnel.

## Declaration

```swift
var routingMethod: NETunnelProviderRoutingMethod { get }
```

<a id="Discussion"></a>

## Discussion

The default is [NETunnelProviderRoutingMethod.destinationIP](../netunnelproviderroutingmethod/destinationip.md).

## See Also

### Getting tunnel configuration properties

- [NETunnelProviderRoutingMethod](../netunnelproviderroutingmethod.md)

# routingMethod (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The method that the system uses to route network traffic to the tunnel.

## Declaration

```objectivec
@property (readonly) NETunnelProviderRoutingMethod routingMethod;
```

<a id="Discussion"></a>

## Discussion

The default is [NETunnelProviderRoutingMethodDestinationIP](../netunnelproviderroutingmethod/destinationip.md).

## See Also

### Getting tunnel configuration properties

- [NETunnelProviderRoutingMethod](../netunnelproviderroutingmethod.md)
