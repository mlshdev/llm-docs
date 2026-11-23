> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpchargingstationconnection/power

# power (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The supported power level at the charging station.

## Declaration

```swift
var power: Measurement<UnitPower> { get }
```

## See Also

### Getting the connector information

- [connector](connector-swift.property.md): The type of connector the station provides for vehicles.
- [voltage](voltage.md): The supported voltage level at the charging station.
- [CPChargingStationConnection.Connector](connector-swift.enum.md): Constants for the connector types available at charging stations.

# power (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The supported power level at the charging station.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSMeasurement<NSUnitPower *> * power;
```

## See Also

### Getting the connector information

- [connector](connector-swift.property.md): The type of connector the station provides for vehicles.
- [voltage](voltage.md): The supported voltage level at the charging station.
- [CPChargingStationConnectionConnector](connector-swift.enum.md): Constants for the connector types available at charging stations.
