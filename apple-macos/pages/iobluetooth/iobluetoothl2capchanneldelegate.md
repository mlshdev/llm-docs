> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchanneldelegate](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchanneldelegate)

# IOBluetoothL2CAPChannelDelegate (Swift)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol IOBluetoothL2CAPChannelDelegate
```

## Topics

### Instance Methods

- [l2capChannelClosed(\_:)](iobluetoothl2capchanneldelegate/l2capchannelclosed%28__%29.md)
- [l2capChannelData(\_:data:length:)](iobluetoothl2capchanneldelegate/l2capchanneldata%28__data_length_%29.md)
- [l2capChannelOpenComplete(\_:status:)](iobluetoothl2capchanneldelegate/l2capchannelopencomplete%28__status_%29.md)
- [l2capChannelQueueSpaceAvailable(\_:)](iobluetoothl2capchanneldelegate/l2capchannelqueuespaceavailable%28__%29.md)
- [l2capChannelReconfigured(\_:)](iobluetoothl2capchanneldelegate/l2capchannelreconfigured%28__%29.md)
- [l2capChannelWriteComplete(\_:refcon:status:)](iobluetoothl2capchanneldelegate/l2capchannelwritecomplete%28__refcon_status_%29.md)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)

# IOBluetoothL2CAPChannelDelegate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol IOBluetoothL2CAPChannelDelegate
```

## Topics

### Instance Methods

- [l2capChannelClosed:](iobluetoothl2capchanneldelegate/l2capchannelclosed%28__%29.md)
- [l2capChannelData:data:length:](iobluetoothl2capchanneldelegate/l2capchanneldata%28__data_length_%29.md)
- [l2capChannelOpenComplete:status:](iobluetoothl2capchanneldelegate/l2capchannelopencomplete%28__status_%29.md)
- [l2capChannelQueueSpaceAvailable:](iobluetoothl2capchanneldelegate/l2capchannelqueuespaceavailable%28__%29.md)
- [l2capChannelReconfigured:](iobluetoothl2capchanneldelegate/l2capchannelreconfigured%28__%29.md)
- [l2capChannelWriteComplete:refcon:status:](iobluetoothl2capchanneldelegate/l2capchannelwritecomplete%28__refcon_status_%29.md)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)
