> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/deviceclassmajor](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/deviceclassmajor)

# deviceClassMajor (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the major device class of the device.

## Declaration

```swift
var deviceClassMajor: BluetoothDeviceClassMajor { get }
```

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

# deviceClassMajor (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the major device class of the device.

## Declaration

```objectivec
@property (readonly) BluetoothDeviceClassMajor deviceClassMajor;
```

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

## See Also

### Related Documentation

- [getDeviceClassMajor](getdeviceclassmajor.md): Deprecated. Get the major device class of the device.
