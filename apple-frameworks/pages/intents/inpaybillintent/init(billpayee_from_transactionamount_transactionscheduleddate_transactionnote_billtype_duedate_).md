> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintent/init(billpayee:from:transactionamount:transactionscheduleddate:transactionnote:billtype:duedate:)](https://developer.apple.com/documentation/intents/inpaybillintent/init(billpayee:from:transactionamount:transactionscheduleddate:transactionnote:billtype:duedate:))

# init(billPayee:from:transactionAmount:transactionScheduledDate:transactionNote:billType:dueDate:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Initializes the bill pay intent object with the specified payee and transaction details.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
init(billPayee: INBillPayee?, from fromAccount: INPaymentAccount?, transactionAmount: INPaymentAmount?, transactionScheduledDate: INDateComponentsRange?, transactionNote: String?, billType: INBillType, dueDate: INDateComponentsRange?)
```

## Parameters

- `billPayee`: The entity that receives the payment. The user must configure payees in advance using your app. The payee in this parameter should correspond to one of the user’s known entities.
- `fromAccount`: The user account providing the funds for the transaction. The user must configure an account with your financial service before attempting to pay bills with that account. Use the information in the [INPaymentAccount](../inpaymentaccount.md) object to identify which account the user wants to use.
- `transactionAmount`: The amount of money to transfer from the user’s account to the bill payee. The object in this parameter may specify a numeric value or a relative value, such as the current balance due. For more information, see [INPaymentAmount](../inpaymentamount.md).
- `transactionScheduledDate`: The date on which to make the payment.
- `transactionNote`: A note to include with the transaction. Users can include notes for logging additional information about the payment. You should also save notes in your own system so that users can view them later.
- `billType`: The type of bill to pay. Use this parameter to categorize the type of bill. You should also save this information in your own system so that users can search for bill payments by type.
- `dueDate`: The date by which the user must pay the bill. When scheduling the bill payment, use this parameter to validate that the payment isn’t too late.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to pay a bill. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithBillPayee:fromAccount:transactionAmount:transactionScheduledDate:transactionNote:billType:dueDate: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Initializes the bill pay intent object with the specified payee and transaction details.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (instancetype) initWithBillPayee:(INBillPayee *) billPayee fromAccount:(INPaymentAccount *) fromAccount transactionAmount:(INPaymentAmount *) transactionAmount transactionScheduledDate:(INDateComponentsRange *) transactionScheduledDate transactionNote:(NSString *) transactionNote billType:(INBillType) billType dueDate:(INDateComponentsRange *) dueDate;
```

## Parameters

- `billPayee`: The entity that receives the payment. The user must configure payees in advance using your app. The payee in this parameter should correspond to one of the user’s known entities.
- `fromAccount`: The user account providing the funds for the transaction. The user must configure an account with your financial service before attempting to pay bills with that account. Use the information in the [INPaymentAccount](../inpaymentaccount.md) object to identify which account the user wants to use.
- `transactionAmount`: The amount of money to transfer from the user’s account to the bill payee. The object in this parameter may specify a numeric value or a relative value, such as the current balance due. For more information, see [INPaymentAmount](../inpaymentamount.md).
- `transactionScheduledDate`: The date on which to make the payment.
- `transactionNote`: A note to include with the transaction. Users can include notes for logging additional information about the payment. You should also save notes in your own system so that users can view them later.
- `billType`: The type of bill to pay. Use this parameter to categorize the type of bill. You should also save this information in your own system so that users can search for bill payments by type.
- `dueDate`: The date by which the user must pay the bill. When scheduling the bill payment, use this parameter to validate that the payment isn’t too late.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to pay a bill. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
