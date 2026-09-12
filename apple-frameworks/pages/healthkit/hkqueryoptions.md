> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkqueryoptions](https://developer.apple.com/documentation/healthkit/hkqueryoptions)

# HKQueryOptions (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that describe how a sample’s time period overlaps with the target time period.

## Declaration

```swift
struct HKQueryOptions
```

## Topics

### Constants

- [strictStartDate](hkqueryoptions/strictstartdate.md): The sample’s start time must fall within the target time period.
- [strictEndDate](hkqueryoptions/strictenddate.md): The sample’s end time must fall within the target time period.

### Initializers

- [init(rawValue:)](hkqueryoptions/init%28rawvalue_%29.md): Returns a newly initialized query option using the provided integer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating sample predicates

- [predicateForSamples(withStart:end:options:)](hkquery/predicateforsamples%28withstart_end_options_%29.md): Returns a predicate for samples whose start and end dates fall within the specified time interval.

# HKQueryOptions (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that describe how a sample’s time period overlaps with the target time period.

## Declaration

```objectivec
enum HKQueryOptions : NSUInteger;
```

## Topics

### Constants

- [HKQueryOptionNone](hkqueryoptions/hkqueryoptionnone.md): The sample’s time period must overlap part of the target time period.
- [HKQueryOptionStrictStartDate](hkqueryoptions/strictstartdate.md): The sample’s start time must fall within the target time period.
- [HKQueryOptionStrictEndDate](hkqueryoptions/strictenddate.md): The sample’s end time must fall within the target time period.

## See Also

### Creating sample predicates

- [predicateForSamplesWithStartDate:endDate:options:](hkquery/predicateforsamples%28withstart_end_options_%29.md): Returns a predicate for samples whose start and end dates fall within the specified time interval.
