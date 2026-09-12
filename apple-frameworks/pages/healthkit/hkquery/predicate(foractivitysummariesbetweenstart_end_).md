> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicate(foractivitysummariesbetweenstart:end:)](https://developer.apple.com/documentation/healthkit/hkquery/predicate(foractivitysummariesbetweenstart:end:))

# predicate(forActivitySummariesBetweenStart:end:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

Returns a predicate for matching all the activity summaries that fall between the days identified by the start and end date components.

## Declaration

```swift
class func predicate(forActivitySummariesBetweenStart startDateComponents: DateComponents, end endDateComponents: DateComponents) -> NSPredicate
```

## Parameters

- `startDateComponents`: Date components that uniquely identify the start day as perceived by the user. This day may be longer or shorter than 24 hours (for example, if the user traveled across time zones).

  The date components must have a valid [calendar](../../foundation/nsdatecomponents/calendar.md) property.
- `endDateComponents`: Date components that uniquely identify the end day as perceived by the user. This day may be longer or shorter than 24 hours (for example, if the user traveled across time zones).

  The date components must have a valid [calendar](../../foundation/nsdatecomponents/calendar.md) property.

<a id="return-value"></a>

## Return Value

A predicate for matching activity summaries spanning a range of days.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches activity summaries that fall between the specified days. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let forDays =
    HKQuery.predicateForActivitySummariesBetweenStartDateComponents(startDateComponents, endDateComponents: endDateComponents)
let explicitForDays =
    NSPredicate(format: "%K >= %@ AND %K <= %@", HKPredicateKeyPathDateComponents, startDateComponents, HKPredicateKeyPathDateComponents, endDateComponents)
```

**Objective-C**

```objc
NSPredicate *forDay =
[HKQuery HKQuery.predicateForActivitySummariesBetweenStartDateComponents: startDateComponents endDateComponents:endDateComponents];
 
NSPredicate *explicitforDay =
[NSPredicate predicateWithFormat:@"%K >= %@ AND %K <= %@",
 HKPredicateKeyPathDateComponents, startDateComponents,
 HKPredicateKeyPathDateComponents, endDateComponents];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathDateComponents](../hkpredicatekeypathdatecomponents.md): The key path for accessing an activity summary’s date components.

### Creating activity summary predicates

- [predicateForActivitySummary(with:)](predicateforactivitysummary%28with_%29.md): Returns a predicate that matches the activity summary for the specified day.

# predicateForActivitySummariesBetweenStartDateComponents:endDateComponents: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

Returns a predicate for matching all the activity summaries that fall between the days identified by the start and end date components.

## Declaration

```objectivec
+ (NSPredicate *) predicateForActivitySummariesBetweenStartDateComponents:(NSDateComponents *) startDateComponents endDateComponents:(NSDateComponents *) endDateComponents;
```

## Parameters

- `startDateComponents`: Date components that uniquely identify the start day as perceived by the user. This day may be longer or shorter than 24 hours (for example, if the user traveled across time zones).

  The date components must have a valid [calendar](../../foundation/nsdatecomponents/calendar.md) property.
- `endDateComponents`: Date components that uniquely identify the end day as perceived by the user. This day may be longer or shorter than 24 hours (for example, if the user traveled across time zones).

  The date components must have a valid [calendar](../../foundation/nsdatecomponents/calendar.md) property.

<a id="return-value"></a>

## Return Value

A predicate for matching activity summaries spanning a range of days.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches activity summaries that fall between the specified days. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let forDays =
    HKQuery.predicateForActivitySummariesBetweenStartDateComponents(startDateComponents, endDateComponents: endDateComponents)
let explicitForDays =
    NSPredicate(format: "%K >= %@ AND %K <= %@", HKPredicateKeyPathDateComponents, startDateComponents, HKPredicateKeyPathDateComponents, endDateComponents)
```

**Objective-C**

```objc
NSPredicate *forDay =
[HKQuery HKQuery.predicateForActivitySummariesBetweenStartDateComponents: startDateComponents endDateComponents:endDateComponents];
 
NSPredicate *explicitforDay =
[NSPredicate predicateWithFormat:@"%K >= %@ AND %K <= %@",
 HKPredicateKeyPathDateComponents, startDateComponents,
 HKPredicateKeyPathDateComponents, endDateComponents];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathDateComponents](../hkpredicatekeypathdatecomponents.md): The key path for accessing an activity summary’s date components.

### Creating activity summary predicates

- [predicateForActivitySummaryWithDateComponents:](predicateforactivitysummary%28with_%29.md): Returns a predicate that matches the activity summary for the specified day.
