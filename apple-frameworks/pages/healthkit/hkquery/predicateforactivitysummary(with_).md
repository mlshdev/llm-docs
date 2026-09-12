> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforactivitysummary(with:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforactivitysummary(with:))

# predicateForActivitySummary(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

Returns a predicate that matches the activity summary for the specified day.

## Declaration

```swift
class func predicateForActivitySummary(with dateComponents: DateComponents) -> NSPredicate
```

## Parameters

- `dateComponents`: Date components that uniquely identify the day as perceived by the user. This day may be longer or shorter than 24 hours (for example, if the user traveled across time zones).

  The date components must have a valid [calendar](../../foundation/nsdatecomponents/calendar.md) property.

<a id="return-value"></a>

## Return Value

A predicate for matching a single activity summary.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches the activity summary for the specified day. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let forDay = HKQuery.predicateForActivitySummaryWithDateComponents(day)
let explicitForDay = NSPredicate(format: "%K == %@", HKPredicateKeyPathDateComponents, day)
```

**Objective-C**

```objc
NSPredicate *forDay =
[HKQuery predicateForActivitySummaryWithDateComponents: day];
 
NSPredicate *explicitforDay =
[NSPredicate predicateWithFormat:@"%K == %@",
 HKPredicateKeyPathDateComponents, day];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathDateComponents](../hkpredicatekeypathdatecomponents.md): The key path for accessing an activity summary’s date components.

### Creating activity summary predicates

- [predicate(forActivitySummariesBetweenStart:end:)](predicate%28foractivitysummariesbetweenstart_end_%29.md): Returns a predicate for matching all the activity summaries that fall between the days identified by the start and end date components.

# predicateForActivitySummaryWithDateComponents: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

Returns a predicate that matches the activity summary for the specified day.

## Declaration

```objectivec
+ (NSPredicate *) predicateForActivitySummaryWithDateComponents:(NSDateComponents *) dateComponents;
```

## Parameters

- `dateComponents`: Date components that uniquely identify the day as perceived by the user. This day may be longer or shorter than 24 hours (for example, if the user traveled across time zones).

  The date components must have a valid [calendar](../../foundation/nsdatecomponents/calendar.md) property.

<a id="return-value"></a>

## Return Value

A predicate for matching a single activity summary.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches the activity summary for the specified day. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let forDay = HKQuery.predicateForActivitySummaryWithDateComponents(day)
let explicitForDay = NSPredicate(format: "%K == %@", HKPredicateKeyPathDateComponents, day)
```

**Objective-C**

```objc
NSPredicate *forDay =
[HKQuery predicateForActivitySummaryWithDateComponents: day];
 
NSPredicate *explicitforDay =
[NSPredicate predicateWithFormat:@"%K == %@",
 HKPredicateKeyPathDateComponents, day];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathDateComponents](../hkpredicatekeypathdatecomponents.md): The key path for accessing an activity summary’s date components.

### Creating activity summary predicates

- [predicateForActivitySummariesBetweenStartDateComponents:endDateComponents:](predicate%28foractivitysummariesbetweenstart_end_%29.md): Returns a predicate for matching all the activity summaries that fall between the days identified by the start and end date components.
