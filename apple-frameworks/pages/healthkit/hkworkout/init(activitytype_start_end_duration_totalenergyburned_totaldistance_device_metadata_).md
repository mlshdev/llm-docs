> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout/init(activitytype:start:end:duration:totalenergyburned:totaldistance:device:metadata:)](https://developer.apple.com/documentation/healthkit/hkworkout/init(activitytype:start:end:duration:totalenergyburned:totaldistance:device:metadata:))

# init(activityType:start:end:duration:totalEnergyBurned:totalDistance:device:metadata:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 17.0) · iPadOS 9.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 10.0)

Instantiates a new workout activity that includes the device that produced the sample data.

> Use HKWorkoutBuilder

## Declaration

```swift
convenience init(activityType workoutActivityType: HKWorkoutActivityType, start startDate: Date, end endDate: Date, duration: TimeInterval, totalEnergyBurned: HKQuantity?, totalDistance: HKQuantity?, device: HKDevice?, metadata: [String : Any]?)
```

## Parameters

- `workoutActivityType`: The type of activity performed during the workout. For a complete list of activity types, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).
- `startDate`: The date and time when the activity started.
- `endDate`: The date and time when the activity ended. This date must be equal to or later than the start date.
- `duration`: A time interval representing the workout’s actual duration. Passing a nonzero value sets the workout’s [duration](duration.md) property. If you pass 0, this method calculates the [duration](duration.md) property based on the workout’s start and end dates.
- `totalEnergyBurned`: A quantity using energy units, or `nil`. This property sets the workout’s [totalEnergyBurned](totalenergyburned.md) property. It represents the total active energy burned during the workout.
- `totalDistance`: A quantity using length units, or `nil`. This property sets the workout’s [totalDistance](totaldistance.md) property.
- `device`: The device that generated the data for this sample.
- `metadata`: The metadata dictionary contains extra information describing this workout. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects . The values may be [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see Metadata Keys.

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the workout’s capabilities.

<a id="return-value"></a>

## Return Value

A workout object with the provided duration, total energy burned, total distance, device, and metadata properties. The [workoutEvents](workoutevents.md) property is set to `nil`.

<a id="Discussion"></a>

## Discussion

This method returns a workout with the specified duration, total energy burned, total distance, device, and metadata. The [workoutEvents](workoutevents.md) property is set to `nil`.

If the total energy burned or total distance are non-zero values, create a set of corresponding samples that add up to the calculated totals. Associate these samples with the workout by calling the health store’s [add(\_:to:completion:)](../hkhealthstore/add%28__to_completion_%29.md) method.

**Swift**

```swift
let distance = HKQuantity(unit: HKUnit.mileUnit(), doubleValue: 5.2)
let energyBurned = HKQuantity(unit: HKUnit.kilocalorieUnit(), doubleValue: 259.0)
 
let device = HKDevice(name: deviceName,
                      manufacturer: manufacturerName,
                      model: modelName,
                      hardwareVersion: hardwareVersionNumber,
                      firmwareVersion: firmwareVersionNumber,
                      softwareVersion: softwareVersionNumber,
                      localIdentifier: localIdentifier,
                      UDIDeviceIdentifier: deviceIdentifier)
 
let metadata = [HKMetadataKeyIndoorWorkout:false]
 
let hike = HKWorkout(activityType: HKWorkoutActivityType.Hiking, startDate: start, endDate: end, duration: 9000, totalEnergyBurned: energyBurned, totalDistance: distance, device: device, metadata: metadata)
 
healthStore.saveObject(hike) { (success, error) -> Void in
    
    guard success else {
        // Perform proper error handling here...
        fatalError("*** An error occurred while saving this " +
            "workout: \(error?.localizedDescription)")
    }
}
```

**Objective-C**

```objc
 
HKQuantity *distance = [HKQuantity quantityWithUnit:[HKUnit mileUnit]
                                        doubleValue:5.2];
 
HKQuantity *energyBurned = [HKQuantity quantityWithUnit:[HKUnit kilocalorieUnit]
                                            doubleValue:259.0];
 
HKDevice *device = [[HKDevice alloc] initWithName:deviceName
                                     manufacturer:manufacturerName
                                            model:modelName
                                  hardwareVersion:hardwareVersionNumber
                                  firmwareVersion:firmwareVersionNumber
                                  softwareVersion:softwareVersionNumber
                                  localIdentifier:localIdentifier
                              UDIDeviceIdentifier:deviceIdentifier];
 
NSDictionary *metadata = @{HKMetadataKeyIndoorWorkout: @(NO)};
 
HKWorkout *hike = [HKWorkout workoutWithActivityType:HKWorkoutActivityTypeHiking
                                           startDate:start
                                             endDate:end
                                            duration:9000
                                   totalEnergyBurned:energyBurned
                                       totalDistance:distance
                                              device:device
                                            metadata:metadata];
 
[self.healthStore
 saveObject:hike
 withCompletion:^(BOOL success, NSError *error) {
 
     if (!success) {
         // Perform proper error handling here...
         NSLog(@"*** An error occurred while saving this "
               @"workout: %@ ***", error.localizedDescription);
 
         abort();
     }
 
 }];
```

## See Also

### Related Documentation

- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [duration](duration.md): The workout’s duration.
- [metadata](../hkobject/metadata.md): The metadata for this HealthKit object.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [workoutEvents](workoutevents.md): An array of workout event objects.

### Creating workouts

- [init(activityType:start:end:)](init%28activitytype_start_end_%29.md): Deprecated. Instantiates a new workout.
- [init(activityType:start:end:duration:totalEnergyBurned:totalDistance:metadata:)](init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout that includes the energy burned, distance, and metadata for the workout.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:metadata:)](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout whose duration is calculated based on the start and end dates and the provided workout events.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:device:metadata:)](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated. Instantiates a workout that includes both workout events and the device that produced the sample data.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:totalFlightsClimbed:device:metadata:)](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalflightsclimbed_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of flights of stairs climbed.
- [init(activityType:start:end:workoutEvents:totalEnergyBurned:totalDistance:totalSwimmingStrokeCount:device:metadata:)](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalswimmingstrokecount_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of strokes while swimming.

# workoutWithActivityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:device:metadata: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 17.0) · iPadOS 9.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 16.0) · macOS 13.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 10.0)

Instantiates a new workout activity that includes the device that produced the sample data.

> Use HKWorkoutBuilder

## Declaration

```objectivec
+ (instancetype) workoutWithActivityType:(HKWorkoutActivityType) workoutActivityType startDate:(NSDate *) startDate endDate:(NSDate *) endDate duration:(NSTimeInterval) duration totalEnergyBurned:(HKQuantity *) totalEnergyBurned totalDistance:(HKQuantity *) totalDistance device:(HKDevice *) device metadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `workoutActivityType`: The type of activity performed during the workout. For a complete list of activity types, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).
- `startDate`: The date and time when the activity started.
- `endDate`: The date and time when the activity ended. This date must be equal to or later than the start date.
- `duration`: A time interval representing the workout’s actual duration. Passing a nonzero value sets the workout’s [duration](duration.md) property. If you pass 0, this method calculates the [duration](duration.md) property based on the workout’s start and end dates.
- `totalEnergyBurned`: A quantity using energy units, or `nil`. This property sets the workout’s [totalEnergyBurned](totalenergyburned.md) property. It represents the total active energy burned during the workout.
- `totalDistance`: A quantity using length units, or `nil`. This property sets the workout’s [totalDistance](totaldistance.md) property.
- `device`: The device that generated the data for this sample.
- `metadata`: The metadata dictionary contains extra information describing this workout. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects . The values may be [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see Metadata Keys.

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the workout’s capabilities.

<a id="return-value"></a>

## Return Value

A workout object with the provided duration, total energy burned, total distance, device, and metadata properties. The [workoutEvents](workoutevents.md) property is set to `nil`.

<a id="Discussion"></a>

## Discussion

This method returns a workout with the specified duration, total energy burned, total distance, device, and metadata. The [workoutEvents](workoutevents.md) property is set to `nil`.

If the total energy burned or total distance are non-zero values, create a set of corresponding samples that add up to the calculated totals. Associate these samples with the workout by calling the health store’s [addSamples:toWorkout:completion:](../hkhealthstore/add%28__to_completion_%29.md) method.

**Swift**

```swift
let distance = HKQuantity(unit: HKUnit.mileUnit(), doubleValue: 5.2)
let energyBurned = HKQuantity(unit: HKUnit.kilocalorieUnit(), doubleValue: 259.0)
 
let device = HKDevice(name: deviceName,
                      manufacturer: manufacturerName,
                      model: modelName,
                      hardwareVersion: hardwareVersionNumber,
                      firmwareVersion: firmwareVersionNumber,
                      softwareVersion: softwareVersionNumber,
                      localIdentifier: localIdentifier,
                      UDIDeviceIdentifier: deviceIdentifier)
 
let metadata = [HKMetadataKeyIndoorWorkout:false]
 
let hike = HKWorkout(activityType: HKWorkoutActivityType.Hiking, startDate: start, endDate: end, duration: 9000, totalEnergyBurned: energyBurned, totalDistance: distance, device: device, metadata: metadata)
 
healthStore.saveObject(hike) { (success, error) -> Void in
    
    guard success else {
        // Perform proper error handling here...
        fatalError("*** An error occurred while saving this " +
            "workout: \(error?.localizedDescription)")
    }
}
```

**Objective-C**

```objc
 
HKQuantity *distance = [HKQuantity quantityWithUnit:[HKUnit mileUnit]
                                        doubleValue:5.2];
 
HKQuantity *energyBurned = [HKQuantity quantityWithUnit:[HKUnit kilocalorieUnit]
                                            doubleValue:259.0];
 
HKDevice *device = [[HKDevice alloc] initWithName:deviceName
                                     manufacturer:manufacturerName
                                            model:modelName
                                  hardwareVersion:hardwareVersionNumber
                                  firmwareVersion:firmwareVersionNumber
                                  softwareVersion:softwareVersionNumber
                                  localIdentifier:localIdentifier
                              UDIDeviceIdentifier:deviceIdentifier];
 
NSDictionary *metadata = @{HKMetadataKeyIndoorWorkout: @(NO)};
 
HKWorkout *hike = [HKWorkout workoutWithActivityType:HKWorkoutActivityTypeHiking
                                           startDate:start
                                             endDate:end
                                            duration:9000
                                   totalEnergyBurned:energyBurned
                                       totalDistance:distance
                                              device:device
                                            metadata:metadata];
 
[self.healthStore
 saveObject:hike
 withCompletion:^(BOOL success, NSError *error) {
 
     if (!success) {
         // Perform proper error handling here...
         NSLog(@"*** An error occurred while saving this "
               @"workout: %@ ***", error.localizedDescription);
 
         abort();
     }
 
 }];
```

## See Also

### Related Documentation

- [workoutActivityType](workoutactivitytype.md): The type of activity performed during the workout.
- [totalDistance](totaldistance.md): Deprecated. The total distance traveled during the workout.
- [duration](duration.md): The workout’s duration.
- [metadata](../hkobject/metadata.md): The metadata for this HealthKit object.
- [totalEnergyBurned](totalenergyburned.md): Deprecated. The total active energy burned during the workout.
- [workoutEvents](workoutevents.md): An array of workout event objects.

### Creating workouts

- [workoutWithActivityType:startDate:endDate:](init%28activitytype_start_end_%29.md): Deprecated. Instantiates a new workout.
- [workoutWithActivityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:metadata:](init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout that includes the energy burned, distance, and metadata for the workout.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:metadata:](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_metadata_%29.md): Deprecated. Instantiates a new workout whose duration is calculated based on the start and end dates and the provided workout events.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:device:metadata:](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_device_metadata_%29.md): Deprecated. Instantiates a workout that includes both workout events and the device that produced the sample data.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:totalFlightsClimbed:device:metadata:](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalflightsclimbed_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of flights of stairs climbed.
- [workoutWithActivityType:startDate:endDate:workoutEvents:totalEnergyBurned:totalDistance:totalSwimmingStrokeCount:device:metadata:](init%28activitytype_start_end_workoutevents_totalenergyburned_totaldistance_totalswimmingstrokecount_device_metadata_%29.md): Deprecated. Instantiates a workout using a variety of data, including the number of strokes while swimming.
