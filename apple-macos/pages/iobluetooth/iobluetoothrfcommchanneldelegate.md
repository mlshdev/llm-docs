> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchanneldelegate](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchanneldelegate)

# IOBluetoothRFCOMMChannelDelegate (Swift)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol IOBluetoothRFCOMMChannelDelegate
```

## Topics

### Instance Methods

- [rfcommChannelClosed(\_:)](iobluetoothrfcommchanneldelegate/rfcommchannelclosed%28__%29.md)
- [rfcommChannelControlSignalsChanged(\_:)](iobluetoothrfcommchanneldelegate/rfcommchannelcontrolsignalschanged%28__%29.md)
- [rfcommChannelData(\_:data:length:)](iobluetoothrfcommchanneldelegate/rfcommchanneldata%28__data_length_%29.md)
- [rfcommChannelFlowControlChanged(\_:)](iobluetoothrfcommchanneldelegate/rfcommchannelflowcontrolchanged%28__%29.md)
- [rfcommChannelOpenComplete(\_:status:)](iobluetoothrfcommchanneldelegate/rfcommchannelopencomplete%28__status_%29.md)
- [rfcommChannelQueueSpaceAvailable(\_:)](iobluetoothrfcommchanneldelegate/rfcommchannelqueuespaceavailable%28__%29.md)
- [rfcommChannelWriteComplete(\_:refcon:status:)](iobluetoothrfcommchanneldelegate/rfcommchannelwritecomplete%28__refcon_status_%29.md)
- [rfcommChannelWriteComplete(\_:refcon:status:bytesWritten:)](iobluetoothrfcommchanneldelegate/rfcommchannelwritecomplete%28__refcon_status_byteswritten_%29.md)

## Relationships

### Conforming Types

- [IOBluetoothOBEXSession](iobluetoothobexsession.md)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)

# IOBluetoothRFCOMMChannelDelegate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol IOBluetoothRFCOMMChannelDelegate
```

## Topics

### Instance Methods

- [rfcommChannelClosed:](iobluetoothrfcommchanneldelegate/rfcommchannelclosed%28__%29.md)
- [rfcommChannelControlSignalsChanged:](iobluetoothrfcommchanneldelegate/rfcommchannelcontrolsignalschanged%28__%29.md)
- [rfcommChannelData:data:length:](iobluetoothrfcommchanneldelegate/rfcommchanneldata%28__data_length_%29.md)
- [rfcommChannelFlowControlChanged:](iobluetoothrfcommchanneldelegate/rfcommchannelflowcontrolchanged%28__%29.md)
- [rfcommChannelOpenComplete:status:](iobluetoothrfcommchanneldelegate/rfcommchannelopencomplete%28__status_%29.md)
- [rfcommChannelQueueSpaceAvailable:](iobluetoothrfcommchanneldelegate/rfcommchannelqueuespaceavailable%28__%29.md)
- [rfcommChannelWriteComplete:refcon:status:](iobluetoothrfcommchanneldelegate/rfcommchannelwritecomplete%28__refcon_status_%29.md)
- [rfcommChannelWriteComplete:refcon:status:bytesWritten:](iobluetoothrfcommchanneldelegate/rfcommchannelwritecomplete%28__refcon_status_byteswritten_%29.md)

## Relationships

### Conforming Types

- [IOBluetoothOBEXSession](iobluetoothobexsession.md)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
