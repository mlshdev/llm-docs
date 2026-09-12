> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/init(configuration:)](https://developer.apple.com/documentation/healthkit/hkworkoutsession/init(configuration:))

# init(configuration:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** watchOS 3.0+ (deprecated in 5.0)

Returns a newly instantiated workout session.

> Use [init(healthStore:configuration:)](init%28healthstore_configuration_%29.md) instead.

## Declaration

```swift
init(configuration workoutConfiguration: HKWorkoutConfiguration) throws
```

## Parameters

- `workoutConfiguration`: A workout configuration object containing the configuration data for this workout session.

<a id="return-value"></a>

## Return Value

A newly initialized workout session object, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

HealthKit uses the session’s configuration data to fine tune Apple Watch’s sensors for the selected activity. All workout sessions generate higher-frequency heart rate samples; however, an outdoor cycling activity generates more accurate location data, while an indoor cycling activity does not.

## See Also

### Deprecated methods

- [init(activityType:locationType:)](init%28activitytype_locationtype_%29.md): Deprecated. Returns a newly instantiated workout session.
- [activityType](activitytype.md): Deprecated. The workout activity performed during this session.
- [locationType](locationtype.md): Deprecated. A value that indicates whether the workout session occurred indoors or outdoors.

# initWithConfiguration:error: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 5.0)

Returns a newly instantiated workout session.

> Use [initWithHealthStore:configuration:error:](init%28healthstore_configuration_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(HKWorkoutConfiguration *) workoutConfiguration error:(NSError **) error;
```

## Parameters

- `workoutConfiguration`: A workout configuration object containing the configuration data for this workout session.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing information about the error. Specify `nil` for this parameter if you do not want to receive error information.

<a id="return-value"></a>

## Return Value

A newly initialized workout session object, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

HealthKit uses the session’s configuration data to fine tune Apple Watch’s sensors for the selected activity. All workout sessions generate higher-frequency heart rate samples; however, an outdoor cycling activity generates more accurate location data, while an indoor cycling activity does not.

## See Also

### Deprecated methods

- [initWithActivityType:locationType:](init%28activitytype_locationtype_%29.md): Deprecated. Returns a newly instantiated workout session.
- [activityType](activitytype.md): Deprecated. The workout activity performed during this session.
- [locationType](locationtype.md): Deprecated. A value that indicates whether the workout session occurred indoors or outdoors.
