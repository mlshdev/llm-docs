> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didreadrssi:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didreadrssi:error:))

# peripheral(\_:didReadRSSI:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didReadRSSI RSSI: NSNumber, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `RSSI`: The RSSI, in decibels, of the peripheral.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [readRSSI()](../cbperipheral/readrssi%28%29.md) method, while the peripheral is connected to the central manager. If successful, the `error` parameter is `nil` and the parameter `RSSI` reports the peripheral’s signal strength, in decibels. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Retrieving a Peripheral’s RSSI Data

- [peripheralDidUpdateRSSI(\_:error:)](peripheraldidupdaterssi%28__error_%29.md): Deprecated. Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.

# peripheral:didReadRSSI:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didReadRSSI:(NSNumber *) RSSI error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `RSSI`: The RSSI, in decibels, of the peripheral.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [readRSSI](../cbperipheral/readrssi%28%29.md) method, while the peripheral is connected to the central manager. If successful, the `error` parameter is `nil` and the parameter `RSSI` reports the peripheral’s signal strength, in decibels. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Retrieving a Peripheral’s RSSI Data

- [peripheralDidUpdateRSSI:error:](peripheraldidupdaterssi%28__error_%29.md): Deprecated. Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.
