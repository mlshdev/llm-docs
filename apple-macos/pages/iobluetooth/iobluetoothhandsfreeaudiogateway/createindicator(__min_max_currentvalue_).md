> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/createindicator(_:min:max:currentvalue:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/createindicator(_:min:max:currentvalue:))

# createIndicator(\_:min:max:currentValue:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends a request to the Bluetooth device to show or update a status indicator.

## Declaration

```swift
func createIndicator(_ indicatorName: String!, min minValue: Int32, max maxValue: Int32, currentValue: Int32)
```

## Parameters

- `indicatorName`: The name of the indicator. Use one of the following constants:

  - [IOBluetoothHandsFreeIndicatorService](../iobluetoothhandsfreeindicatorservice.md)
  - [IOBluetoothHandsFreeIndicatorCall](../iobluetoothhandsfreeindicatorcall.md)
  - [IOBluetoothHandsFreeIndicatorCallSetup](../iobluetoothhandsfreeindicatorcallsetup.md)
  - [IOBluetoothHandsFreeIndicatorCallHeld](../iobluetoothhandsfreeindicatorcallheld.md)
  - [IOBluetoothHandsFreeIndicatorSignal](../iobluetoothhandsfreeindicatorsignal.md)
  - [IOBluetoothHandsFreeIndicatorRoam](../iobluetoothhandsfreeindicatorroam.md)
  - [IOBluetoothHandsFreeIndicatorBattChg](../iobluetoothhandsfreeindicatorbattchg.md)
- `minValue`: The minimum value for the indicator.
- `maxValue`: The maximum value for the indicator.
- `currentValue`: The current value of the indicator.

## See Also

### Showing Status Indicators

- [Status Indicator Constants](../status-indicator-constants.md): Send commands to modify the status indicators of a hands-free Bluetooth device.

# createIndicator:min:max:currentValue: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends a request to the Bluetooth device to show or update a status indicator.

## Declaration

```objectivec
- (void) createIndicator:(NSString *) indicatorName min:(int) minValue max:(int) maxValue currentValue:(int) currentValue;
```

## Parameters

- `indicatorName`: The name of the indicator. Use one of the following constants:

  - [IOBluetoothHandsFreeIndicatorService](../iobluetoothhandsfreeindicatorservice.md)
  - [IOBluetoothHandsFreeIndicatorCall](../iobluetoothhandsfreeindicatorcall.md)
  - [IOBluetoothHandsFreeIndicatorCallSetup](../iobluetoothhandsfreeindicatorcallsetup.md)
  - [IOBluetoothHandsFreeIndicatorCallHeld](../iobluetoothhandsfreeindicatorcallheld.md)
  - [IOBluetoothHandsFreeIndicatorSignal](../iobluetoothhandsfreeindicatorsignal.md)
  - [IOBluetoothHandsFreeIndicatorRoam](../iobluetoothhandsfreeindicatorroam.md)
  - [IOBluetoothHandsFreeIndicatorBattChg](../iobluetoothhandsfreeindicatorbattchg.md)
- `minValue`: The minimum value for the indicator.
- `maxValue`: The maximum value for the indicator.
- `currentValue`: The current value of the indicator.

## See Also

### Showing Status Indicators

- [Status Indicator Constants](../status-indicator-constants.md): Send commands to modify the status indicators of a hands-free Bluetooth device.
