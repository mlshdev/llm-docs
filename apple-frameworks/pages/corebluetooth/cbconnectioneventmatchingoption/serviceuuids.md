> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbconnectioneventmatchingoption/serviceuuids](https://developer.apple.com/documentation/corebluetooth/cbconnectioneventmatchingoption/serviceuuids)

# serviceUUIDs (Swift)

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array that represents service identifiers to match.

## Declaration

```swift
static let serviceUUIDs: CBConnectionEventMatchingOption
```

<a id="Discussion"></a>

## Discussion

A connected peer with any matching service UUIDs results in a call to [centralManager(\_:connectionEventDidOccur:for:)](../cbcentralmanagerdelegate/centralmanager%28__connectioneventdidoccur_for_%29.md).

## See Also

### Matching Options

- [peripheralUUIDs](peripheraluuids.md): An array of UUID objects that represents peripherals to match.

# CBConnectionEventMatchingOptionServiceUUIDs (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array that represents service identifiers to match.

## Declaration

```objectivec
extern CBConnectionEventMatchingOption const CBConnectionEventMatchingOptionServiceUUIDs;
```

<a id="Discussion"></a>

## Discussion

A connected peer with any matching service UUIDs results in a call to [centralManager:connectionEventDidOccur:forPeripheral:](../cbcentralmanagerdelegate/centralmanager%28__connectioneventdidoccur_for_%29.md).

## See Also

### Matching Options

- [CBConnectionEventMatchingOptionPeripheralUUIDs](peripheraluuids.md): An array of UUID objects that represents peripherals to match.
