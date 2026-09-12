> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquirydelegate/deviceinquirydevicefound(_:device:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/deviceinquirydevicefound(_:device:))

# deviceInquiryDeviceFound(\_:device:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
optional func deviceInquiryDeviceFound(_ sender: IOBluetoothDeviceInquiry!, device: IOBluetoothDevice!)
```

## Parameters

- `sender`: Inquiry object that sent this delegate message.
- `device`: IOBluetoothDevice that was found.

<a id="Discussion"></a>

## Discussion

A new device has been found. You do not need to retain the device - it will be held in the internal storage of the inquiry, and can be accessed later using -foundDevices.

# deviceInquiryDeviceFound:device: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) deviceInquiryDeviceFound:(IOBluetoothDeviceInquiry *) sender device:(IOBluetoothDevice *) device;
```

## Parameters

- `sender`: Inquiry object that sent this delegate message.
- `device`: IOBluetoothDevice that was found.

<a id="Discussion"></a>

## Discussion

A new device has been found. You do not need to retain the device - it will be held in the internal storage of the inquiry, and can be accessed later using -foundDevices.
