> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintent/init(from:to:transactionamount:transactionscheduleddate:transactionnote:)](https://developer.apple.com/documentation/intents/intransfermoneyintent/init(from:to:transactionamount:transactionscheduleddate:transactionnote:))

# init(from:to:transactionAmount:transactionScheduledDate:transactionNote:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Initializes the intent object with the specified transaction details.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
init(from fromAccount: INPaymentAccount?, to toAccount: INPaymentAccount?, transactionAmount: INPaymentAmount?, transactionScheduledDate: INDateComponentsRange?, transactionNote: String?)
```

## Parameters

- `fromAccount`: The account containing the funds to transfer.
- `toAccount`: The account to receive the funds.
- `transactionAmount`: The amount of money to transfer between the accounts. When transferring money between accounts, you typically specify a fixed amount of money to transfer.
- `transactionScheduledDate`: The date on which to transfer the money.
- `transactionNote`: An optional note to include with the transaction.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to transfer money between accounts. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithFromAccount:toAccount:transactionAmount:transactionScheduledDate:transactionNote: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Initializes the intent object with the specified transaction details.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (instancetype) initWithFromAccount:(INPaymentAccount *) fromAccount toAccount:(INPaymentAccount *) toAccount transactionAmount:(INPaymentAmount *) transactionAmount transactionScheduledDate:(INDateComponentsRange *) transactionScheduledDate transactionNote:(NSString *) transactionNote;
```

## Parameters

- `fromAccount`: The account containing the funds to transfer.
- `toAccount`: The account to receive the funds.
- `transactionAmount`: The amount of money to transfer between the accounts. When transferring money between accounts, you typically specify a fixed amount of money to transfer.
- `transactionScheduledDate`: The date on which to transfer the money.
- `transactionNote`: An optional note to include with the transaction.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to transfer money between accounts. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
