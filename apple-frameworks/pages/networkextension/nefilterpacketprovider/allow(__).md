> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterpacketprovider/allow(_:)](https://developer.apple.com/documentation/networkextension/nefilterpacketprovider/allow(_:))

# allow(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Allow delivery of a previously-delayed packet.

## Declaration

```swift
func allow(_ packet: NEPacket)
```

## Parameters

- `packet`: The packet previously delayed by the packet handler.

<a id="Discussion"></a>

## Discussion

Use this method to allow a previously-delayed packet to continue its journey into or out of the networking stack.

## See Also

### Delaying packets

- [delayCurrentPacket(\_:)](delaycurrentpacket%28__%29.md): Delay a packet currently processed by a packet handler.

# allowPacket: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Allow delivery of a previously-delayed packet.

## Declaration

```objectivec
- (void) allowPacket:(NEPacket *) packet;
```

## Parameters

- `packet`: The packet previously delayed by the packet handler.

<a id="Discussion"></a>

## Discussion

Use this method to allow a previously-delayed packet to continue its journey into or out of the networking stack.

## See Also

### Delaying packets

- [delayCurrentPacket:](delaycurrentpacket%28__%29.md): Delay a packet currently processed by a packet handler.
