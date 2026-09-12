> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovider/apprules](https://developer.apple.com/documentation/networkextension/netunnelprovider/apprules)

# appRules (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The app rules dictating which apps use the current tunneling session.

## Declaration

```swift
var appRules: [NEAppRule]? { get }
```

<a id="Discussion"></a>

## Discussion

This property is only non-`nil` if the current configuration is a Per-App VPN configuration.

## See Also

### Getting the tunnel configuration

- [protocolConfiguration](protocolconfiguration.md): The configuration of the current tunneling session.
- [routingMethod](routingmethod.md): The method by which network traffic is routed to the tunnel.

# appRules (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The app rules dictating which apps use the current tunneling session.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<NEAppRule *> * appRules;
```

<a id="Discussion"></a>

## Discussion

This property is only non-`nil` if the current configuration is a Per-App VPN configuration.

## See Also

### Getting the tunnel configuration

- [protocolConfiguration](protocolconfiguration.md): The configuration of the current tunneling session.
- [routingMethod](routingmethod.md): The method by which network traffic is routed to the tunnel.
