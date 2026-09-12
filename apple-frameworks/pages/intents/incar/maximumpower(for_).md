> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar/maximumpower(for:)](https://developer.apple.com/documentation/intents/incar/maximumpower(for:))

# maximumPower(for:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Gets the maximum power for a specific type of charging connector.

## Declaration

```swift
func maximumPower(for chargingConnectorType: INCar.ChargingConnectorType) -> Measurement<UnitPower>?
```

## Parameters

- `chargingConnectorType`: The type of charging connector to query for its maximum power. See [INCar.ChargingConnectorType](chargingconnectortype.md) for the types of charging connectors the system supports.

<a id="return-value"></a>

## Return Value

The maximum power in watts for the charging connector, or `nil` if you haven’t set a value using [setMaximumPower(\_:for:)](setmaximumpower%28__for_%29.md).

## See Also

### Providing a Charging Connector’s Maximum Power

- [setMaximumPower(\_:for:)](setmaximumpower%28__for_%29.md): Sets the maximum power for a specific type of charging connector.

# maximumPowerForChargingConnectorType: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Gets the maximum power for a specific type of charging connector.

## Declaration

```objectivec
- (NSMeasurement<NSUnitPower *> *) maximumPowerForChargingConnectorType:(INCarChargingConnectorType) chargingConnectorType;
```

## Parameters

- `chargingConnectorType`: The type of charging connector to query for its maximum power. See [INCarChargingConnectorType](chargingconnectortype.md) for the types of charging connectors the system supports.

<a id="return-value"></a>

## Return Value

The maximum power in watts for the charging connector, or `nil` if you haven’t set a value using [setMaximumPower:forChargingConnectorType:](setmaximumpower%28__for_%29.md).

## See Also

### Providing a Charging Connector’s Maximum Power

- [setMaximumPower:forChargingConnectorType:](setmaximumpower%28__for_%29.md): Sets the maximum power for a specific type of charging connector.
