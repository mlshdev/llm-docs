> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkqueryoptions/hkqueryoptionnone](https://developer.apple.com/documentation/healthkit/hkqueryoptions/hkqueryoptionnone)

# HKQueryOptionNone

**Interface language:** Objective-C

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The sample’s time period must overlap part of the target time period.

## Declaration

```objectivec
HKQueryOptionNone
```

<a id="Discussion"></a>

## Discussion

The sample’s end time must be equal to or later than the target’s start time, and the sample’s start time must be earlier than the target’s end time.

## See Also

### Constants

- [HKQueryOptionStrictStartDate](strictstartdate.md): The sample’s start time must fall within the target time period.
- [HKQueryOptionStrictEndDate](strictenddate.md): The sample’s end time must fall within the target time period.
