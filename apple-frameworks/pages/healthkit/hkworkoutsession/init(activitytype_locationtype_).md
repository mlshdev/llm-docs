> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/init(activitytype:locationtype:)](https://developer.apple.com/documentation/healthkit/hkworkoutsession/init(activitytype:locationtype:))

# init(activityType:locationType:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 3.0)

Returns a newly instantiated workout session.

> Use [init(healthStore:configuration:)](init%28healthstore_configuration_%29.md) instead.

## Declaration

```swift
init(activityType: HKWorkoutActivityType, locationType: HKWorkoutSessionLocationType)
```

## Parameters

- `activityType`: The type of activity being performed in the workout. For a list of possible activities, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).
- `locationType`: A value indicating whether the workout was performed indoors or outdoors. For a list of possible location values, see [HKWorkoutSessionLocationType](../hkworkoutsessionlocationtype.md).

<a id="return-value"></a>

## Return Value

A newly initialized workout session object for the specified activity type and location.

<a id="Discussion"></a>

## Discussion

HealthKit uses the session’s workout activity and location type to fine tune Apple Watch’s sensors for the selected activity. All workout sessions generate higher-frequency heart rate samples; however, an outdoor cycling activity generates more accurate location data, while an indoor cycling activity does not.

## See Also

### Deprecated methods

- [init(configuration:)](init%28configuration_%29.md): Deprecated. Returns a newly instantiated workout session.
- [activityType](activitytype.md): Deprecated. The workout activity performed during this session.
- [locationType](locationtype.md): Deprecated. A value that indicates whether the workout session occurred indoors or outdoors.

# initWithActivityType:locationType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 3.0)

Returns a newly instantiated workout session.

> Use [initWithHealthStore:configuration:error:](init%28healthstore_configuration_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithActivityType:(HKWorkoutActivityType) activityType locationType:(HKWorkoutSessionLocationType) locationType;
```

## Parameters

- `activityType`: The type of activity being performed in the workout. For a list of possible activities, see [HKWorkoutActivityType](../hkworkoutactivitytype.md).
- `locationType`: A value indicating whether the workout was performed indoors or outdoors. For a list of possible location values, see [HKWorkoutSessionLocationType](../hkworkoutsessionlocationtype.md).

<a id="return-value"></a>

## Return Value

A newly initialized workout session object for the specified activity type and location.

<a id="Discussion"></a>

## Discussion

HealthKit uses the session’s workout activity and location type to fine tune Apple Watch’s sensors for the selected activity. All workout sessions generate higher-frequency heart rate samples; however, an outdoor cycling activity generates more accurate location data, while an indoor cycling activity does not.

## See Also

### Deprecated methods

- [initWithConfiguration:error:](init%28configuration_%29.md): Deprecated. Returns a newly instantiated workout session.
- [activityType](activitytype.md): Deprecated. The workout activity performed during this session.
- [locationType](locationtype.md): Deprecated. A value that indicates whether the workout session occurred indoors or outdoors.
