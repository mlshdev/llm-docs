> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevicepair/init(device:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/init(device:))

# init(device:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Creates an autorelease IOBluetoothDevicePair object with a device as the pairing target.

## Declaration

```swift
convenience init!(device: IOBluetoothDevice!)
```

## Parameters

- `device`: An IOBluetoothDevice to attept to pair with. The device is retained.

<a id="return-value"></a>

## Return Value

Returns an IOReturn or Bluetooth error code, if the pairing could not be started.

# pairWithDevice: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates an autorelease IOBluetoothDevicePair object with a device as the pairing target.

## Declaration

```objectivec
+ (instancetype) pairWithDevice:(IOBluetoothDevice *) device;
```

## Parameters

- `device`: An IOBluetoothDevice to attept to pair with. The device is retained.

<a id="return-value"></a>

## Return Value

Returns an IOReturn or Bluetooth error code, if the pairing could not be started.
