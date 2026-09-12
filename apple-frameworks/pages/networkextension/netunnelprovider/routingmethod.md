> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovider/routingmethod](https://developer.apple.com/documentation/networkextension/netunnelprovider/routingmethod)

# routingMethod (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The method by which network traffic is routed to the tunnel.

## Declaration

```swift
var routingMethod: NETunnelProviderRoutingMethod { get }
```

<a id="Discussion"></a>

## Discussion

The default is [NETunnelProviderRoutingMethod.destinationIP](../netunnelproviderroutingmethod/destinationip.md).

## See Also

### Getting the tunnel configuration

- [protocolConfiguration](protocolconfiguration.md): The configuration of the current tunneling session.
- [appRules](apprules.md): The app rules dictating which apps use the current tunneling session.

# routingMethod (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The method by which network traffic is routed to the tunnel.

## Declaration

```objectivec
@property (readonly) NETunnelProviderRoutingMethod routingMethod;
```

<a id="Discussion"></a>

## Discussion

The default is [NETunnelProviderRoutingMethodDestinationIP](../netunnelproviderroutingmethod/destinationip.md).

## See Also

### Getting the tunnel configuration

- [protocolConfiguration](protocolconfiguration.md): The configuration of the current tunneling session.
- [appRules](apprules.md): The app rules dictating which apps use the current tunneling session.
