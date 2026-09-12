> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkpredicatekeypathmostrecent](https://developer.apple.com/documentation/healthkit/hkpredicatekeypathmostrecent)

# HKPredicateKeyPathMostRecent (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The key path for the sample’s most recent quantity.

## Declaration

```swift
let HKPredicateKeyPathMostRecent: String
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include a sample’s quantity in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

## See Also

### Specifying Predicate Key Paths

- [HKPredicateKeyPathMin](hkpredicatekeypathmin.md): The key path for the sample’s minimum quantity.
- [HKPredicateKeyPathAverage](hkpredicatekeypathaverage.md): The key path for the sample’s average quantity.
- [HKPredicateKeyPathMax](hkpredicatekeypathmax.md): The key path for the sample’s maximum quantity.
- [HKPredicateKeyPathMostRecentStartDate](hkpredicatekeypathmostrecentstartdate.md): The key path for the start date of the sample’s most recent quantity.
- [HKPredicateKeyPathMostRecentEndDate](hkpredicatekeypathmostrecentenddate.md): The key path for the end date of the sample’s most recent quantity.
- [HKPredicateKeyPathMostRecentDuration](hkpredicatekeypathmostrecentduration.md): A key path for the duration of the sample’s most recent quantity.

# HKPredicateKeyPathMostRecent (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The key path for the sample’s most recent quantity.

## Declaration

```objectivec
extern NSString * const HKPredicateKeyPathMostRecent;
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include a sample’s quantity in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

## See Also

### Specifying Predicate Key Paths

- [HKPredicateKeyPathMin](hkpredicatekeypathmin.md): The key path for the sample’s minimum quantity.
- [HKPredicateKeyPathAverage](hkpredicatekeypathaverage.md): The key path for the sample’s average quantity.
- [HKPredicateKeyPathMax](hkpredicatekeypathmax.md): The key path for the sample’s maximum quantity.
- [HKPredicateKeyPathMostRecentStartDate](hkpredicatekeypathmostrecentstartdate.md): The key path for the start date of the sample’s most recent quantity.
- [HKPredicateKeyPathMostRecentEndDate](hkpredicatekeypathmostrecentenddate.md): The key path for the end date of the sample’s most recent quantity.
- [HKPredicateKeyPathMostRecentDuration](hkpredicatekeypathmostrecentduration.md): A key path for the duration of the sample’s most recent quantity.
