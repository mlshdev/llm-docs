> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/init(addressstring:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/init(addressstring:))

# init(addressString:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress

## Declaration

```swift
convenience init!(addressString address: String!)
```

## Parameters

- `address`: Pointer to an NSString containing the BD_ADDR for which an IOBluetoothDevice instance is desired. The string should be of the form xx:xx:xx:xx:xx:xx

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress

<a id="Discussion"></a>

## Discussion

Within a single application, there will be only one instance of IOBluetoothDevice for a given remote device address.

## See Also

### Initializers

- [init(address:)](init%28address_%29.md): Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress

# deviceWithAddressString: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress

## Declaration

```objectivec
+ (instancetype) deviceWithAddressString:(NSString *) address;
```

## Parameters

- `address`: Pointer to an NSString containing the BD_ADDR for which an IOBluetoothDevice instance is desired. The string should be of the form xx:xx:xx:xx:xx:xx

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress

<a id="Discussion"></a>

## Discussion

Within a single application, there will be only one instance of IOBluetoothDevice for a given remote device address.

## See Also

### Initializers

- [deviceWithAddress:](init%28address_%29.md): Returns the IOBluetoothDevice object for the given BluetoothDeviceAddress
