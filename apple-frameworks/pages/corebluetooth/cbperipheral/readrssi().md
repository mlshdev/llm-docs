> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/readrssi()](https://developer.apple.com/documentation/corebluetooth/cbperipheral/readrssi())

# readRSSI() (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the current RSSI value for the peripheral while connected to the central manager.

## Declaration

```swift
func readRSSI()
```

<a id="Discussion"></a>

## Discussion

On macOS, when you call this method to retrieve the Received Signal Strength Indicator (RSSI) of the peripheral while connected to the central manager, the peripheral calls the [peripheralDidUpdateRSSI(\_:error:)](../cbperipheraldelegate/peripheraldidupdaterssi%28__error_%29.md) method of its delegate object. If retrieving the RSSI value of the peripheral succeeds, you can access it through the peripheral’s [rssi](rssi.md) property.

On iOS and tvOS, when you call this method to retrieve the RSSI of the peripheral while connected to the central manager, the peripheral calls the [peripheral(\_:didReadRSSI:error:)](../cbperipheraldelegate/peripheral%28__didreadrssi_error_%29.md) method of its delegate object, which includes the RSSI value as a parameter.

## See Also

### Accessing a Peripheral’s Signal Strength

- [rssi](rssi.md): Deprecated. The Received Signal Strength Indicator (RSSI), in decibels, of the peripheral.

# readRSSI (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the current RSSI value for the peripheral while connected to the central manager.

## Declaration

```objectivec
- (void) readRSSI;
```

<a id="Discussion"></a>

## Discussion

On macOS, when you call this method to retrieve the Received Signal Strength Indicator (RSSI) of the peripheral while connected to the central manager, the peripheral calls the [peripheralDidUpdateRSSI:error:](../cbperipheraldelegate/peripheraldidupdaterssi%28__error_%29.md) method of its delegate object. If retrieving the RSSI value of the peripheral succeeds, you can access it through the peripheral’s [RSSI](rssi.md) property.

On iOS and tvOS, when you call this method to retrieve the RSSI of the peripheral while connected to the central manager, the peripheral calls the [peripheral:didReadRSSI:error:](../cbperipheraldelegate/peripheral%28__didreadrssi_error_%29.md) method of its delegate object, which includes the RSSI value as a parameter.

## See Also

### Accessing a Peripheral’s Signal Strength

- [RSSI](rssi.md): Deprecated. The Received Signal Strength Indicator (RSSI), in decibels, of the peripheral.
