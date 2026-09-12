> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/classofdevice](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/classofdevice)

# classOfDevice (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Gets the full class of device value for the remote device.

## Declaration

```swift
var classOfDevice: BluetoothClassOfDevice { get }
```

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

# classOfDevice (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Gets the full class of device value for the remote device.

## Declaration

```objectivec
@property (nonatomic, readonly) BluetoothClassOfDevice classOfDevice;
```

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

## See Also

### Related Documentation

- [getClassOfDevice](getclassofdevice.md): Deprecated. Gets the full class of device value for the remote device.
