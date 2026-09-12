> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/recentdevices(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/recentdevices(_:))

# recentDevices(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Gets an array of recently used Bluetooth devices.

## Declaration

```swift
class func recentDevices(_ numDevices: UInt) -> [Any]!
```

## Parameters

- `numDevices`: The number of devices to return.

<a id="return-value"></a>

## Return Value

Returns an array of device objects recently used by the system. If no devices have been accessed, nil is returned.

<a id="Discussion"></a>

## Discussion

The resulting array contains IOBluetoothDevice objects sorted in reverse chronological order. The most recently accessed devices are first. If the numDevices parameter is 0, all devices accessed by the system are returned. If numDevices is non-zero, only the most recent devices are returned.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

# recentDevices: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Gets an array of recently used Bluetooth devices.

## Declaration

```objectivec
+ (NSArray *) recentDevices:(unsigned long) numDevices;
```

## Parameters

- `numDevices`: The number of devices to return.

<a id="return-value"></a>

## Return Value

Returns an array of device objects recently used by the system. If no devices have been accessed, nil is returned.

<a id="Discussion"></a>

## Discussion

The resulting array contains IOBluetoothDevice objects sorted in reverse chronological order. The most recently accessed devices are first. If the numDevices parameter is 0, all devices accessed by the system are returned. If numDevices is non-zero, only the most recent devices are returned.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.
