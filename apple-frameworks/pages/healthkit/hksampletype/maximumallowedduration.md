> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksampletype/maximumallowedduration](https://developer.apple.com/documentation/healthkit/hksampletype/maximumallowedduration)

# maximumAllowedDuration (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum duration if the sample type has a restricted duration.

## Declaration

```swift
var maximumAllowedDuration: TimeInterval { get }
```

<a id="return-value"></a>

## Return Value

The maximum time interval between the sample’s [startDate](../hksample/startdate.md) and [endDate](../hksample/enddate.md) properties.

<a id="Discussion"></a>

## Discussion

This method throws an exception if [isMaximumDurationRestricted](ismaximumdurationrestricted.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Checking the Duration Restriction

- [isMinimumDurationRestricted](isminimumdurationrestricted.md): A Boolean value that indicates whether samples of this type have a minimum time interval between the start and end dates.
- [minimumAllowedDuration](minimumallowedduration.md): The minimum duration if the sample type has a restricted duration.
- [isMaximumDurationRestricted](ismaximumdurationrestricted.md): A Boolean value that indicates whether samples of this type have a maximum time interval between the start and end dates.

# maximumAllowedDuration (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum duration if the sample type has a restricted duration.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval maximumAllowedDuration;
```

<a id="return-value"></a>

## Return Value

The maximum time interval between the sample’s [startDate](../hksample/startdate.md) and [endDate](../hksample/enddate.md) properties.

<a id="Discussion"></a>

## Discussion

This method throws an exception if [isMaximumDurationRestricted](ismaximumdurationrestricted.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Checking the Duration Restriction

- [isMinimumDurationRestricted](isminimumdurationrestricted.md): A Boolean value that indicates whether samples of this type have a minimum time interval between the start and end dates.
- [minimumAllowedDuration](minimumallowedduration.md): The minimum duration if the sample type has a restricted duration.
- [isMaximumDurationRestricted](ismaximumdurationrestricted.md): A Boolean value that indicates whether samples of this type have a maximum time interval between the start and end dates.
