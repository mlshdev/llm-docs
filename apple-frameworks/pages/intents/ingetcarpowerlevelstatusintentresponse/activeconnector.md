> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/activeconnector](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/activeconnector)

# activeConnector (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The type of connector that’s currently delivering charge to the electric vehicle’s battery.

## Declaration

```swift
var activeConnector: INCar.ChargingConnectorType? { get set }
```

<a id="Discussion"></a>

## Discussion

If [charging](charging-6xnqj.md) is [true](https://developer.apple.com/documentation/swift/true), set this property to the connector type that’s currently delivering charge to the vehicle. The [supportedChargingConnectors](../incar/supportedchargingconnectors.md) array of the corresponding [INCar](../incar.md) object must contain the value you use.

## See Also

### Providing the Charge Status

- [charging](charging-6xnqj.md): A Boolean value that indicates whether the electric vehicle is currently charging.
- [minutesToFull](minutestofull-2kbt6.md): The number of minutes it takes to fully charge the electric vehicle’s battery.
- [dateOfLastStateUpdate](dateoflaststateupdate.md): A timestamp that indicates the most recent charge status for the electric vehicle.

# activeConnector (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The type of connector that’s currently delivering charge to the electric vehicle’s battery.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INCarChargingConnectorType activeConnector;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INCarChargingConnectorType activeConnector;
```

<a id="Discussion"></a>

## Discussion

If [charging](charging-6xnqj.md) is [true](https://developer.apple.com/documentation/swift/true), set this property to the connector type that’s currently delivering charge to the vehicle. The [supportedChargingConnectors](../incar/supportedchargingconnectors.md) array of the corresponding [INCar](../incar.md) object must contain the value you use.

## See Also

### Providing the Charge Status

- [charging](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/charging-7aamu): A Boolean value that indicates whether the electric vehicle is currently charging.
- [minutesToFull](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/minutestofull-25vcb): The number of minutes it will take to fully charge the electric vehicle’s battery.
- [dateOfLastStateUpdate](dateoflaststateupdate.md): A timestamp that indicates the most recent charge status for the electric vehicle.
