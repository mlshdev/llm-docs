> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/getavailablecommandresponsepayloadlength(_:)](https://developer.apple.com/documentation/iobluetooth/obexsession/getavailablecommandresponsepayloadlength(_:))

# getAvailableCommandResponsePayloadLength(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Determine the maximum amount of data you can send in a particular command response as an OBEX server session.

## Declaration

```swift
func getAvailableCommandResponsePayloadLength(_ inOpCode: OBEXOpCode) -> OBEXMaxPacketLength
```

## Parameters

- `inOpCode`: The opcode you are interested in responding to (as a server).

<a id="return-value"></a>

## Return Value

The maximum amount of data a particular packet can handle, after accounting for any command response overhead.

<a id="Discussion"></a>

## Discussion

Each OBEX Command response has a certain amount of overhead. Since the negotiated max packet length does not indicate what the maximum data amount you can send in a particular response’s packet, you can use this function to determine how much data to provide in optional headers or body data headers.

# getAvailableCommandResponsePayloadLength: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Determine the maximum amount of data you can send in a particular command response as an OBEX server session.

## Declaration

```objectivec
- (OBEXMaxPacketLength) getAvailableCommandResponsePayloadLength:(OBEXOpCode) inOpCode;
```

## Parameters

- `inOpCode`: The opcode you are interested in responding to (as a server).

<a id="return-value"></a>

## Return Value

The maximum amount of data a particular packet can handle, after accounting for any command response overhead.

<a id="Discussion"></a>

## Discussion

Each OBEX Command response has a certain amount of overhead. Since the negotiated max packet length does not indicate what the maximum data amount you can send in a particular response’s packet, you can use this function to determine how much data to provide in optional headers or body data headers.
