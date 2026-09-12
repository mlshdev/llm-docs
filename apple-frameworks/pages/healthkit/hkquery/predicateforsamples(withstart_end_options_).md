> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforsamples(withstart:end:options:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforsamples(withstart:end:options:))

# predicateForSamples(withStart:end:options:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate for samples whose start and end dates fall within the specified time interval.

## Declaration

```swift
class func predicateForSamples(withStart startDate: Date?, end endDate: Date?, options: HKQueryOptions = []) -> NSPredicate
```

## Parameters

- `startDate`: The start date for the target time interval.
- `endDate`: The end date for the target time interval.
- `options`: A constant that specifies how the sample’s start and end date are compared with the target time interval. For a list of possible values, see [HKQueryOptions](../hkqueryoptions.md).

<a id="return-value"></a>

## Return Value

A predicate for samples whose start and end dates fall within the specified time interval. This predicate works only with samples.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that compares a sample’s start and end dates with a specified time interval. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let timeInterval =
    HKQuery.predicateForSamplesWithStartDate(myStartDate,
                                             endDate: myEndDate, options: .None)
 
let explicitTimeInterval = NSPredicate(format: "%K >= %@ AND %K < %@",
                                       HKPredicateKeyPathEndDate, myStartDate,
                                       HKPredicateKeyPathStartDate, myEndDate)
```

**Objective-C**

```objc
NSPredicate *timeInterval =
[HKQuery predicateForSamplesWithStartDate:myStartDate
                                  endDate:myEndDate
                                  options:HKQueryOptionNone];
 
NSPredicate *explicitTimeInterval =
[NSPredicate predicateWithFormat:@"%K >= %@ AND %K < %@",
 HKPredicateKeyPathEndDate, myStartDate,
 HKPredicateKeyPathStartDate, myEndDate];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathEndDate](../hkpredicatekeypathenddate.md): The key path for accessing the sample’s end date.
- [HKPredicateKeyPathStartDate](../hkpredicatekeypathstartdate.md): The key path for accessing the sample’s start date.
- [endDate](../hksample/enddate.md): The sample’s end date.
- [startDate](../hksample/startdate.md): The sample’s start date.

### Creating sample predicates

- [HKQueryOptions](../hkqueryoptions.md): Constants that describe how a sample’s time period overlaps with the target time period.

# predicateForSamplesWithStartDate:endDate:options: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate for samples whose start and end dates fall within the specified time interval.

## Declaration

```objectivec
+ (NSPredicate *) predicateForSamplesWithStartDate:(NSDate *) startDate endDate:(NSDate *) endDate options:(HKQueryOptions) options;
```

## Parameters

- `startDate`: The start date for the target time interval.
- `endDate`: The end date for the target time interval.
- `options`: A constant that specifies how the sample’s start and end date are compared with the target time interval. For a list of possible values, see [HKQueryOptions](../hkqueryoptions.md).

<a id="return-value"></a>

## Return Value

A predicate for samples whose start and end dates fall within the specified time interval. This predicate works only with samples.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that compares a sample’s start and end dates with a specified time interval. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let timeInterval =
    HKQuery.predicateForSamplesWithStartDate(myStartDate,
                                             endDate: myEndDate, options: .None)
 
let explicitTimeInterval = NSPredicate(format: "%K >= %@ AND %K < %@",
                                       HKPredicateKeyPathEndDate, myStartDate,
                                       HKPredicateKeyPathStartDate, myEndDate)
```

**Objective-C**

```objc
NSPredicate *timeInterval =
[HKQuery predicateForSamplesWithStartDate:myStartDate
                                  endDate:myEndDate
                                  options:HKQueryOptionNone];
 
NSPredicate *explicitTimeInterval =
[NSPredicate predicateWithFormat:@"%K >= %@ AND %K < %@",
 HKPredicateKeyPathEndDate, myStartDate,
 HKPredicateKeyPathStartDate, myEndDate];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathEndDate](../hkpredicatekeypathenddate.md): The key path for accessing the sample’s end date.
- [HKPredicateKeyPathStartDate](../hkpredicatekeypathstartdate.md): The key path for accessing the sample’s start date.
- [endDate](../hksample/enddate.md): The sample’s end date.
- [startDate](../hksample/startdate.md): The sample’s start date.

### Creating sample predicates

- [HKQueryOptions](../hkqueryoptions.md): Constants that describe how a sample’s time period overlaps with the target time period.
