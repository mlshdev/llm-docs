> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/summaryitems](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/summaryitems)

# summaryItems (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

An array of payment summary item objects that the framework presents to people.

## Declaration

```swift
var summaryItems: [PKPaymentSummaryItem] { get set }
```

<a id="Discussion"></a>

## Discussion

This array must contain one [PKPaymentSummaryItem](../pkpaymentsummaryitem.md), which contains the amount the individual receives. This may differ from the total amount withdrawn — for example, if the transfer has an associated fee. The framework displays the amount this [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) item represents on the main Apple Pay sheet.

This array may contain up to one [PKInstantFundsOutFeeSummaryItem](../pkinstantfundsoutfeesummaryitem.md) to represent a fee deducted as part of an instant transfer, if applicable. The framework also presents this fee on the main sheet when you initialize the [PKDisbursementRequest](../pkdisbursementrequest.md) with the [instantFundsOut](../pkmerchantcapability/instantfundsout.md) capability option.

You can specify other line items (such as fees not associated with an instant transfer) using [PKPaymentSummaryItem](../pkpaymentsummaryitem.md).

If you specify multiple summary items, the last item must represent the total of all previous items.

## See Also

### Setting the summary items

- [PKPaymentSummaryItem](../pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.
- [PKDisbursementSummaryItem](../pkdisbursementsummaryitem.md): A summary item that represents a disbursement.
- [PKInstantFundsOutFeeSummaryItem](../pkinstantfundsoutfeesummaryitem.md): A summary item that represents a fee for an instant funds out transfer.

# summaryItems (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

An array of payment summary item objects that the framework presents to people.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<PKPaymentSummaryItem *> * summaryItems;
```

<a id="Discussion"></a>

## Discussion

This array must contain one [PKPaymentSummaryItem](../pkpaymentsummaryitem.md), which contains the amount the individual receives. This may differ from the total amount withdrawn — for example, if the transfer has an associated fee. The framework displays the amount this [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) item represents on the main Apple Pay sheet.

This array may contain up to one [PKInstantFundsOutFeeSummaryItem](../pkinstantfundsoutfeesummaryitem.md) to represent a fee deducted as part of an instant transfer, if applicable. The framework also presents this fee on the main sheet when you initialize the [PKDisbursementRequest](../pkdisbursementrequest.md) with the [PKMerchantCapabilityInstantFundsOut](../pkmerchantcapability/instantfundsout.md) capability option.

You can specify other line items (such as fees not associated with an instant transfer) using [PKPaymentSummaryItem](../pkpaymentsummaryitem.md).

If you specify multiple summary items, the last item must represent the total of all previous items.

## See Also

### Setting the summary items

- [PKPaymentSummaryItem](../pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.
- [PKDisbursementSummaryItem](../pkdisbursementsummaryitem.md): A summary item that represents a disbursement.
- [PKInstantFundsOutFeeSummaryItem](../pkinstantfundsoutfeesummaryitem.md): A summary item that represents a fee for an instant funds out transfer.
