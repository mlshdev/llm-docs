> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbadvertisementdataservicedatakey](https://developer.apple.com/documentation/corebluetooth/cbadvertisementdataservicedatakey)

# CBAdvertisementDataServiceDataKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A dictionary that contains service-specific advertisement data.

## Declaration

```swift
let CBAdvertisementDataServiceDataKey: String
```

<a id="Discussion"></a>

## Discussion

The keys ([CBUUID](cbuuid.md) objects) represent CBService UUIDs, and the values ([NSData](../foundation/nsdata.md) objects) represent service-specific data.

## See Also

### Advertisement Keys

- [CBAdvertisementDataLocalNameKey](cbadvertisementdatalocalnamekey.md): The local name of a peripheral.
- [CBAdvertisementDataManufacturerDataKey](cbadvertisementdatamanufacturerdatakey.md): The manufacturer data of a peripheral.
- [CBAdvertisementDataServiceUUIDsKey](cbadvertisementdataserviceuuidskey.md): An array of service UUIDs.
- [CBAdvertisementDataOverflowServiceUUIDsKey](cbadvertisementdataoverflowserviceuuidskey.md): An array of UUIDs found in the overflow area of the advertisement data.
- [CBAdvertisementDataTxPowerLevelKey](cbadvertisementdatatxpowerlevelkey.md): The transmit power of a peripheral.
- [CBAdvertisementDataIsConnectable](cbadvertisementdataisconnectable.md): A Boolean value that indicates whether the advertising event type is connectable.
- [CBAdvertisementDataSolicitedServiceUUIDsKey](cbadvertisementdatasolicitedserviceuuidskey.md): An array of solicited service UUIDs.

# CBAdvertisementDataServiceDataKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A dictionary that contains service-specific advertisement data.

## Declaration

```objectivec
extern NSString * const CBAdvertisementDataServiceDataKey;
```

<a id="Discussion"></a>

## Discussion

The keys ([CBUUID](cbuuid.md) objects) represent CBService UUIDs, and the values ([NSData](../foundation/nsdata.md) objects) represent service-specific data.

## See Also

### Advertisement Keys

- [CBAdvertisementDataLocalNameKey](cbadvertisementdatalocalnamekey.md): The local name of a peripheral.
- [CBAdvertisementDataManufacturerDataKey](cbadvertisementdatamanufacturerdatakey.md): The manufacturer data of a peripheral.
- [CBAdvertisementDataServiceUUIDsKey](cbadvertisementdataserviceuuidskey.md): An array of service UUIDs.
- [CBAdvertisementDataOverflowServiceUUIDsKey](cbadvertisementdataoverflowserviceuuidskey.md): An array of UUIDs found in the overflow area of the advertisement data.
- [CBAdvertisementDataTxPowerLevelKey](cbadvertisementdatatxpowerlevelkey.md): The transmit power of a peripheral.
- [CBAdvertisementDataIsConnectable](cbadvertisementdataisconnectable.md): A Boolean value that indicates whether the advertising event type is connectable.
- [CBAdvertisementDataSolicitedServiceUUIDsKey](cbadvertisementdatasolicitedserviceuuidskey.md): An array of solicited service UUIDs.
