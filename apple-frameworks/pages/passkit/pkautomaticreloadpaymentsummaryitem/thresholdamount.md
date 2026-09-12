> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkautomaticreloadpaymentsummaryitem/thresholdamount](https://developer.apple.com/documentation/passkit/pkautomaticreloadpaymentsummaryitem/thresholdamount)

# thresholdAmount (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The balance an account reaches before you apply the automatic reload amount.

## Declaration

```swift
var thresholdAmount: NSDecimalNumber { get set }
```

<a id="Discussion"></a>

## Discussion

You automatically apply the reload amount to the account when the account balance drops below the threshold amount.

Use the [amount](../pkpaymentsummaryitem/amount.md) property to specify the reload amount.

# thresholdAmount (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The balance an account reaches before you apply the automatic reload amount.

## Declaration

```objectivec
@property (nonatomic, strong) NSDecimalNumber * thresholdAmount;
```

<a id="Discussion"></a>

## Discussion

You automatically apply the reload amount to the account when the account balance drops below the threshold amount.

Use the [amount](../pkpaymentsummaryitem/amount.md) property to specify the reload amount.
