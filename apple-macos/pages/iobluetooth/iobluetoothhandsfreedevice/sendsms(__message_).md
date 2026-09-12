> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/sendsms(_:message:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/sendsms(_:message:))

# sendSMS(\_:message:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends a text message to a phone number.

## Declaration

```swift
func sendSMS(_ aNumber: String!, message aMessage: String!)
```

## Parameters

- `aNumber`: The phone number to send the message to.
- `aMessage`: A string containing a message. The message must be no longer than 160 characters.

## See Also

### Sending Messages and Commands

- [sendDTMF(\_:)](senddtmf%28__%29.md): Sends the tone associated with a phone key to the hands-free Bluetooth device.
- [send(atCommand:)](send%28atcommand_%29.md): Sends an AT command to the Bluetooth audio gateway.
- [send(atCommand:timeout:selector:target:)](send%28atcommand_timeout_selector_target_%29.md): Send an AT command to the Bluetooth audio gateway and performs a selector on completion or timeout.

# sendSMS:message: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends a text message to a phone number.

## Declaration

```objectivec
- (void) sendSMS:(NSString *) aNumber message:(NSString *) aMessage;
```

## Parameters

- `aNumber`: The phone number to send the message to.
- `aMessage`: A string containing a message. The message must be no longer than 160 characters.

## See Also

### Sending Messages and Commands

- [sendDTMF:](senddtmf%28__%29.md): Sends the tone associated with a phone key to the hands-free Bluetooth device.
- [sendATCommand:](send%28atcommand_%29.md): Sends an AT command to the Bluetooth audio gateway.
- [sendATCommand:timeout:selector:target:](send%28atcommand_timeout_selector_target_%29.md): Send an AT command to the Bluetooth audio gateway and performs a selector on completion or timeout.
