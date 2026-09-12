> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkqueryoptions/strictstartdate](https://developer.apple.com/documentation/healthkit/hkqueryoptions/strictstartdate)

# strictStartDate (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The sample’s start time must fall within the target time period.

## Declaration

```swift
static var strictStartDate: HKQueryOptions { get }
```

<a id="Discussion"></a>

## Discussion

The sample’s start time must be equal to or later than the target’s start time, and the sample’s start time must also be earlier than the target’s end time.

## See Also

### Constants

- [strictEndDate](strictenddate.md): The sample’s end time must fall within the target time period.

# HKQueryOptionStrictStartDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The sample’s start time must fall within the target time period.

## Declaration

```objectivec
HKQueryOptionStrictStartDate
```

<a id="Discussion"></a>

## Discussion

The sample’s start time must be equal to or later than the target’s start time, and the sample’s start time must also be earlier than the target’s end time.

## See Also

### Constants

- [HKQueryOptionNone](hkqueryoptionnone.md): The sample’s time period must overlap part of the target time period.
- [HKQueryOptionStrictEndDate](strictenddate.md): The sample’s end time must fall within the target time period.
