> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedelegate](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedelegate)

# IOBluetoothHandsFreeDelegate (Swift)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol IOBluetoothHandsFreeDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [handsFree(\_:connected:)](iobluetoothhandsfreedelegate/handsfree%28__connected_%29.md)
- [handsFree(\_:disconnected:)](iobluetoothhandsfreedelegate/handsfree%28__disconnected_%29.md)
- [handsFree(\_:scoConnectionClosed:)](iobluetoothhandsfreedelegate/handsfree%28__scoconnectionclosed_%29.md)
- [handsFree(\_:scoConnectionOpened:)](iobluetoothhandsfreedelegate/handsfree%28__scoconnectionopened_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)

# IOBluetoothHandsFreeDelegate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol IOBluetoothHandsFreeDelegate <NSObject>
```

## Topics

### Instance Methods

- [handsFree:connected:](iobluetoothhandsfreedelegate/handsfree%28__connected_%29.md)
- [handsFree:disconnected:](iobluetoothhandsfreedelegate/handsfree%28__disconnected_%29.md)
- [handsFree:scoConnectionClosed:](iobluetoothhandsfreedelegate/handsfree%28__scoconnectionclosed_%29.md)
- [handsFree:scoConnectionOpened:](iobluetoothhandsfreedelegate/handsfree%28__scoconnectionopened_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)
