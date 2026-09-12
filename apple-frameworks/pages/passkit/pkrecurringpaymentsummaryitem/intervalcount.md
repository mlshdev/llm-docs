> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkrecurringpaymentsummaryitem/intervalcount](https://developer.apple.com/documentation/passkit/pkrecurringpaymentsummaryitem/intervalcount)

# intervalCount (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The number of interval units that make up the total payment interval.

## Declaration

```swift
var intervalCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1`, which requests a recurring payment every one [intervalUnit](intervalunit.md).

## See Also

### Setting the payment interval

- [intervalUnit](intervalunit.md): The amount of time – in calendar units such as day, month, or year – that represents a fraction of the total payment interval.

# intervalCount (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The number of interval units that make up the total payment interval.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger intervalCount;
```

<a id="Discussion"></a>

## Discussion

The default value is `1`, which requests a recurring payment every one [intervalUnit](intervalunit.md).

## See Also

### Setting the payment interval

- [intervalUnit](intervalunit.md): The amount of time – in calendar units such as day, month, or year – that represents a fraction of the total payment interval.
