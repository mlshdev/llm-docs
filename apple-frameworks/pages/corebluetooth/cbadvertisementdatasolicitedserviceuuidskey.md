> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbadvertisementdatasolicitedserviceuuidskey](https://developer.apple.com/documentation/corebluetooth/cbadvertisementdatasolicitedserviceuuidskey)

# CBAdvertisementDataSolicitedServiceUUIDsKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of solicited service UUIDs.

## Declaration

```swift
let CBAdvertisementDataSolicitedServiceUUIDsKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an array of one or more [CBUUID](cbuuid.md) objects, representing [CBService](cbservice.md) UUIDs.

## See Also

### Advertisement Keys

- [CBAdvertisementDataLocalNameKey](cbadvertisementdatalocalnamekey.md): The local name of a peripheral.
- [CBAdvertisementDataManufacturerDataKey](cbadvertisementdatamanufacturerdatakey.md): The manufacturer data of a peripheral.
- [CBAdvertisementDataServiceDataKey](cbadvertisementdataservicedatakey.md): A dictionary that contains service-specific advertisement data.
- [CBAdvertisementDataServiceUUIDsKey](cbadvertisementdataserviceuuidskey.md): An array of service UUIDs.
- [CBAdvertisementDataOverflowServiceUUIDsKey](cbadvertisementdataoverflowserviceuuidskey.md): An array of UUIDs found in the overflow area of the advertisement data.
- [CBAdvertisementDataTxPowerLevelKey](cbadvertisementdatatxpowerlevelkey.md): The transmit power of a peripheral.
- [CBAdvertisementDataIsConnectable](cbadvertisementdataisconnectable.md): A Boolean value that indicates whether the advertising event type is connectable.

# CBAdvertisementDataSolicitedServiceUUIDsKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of solicited service UUIDs.

## Declaration

```objectivec
extern NSString * const CBAdvertisementDataSolicitedServiceUUIDsKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an array of one or more [CBUUID](cbuuid.md) objects, representing [CBService](cbservice.md) UUIDs.

## See Also

### Advertisement Keys

- [CBAdvertisementDataLocalNameKey](cbadvertisementdatalocalnamekey.md): The local name of a peripheral.
- [CBAdvertisementDataManufacturerDataKey](cbadvertisementdatamanufacturerdatakey.md): The manufacturer data of a peripheral.
- [CBAdvertisementDataServiceDataKey](cbadvertisementdataservicedatakey.md): A dictionary that contains service-specific advertisement data.
- [CBAdvertisementDataServiceUUIDsKey](cbadvertisementdataserviceuuidskey.md): An array of service UUIDs.
- [CBAdvertisementDataOverflowServiceUUIDsKey](cbadvertisementdataoverflowserviceuuidskey.md): An array of UUIDs found in the overflow area of the advertisement data.
- [CBAdvertisementDataTxPowerLevelKey](cbadvertisementdatatxpowerlevelkey.md): The transmit power of a peripheral.
- [CBAdvertisementDataIsConnectable](cbadvertisementdataisconnectable.md): A Boolean value that indicates whether the advertising event type is connectable.
