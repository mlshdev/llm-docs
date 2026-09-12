> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/retrieveperipherals(withidentifiers:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/retrieveperipherals(withidentifiers:))

# retrievePeripherals(withIdentifiers:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a list of known peripherals by their identifiers.

## Declaration

```swift
func retrievePeripherals(withIdentifiers identifiers: [UUID]) -> [CBPeripheral]
```

## Parameters

- `identifiers`: A list of peripheral identifiers (represented by [NSUUID](../../foundation/nsuuid.md) objects) from which [CBPeripheral](../cbperipheral.md) objects can be retrieved.

<a id="return-value"></a>

## Return Value

A list of peripherals that the central manager is able to match to the provided identifiers.

## See Also

### Retrieving Lists of Peripherals

- [retrieveConnectedPeripherals(withServices:)](retrieveconnectedperipherals%28withservices_%29.md): Returns a list of the peripherals connected to the system whose services match a given set of criteria.

# retrievePeripheralsWithIdentifiers: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a list of known peripherals by their identifiers.

## Declaration

```objectivec
- (NSArray<CBPeripheral *> *) retrievePeripheralsWithIdentifiers:(NSArray<NSUUID *> *) identifiers;
```

## Parameters

- `identifiers`: A list of peripheral identifiers (represented by [NSUUID](../../foundation/nsuuid.md) objects) from which [CBPeripheral](../cbperipheral.md) objects can be retrieved.

<a id="return-value"></a>

## Return Value

A list of peripherals that the central manager is able to match to the provided identifiers.

## See Also

### Retrieving Lists of Peripherals

- [retrieveConnectedPeripheralsWithServices:](retrieveconnectedperipherals%28withservices_%29.md): Returns a list of the peripherals connected to the system whose services match a given set of criteria.
