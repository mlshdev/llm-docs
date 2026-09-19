> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/init(address:)

# init(address:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress

## Declaration

```swift
convenience init!(address: UnsafePointer<BluetoothDeviceAddress>!)
```

## Parameters

- `address`: Pointer to a BluetoothDeviceAddress for which an IOBluetoothDevice instance is desired

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress

<a id="Discussion"></a>

## Discussion

Within a single application, there will be only one instance of IOBluetoothDevice for a given remote device address.

## See Also

### Initializers

- [init(addressString:)](init%28addressstring_%29.md): Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress

# deviceWithAddress: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress

## Declaration

```objectivec
+ (instancetype) deviceWithAddress:(const BluetoothDeviceAddress *) address;
```

## Parameters

- `address`: Pointer to a BluetoothDeviceAddress for which an IOBluetoothDevice instance is desired

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress

<a id="Discussion"></a>

## Discussion

Within a single application, there will be only one instance of IOBluetoothDevice for a given remote device address.

## See Also

### Initializers

- [deviceWithAddressString:](init%28addressstring_%29.md): Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress
