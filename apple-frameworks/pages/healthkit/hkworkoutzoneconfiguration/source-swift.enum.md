> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutzoneconfiguration/source-swift.enum](https://developer.apple.com/documentation/healthkit/hkworkoutzoneconfiguration/source-swift.enum)

# HKWorkoutZoneConfiguration.Source

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An enumeration that identifies the origin of the zone configuration.

## Declaration

```swift
enum Source
```

## Topics

### Identifying the source

- [HKWorkoutZoneConfiguration.Source.system](source-swift.enum/system.md): A case that indicates the system generated the zones automatically.
- [HKWorkoutZoneConfiguration.Source.user](source-swift.enum/user.md): A case that indicates the person configured the zones manually in Health Settings.
- [HKWorkoutZoneConfiguration.Source.app](source-swift.enum/app.md): A case that indicates an app provided the zones for a specific workout.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the configuration source

- [source](source-swift.property.md): A property that identifies the origin of this zone configuration.
