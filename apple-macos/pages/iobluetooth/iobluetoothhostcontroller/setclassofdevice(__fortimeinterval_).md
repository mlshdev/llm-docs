> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhostcontroller/setclassofdevice(_:fortimeinterval:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller/setclassofdevice(_:fortimeinterval:))

# setClassOfDevice(\_:forTimeInterval:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sets the current class of device value, for the specified amount of time. Note that the time interval *must* be set and valid. The range of acceptable values is 30-120 seconds. Anything above or below will be rounded up, or down, as appropriate.

## Declaration

```swift
func setClassOfDevice(_ classOfDevice: BluetoothClassOfDevice, forTimeInterval seconds: TimeInterval) -> IOReturn
```

<a id="return-value"></a>

## Return Value

Returns the whether setting the class of device value was successful. 0 if success, error code otherwise.

# setClassOfDevice:forTimeInterval: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sets the current class of device value, for the specified amount of time. Note that the time interval *must* be set and valid. The range of acceptable values is 30-120 seconds. Anything above or below will be rounded up, or down, as appropriate.

## Declaration

```objectivec
- (IOReturn) setClassOfDevice:(BluetoothClassOfDevice) classOfDevice forTimeInterval:(NSTimeInterval) seconds;
```

<a id="return-value"></a>

## Return Value

Returns the whether setting the class of device value was successful. 0 if success, error code otherwise.
