> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/paireddevices()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/paireddevices())

# pairedDevices() (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Gets an array of all of the paired devices on the system.

## Declaration

```swift
class func pairedDevices() -> [Any]!
```

<a id="return-value"></a>

## Return Value

Returns an array of device objects for all of the paired devices on the system. If there are no paired devices, nil is returned.

<a id="Discussion"></a>

## Discussion

The resulting array contains IOBluetoothDevice objects. The paired devices are currently NOT stored per user, so this is all devices paired by any user.

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.

# pairedDevices (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Gets an array of all of the paired devices on the system.

## Declaration

```objectivec
+ (NSArray *) pairedDevices;
```

<a id="return-value"></a>

## Return Value

Returns an array of device objects for all of the paired devices on the system. If there are no paired devices, nil is returned.

<a id="Discussion"></a>

## Discussion

The resulting array contains IOBluetoothDevice objects. The paired devices are currently NOT stored per user, so this is all devices paired by any user.

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.
