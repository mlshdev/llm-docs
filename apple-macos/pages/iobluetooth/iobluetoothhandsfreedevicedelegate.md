> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevicedelegate](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate)

# IOBluetoothHandsFreeDeviceDelegate (Swift)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.

## Declaration

```swift
protocol IOBluetoothHandsFreeDeviceDelegate : IOBluetoothHandsFreeDelegate
```

## Topics

### Receiving Status Indicator Changes

- [handsFree(\_:callSetupMode:)](iobluetoothhandsfreedevicedelegate/handsfree%28__callsetupmode_%29.md): Tells the delegate the call setup indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:isCallActive:)](iobluetoothhandsfreedevicedelegate/handsfree%28__iscallactive_%29.md): Tells the delegate the active call indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:isServiceAvailable:)](iobluetoothhandsfreedevicedelegate/handsfree%28__isserviceavailable_%29.md): Tells the delegate the service level indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:signalStrength:)](iobluetoothhandsfreedevicedelegate/handsfree%28__signalstrength_%29.md): Tells the delegate the call setup signal strength indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:callHoldState:)](iobluetoothhandsfreedevicedelegate/handsfree%28__callholdstate_%29.md): Tells the delegate the call held indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:isRoaming:)](iobluetoothhandsfreedevicedelegate/handsfree%28__isroaming_%29.md): Tells the delegate the roaming indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:batteryCharge:)](iobluetoothhandsfreedevicedelegate/handsfree%28__batterycharge_%29.md): Tells the delegate the battery level indicator of the connected Bluetooth hands-free phone or headset has changed.

### Receiving Call Status

- [handsFree(\_:incomingCallFrom:)](iobluetoothhandsfreedevicedelegate/handsfree%28__incomingcallfrom_%29.md): Tells the delegate there’s an incoming call on the connected Bluetooth hands-free phone or headset.
- [handsFree(\_:currentCall:)](iobluetoothhandsfreedevicedelegate/handsfree%28__currentcall_%29.md): Sends the delegate information about the current call.
- [Current Call Information Constants](current-call-information-constants.md): Get information about a phone call on a hands-free Bluetooth device.

### Receiving SMS Information

- [handsFree(\_:incomingSMS:)](iobluetoothhandsfreedevicedelegate/handsfree%28__incomingsms_%29.md): Tells the delegate there’s an incoming text message.
- [SMS Dictionary Key Constants](sms-dictionary-key-constants.md): Read the parts of an SMS message.

### Receiving Other Information

- [handsFree(\_:subscriberNumber:)](iobluetoothhandsfreedevicedelegate/handsfree%28__subscribernumber_%29.md): Tells the delegate the subscriber number of a call.
- [handsFree(\_:ringAttempt:)](iobluetoothhandsfreedevicedelegate/handsfree%28__ringattempt_%29.md): Tells the delegate the phone is ringing.
- [handsFree(\_:unhandledResultCode:)](iobluetoothhandsfreedevicedelegate/handsfree%28__unhandledresultcode_%29.md): Tells the delegate the phone sent an unknown code.

## Relationships

### Inherits From

- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)

# IOBluetoothHandsFreeDeviceDelegate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods for receiving status change updates and information about a connected Bluetooth hands-free phone or headset.

## Declaration

```objectivec
@protocol IOBluetoothHandsFreeDeviceDelegate <IOBluetoothHandsFreeDelegate>
```

## Topics

### Receiving Status Indicator Changes

- [handsFree:callSetupMode:](iobluetoothhandsfreedevicedelegate/handsfree%28__callsetupmode_%29.md): Tells the delegate the call setup indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:isCallActive:](iobluetoothhandsfreedevicedelegate/handsfree%28__iscallactive_%29.md): Tells the delegate the active call indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:isServiceAvailable:](iobluetoothhandsfreedevicedelegate/handsfree%28__isserviceavailable_%29.md): Tells the delegate the service level indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:signalStrength:](iobluetoothhandsfreedevicedelegate/handsfree%28__signalstrength_%29.md): Tells the delegate the call setup signal strength indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:callHoldState:](iobluetoothhandsfreedevicedelegate/handsfree%28__callholdstate_%29.md): Tells the delegate the call held indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:isRoaming:](iobluetoothhandsfreedevicedelegate/handsfree%28__isroaming_%29.md): Tells the delegate the roaming indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:batteryCharge:](iobluetoothhandsfreedevicedelegate/handsfree%28__batterycharge_%29.md): Tells the delegate the battery level indicator of the connected Bluetooth hands-free phone or headset has changed.

### Receiving Call Status

- [handsFree:incomingCallFrom:](iobluetoothhandsfreedevicedelegate/handsfree%28__incomingcallfrom_%29.md): Tells the delegate there’s an incoming call on the connected Bluetooth hands-free phone or headset.
- [handsFree:currentCall:](iobluetoothhandsfreedevicedelegate/handsfree%28__currentcall_%29.md): Sends the delegate information about the current call.
- [Current Call Information Constants](current-call-information-constants.md): Get information about a phone call on a hands-free Bluetooth device.

### Receiving SMS Information

- [handsFree:incomingSMS:](iobluetoothhandsfreedevicedelegate/handsfree%28__incomingsms_%29.md): Tells the delegate there’s an incoming text message.
- [SMS Dictionary Key Constants](sms-dictionary-key-constants.md): Read the parts of an SMS message.

### Receiving Other Information

- [handsFree:subscriberNumber:](iobluetoothhandsfreedevicedelegate/handsfree%28__subscribernumber_%29.md): Tells the delegate the subscriber number of a call.
- [handsFree:ringAttempt:](iobluetoothhandsfreedevicedelegate/handsfree%28__ringattempt_%29.md): Tells the delegate the phone is ringing.
- [handsFree:unhandledResultCode:](iobluetoothhandsfreedevicedelegate/handsfree%28__unhandledresultcode_%29.md): Tells the delegate the phone sent an unknown code.

## Relationships

### Inherits From

- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)

## See Also

### Protocols

- [IOBluetoothDeviceAsyncCallbacks](iobluetoothdeviceasynccallbacks.md)
- [IOBluetoothDeviceInquiryDelegate](iobluetoothdeviceinquirydelegate.md): This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
- [IOBluetoothDevicePairDelegate](iobluetoothdevicepairdelegate.md)
- [IOBluetoothHandsFreeAudioGatewayDelegate](iobluetoothhandsfreeaudiogatewaydelegate.md): A set of optional methods for receiving information about status changes for a connected Bluetooth hands-free phone or headset.
- [IOBluetoothHandsFreeDelegate](iobluetoothhandsfreedelegate.md)
- [IOBluetoothL2CAPChannelDelegate](iobluetoothl2capchanneldelegate.md)
- [IOBluetoothRFCOMMChannelDelegate](iobluetoothrfcommchanneldelegate.md)
