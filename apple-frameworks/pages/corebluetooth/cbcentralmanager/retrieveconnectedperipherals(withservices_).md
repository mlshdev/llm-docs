> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/retrieveconnectedperipherals(withservices:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/retrieveconnectedperipherals(withservices:))

# retrieveConnectedPeripherals(withServices:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a list of the peripherals connected to the system whose services match a given set of criteria.

## Declaration

```swift
func retrieveConnectedPeripherals(withServices serviceUUIDs: [CBUUID]) -> [CBPeripheral]
```

## Parameters

- `serviceUUIDs`: A list of service UUIDs, represented by [CBUUID](../cbuuid.md) objects.

<a id="return-value"></a>

## Return Value

A list of the peripherals that are currently connected to the system and that contain any of the services specified in the `serviceUUID` parameter.

<a id="Discussion"></a>

## Discussion

The list of connected peripherals can include those that other apps have connected. You need to connect these peripherals locally using the [connect(\_:options:)](connect%28__options_%29.md) method before using them.

## See Also

### Retrieving Lists of Peripherals

- [retrievePeripherals(withIdentifiers:)](retrieveperipherals%28withidentifiers_%29.md): Returns a list of known peripherals by their identifiers.

# retrieveConnectedPeripheralsWithServices: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a list of the peripherals connected to the system whose services match a given set of criteria.

## Declaration

```objectivec
- (NSArray<CBPeripheral *> *) retrieveConnectedPeripheralsWithServices:(NSArray<CBUUID *> *) serviceUUIDs;
```

## Parameters

- `serviceUUIDs`: A list of service UUIDs, represented by [CBUUID](../cbuuid.md) objects.

<a id="return-value"></a>

## Return Value

A list of the peripherals that are currently connected to the system and that contain any of the services specified in the `serviceUUID` parameter.

<a id="Discussion"></a>

## Discussion

The list of connected peripherals can include those that other apps have connected. You need to connect these peripherals locally using the [connectPeripheral:options:](connect%28__options_%29.md) method before using them.

## See Also

### Retrieving Lists of Peripherals

- [retrievePeripheralsWithIdentifiers:](retrieveperipherals%28withidentifiers_%29.md): Returns a list of known peripherals by their identifiers.
