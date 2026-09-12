> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar/init(caridentifier:displayname:year:make:model:color:headunit:supportedchargingconnectors:)](https://developer.apple.com/documentation/intents/incar/init(caridentifier:displayname:year:make:model:color:headunit:supportedchargingconnectors:))

# init(carIdentifier:displayName:year:make:model:color:headUnit:supportedChargingConnectors:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a car object with the specified attributes, head unit, and supported charging connectors.

## Declaration

```swift
init(carIdentifier: String, displayName: String?, year: String?, make: String?, model: String?, color: CGColor?, headUnit: INCar.HeadUnit?, supportedChargingConnectors: [INCar.ChargingConnectorType])
```

## Parameters

- `carIdentifier`: A unique identifier for the electric vehicle.
- `displayName`: A user-defined name for the electric vehicle that the system displays.
- `year`: The year of the electric vehicle’s manufacture.
- `make`: The electric vehicle’s manufacturer. Maps displays this value when it presents information about the electric vehicle.
- `model`: The manufacturer’s model name for the electric vehicle. Maps displays this value when it presents information about the electric vehicle.
- `color`: The color of the electric vehicle.
- `headUnit`: An instance of [INCar.HeadUnit](headunit-swift.class.md) that contains the Bluetooth and iAP2 identifiers of the electric vehicle’s physical head unit.
- `supportedChargingConnectors`: An array of the electric vehicle’s supported charging connectors.

<a id="Discussion"></a>

## Discussion

The `carIdentifier` is a unique value that your app provides, and must not be the vehicle’s VIN or equivilent identifier. For the best user experience—and to prevent orphaned or duplicate vehicles in the user’s My Vehicles collection—your app must always provide the same identifier for the same vehicle.

Use `carIdentifier` when handling [INGetCarPowerLevelStatusIntent](../ingetcarpowerlevelstatusintent.md) requests so that the response can match the appropriate vehicle in the user’s Virtual Garage.

# initWithCarIdentifier:displayName:year:make:model:color:headUnit:supportedChargingConnectors: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a car object with the specified attributes, head unit, and supported charging connectors.

## Declaration

```objectivec
- (instancetype) initWithCarIdentifier:(NSString *) carIdentifier displayName:(NSString *) displayName year:(NSString *) year make:(NSString *) make model:(NSString *) model color:(CGColorRef) color headUnit:(INCarHeadUnit *) headUnit supportedChargingConnectors:(NSArray<NSString *> *) supportedChargingConnectors;
```

## Parameters

- `carIdentifier`: A unique identifier for the electric vehicle.
- `displayName`: A user-defined name for the electric vehicle that the system displays.
- `year`: The year of the electric vehicle’s manufacture.
- `make`: The electric vehicle’s manufacturer. Maps displays this value when it presents information about the electric vehicle.
- `model`: The manufacturer’s model name for the electric vehicle. Maps displays this value when it presents information about the electric vehicle.
- `color`: The color of the electric vehicle.
- `headUnit`: An instance of [INCarHeadUnit](headunit-swift.class.md) that contains the Bluetooth and iAP2 identifiers of the electric vehicle’s physical head unit.
- `supportedChargingConnectors`: An array of the electric vehicle’s supported charging connectors.

<a id="Discussion"></a>

## Discussion

The `carIdentifier` is a unique value that your app provides, and must not be the vehicle’s VIN or equivilent identifier. For the best user experience—and to prevent orphaned or duplicate vehicles in the user’s My Vehicles collection—your app must always provide the same identifier for the same vehicle.

Use `carIdentifier` when handling [INGetCarPowerLevelStatusIntent](../ingetcarpowerlevelstatusintent.md) requests so that the response can match the appropriate vehicle in the user’s Virtual Garage.
