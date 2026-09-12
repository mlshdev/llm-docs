> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/rssi](https://developer.apple.com/documentation/corebluetooth/cbperipheral/rssi)

# rssi (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The Received Signal Strength Indicator (RSSI), in decibels, of the peripheral.

> On iOS and tvOS, when you call the [readRSSI()](readrssi%28%29.md) method, the system returns the RSSI as a parameter in a call to the delegate’s [peripheral(\_:didReadRSSI:error:)](../cbperipheraldelegate/peripheral%28__didreadrssi_error_%29.md) method. Use that value instead.

## Declaration

```swift
var rssi: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

Returns a number, in decibels, that indicates the RSSI of the peripheral while connected to the central manager. You can use a connected peripheral’s RSSI property to determine the peripheral’s proximity. The default value of this property is `nil`; the first successful call to [readRSSI()](readrssi%28%29.md) sets its value.

## See Also

### Accessing a Peripheral’s Signal Strength

- [readRSSI()](readrssi%28%29.md): Retrieves the current RSSI value for the peripheral while connected to the central manager.

# RSSI (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.13) · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The Received Signal Strength Indicator (RSSI), in decibels, of the peripheral.

> On iOS and tvOS, when you call the [readRSSI](readrssi%28%29.md) method, the system returns the RSSI as a parameter in a call to the delegate’s [peripheral:didReadRSSI:error:](../cbperipheraldelegate/peripheral%28__didreadrssi_error_%29.md) method. Use that value instead.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSNumber * RSSI;
```

<a id="Discussion"></a>

## Discussion

Returns a number, in decibels, that indicates the RSSI of the peripheral while connected to the central manager. You can use a connected peripheral’s RSSI property to determine the peripheral’s proximity. The default value of this property is `nil`; the first successful call to [readRSSI](readrssi%28%29.md) sets its value.

## See Also

### Accessing a Peripheral’s Signal Strength

- [readRSSI](readrssi%28%29.md): Retrieves the current RSSI value for the peripheral while connected to the central manager.
