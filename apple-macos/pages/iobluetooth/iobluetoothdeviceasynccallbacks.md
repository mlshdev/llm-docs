> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceasynccallbacks](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceasynccallbacks)

# IOBluetoothDeviceAsyncCallbacks (Swift)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol IOBluetoothDeviceAsyncCallbacks
```

## Topics

### Instance Methods

- [connectionComplete(\_:status:)](iobluetoothdeviceasynccallbacks/connectioncomplete%28__status_%29.md)
- [remoteNameRequestComplete(\_:status:)](iobluetoothdeviceasynccallbacks/remotenamerequestcomplete%28__status_%29.md)
- [sdpQueryComplete(\_:status:)](iobluetoothdeviceasynccallbacks/sdpquerycomplete%28__status_%29.md)

## See Also

### Protocols

- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)

# IOBluetoothDeviceAsyncCallbacks (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol IOBluetoothDeviceAsyncCallbacks
```

## Topics

### Instance Methods

- [connectionComplete:status:](iobluetoothdeviceasynccallbacks/connectioncomplete%28__status_%29.md)
- [remoteNameRequestComplete:status:](iobluetoothdeviceasynccallbacks/remotenamerequestcomplete%28__status_%29.md)
- [sdpQueryComplete:status:](iobluetoothdeviceasynccallbacks/sdpquerycomplete%28__status_%29.md)

## See Also

### Protocols

- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)
