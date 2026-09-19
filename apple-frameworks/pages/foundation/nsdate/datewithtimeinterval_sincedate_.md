> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsdate/datewithtimeinterval:sincedate:

# dateWithTimeInterval:sinceDate:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a date object set to a given number of seconds from the specified date.

## Declaration

```objectivec
+ (instancetype) dateWithTimeInterval:(NSTimeInterval) secsToBeAdded sinceDate:(NSDate *) date;
```

## Parameters

- `secsToBeAdded`: The number of seconds to add to `date`. Use a negative argument to specify a date and time before `date`.
- `date`: The date.

<a id="return-value"></a>

## Return Value

An `NSDate` object set to `secsToBeAdded` seconds from `date`.
