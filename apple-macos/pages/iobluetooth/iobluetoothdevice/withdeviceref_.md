> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/withdeviceref:](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/withdeviceref:)

# withDeviceRef:

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Method call to convert an IOBluetoothDeviceRef into an IOBluetoothDevice \*.

## Declaration

```objectivec
+ (instancetype) withDeviceRef:(IOBluetoothDeviceRef) deviceRef;
```

## Parameters

- `deviceRef`: IOBluetoothDeviceRef for which an IOBluetoothDevice \* is desired.

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothDevice \* for the given IOBluetoothDeviceRef.

<a id="Discussion"></a>

## Discussion

IOBluetoothDeviceRef and it’s API are deprecated. An IOBluetoothDeviceRef can be cast to a IOBluetoothDevice \*
