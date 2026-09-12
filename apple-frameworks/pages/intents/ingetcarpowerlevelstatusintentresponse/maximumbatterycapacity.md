> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/maximumbatterycapacity](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/maximumbatterycapacity)

# maximumBatteryCapacity (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A user-facing value that represents the maximum battery capacity of the electric vehicle.

## Declaration

```swift
var maximumBatteryCapacity: Measurement<UnitEnergy>? { get set }
```

<a id="Discussion"></a>

## Discussion

The value the system displays to the user as 100% battery charge. It can never be less than that of [currentBatteryCapacity](currentbatterycapacity.md).

## See Also

### Providing Battery Capacity

- [minimumBatteryCapacity](minimumbatterycapacity.md): A user-facing value that represents the minimum battery capacity of the electric vehicle.
- [currentBatteryCapacity](currentbatterycapacity.md): A user-facing value that represents the current battery capacity of the electric vehicle.

# maximumBatteryCapacity (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A user-facing value that represents the maximum battery capacity of the electric vehicle.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSMeasurement<NSUnitEnergy *> * maximumBatteryCapacity;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSMeasurement<NSUnitEnergy *> * maximumBatteryCapacity;
```

<a id="Discussion"></a>

## Discussion

The value the system displays to the user as 100% battery charge. It can never be less than that of [currentBatteryCapacity](currentbatterycapacity.md).

## See Also

### Providing Battery Capacity

- [minimumBatteryCapacity](minimumbatterycapacity.md): A user-facing value that represents the minimum battery capacity of the electric vehicle.
- [currentBatteryCapacity](currentbatterycapacity.md): A user-facing value that represents the current battery capacity of the electric vehicle.
