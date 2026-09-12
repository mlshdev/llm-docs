> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquirydelegate/deviceinquirycomplete(_:error:aborted:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/deviceinquirycomplete(_:error:aborted:))

# deviceInquiryComplete(\_:error:aborted:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
optional func deviceInquiryComplete(_ sender: IOBluetoothDeviceInquiry!, error: IOReturn, aborted: Bool)
```

## Parameters

- `sender`: Inquiry object that sent this delegate message.
- `error`: Error code. kIOReturnSuccess if the inquiry completed without incident.
- `aborted`: TRUE if user called -stop on the inquiry.

<a id="Discussion"></a>

## Discussion

When the inquiry is completely stopped, this delegate method will be invoked. It will supply an error code value, kIOReturnSuccess if the inquiry stopped without problem, otherwise a non-kIOReturnSuccess error code will be supplied.

# deviceInquiryComplete:error:aborted: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) deviceInquiryComplete:(IOBluetoothDeviceInquiry *) sender error:(IOReturn) error aborted:(BOOL) aborted;
```

## Parameters

- `sender`: Inquiry object that sent this delegate message.
- `error`: Error code. kIOReturnSuccess if the inquiry completed without incident.
- `aborted`: TRUE if user called -stop on the inquiry.

<a id="Discussion"></a>

## Discussion

When the inquiry is completely stopped, this delegate method will be invoked. It will supply an error code value, kIOReturnSuccess if the inquiry stopped without problem, otherwise a non-kIOReturnSuccess error code will be supplied.
