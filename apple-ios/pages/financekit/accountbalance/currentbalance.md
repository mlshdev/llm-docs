> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekit/accountbalance/currentbalance

# currentBalance

**Framework:** FinanceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The balance at a particular moment in time.

## Declaration

```swift
let currentBalance: CurrentBalance
```

<a id="Discussion"></a>

## Discussion

It can contain an indication of funds immediately available to the customer, fund with all booked transactions (this excludes pending transactions), or both.

## See Also

### Instance Properties

- [accountID](accountid.md): The account ID the balance belongs to.
- [available](available.md): The available balance, if present.
- [booked](booked.md): The booked balance, if present.
- [currencyCode](currencycode.md): The balance currency.
- [id](id.md): A unique account balance ID.
