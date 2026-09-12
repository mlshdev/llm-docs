> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate)

# IOBluetoothHandsFreeAudioGatewayDelegate (Swift)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.

## Declaration

```swift
protocol IOBluetoothHandsFreeAudioGatewayDelegate
```

## Topics

### Receiving Status Change Information

- [handsFree(\_:hangup:)](iobluetoothhandsfreeaudiogatewaydelegate/handsfree%28__hangup_%29.md): Tells the delegate the connected Bluetooth hands-free phone or headset is sending a hang-up signal.
- [handsFree(\_:redial:)](iobluetoothhandsfreeaudiogatewaydelegate/handsfree%28__redial_%29.md): Tells the delegate the connected Bluetooth hands-free phone or headset is redialing the last phone number.

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)

# IOBluetoothHandsFreeAudioGatewayDelegate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.

## Declaration

```objectivec
@protocol IOBluetoothHandsFreeAudioGatewayDelegate
```

## Topics

### Receiving Status Change Information

- [handsFree:hangup:](iobluetoothhandsfreeaudiogatewaydelegate/handsfree%28__hangup_%29.md): Tells the delegate the connected Bluetooth hands-free phone or headset is sending a hang-up signal.
- [handsFree:redial:](iobluetoothhandsfreeaudiogatewaydelegate/handsfree%28__redial_%29.md): Tells the delegate the connected Bluetooth hands-free phone or headset is redialing the last phone number.

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)
