> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/favoritedevices()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/favoritedevices())

# favoriteDevices() (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Gets an array of the user’s favorite devices.

## Declaration

```swift
class func favoriteDevices() -> [Any]!
```

<a id="return-value"></a>

## Return Value

Returns an array of device objects representing the user’s favorite devices. If the user has no favorites, nil is returned.

<a id="Discussion"></a>

## Discussion

The resulting array contains IOBluetoothDevice objects.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

# favoriteDevices (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Gets an array of the user’s favorite devices.

## Declaration

```objectivec
+ (NSArray *) favoriteDevices;
```

<a id="return-value"></a>

## Return Value

Returns an array of device objects representing the user’s favorite devices. If the user has no favorites, nil is returned.

<a id="Discussion"></a>

## Discussion

The resulting array contains IOBluetoothDevice objects.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.
