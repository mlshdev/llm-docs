> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutzoneconfiguration/source-swift.enum/app](https://developer.apple.com/documentation/healthkit/hkworkoutzoneconfiguration/source-swift.enum/app)

# HKWorkoutZoneConfiguration.Source.app

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A case that indicates an app provided the zones for a specific workout.

## Declaration

```swift
case app
```

<a id="discussion"></a>

## Discussion

Apps create custom zone configurations by calling [init(quantityType:zoneBoundaries:)](../init%28quantitytype_zoneboundaries_%29.md) and applying them to workouts with [setCustomZoneConfiguration(\_:for:)](../../hkworkoutbuilder/setcustomzoneconfiguration%28__for_%29.md). Custom configurations apply only to the workout in which they’re set, and don’t modify the person’s preferred zones.

## See Also

### Identifying the source

- [HKWorkoutZoneConfiguration.Source.system](system.md): A case that indicates the system generated the zones automatically.
- [HKWorkoutZoneConfiguration.Source.user](user.md): A case that indicates the person configured the zones manually in Health Settings.
