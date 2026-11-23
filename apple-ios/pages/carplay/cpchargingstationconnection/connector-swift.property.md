> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpchargingstationconnection/connector-swift.property

# connector (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The type of connector the station provides for vehicles.

## Declaration

```swift
var connector: CPChargingStationConnection.Connector { get }
```

## See Also

### Getting the connector information

- [voltage](voltage.md): The supported voltage level at the charging station.
- [power](power.md): The supported power level at the charging station.
- [CPChargingStationConnection.Connector](connector-swift.enum.md): Constants for the connector types available at charging stations.

# connector (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The type of connector the station provides for vehicles.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CPChargingStationConnectionConnector connector;
```

## See Also

### Getting the connector information

- [voltage](voltage.md): The supported voltage level at the charging station.
- [power](power.md): The supported power level at the charging station.
- [CPChargingStationConnectionConnector](connector-swift.enum.md): Constants for the connector types available at charging stations.
