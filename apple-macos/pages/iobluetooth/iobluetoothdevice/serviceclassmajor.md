> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/serviceclassmajor](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/serviceclassmajor)

# serviceClassMajor (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the major service class of the device.

## Declaration

```swift
var serviceClassMajor: BluetoothServiceClassMajor { get }
```

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

# serviceClassMajor (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the major service class of the device.

## Declaration

```objectivec
@property (readonly) BluetoothServiceClassMajor serviceClassMajor;
```

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

## See Also

### Related Documentation

- [getServiceClassMajor](getserviceclassmajor.md): Deprecated. Get the major service class of the device.
