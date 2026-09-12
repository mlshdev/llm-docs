> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/getmaxpacketlength()](https://developer.apple.com/documentation/iobluetooth/obexsession/getmaxpacketlength())

# getMaxPacketLength() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Gets current max packet length.

## Declaration

```swift
func getMaxPacketLength() -> OBEXMaxPacketLength
```

<a id="return-value"></a>

## Return Value

Max packet length.

<a id="Discussion"></a>

## Discussion

This value *could* change before and after a connect command has been sent or a connect command response has been received, since the recipient could negotiate a lower max packet size.

# getMaxPacketLength (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Gets current max packet length.

## Declaration

```objectivec
- (OBEXMaxPacketLength) getMaxPacketLength;
```

<a id="return-value"></a>

## Return Value

Max packet length.

<a id="Discussion"></a>

## Discussion

This value *could* change before and after a connect command has been sent or a connect command response has been received, since the recipient could negotiate a lower max packet size.
