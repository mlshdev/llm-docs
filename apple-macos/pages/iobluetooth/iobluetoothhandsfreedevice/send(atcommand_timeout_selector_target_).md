> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/send(atcommand:timeout:selector:target:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/send(atcommand:timeout:selector:target:))

# send(atCommand:timeout:selector:target:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Send an AT command to the Bluetooth audio gateway and performs a selector on completion or timeout.

## Declaration

```swift
func send(atCommand: String!, timeout: Float, selector: Selector!, target: Any!)
```

## Parameters

- `atCommand`: A string containing the AT command.
- `timeout`: The number of seconds until the message times out.
- `selector`: The function to call on completion or timeout.
- `target`: The target object for the completion call.

## See Also

### Sending Messages and Commands

- [sendSMS(\_:message:)](sendsms%28__message_%29.md): Sends a text message to a phone number.
- [sendDTMF(\_:)](senddtmf%28__%29.md): Sends the tone associated with a phone key to the hands-free Bluetooth device.
- [send(atCommand:)](send%28atcommand_%29.md): Sends an AT command to the Bluetooth audio gateway.

# sendATCommand:timeout:selector:target: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Send an AT command to the Bluetooth audio gateway and performs a selector on completion or timeout.

## Declaration

```objectivec
- (void) sendATCommand:(NSString *) atCommand timeout:(float) timeout selector:(SEL) selector target:(id) target;
```

## Parameters

- `atCommand`: A string containing the AT command.
- `timeout`: The number of seconds until the message times out.
- `selector`: The function to call on completion or timeout.
- `target`: The target object for the completion call.

## See Also

### Sending Messages and Commands

- [sendSMS:message:](sendsms%28__message_%29.md): Sends a text message to a phone number.
- [sendDTMF:](senddtmf%28__%29.md): Sends the tone associated with a phone key to the hands-free Bluetooth device.
- [sendATCommand:](send%28atcommand_%29.md): Sends an AT command to the Bluetooth audio gateway.
