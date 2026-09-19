> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getaddress()

# getAddress() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the Bluetooth device address for the target device.

## Declaration

```swift
func getAddress() -> UnsafePointer<BluetoothDeviceAddress>!
```

<a id="return-value"></a>

## Return Value

Returns a pointer to the Bluetooth device address of the target device.

# getAddress (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the Bluetooth device address for the target device.

## Declaration

```objectivec
- (const BluetoothDeviceAddress *) getAddress;
```

<a id="return-value"></a>

## Return Value

Returns a pointer to the Bluetooth device address of the target device.
