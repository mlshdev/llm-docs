> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corebluetooth/cbconnectioneventmatchingoption/peripheraluuids

# peripheralUUIDs (Swift)

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of UUID objects that represents peripherals to match.

## Declaration

```swift
static let peripheralUUIDs: CBConnectionEventMatchingOption
```

<a id="Discussion"></a>

## Discussion

A connected peer with any matching peripheral UUIDs results in a call to [centralManager(\_:connectionEventDidOccur:for:)](../cbcentralmanagerdelegate/centralmanager%28__connectioneventdidoccur_for_%29.md).

## See Also

### Matching Options

- [serviceUUIDs](serviceuuids.md): An array that represents service identifiers to match.

# CBConnectionEventMatchingOptionPeripheralUUIDs (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of UUID objects that represents peripherals to match.

## Declaration

```objectivec
extern CBConnectionEventMatchingOption const CBConnectionEventMatchingOptionPeripheralUUIDs;
```

<a id="Discussion"></a>

## Discussion

A connected peer with any matching peripheral UUIDs results in a call to [centralManager:connectionEventDidOccur:forPeripheral:](../cbcentralmanagerdelegate/centralmanager%28__connectioneventdidoccur_for_%29.md).

## See Also

### Matching Options

- [CBConnectionEventMatchingOptionServiceUUIDs](serviceuuids.md): An array that represents service identifiers to match.
