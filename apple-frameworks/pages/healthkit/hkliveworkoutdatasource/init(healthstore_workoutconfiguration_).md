> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkliveworkoutdatasource/init(healthstore:workoutconfiguration:)

# init(healthStore:workoutConfiguration:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

Creates a new data source based on the provided workout configuration.

## Declaration

```swift
init(healthStore: HKHealthStore, workoutConfiguration configuration: HKWorkoutConfiguration?)
```

## See Also

### Creating a live data source

- [typesToCollect](typestocollect.md): The quantity type samples that the data source automatically sends to the workout builder.

# initWithHealthStore:workoutConfiguration: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

Creates a new data source based on the provided workout configuration.

## Declaration

```objectivec
- (instancetype) initWithHealthStore:(HKHealthStore *) healthStore workoutConfiguration:(HKWorkoutConfiguration *) configuration;
```

## See Also

### Creating a live data source

- [typesToCollect](typestocollect.md): The quantity type samples that the data source automatically sends to the workout builder.
