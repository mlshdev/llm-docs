> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/currentbatterycapacity](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/currentbatterycapacity)

# currentBatteryCapacity (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A user-facing value that represents the current battery capacity of the electric vehicle.

## Declaration

```swift
var currentBatteryCapacity: Measurement<UnitEnergy>? { get set }
```

<a id="Discussion"></a>

## Discussion

The value the system displays to the user as the current percentage of battery charge. It must always be within the range of `minBatteryCapacity` and `maxBatteryCapacity`.

## See Also

### Providing Battery Capacity

- [minimumBatteryCapacity](minimumbatterycapacity.md): A user-facing value that represents the minimum battery capacity of the electric vehicle.
- [maximumBatteryCapacity](maximumbatterycapacity.md): A user-facing value that represents the maximum battery capacity of the electric vehicle.

# currentBatteryCapacity (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A user-facing value that represents the current battery capacity of the electric vehicle.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSMeasurement<NSUnitEnergy *> * currentBatteryCapacity;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSMeasurement<NSUnitEnergy *> * currentBatteryCapacity;
```

<a id="Discussion"></a>

## Discussion

The value the system displays to the user as the current percentage of battery charge. It must always be within the range of `minBatteryCapacity` and `maxBatteryCapacity`.

## See Also

### Providing Battery Capacity

- [minimumBatteryCapacity](minimumbatterycapacity.md): A user-facing value that represents the minimum battery capacity of the electric vehicle.
- [maximumBatteryCapacity](maximumbatterycapacity.md): A user-facing value that represents the maximum battery capacity of the electric vehicle.
