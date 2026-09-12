> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheraldidupdaterssi(_:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheraldidupdaterssi(_:error:))

# peripheralDidUpdateRSSI(\_:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.

> in iOS and tvOS, use the [peripheral(\_:didReadRSSI:error:)](peripheral%28__didreadrssi_error_%29.md) method instead.

## Declaration

```swift
optional func peripheralDidUpdateRSSI(_ peripheral: CBPeripheral, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [readRSSI()](../cbperipheral/readrssi%28%29.md) method, while the peripheral is connected to the central manager. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Retrieving a Peripheral’s RSSI Data

- [peripheral(\_:didReadRSSI:error:)](peripheral%28__didreadrssi_error_%29.md): Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.

# peripheralDidUpdateRSSI:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.

> in iOS and tvOS, use the [peripheral:didReadRSSI:error:](peripheral%28__didreadrssi_error_%29.md) method instead.

## Declaration

```objectivec
- (void) peripheralDidUpdateRSSI:(CBPeripheral *) peripheral error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [readRSSI](../cbperipheral/readrssi%28%29.md) method, while the peripheral is connected to the central manager. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Retrieving a Peripheral’s RSSI Data

- [peripheral:didReadRSSI:error:](peripheral%28__didreadrssi_error_%29.md): Tells the delegate that retrieving the value of the peripheral’s current Received Signal Strength Indicator (RSSI) succeeded.
