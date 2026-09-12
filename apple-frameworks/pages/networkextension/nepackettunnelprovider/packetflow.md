> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelprovider/packetflow](https://developer.apple.com/documentation/networkextension/nepackettunnelprovider/packetflow)

# packetFlow (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A [NEPacketTunnelFlow](../nepackettunnelflow.md) object which is used to receive IP packets routed to the tunnel’s virtual interface and inject IP packets into the networking stack via the tunnel’s virtual interface.

## Declaration

```swift
var packetFlow: NEPacketTunnelFlow { get }
```

# packetFlow (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A [NEPacketTunnelFlow](../nepackettunnelflow.md) object which is used to receive IP packets routed to the tunnel’s virtual interface and inject IP packets into the networking stack via the tunnel’s virtual interface.

## Declaration

```objectivec
@property (readonly) NEPacketTunnelFlow * packetFlow;
```
