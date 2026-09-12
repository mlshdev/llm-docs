> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/sendresponse(_:withok:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/sendresponse(_:withok:))

# sendResponse(\_:withOK:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends data followed by an optional success message to a connected Bluetooth hands-free phone or headset.

## Declaration

```swift
func sendResponse(_ response: String!, withOK: Bool)
```

## Parameters

- `response`: A string containing the data.
- `withOK`: If `true`, send an `OK` message after sending the response.

## See Also

### Sending and Receiving Commands

- [sendResponse(\_:)](sendresponse%28__%29.md): Sends data followed by a success message to a connected Bluetooth hands-free phone or headset.
- [sendOKResponse()](sendokresponse%28%29.md): Sends a success message to a connected Bluetooth hands-free phone or headset.
- [process(atCommand:)](process%28atcommand_%29.md): Processes a command from a connected Bluetooth hands-free phone or headset.

# sendResponse:withOK: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends data followed by an optional success message to a connected Bluetooth hands-free phone or headset.

## Declaration

```objectivec
- (void) sendResponse:(NSString *) response withOK:(BOOL) withOK;
```

## Parameters

- `response`: A string containing the data.
- `withOK`: If `true`, send an `OK` message after sending the response.

## See Also

### Sending and Receiving Commands

- [sendResponse:](sendresponse%28__%29.md): Sends data followed by a success message to a connected Bluetooth hands-free phone or headset.
- [sendOKResponse](sendokresponse%28%29.md): Sends a success message to a connected Bluetooth hands-free phone or headset.
- [processATCommand:](process%28atcommand_%29.md): Processes a command from a connected Bluetooth hands-free phone or headset.
