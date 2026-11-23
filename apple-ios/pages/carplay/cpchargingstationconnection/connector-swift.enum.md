> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpchargingstationconnection/connector-swift.enum

# CPChargingStationConnection.Connector (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Constants for the connector types available at charging stations.

## Declaration

```swift
enum Connector
```

## Topics

### Enumeration Cases

- [CPChargingStationConnection.Connector.ccs1](connector-swift.enum/ccs1.md): A combined charging system 1 (CCS1) connector.
- [CPChargingStationConnection.Connector.ccs2](connector-swift.enum/ccs2.md): A combined charging system 2 (CCS2) connector.
- [CPChargingStationConnection.Connector.chaDeMo](connector-swift.enum/chademo.md): A CHAdeMO connector with direct current.
- [CPChargingStationConnection.Connector.gbtAC](connector-swift.enum/gbtac.md): A GB/T connector with alternating current.
- [CPChargingStationConnection.Connector.gbtDC](connector-swift.enum/gbtdc.md): A GB/T connector with direct current.
- [CPChargingStationConnection.Connector.j1772](connector-swift.enum/j1772.md): A J1772 connector with alternating current.
- [CPChargingStationConnection.Connector.mennekes](connector-swift.enum/mennekes.md): A Mennekes connector.
- [CPChargingStationConnection.Connector.nacsAC](connector-swift.enum/nacsac.md): A NACS connector with alternating current.
- [CPChargingStationConnection.Connector.nacsDC](connector-swift.enum/nacsdc.md): A NACS connector with direct current.

### Initializers

- [init(rawValue:)](connector-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the connector information

- [connector](connector-swift.property.md): The type of connector the station provides for vehicles.
- [voltage](voltage.md): The supported voltage level at the charging station.
- [power](power.md): The supported power level at the charging station.

# CPChargingStationConnectionConnector (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Constants for the connector types available at charging stations.

## Declaration

```objectivec
enum CPChargingStationConnectionConnector : NSInteger;
```

## Topics

### Enumeration Cases

- [CPChargingStationConnectionConnectorCCS1](connector-swift.enum/ccs1.md): A combined charging system 1 (CCS1) connector.
- [CPChargingStationConnectionConnectorCCS2](connector-swift.enum/ccs2.md): A combined charging system 2 (CCS2) connector.
- [CPChargingStationConnectionConnectorCHAdeMO](connector-swift.enum/chademo.md): A CHAdeMO connector with direct current.
- [CPChargingStationConnectionConnectorGBTAC](connector-swift.enum/gbtac.md): A GB/T connector with alternating current.
- [CPChargingStationConnectionConnectorGBTDC](connector-swift.enum/gbtdc.md): A GB/T connector with direct current.
- [CPChargingStationConnectionConnectorJ1772](connector-swift.enum/j1772.md): A J1772 connector with alternating current.
- [CPChargingStationConnectionConnectorMennekes](connector-swift.enum/mennekes.md): A Mennekes connector.
- [CPChargingStationConnectionConnectorNACSAC](connector-swift.enum/nacsac.md): A NACS connector with alternating current.
- [CPChargingStationConnectionConnectorNACSDC](connector-swift.enum/nacsdc.md): A NACS connector with direct current.

## See Also

### Getting the connector information

- [connector](connector-swift.property.md): The type of connector the station provides for vehicles.
- [voltage](voltage.md): The supported voltage level at the charging station.
- [power](power.md): The supported power level at the charging station.
