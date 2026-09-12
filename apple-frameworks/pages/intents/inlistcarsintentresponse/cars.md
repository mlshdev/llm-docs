> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistcarsintentresponse/cars](https://developer.apple.com/documentation/intents/inlistcarsintentresponse/cars)

# cars (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

An array of the user’s electric vehicles.

## Declaration

```swift
var cars: [INCar]? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to an array of [INCar](../incar.md) objects that represents the user’s electric vehicles. Maps requires these vehicles to respond to [INGetCarPowerLevelStatusIntent](../ingetcarpowerlevelstatusintent.md) requests so that it can use them during route planning and navigation.

## See Also

### Providing a List of Cars

- [INCar](../incar.md): A specific electric vehicle that Maps uses during route planning and navigation.

# cars (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

An array of the user’s electric vehicles.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INCar *> * cars;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INCar *> * cars;
```

<a id="Discussion"></a>

## Discussion

Set this property to an array of [INCar](../incar.md) objects that represents the user’s electric vehicles. Maps requires these vehicles to respond to [INGetCarPowerLevelStatusIntent](../ingetcarpowerlevelstatusintent.md) requests so that it can use them during route planning and navigation.

## See Also

### Providing a List of Cars

- [INCar](../incar.md): A specific electric vehicle that Maps uses during route planning and navigation.
