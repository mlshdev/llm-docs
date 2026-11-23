> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpchargingstationconnection/init(connector:voltage:power:)

# init(connector:voltage:power:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a charging station connection object with information about a specific charging configuration.

## Declaration

```swift
init(connector: CPChargingStationConnection.Connector, voltage: Measurement<UnitElectricPotentialDifference>, power: Measurement<UnitPower>)
```

## Parameters

- `connector`: The type of connector available at the charging station.
- `voltage`: The voltage the connector supplies to the vehicle.
- `power`: The amount of power the plug delivers to the vehicle.

<a id="return-value"></a>

## Return Value

An initialized charging station connection object.

<a id="discussion"></a>

## Discussion

Create one or more `CPChargingStationConnection` objects to represent the primary configurations available at the charging station.

## See Also

### Creating a charging station connection

- [init(coder:)](init%28coder_%29.md)

# initWithConnector:voltage:power: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a charging station connection object with information about a specific charging configuration.

## Declaration

```objectivec
- (instancetype) initWithConnector:(CPChargingStationConnectionConnector) connector voltage:(NSMeasurement<NSUnitElectricPotentialDifference *> *) voltage power:(NSMeasurement<NSUnitPower *> *) power;
```

## Parameters

- `connector`: The type of connector available at the charging station.
- `voltage`: The voltage the connector supplies to the vehicle.
- `power`: The amount of power the plug delivers to the vehicle.

<a id="return-value"></a>

## Return Value

An initialized charging station connection object.

<a id="discussion"></a>

## Discussion

Create one or more `CPChargingStationConnection` objects to represent the primary configurations available at the charging station.
