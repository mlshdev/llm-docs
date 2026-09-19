> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkrecurringpaymentsummaryitem/enddate

# endDate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The date of the final payment.

## Declaration

```swift
var endDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil` which specifies no end date.

## See Also

### Setting the payment period

- [startDate](startdate.md): The date of the first payment.

# endDate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The date of the final payment.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * endDate;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil` which specifies no end date.

## See Also

### Setting the payment period

- [startDate](startdate.md): The date of the first payment.
