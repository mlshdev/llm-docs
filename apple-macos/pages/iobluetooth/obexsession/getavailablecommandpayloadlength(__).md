> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/getavailablecommandpayloadlength(_:)](https://developer.apple.com/documentation/iobluetooth/obexsession/getavailablecommandpayloadlength(_:))

# getAvailableCommandPayloadLength(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Determine the maximum amount of data you can send in a particular command as an OBEX client session.

## Declaration

```swift
func getAvailableCommandPayloadLength(_ inOpCode: OBEXOpCode) -> OBEXMaxPacketLength
```

## Parameters

- `inOpCode`: The opcode you are interested in sending (as a client).

<a id="return-value"></a>

## Return Value

The maximum amount of data a particular packet can handle, after accounting for any command overhead.

<a id="Discussion"></a>

## Discussion

Each OBEX Command has a certain amount of overhead. Since the negotiated max packet length does not indicate what the maximum data amount you can send in a particular command’s packet, you can use this function to determine how much data to provide in optional headers or body data headers.

# getAvailableCommandPayloadLength: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Determine the maximum amount of data you can send in a particular command as an OBEX client session.

## Declaration

```objectivec
- (OBEXMaxPacketLength) getAvailableCommandPayloadLength:(OBEXOpCode) inOpCode;
```

## Parameters

- `inOpCode`: The opcode you are interested in sending (as a client).

<a id="return-value"></a>

## Return Value

The maximum amount of data a particular packet can handle, after accounting for any command overhead.

<a id="Discussion"></a>

## Discussion

Each OBEX Command has a certain amount of overhead. Since the negotiated max packet length does not indicate what the maximum data amount you can send in a particular command’s packet, you can use this function to determine how much data to provide in optional headers or body data headers.
