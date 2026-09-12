> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksample/hasundeterminedduration](https://developer.apple.com/documentation/healthkit/hksample/hasundeterminedduration)

# hasUndeterminedDuration (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.2+

Indicates whether the sample has an unknown duration.

## Declaration

```swift
var hasUndeterminedDuration: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) if the sample’s [endDate](enddate.md) property is [distantFuture](../../foundation/nsdate/distantfuture.md).

## See Also

### Accessing the Sample’s Data

- [startDate](startdate.md): The sample’s start date.
- [endDate](enddate.md): The sample’s end date.
- [sampleType](sampletype.md): The sample type.

# hasUndeterminedDuration (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.2+

Indicates whether the sample has an unknown duration.

## Declaration

```objectivec
@property (readonly) BOOL hasUndeterminedDuration;
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) if the sample’s [endDate](enddate.md) property is [distantFuture](../../foundation/nsdate/distantfuture.md).

## See Also

### Accessing the Sample’s Data

- [startDate](startdate.md): The sample’s start date.
- [endDate](enddate.md): The sample’s end date.
- [sampleType](sampletype.md): The sample type.
