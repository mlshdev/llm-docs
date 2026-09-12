> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/rssi()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/rssi())

# rssi() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Get the RSSI device (if connected), above or below the golden range. If the RSSI is within the golden range, a value of 0 is returned. For the actual RSSI value, use getRawRSSI. For more information, see the Bluetooth 4.0 Core Specification.

## Declaration

```swift
func rssi() -> BluetoothHCIRSSIValue
```

<a id="return-value"></a>

## Return Value

Returns the RSSI of the device. If the value cannot be read (e.g. the device is disconnected), a value of +127 will be returned.

# RSSI (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Get the RSSI device (if connected), above or below the golden range. If the RSSI is within the golden range, a value of 0 is returned. For the actual RSSI value, use getRawRSSI. For more information, see the Bluetooth 4.0 Core Specification.

## Declaration

```objectivec
- (BluetoothHCIRSSIValue) RSSI;
```

<a id="return-value"></a>

## Return Value

Returns the RSSI of the device. If the value cannot be read (e.g. the device is disconnected), a value of +127 will be returned.
