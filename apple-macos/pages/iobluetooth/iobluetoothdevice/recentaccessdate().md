> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/recentaccessdate()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/recentaccessdate())

# recentAccessDate() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the date/time of the most recent access of the target device.

## Declaration

```swift
func recentAccessDate() -> Date!
```

<a id="return-value"></a>

## Return Value

Returns the date/time of the most recent access of the target device. If the device has not been accessed, nil is returned.

<a id="Discussion"></a>

## Discussion

This is the date that -recentDevices uses to sort its list of the most recently accessed devices.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

# recentAccessDate (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the date/time of the most recent access of the target device.

## Declaration

```objectivec
- (NSDate *) recentAccessDate;
```

<a id="return-value"></a>

## Return Value

Returns the date/time of the most recent access of the target device. If the device has not been accessed, nil is returned.

<a id="Discussion"></a>

## Discussion

This is the date that -recentDevices uses to sort its list of the most recently accessed devices.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.
