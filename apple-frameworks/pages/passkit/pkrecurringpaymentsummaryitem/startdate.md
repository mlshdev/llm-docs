> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkrecurringpaymentsummaryitem/startdate](https://developer.apple.com/documentation/passkit/pkrecurringpaymentsummaryitem/startdate)

# startDate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The date of the first payment.

## Declaration

```swift
var startDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil` which requests the first payment as part of the initial transaction.

## See Also

### Setting the payment period

- [endDate](enddate.md): The date of the final payment.

# startDate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The date of the first payment.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * startDate;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil` which requests the first payment as part of the initial transaction.

## See Also

### Setting the payment period

- [endDate](enddate.md): The date of the final payment.
