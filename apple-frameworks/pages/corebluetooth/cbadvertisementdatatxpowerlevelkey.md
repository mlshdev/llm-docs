> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbadvertisementdatatxpowerlevelkey](https://developer.apple.com/documentation/corebluetooth/cbadvertisementdatatxpowerlevelkey)

# CBAdvertisementDataTxPowerLevelKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The transmit power of a peripheral.

## Declaration

```swift
let CBAdvertisementDataTxPowerLevelKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an instance of [NSNumber](../foundation/nsnumber.md).

This key and value are available if the peripheral provides its transmitting power level in its advertising packet. You can calculate the path loss by comparing the RSSI value with the transmitting power level.

## See Also

### Advertisement Keys

- [CBAdvertisementDataLocalNameKey](cbadvertisementdatalocalnamekey.md): The local name of a peripheral.
- [CBAdvertisementDataManufacturerDataKey](cbadvertisementdatamanufacturerdatakey.md): The manufacturer data of a peripheral.
- [CBAdvertisementDataServiceDataKey](cbadvertisementdataservicedatakey.md): A dictionary that contains service-specific advertisement data.
- [CBAdvertisementDataServiceUUIDsKey](cbadvertisementdataserviceuuidskey.md): An array of service UUIDs.
- [CBAdvertisementDataOverflowServiceUUIDsKey](cbadvertisementdataoverflowserviceuuidskey.md): An array of UUIDs found in the overflow area of the advertisement data.
- [CBAdvertisementDataIsConnectable](cbadvertisementdataisconnectable.md): A Boolean value that indicates whether the advertising event type is connectable.
- [CBAdvertisementDataSolicitedServiceUUIDsKey](cbadvertisementdatasolicitedserviceuuidskey.md): An array of solicited service UUIDs.

# CBAdvertisementDataTxPowerLevelKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The transmit power of a peripheral.

## Declaration

```objectivec
extern NSString * const CBAdvertisementDataTxPowerLevelKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an instance of [NSNumber](../foundation/nsnumber.md).

This key and value are available if the peripheral provides its transmitting power level in its advertising packet. You can calculate the path loss by comparing the RSSI value with the transmitting power level.

## See Also

### Advertisement Keys

- [CBAdvertisementDataLocalNameKey](cbadvertisementdatalocalnamekey.md): The local name of a peripheral.
- [CBAdvertisementDataManufacturerDataKey](cbadvertisementdatamanufacturerdatakey.md): The manufacturer data of a peripheral.
- [CBAdvertisementDataServiceDataKey](cbadvertisementdataservicedatakey.md): A dictionary that contains service-specific advertisement data.
- [CBAdvertisementDataServiceUUIDsKey](cbadvertisementdataserviceuuidskey.md): An array of service UUIDs.
- [CBAdvertisementDataOverflowServiceUUIDsKey](cbadvertisementdataoverflowserviceuuidskey.md): An array of UUIDs found in the overflow area of the advertisement data.
- [CBAdvertisementDataIsConnectable](cbadvertisementdataisconnectable.md): A Boolean value that indicates whether the advertising event type is connectable.
- [CBAdvertisementDataSolicitedServiceUUIDsKey](cbadvertisementdatasolicitedserviceuuidskey.md): An array of solicited service UUIDs.
