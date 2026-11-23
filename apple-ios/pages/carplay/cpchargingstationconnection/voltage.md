> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpchargingstationconnection/voltage

# voltage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The supported voltage level at the charging station.

## Declaration

```swift
var voltage: Measurement<UnitElectricPotentialDifference> { get }
```

<a id="discussion"></a>

## Discussion

Voltage levels determine whether the station supports fast charging of vehicles. For example, a station that supports 240 volts or higher allows someone to charge their vehicle more quickly.

## See Also

### Getting the connector information

- [connector](connector-swift.property.md): The type of connector the station provides for vehicles.
- [power](power.md): The supported power level at the charging station.
- [CPChargingStationConnection.Connector](connector-swift.enum.md): Constants for the connector types available at charging stations.

# voltage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The supported voltage level at the charging station.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSMeasurement<NSUnitElectricPotentialDifference *> * voltage;
```

<a id="discussion"></a>

## Discussion

Voltage levels determine whether the station supports fast charging of vehicles. For example, a station that supports 240 volts or higher allows someone to charge their vehicle more quickly.

## See Also

### Getting the connector information

- [connector](connector-swift.property.md): The type of connector the station provides for vehicles.
- [power](power.md): The supported power level at the charging station.
- [CPChargingStationConnectionConnector](connector-swift.enum.md): Constants for the connector types available at charging stations.
