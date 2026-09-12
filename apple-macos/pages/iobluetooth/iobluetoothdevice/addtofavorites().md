> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/addtofavorites()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/addtofavorites())

# addToFavorites() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Adds the target device to the user’s favorite devices list.

## Declaration

```swift
func addToFavorites() -> IOReturn
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the device was successfully added to the user’s list of favorite devices.

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

# addToFavorites (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Adds the target device to the user’s favorite devices list.

## Declaration

```objectivec
- (IOReturn) addToFavorites;
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the device was successfully added to the user’s list of favorite devices.

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.
