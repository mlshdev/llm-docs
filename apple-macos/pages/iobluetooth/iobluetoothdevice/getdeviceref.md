> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getdeviceref](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getdeviceref)

# getDeviceRef

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns an IOBluetoothDeviceRef representation of the target IOBluetoothDevice object.

## Declaration

```objectivec
- (IOBluetoothDeviceRef) getDeviceRef;
```

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothDeviceRef representation of the target IOBluetoothDevice object.

<a id="Discussion"></a>

## Discussion

IOBluetoothDeviceRef and it’s API are deprecated. An IOBluetoothDeviceRef can be cast to a IOBluetoothDevice \*
