> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquirydelegate/deviceinquirystarted(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/deviceinquirystarted(_:))

# deviceInquiryStarted(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
optional func deviceInquiryStarted(_ sender: IOBluetoothDeviceInquiry!)
```

## Parameters

- `sender`: Inquiry object that sent this delegate message.

<a id="Discussion"></a>

## Discussion

This message will be delivered when the inquiry actually starts. Since the inquiry could be throttled, this message may not be received immediately after called -start.

# deviceInquiryStarted: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) deviceInquiryStarted:(IOBluetoothDeviceInquiry *) sender;
```

## Parameters

- `sender`: Inquiry object that sent this delegate message.

<a id="Discussion"></a>

## Discussion

This message will be delivered when the inquiry actually starts. Since the inquiry could be throttled, this message may not be received immediately after called -start.
