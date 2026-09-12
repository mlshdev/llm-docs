> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar/chargingconnectortype](https://developer.apple.com/documentation/intents/incar/chargingconnectortype)

# INCar.ChargingConnectorType (Swift)

**Framework:** Intents  
**Kind:** Structure

Constants that describe the available charging connector types.

## Declaration

```swift
struct ChargingConnectorType
```

## Topics

### Creating a Charging Connector Type

- [init(rawValue:)](chargingconnectortype/init%28rawvalue_%29.md): Creates a charging connector type using the provided string.

### Charging Connector Types

- [ccs1](chargingconnectortype/ccs1.md): The CCS1 charging connector type.
- [ccs2](chargingconnectortype/ccs2.md): The CCS2 charging connector type.
- [chaDeMo](chargingconnectortype/chademo.md): The CHAdeMO charging connector type.
- [gbtAC](chargingconnectortype/gbtac.md): The GB/T AC charging connector type for alternating current.
- [gbtDC](chargingconnectortype/gbtdc.md): The GB/T DC charging connector type for direct current.
- [j1772](chargingconnectortype/j1772.md): The J1772 charging connector type.
- [mennekes](chargingconnectortype/mennekes.md): The Mennekes charging connector type.
- [tesla](chargingconnectortype/tesla.md): Deprecated. The charging connector type for Tesla electric vehicles.

### Type Properties

- [nacsAC](chargingconnectortype/nacsac.md)
- [nacsDC](chargingconnectortype/nacsdc.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Car’s Supported Charging Connectors

- [supportedChargingConnectors](supportedchargingconnectors.md): The charging connectors that the electric vehicle supports.

# INCarChargingConnectorType (Objective-C)

**Framework:** Intents  
**Kind:** Type Alias

Constants that describe the available charging connector types.

## Declaration

```objectivec
typedef NSString * INCarChargingConnectorType;
```

## Topics

### Charging Connector Types

- [INCarChargingConnectorTypeCCS1](chargingconnectortype/ccs1.md): The CCS1 charging connector type.
- [INCarChargingConnectorTypeCCS2](chargingconnectortype/ccs2.md): The CCS2 charging connector type.
- [INCarChargingConnectorTypeCHAdeMO](chargingconnectortype/chademo.md): The CHAdeMO charging connector type.
- [INCarChargingConnectorTypeGBTAC](chargingconnectortype/gbtac.md): The GB/T AC charging connector type for alternating current.
- [INCarChargingConnectorTypeGBTDC](chargingconnectortype/gbtdc.md): The GB/T DC charging connector type for direct current.
- [INCarChargingConnectorTypeJ1772](chargingconnectortype/j1772.md): The J1772 charging connector type.
- [INCarChargingConnectorTypeMennekes](chargingconnectortype/mennekes.md): The Mennekes charging connector type.
- [INCarChargingConnectorTypeTesla](chargingconnectortype/tesla.md): Deprecated. The charging connector type for Tesla electric vehicles.

## See Also

### Getting the Car’s Supported Charging Connectors

- [supportedChargingConnectors](supportedchargingconnectors.md): The charging connectors that the electric vehicle supports.
