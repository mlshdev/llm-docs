> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar/setmaximumpower(_:for:)](https://developer.apple.com/documentation/intents/incar/setmaximumpower(_:for:))

# setMaximumPower(\_:for:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets the maximum power for a specific type of charging connector.

## Declaration

```swift
func setMaximumPower(_ power: Measurement<UnitPower>, for chargingConnectorType: INCar.ChargingConnectorType)
```

## Parameters

- `power`: The maximum power in watts that the charging connector supports.
- `chargingConnectorType`: The type of charging connector to update. See [INCar.ChargingConnectorType](chargingconnectortype.md) for the types of charging connectors the system supports.

<a id="Discussion"></a>

## Discussion

Call this method for each type of charging connector the electric vehicle supports.

## See Also

### Providing a Charging Connector’s Maximum Power

- [maximumPower(for:)](maximumpower%28for_%29.md): Gets the maximum power for a specific type of charging connector.

# setMaximumPower:forChargingConnectorType: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets the maximum power for a specific type of charging connector.

## Declaration

```objectivec
- (void) setMaximumPower:(NSMeasurement<NSUnitPower *> *) power forChargingConnectorType:(INCarChargingConnectorType) chargingConnectorType;
```

## Parameters

- `power`: The maximum power in watts that the charging connector supports.
- `chargingConnectorType`: The type of charging connector to update. See [INCarChargingConnectorType](chargingconnectortype.md) for the types of charging connectors the system supports.

<a id="Discussion"></a>

## Discussion

Call this method for each type of charging connector the electric vehicle supports.

## See Also

### Providing a Charging Connector’s Maximum Power

- [maximumPowerForChargingConnectorType:](maximumpower%28for_%29.md): Gets the maximum power for a specific type of charging connector.
