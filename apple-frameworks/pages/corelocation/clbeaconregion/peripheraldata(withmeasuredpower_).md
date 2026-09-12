> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconregion/peripheraldata(withmeasuredpower:)](https://developer.apple.com/documentation/corelocation/clbeaconregion/peripheraldata(withmeasuredpower:))

# peripheralData(withMeasuredPower:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

Retrieves data that you can use to advertise the current device as a beacon.

## Declaration

```swift
func peripheralData(withMeasuredPower measuredPower: NSNumber?) -> NSMutableDictionary
```

## Parameters

- `measuredPower`: The received signal strength indicator (RSSI) value, measured in decibels, for the device. This value represents the measured strength of the beacon from one meter away that Core Location uses during ranging. Specify `nil` to use the default value for the device.

<a id="return-value"></a>

## Return Value

A dictionary of data that you can use in conjunction with a [CBPeripheralManager](../../corebluetooth/cbperipheralmanager.md) to advertise the current device as a beacon.

## Mentioned In

- [Turning an iOS device into an iBeacon device](../turning-an-ios-device-into-an-ibeacon-device.md)

<a id="Discussion"></a>

## Discussion

The returned dictionary encodes the beacon’s identifying information, along with other information needed to advertise the beacon. You don’t need to access the dictionary contents directly. Pass the dictionary to the [startAdvertising(\_:)](../../corebluetooth/cbperipheralmanager/startadvertising%28__%29.md) method of a [CBPeripheralManager](../../corebluetooth/cbperipheralmanager.md) to begin advertising the beacon.

# peripheralDataWithMeasuredPower: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

Retrieves data that you can use to advertise the current device as a beacon.

## Declaration

```objectivec
- (NSMutableDictionary<NSString *,id> *) peripheralDataWithMeasuredPower:(NSNumber *) measuredPower;
```

## Parameters

- `measuredPower`: The received signal strength indicator (RSSI) value, measured in decibels, for the device. This value represents the measured strength of the beacon from one meter away that Core Location uses during ranging. Specify `nil` to use the default value for the device.

<a id="return-value"></a>

## Return Value

A dictionary of data that you can use in conjunction with a [CBPeripheralManager](../../corebluetooth/cbperipheralmanager.md) to advertise the current device as a beacon.

## Mentioned In

- [Turning an iOS device into an iBeacon device](../turning-an-ios-device-into-an-ibeacon-device.md)

<a id="Discussion"></a>

## Discussion

The returned dictionary encodes the beacon’s identifying information, along with other information needed to advertise the beacon. You don’t need to access the dictionary contents directly. Pass the dictionary to the [startAdvertising:](../../corebluetooth/cbperipheralmanager/startadvertising%28__%29.md) method of a [CBPeripheralManager](../../corebluetooth/cbperipheralmanager.md) to begin advertising the beacon.
