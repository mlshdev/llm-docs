> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/deviceclassminor

# deviceClassMinor (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the minor service class of the device.

## Declaration

```swift
var deviceClassMinor: BluetoothDeviceClassMinor { get }
```

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

# deviceClassMinor (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Get the minor service class of the device.

## Declaration

```objectivec
@property (readonly) BluetoothDeviceClassMinor deviceClassMinor;
```

<a id="Discussion"></a>

## Discussion

This value is only meaningful if the target device has been seen during an inquiry. This can be by checking the result of -getLastInquiryUpdate. If nil is returned, then the device hasn’t been seen.

## See Also

### Related Documentation

- [getDeviceClassMinor](getdeviceclassminor.md): Deprecated. Get the minor service class of the device.
