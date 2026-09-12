> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/send(atcommand:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/send(atcommand:))

# send(atCommand:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends an AT command to the Bluetooth audio gateway.

## Declaration

```swift
func send(atCommand: String!)
```

## Parameters

- `atCommand`: A string containing the AT command.

## See Also

### Sending Messages and Commands

- [sendSMS(\_:message:)](sendsms%28__message_%29.md): Sends a text message to a phone number.
- [sendDTMF(\_:)](senddtmf%28__%29.md): Sends the tone associated with a phone key to the hands-free Bluetooth device.
- [send(atCommand:timeout:selector:target:)](send%28atcommand_timeout_selector_target_%29.md): Send an AT command to the Bluetooth audio gateway and performs a selector on completion or timeout.

# sendATCommand: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends an AT command to the Bluetooth audio gateway.

## Declaration

```objectivec
- (void) sendATCommand:(NSString *) atCommand;
```

## Parameters

- `atCommand`: A string containing the AT command.

## See Also

### Sending Messages and Commands

- [sendSMS:message:](sendsms%28__message_%29.md): Sends a text message to a phone number.
- [sendDTMF:](senddtmf%28__%29.md): Sends the tone associated with a phone key to the hands-free Bluetooth device.
- [sendATCommand:timeout:selector:target:](send%28atcommand_timeout_selector_target_%29.md): Send an AT command to the Bluetooth audio gateway and performs a selector on completion or timeout.
