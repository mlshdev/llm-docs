> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmdyskineticsymptomresult/enddate

# endDate (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · watchOS 5.0+

The result’s end time and date.

## Declaration

```swift
var endDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

The result’s `endDate` is always one minute or less after the [startDate](startdate.md).

## See Also

### Reading the Time Interval

- [startDate](startdate.md): The result’s start time and date.

# endDate (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · watchOS 5.0+

The result’s end time and date.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDate * endDate;
```

<a id="Discussion"></a>

## Discussion

The result’s `endDate` is always one minute or less after the [startDate](startdate.md).

## See Also

### Reading the Time Interval

- [startDate](startdate.md): The result’s start time and date.
