> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inpaybillintent/init(billpayee:fromaccount:transactionamount:transactionscheduleddate:transactionnote:billtype:duedate:)

# init(billPayee:fromAccount:transactionAmount:transactionScheduledDate:transactionNote:billType:dueDate:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

## Declaration

```swift
init(billPayee: INBillPayee?, fromAccount: INPaymentAccount?, transactionAmount: INPaymentAmount?, transactionScheduledDate: INDateComponentsRange?, transactionNote: String?, billType: INBillType, dueDate: INDateComponentsRange?)
```
