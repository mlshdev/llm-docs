> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/removefromfavorites()

# removeFromFavorites() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Removes the target device from the user’s favorite devices list.

## Declaration

```swift
func removeFromFavorites() -> IOReturn
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the device was successfully removed from the user’s list of favorite devices.

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

# removeFromFavorites (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Removes the target device from the user’s favorite devices list.

## Declaration

```objectivec
- (IOReturn) removeFromFavorites;
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the device was successfully removed from the user’s list of favorite devices.

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.
