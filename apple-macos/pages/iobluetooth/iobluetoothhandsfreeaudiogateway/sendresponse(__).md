> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/sendresponse(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/sendresponse(_:))

# sendResponse(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends data followed by a success message to a connected Bluetooth hands-free phone or headset.

## Declaration

```swift
func sendResponse(_ response: String!)
```

## Parameters

- `response`: A string containing the data.

<a id="Discussion"></a>

## Discussion

Calling this method has the same result as calling `sendResponse(response: response, withOK: true)`.

## See Also

### Sending and Receiving Commands

- [sendResponse(\_:withOK:)](sendresponse%28__withok_%29.md): Sends data followed by an optional success message to a connected Bluetooth hands-free phone or headset.
- [sendOKResponse()](sendokresponse%28%29.md): Sends a success message to a connected Bluetooth hands-free phone or headset.
- [process(atCommand:)](process%28atcommand_%29.md): Processes a command from a connected Bluetooth hands-free phone or headset.

# sendResponse: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends data followed by a success message to a connected Bluetooth hands-free phone or headset.

## Declaration

```objectivec
- (void) sendResponse:(NSString *) response;
```

## Parameters

- `response`: A string containing the data.

<a id="Discussion"></a>

## Discussion

Calling this method has the same result as calling `sendResponse(response: response, withOK: true)`.

## See Also

### Sending and Receiving Commands

- [sendResponse:withOK:](sendresponse%28__withok_%29.md): Sends data followed by an optional success message to a connected Bluetooth hands-free phone or headset.
- [sendOKResponse](sendokresponse%28%29.md): Sends a success message to a connected Bluetooth hands-free phone or headset.
- [processATCommand:](process%28atcommand_%29.md): Processes a command from a connected Bluetooth hands-free phone or headset.
