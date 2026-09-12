> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkqueryoptions/strictenddate](https://developer.apple.com/documentation/healthkit/hkqueryoptions/strictenddate)

# strictEndDate (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The sample’s end time must fall within the target time period.

## Declaration

```swift
static var strictEndDate: HKQueryOptions { get }
```

<a id="Discussion"></a>

## Discussion

The sample’s end time must be equal to or later than the target’s start time, and the sample’s end time must also be earlier than the target’s end time.

## See Also

### Constants

- [strictStartDate](strictstartdate.md): The sample’s start time must fall within the target time period.

# HKQueryOptionStrictEndDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The sample’s end time must fall within the target time period.

## Declaration

```objectivec
HKQueryOptionStrictEndDate
```

<a id="Discussion"></a>

## Discussion

The sample’s end time must be equal to or later than the target’s start time, and the sample’s end time must also be earlier than the target’s end time.

## See Also

### Constants

- [HKQueryOptionNone](hkqueryoptionnone.md): The sample’s time period must overlap part of the target time period.
- [HKQueryOptionStrictStartDate](strictstartdate.md): The sample’s start time must fall within the target time period.
