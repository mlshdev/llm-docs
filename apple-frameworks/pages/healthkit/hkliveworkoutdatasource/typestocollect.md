> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutdatasource/typestocollect](https://developer.apple.com/documentation/healthkit/hkliveworkoutdatasource/typestocollect)

# typesToCollect (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

The quantity type samples that the data source automatically sends to the workout builder.

## Declaration

```swift
var typesToCollect: Set<HKQuantityType> { get }
```

<a id="Discussion"></a>

## Discussion

The workout builder automatically collects the listed data types. The available data types vary depending on platform, the person’s settings and the workout configuration, and can include types like [basalEnergyBurned](../hkquantitytypeidentifier/basalenergyburned.md), [activeEnergyBurned](../hkquantitytypeidentifier/activeenergyburned.md), [heartRate](../hkquantitytypeidentifier/heartrate.md), [distanceWalkingRunning](../hkquantitytypeidentifier/distancewalkingrunning.md), [distanceCycling](../hkquantitytypeidentifier/distancecycling.md), [distanceSwimming](../hkquantitytypeidentifier/distanceswimming.md), or [distanceWheelchair](../hkquantitytypeidentifier/distancewheelchair.md).

Some datatypes require you to support an external sensor like [heartRate](../hkquantitytypeidentifier/heartrate.md) on iPhone and iPad and cycling power and cycling cadence on Apple Watch. Once a person pairs a device, HealthKit handles getting the data from the device and saving it as samples to the Health Store, making it available to your app.

To monitor this data, add a delegate to the session’s [HKLiveWorkoutBuilder](../hkliveworkoutbuilder.md) object, and implement its [workoutBuilder(\_:didCollectDataOf:)](../hkliveworkoutbuilderdelegate/workoutbuilder%28__didcollectdataof_%29.md) method.

## See Also

### Creating a live data source

- [init(healthStore:workoutConfiguration:)](init%28healthstore_workoutconfiguration_%29.md): Creates a new data source based on the provided workout configuration.

# typesToCollect (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

The quantity type samples that the data source automatically sends to the workout builder.

## Declaration

```objectivec
@property (copy, readonly) NSSet<HKQuantityType *> * typesToCollect;
```

<a id="Discussion"></a>

## Discussion

The workout builder automatically collects the listed data types. The available data types vary depending on platform, the person’s settings and the workout configuration, and can include types like [HKQuantityTypeIdentifierBasalEnergyBurned](../hkquantitytypeidentifier/basalenergyburned.md), [HKQuantityTypeIdentifierActiveEnergyBurned](../hkquantitytypeidentifier/activeenergyburned.md), [HKQuantityTypeIdentifierHeartRate](../hkquantitytypeidentifier/heartrate.md), [HKQuantityTypeIdentifierDistanceWalkingRunning](../hkquantitytypeidentifier/distancewalkingrunning.md), [HKQuantityTypeIdentifierDistanceCycling](../hkquantitytypeidentifier/distancecycling.md), [HKQuantityTypeIdentifierDistanceSwimming](../hkquantitytypeidentifier/distanceswimming.md), or [HKQuantityTypeIdentifierDistanceWheelchair](../hkquantitytypeidentifier/distancewheelchair.md).

Some datatypes require you to support an external sensor like [HKQuantityTypeIdentifierHeartRate](../hkquantitytypeidentifier/heartrate.md) on iPhone and iPad and cycling power and cycling cadence on Apple Watch. Once a person pairs a device, HealthKit handles getting the data from the device and saving it as samples to the Health Store, making it available to your app.

To monitor this data, add a delegate to the session’s [HKLiveWorkoutBuilder](../hkliveworkoutbuilder.md) object, and implement its [workoutBuilder:didCollectDataOfTypes:](../hkliveworkoutbuilderdelegate/workoutbuilder%28__didcollectdataof_%29.md) method.

## See Also

### Creating a live data source

- [initWithHealthStore:workoutConfiguration:](init%28healthstore_workoutconfiguration_%29.md): Creates a new data source based on the provided workout configuration.
