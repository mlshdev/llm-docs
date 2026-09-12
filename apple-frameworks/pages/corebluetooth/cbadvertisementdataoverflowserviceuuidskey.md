> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbadvertisementdataoverflowserviceuuidskey](https://developer.apple.com/documentation/corebluetooth/cbadvertisementdataoverflowserviceuuidskey)

# CBAdvertisementDataOverflowServiceUUIDsKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of UUIDs found in the overflow area of the advertisement data.

## Declaration

```swift
let CBAdvertisementDataOverflowServiceUUIDsKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an array of one or more [CBUUID](cbuuid.md) objects, representing [CBService](cbservice.md) UUIDs.

Because data stored in this area results from not fitting in the main advertisement, UUIDs listed here are “best effort” and may not always be accurate. For details about the overflow area of advertisement data, see the [startAdvertising(\_:)](cbperipheralmanager/startadvertising%28__%29.md) method in [CBPeripheralManager](cbperipheralmanager.md).

## See Also

### Advertisement Keys

- [CBAdvertisementDataLocalNameKey](cbadvertisementdatalocalnamekey.md): The local name of a peripheral.
- [CBAdvertisementDataManufacturerDataKey](cbadvertisementdatamanufacturerdatakey.md): The manufacturer data of a peripheral.
- [CBAdvertisementDataServiceDataKey](cbadvertisementdataservicedatakey.md): A dictionary that contains service-specific advertisement data.
- [CBAdvertisementDataServiceUUIDsKey](cbadvertisementdataserviceuuidskey.md): An array of service UUIDs.
- [CBAdvertisementDataTxPowerLevelKey](cbadvertisementdatatxpowerlevelkey.md): The transmit power of a peripheral.
- [CBAdvertisementDataIsConnectable](cbadvertisementdataisconnectable.md): A Boolean value that indicates whether the advertising event type is connectable.
- [CBAdvertisementDataSolicitedServiceUUIDsKey](cbadvertisementdatasolicitedserviceuuidskey.md): An array of solicited service UUIDs.

# CBAdvertisementDataOverflowServiceUUIDsKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of UUIDs found in the overflow area of the advertisement data.

## Declaration

```objectivec
extern NSString * const CBAdvertisementDataOverflowServiceUUIDsKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an array of one or more [CBUUID](cbuuid.md) objects, representing [CBService](cbservice.md) UUIDs.

Because data stored in this area results from not fitting in the main advertisement, UUIDs listed here are “best effort” and may not always be accurate. For details about the overflow area of advertisement data, see the [startAdvertising:](cbperipheralmanager/startadvertising%28__%29.md) method in [CBPeripheralManager](cbperipheralmanager.md).

## See Also

### Advertisement Keys

- [CBAdvertisementDataLocalNameKey](cbadvertisementdatalocalnamekey.md): The local name of a peripheral.
- [CBAdvertisementDataManufacturerDataKey](cbadvertisementdatamanufacturerdatakey.md): The manufacturer data of a peripheral.
- [CBAdvertisementDataServiceDataKey](cbadvertisementdataservicedatakey.md): A dictionary that contains service-specific advertisement data.
- [CBAdvertisementDataServiceUUIDsKey](cbadvertisementdataserviceuuidskey.md): An array of service UUIDs.
- [CBAdvertisementDataTxPowerLevelKey](cbadvertisementdatatxpowerlevelkey.md): The transmit power of a peripheral.
- [CBAdvertisementDataIsConnectable](cbadvertisementdataisconnectable.md): A Boolean value that indicates whether the advertising event type is connectable.
- [CBAdvertisementDataSolicitedServiceUUIDsKey](cbadvertisementdatasolicitedserviceuuidskey.md): An array of solicited service UUIDs.
