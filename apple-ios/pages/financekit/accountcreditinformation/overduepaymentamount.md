> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekit/accountcreditinformation/overduepaymentamount

# overduePaymentAmount

**Framework:** FinanceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The amount by which the account is overdue for the current period.

## Declaration

```swift
let overduePaymentAmount: CurrencyAmount?
```

<a id="Discussion"></a>

## Discussion

If not `nil` and `minimumNextPaymentAmount` is not `nil` then the `minimumNextPaymentAmount` has information about the next bill.

## See Also

### Instance Properties

- [creditLimit](creditlimit.md): The credit limit of the account.
- [minimumNextPaymentAmount](minimumnextpaymentamount.md): Minimum amount of the next non-overdue payment.
- [nextPaymentDueDate](nextpaymentduedate.md): Date of the next payment.
