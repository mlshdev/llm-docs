> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar/supportedchargingconnectors](https://developer.apple.com/documentation/intents/incar/supportedchargingconnectors)

# supportedChargingConnectors (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The charging connectors that the electric vehicle supports.

## Declaration

```swift
var supportedChargingConnectors: [INCar.ChargingConnectorType] { get }
```

## See Also

### Getting the Car’s Supported Charging Connectors

- [INCar.ChargingConnectorType](chargingconnectortype.md): Constants that describe the available charging connector types.

# supportedChargingConnectors (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The charging connectors that the electric vehicle supports.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * supportedChargingConnectors;
```

```objectivec
@property (atomic, copy, readonly) NSArray<NSString *> * supportedChargingConnectors;
```

## See Also

### Getting the Car’s Supported Charging Connectors

- [INCarChargingConnectorType](chargingconnectortype.md): Constants that describe the available charging connector types.
