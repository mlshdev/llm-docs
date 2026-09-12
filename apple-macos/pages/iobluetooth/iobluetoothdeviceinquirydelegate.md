> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquirydelegate](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate)

# IOBluetoothDeviceInquiryDelegate (Swift)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.

## Declaration

```swift
protocol IOBluetoothDeviceInquiryDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [deviceInquiryComplete(\_:error:aborted:)](iobluetoothdeviceinquirydelegate/deviceinquirycomplete%28__error_aborted_%29.md)
- [deviceInquiryDeviceFound(\_:device:)](iobluetoothdeviceinquirydelegate/deviceinquirydevicefound%28__device_%29.md)
- [deviceInquiryDeviceNameUpdated(\_:device:devicesRemaining:)](iobluetoothdeviceinquirydelegate/deviceinquirydevicenameupdated%28__device_devicesremaining_%29.md)
- [deviceInquiryStarted(\_:)](iobluetoothdeviceinquirydelegate/deviceinquirystarted%28__%29.md)
- [deviceInquiryUpdatingDeviceNamesStarted(\_:devicesRemaining:)](iobluetoothdeviceinquirydelegate/deviceinquiryupdatingdevicenamesstarted%28__devicesremaining_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)

# IOBluetoothDeviceInquiryDelegate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.

## Declaration

```objectivec
@protocol IOBluetoothDeviceInquiryDelegate <NSObject>
```

## Topics

### Instance Methods

- [deviceInquiryComplete:error:aborted:](iobluetoothdeviceinquirydelegate/deviceinquirycomplete%28__error_aborted_%29.md)
- [deviceInquiryDeviceFound:device:](iobluetoothdeviceinquirydelegate/deviceinquirydevicefound%28__device_%29.md)
- [deviceInquiryDeviceNameUpdated:device:devicesRemaining:](iobluetoothdeviceinquirydelegate/deviceinquirydevicenameupdated%28__device_devicesremaining_%29.md)
- [deviceInquiryStarted:](iobluetoothdeviceinquirydelegate/deviceinquirystarted%28__%29.md)
- [deviceInquiryUpdatingDeviceNamesStarted:devicesRemaining:](iobluetoothdeviceinquirydelegate/deviceinquiryupdatingdevicenamesstarted%28__devicesremaining_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)
