> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksampletype/isminimumdurationrestricted](https://developer.apple.com/documentation/healthkit/hksampletype/isminimumdurationrestricted)

# isMinimumDurationRestricted (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether samples of this type have a minimum time interval between the start and end dates.

## Declaration

```swift
var isMinimumDurationRestricted: Bool { get }
```

## See Also

### Checking the Duration Restriction

- [minimumAllowedDuration](minimumallowedduration.md): The minimum duration if the sample type has a restricted duration.
- [isMaximumDurationRestricted](ismaximumdurationrestricted.md): A Boolean value that indicates whether samples of this type have a maximum time interval between the start and end dates.
- [maximumAllowedDuration](maximumallowedduration.md): The maximum duration if the sample type has a restricted duration.

# isMinimumDurationRestricted (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether samples of this type have a minimum time interval between the start and end dates.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isMinimumDurationRestricted;
```

## See Also

### Checking the Duration Restriction

- [minimumAllowedDuration](minimumallowedduration.md): The minimum duration if the sample type has a restricted duration.
- [isMaximumDurationRestricted](ismaximumdurationrestricted.md): A Boolean value that indicates whether samples of this type have a maximum time interval between the start and end dates.
- [maximumAllowedDuration](maximumallowedduration.md): The maximum duration if the sample type has a restricted duration.
