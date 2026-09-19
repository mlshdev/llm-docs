> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/process(atcommand:)

# process(atCommand:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Processes a command from a connected Bluetooth hands-free phone or headset.

## Declaration

```swift
func process(atCommand: String!)
```

## Parameters

- `atCommand`: A string containing the AT command sent from the hands-free Bluetooth device.

## See Also

### Sending and Receiving Commands

- [sendResponse(\_:)](sendresponse%28__%29.md): Sends data followed by a success message to a connected Bluetooth hands-free phone or headset.
- [sendResponse(\_:withOK:)](sendresponse%28__withok_%29.md): Sends data followed by an optional success message to a connected Bluetooth hands-free phone or headset.
- [sendOKResponse()](sendokresponse%28%29.md): Sends a success message to a connected Bluetooth hands-free phone or headset.

# processATCommand: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Processes a command from a connected Bluetooth hands-free phone or headset.

## Declaration

```objectivec
- (void) processATCommand:(NSString *) atCommand;
```

## Parameters

- `atCommand`: A string containing the AT command sent from the hands-free Bluetooth device.

## See Also

### Sending and Receiving Commands

- [sendResponse:](sendresponse%28__%29.md): Sends data followed by a success message to a connected Bluetooth hands-free phone or headset.
- [sendResponse:withOK:](sendresponse%28__withok_%29.md): Sends data followed by an optional success message to a connected Bluetooth hands-free phone or headset.
- [sendOKResponse](sendokresponse%28%29.md): Sends a success message to a connected Bluetooth hands-free phone or headset.
