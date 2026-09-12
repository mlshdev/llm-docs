> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistantobject/setprotocolforproxy:](https://developer.apple.com/documentation/foundation/nsdistantobject/setprotocolforproxy:)

# setProtocolForProxy:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Sets the methods known to be handled by the receiver to those in a given protocol.

## Declaration

```objectivec
- (void) setProtocolForProxy:(Protocol *) proto;
```

## Parameters

- `proto`: The protocol for the receiver.

<a id="Discussion"></a>

## Discussion

Setting a protocol for a remote proxy reduces network traffic needed to determine method argument and return types.

In order to encode a message’s arguments for transmission over the network, the types of those arguments must be known in advance. When they’re not known, the distributed objects system must send an initial message just to get those types, doubling the network traffic for every new message sent. Setting a protocol alleviates this need for methods defined by the protocol. You can still send messages that aren’t declared in `proto`—in this case the initial message is sent to determine the types, and then the real message is sent.
