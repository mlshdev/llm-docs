> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquirydelegate/deviceinquiryupdatingdevicenamesstarted(_:devicesremaining:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/deviceinquiryupdatingdevicenamesstarted(_:devicesremaining:))

# deviceInquiryUpdatingDeviceNamesStarted(\_:devicesRemaining:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
optional func deviceInquiryUpdatingDeviceNamesStarted(_ sender: IOBluetoothDeviceInquiry!, devicesRemaining: UInt32)
```

## Parameters

- `sender`: Inquiry object that sent this delegate message.
- `devicesRemaining`: Number of devices remaining to update.

<a id="Discussion"></a>

## Discussion

The inquiry has begun updating device names that were found during the search.

# deviceInquiryUpdatingDeviceNamesStarted:devicesRemaining: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) deviceInquiryUpdatingDeviceNamesStarted:(IOBluetoothDeviceInquiry *) sender devicesRemaining:(uint32_t) devicesRemaining;
```

## Parameters

- `sender`: Inquiry object that sent this delegate message.
- `devicesRemaining`: Number of devices remaining to update.

<a id="Discussion"></a>

## Discussion

The inquiry has begun updating device names that were found during the search.
