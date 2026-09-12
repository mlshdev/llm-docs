> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpuuid/getwithlength(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/getwithlength(_:))

# getWithLength(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns an IOBluetoothSDPUUID object matching the target UUID, but with the given number of bytes.

## Declaration

```swift
func getWithLength(_ newLength: UInt32) -> Self!
```

## Parameters

- `newLength`: The desired length for the UUID.

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothSDPUUID object with the same data as the target but with the given length if it is possible to do so. Otherwise, nil is returned.

<a id="Discussion"></a>

## Discussion

If the target object is the same length as newLength, it returns self. If newLength is greater it creates a new IOBluetoothSDPUUID object with the correct value for the given length. If newLength is smaller, it will attempt to create a new IOBluetoothSDPUUID that is smaller if the data matches the Bluetooth UUID base. This downconversion is currently unimplemented.

# getUUIDWithLength: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns an IOBluetoothSDPUUID object matching the target UUID, but with the given number of bytes.

## Declaration

```objectivec
- (instancetype) getUUIDWithLength:(unsigned int) newLength;
```

## Parameters

- `newLength`: The desired length for the UUID.

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothSDPUUID object with the same data as the target but with the given length if it is possible to do so. Otherwise, nil is returned.

<a id="Discussion"></a>

## Discussion

If the target object is the same length as newLength, it returns self. If newLength is greater it creates a new IOBluetoothSDPUUID object with the correct value for the given length. If newLength is smaller, it will attempt to create a new IOBluetoothSDPUUID that is smaller if the data matches the Bluetooth UUID base. This downconversion is currently unimplemented.
