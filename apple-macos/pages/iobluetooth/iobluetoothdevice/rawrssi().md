> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/rawrssi()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/rawrssi())

# rawRSSI() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Get the raw RSSI device (if connected).

## Declaration

```swift
func rawRSSI() -> BluetoothHCIRSSIValue
```

<a id="return-value"></a>

## Return Value

Returns the raw RSSI of the device.

<a id="Discussion"></a>

## Discussion

This value is the perceived RSSI value, not relative the the golden range (see getRSSI for that value). This value will not available on all Bluetooth modules. If the value cannot be read (e.g. the device is disconnected) or is not available on a module, a value of +127 will be returned.

# rawRSSI (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Get the raw RSSI device (if connected).

## Declaration

```objectivec
- (BluetoothHCIRSSIValue) rawRSSI;
```

<a id="return-value"></a>

## Return Value

Returns the raw RSSI of the device.

<a id="Discussion"></a>

## Discussion

This value is the perceived RSSI value, not relative the the golden range (see getRSSI for that value). This value will not available on all Bluetooth modules. If the value cannot be read (e.g. the device is disconnected) or is not available on a module, a value of +127 will be returned.
