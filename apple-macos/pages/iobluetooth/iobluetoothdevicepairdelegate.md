> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevicepairdelegate](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepairdelegate)

# IOBluetoothDevicePairDelegate (Swift)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol IOBluetoothDevicePairDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [devicePairingConnected(\_:)](iobluetoothdevicepairdelegate/devicepairingconnected%28__%29.md)
- [devicePairingConnecting(\_:)](iobluetoothdevicepairdelegate/devicepairingconnecting%28__%29.md)
- [devicePairingFinished(\_:error:)](iobluetoothdevicepairdelegate/devicepairingfinished%28__error_%29.md)
- [devicePairingPINCodeRequest(\_:)](iobluetoothdevicepairdelegate/devicepairingpincoderequest%28__%29.md)
- [devicePairingStarted(\_:)](iobluetoothdevicepairdelegate/devicepairingstarted%28__%29.md)
- [devicePairingUserConfirmationRequest(\_:numericValue:)](iobluetoothdevicepairdelegate/devicepairinguserconfirmationrequest%28__numericvalue_%29.md)
- [devicePairingUserPasskeyNotification(\_:passkey:)](iobluetoothdevicepairdelegate/devicepairinguserpasskeynotification%28__passkey_%29.md)
- [deviceSimplePairingComplete(\_:status:)](iobluetoothdevicepairdelegate/devicesimplepairingcomplete%28__status_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)

# IOBluetoothDevicePairDelegate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol IOBluetoothDevicePairDelegate <NSObject>
```

## Topics

### Instance Methods

- [devicePairingConnected:](iobluetoothdevicepairdelegate/devicepairingconnected%28__%29.md)
- [devicePairingConnecting:](iobluetoothdevicepairdelegate/devicepairingconnecting%28__%29.md)
- [devicePairingFinished:error:](iobluetoothdevicepairdelegate/devicepairingfinished%28__error_%29.md)
- [devicePairingPINCodeRequest:](iobluetoothdevicepairdelegate/devicepairingpincoderequest%28__%29.md)
- [devicePairingStarted:](iobluetoothdevicepairdelegate/devicepairingstarted%28__%29.md)
- [devicePairingUserConfirmationRequest:numericValue:](iobluetoothdevicepairdelegate/devicepairinguserconfirmationrequest%28__numericvalue_%29.md)
- [devicePairingUserPasskeyNotification:passkey:](iobluetoothdevicepairdelegate/devicepairinguserpasskeynotification%28__passkey_%29.md)
- [deviceSimplePairingComplete:status:](iobluetoothdevicepairdelegate/devicesimplepairingcomplete%28__status_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothHandsFreeDeviceDelegate](iobluetoothhandsfreedevicedelegate.md): A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)
