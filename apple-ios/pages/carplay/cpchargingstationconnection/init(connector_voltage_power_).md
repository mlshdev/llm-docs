> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpchargingstationconnection/init(connector:voltage:power:)

# init(connector:voltage:power:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
init(connector: CPChargingStationConnection.Connector, voltage: Measurement<UnitElectricPotentialDifference>, power: Measurement<UnitPower>)
```

# initWithConnector:voltage:power: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
- (instancetype) initWithConnector:(CPChargingStationConnectionConnector) connector voltage:(NSMeasurement<NSUnitElectricPotentialDifference *> *) voltage power:(NSMeasurement<NSUnitPower *> *) power;
```
