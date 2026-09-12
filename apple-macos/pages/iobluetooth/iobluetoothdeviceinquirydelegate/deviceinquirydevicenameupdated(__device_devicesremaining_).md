> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquirydelegate/deviceinquirydevicenameupdated(_:device:devicesremaining:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/deviceinquirydevicenameupdated(_:device:devicesremaining:))

# deviceInquiryDeviceNameUpdated(\_:device:devicesRemaining:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
optional func deviceInquiryDeviceNameUpdated(_ sender: IOBluetoothDeviceInquiry!, device: IOBluetoothDevice!, devicesRemaining: UInt32)
```

## Parameters

- `sender`: Inquiry object that sent this delegate message.
- `device`: IOBluetoothDevice that was updated.
- `devicesRemaining`: Number of devices remaining to update.

<a id="Discussion"></a>

## Discussion

A device name has been retrieved. Also indicates how many devices are left to be updated.

# deviceInquiryDeviceNameUpdated:device:devicesRemaining: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) deviceInquiryDeviceNameUpdated:(IOBluetoothDeviceInquiry *) sender device:(IOBluetoothDevice *) device devicesRemaining:(uint32_t) devicesRemaining;
```

## Parameters

- `sender`: Inquiry object that sent this delegate message.
- `device`: IOBluetoothDevice that was updated.
- `devicesRemaining`: Number of devices remaining to update.

<a id="Discussion"></a>

## Discussion

A device name has been retrieved. Also indicates how many devices are left to be updated.
