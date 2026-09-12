> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/senddtmf(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/senddtmf(_:))

# sendDTMF(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends the tone associated with a phone key to the hands-free Bluetooth device.

## Declaration

```swift
func sendDTMF(_ character: String!)
```

## Parameters

- `character`: The phone keypad character for the tone. The character must be one of the following:

  - `0-9`
  - `#`
  - `*`
  - `A-D`

## See Also

### Sending Messages and Commands

- [sendSMS(\_:message:)](sendsms%28__message_%29.md): Sends a text message to a phone number.
- [send(atCommand:)](send%28atcommand_%29.md): Sends an AT command to the Bluetooth audio gateway.
- [send(atCommand:timeout:selector:target:)](send%28atcommand_timeout_selector_target_%29.md): Send an AT command to the Bluetooth audio gateway and performs a selector on completion or timeout.

# sendDTMF: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends the tone associated with a phone key to the hands-free Bluetooth device.

## Declaration

```objectivec
- (void) sendDTMF:(NSString *) character;
```

## Parameters

- `character`: The phone keypad character for the tone. The character must be one of the following:

  - `0-9`
  - `#`
  - `*`
  - `A-D`

## See Also

### Sending Messages and Commands

- [sendSMS:message:](sendsms%28__message_%29.md): Sends a text message to a phone number.
- [sendATCommand:](send%28atcommand_%29.md): Sends an AT command to the Bluetooth audio gateway.
- [sendATCommand:timeout:selector:target:](send%28atcommand_timeout_selector_target_%29.md): Send an AT command to the Bluetooth audio gateway and performs a selector on completion or timeout.
