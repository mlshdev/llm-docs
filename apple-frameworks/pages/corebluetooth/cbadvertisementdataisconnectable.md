> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbadvertisementdataisconnectable](https://developer.apple.com/documentation/corebluetooth/cbadvertisementdataisconnectable)

# CBAdvertisementDataIsConnectable (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the advertising event type is connectable.

## Declaration

```swift
let CBAdvertisementDataIsConnectable: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object. You can use this value to determine whether your app can currently connect to a peripheral.

## See Also

### Advertisement Keys

- [CBAdvertisementDataLocalNameKey](cbadvertisementdatalocalnamekey.md): The local name of a peripheral.
- [CBAdvertisementDataManufacturerDataKey](cbadvertisementdatamanufacturerdatakey.md): The manufacturer data of a peripheral.
- [CBAdvertisementDataServiceDataKey](cbadvertisementdataservicedatakey.md): A dictionary that contains service-specific advertisement data.
- [CBAdvertisementDataServiceUUIDsKey](cbadvertisementdataserviceuuidskey.md): An array of service UUIDs.
- [CBAdvertisementDataOverflowServiceUUIDsKey](cbadvertisementdataoverflowserviceuuidskey.md): An array of UUIDs found in the overflow area of the advertisement data.
- [CBAdvertisementDataTxPowerLevelKey](cbadvertisementdatatxpowerlevelkey.md): The transmit power of a peripheral.
- [CBAdvertisementDataSolicitedServiceUUIDsKey](cbadvertisementdatasolicitedserviceuuidskey.md): An array of solicited service UUIDs.

# CBAdvertisementDataIsConnectable (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the advertising event type is connectable.

## Declaration

```objectivec
extern NSString * const CBAdvertisementDataIsConnectable;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object. You can use this value to determine whether your app can currently connect to a peripheral.

## See Also

### Advertisement Keys

- [CBAdvertisementDataLocalNameKey](cbadvertisementdatalocalnamekey.md): The local name of a peripheral.
- [CBAdvertisementDataManufacturerDataKey](cbadvertisementdatamanufacturerdatakey.md): The manufacturer data of a peripheral.
- [CBAdvertisementDataServiceDataKey](cbadvertisementdataservicedatakey.md): A dictionary that contains service-specific advertisement data.
- [CBAdvertisementDataServiceUUIDsKey](cbadvertisementdataserviceuuidskey.md): An array of service UUIDs.
- [CBAdvertisementDataOverflowServiceUUIDsKey](cbadvertisementdataoverflowserviceuuidskey.md): An array of UUIDs found in the overflow area of the advertisement data.
- [CBAdvertisementDataTxPowerLevelKey](cbadvertisementdatatxpowerlevelkey.md): The transmit power of a peripheral.
- [CBAdvertisementDataSolicitedServiceUUIDsKey](cbadvertisementdatasolicitedserviceuuidskey.md): An array of solicited service UUIDs.
