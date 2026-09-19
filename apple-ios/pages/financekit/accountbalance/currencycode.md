> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekit/accountbalance/currencycode

# currencyCode

**Framework:** FinanceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The balance currency.

## Declaration

```swift
var currencyCode: String { get }
```

<a id="Discussion"></a>

## Discussion

This is the same across available and booked balances.

## See Also

### Instance Properties

- [accountID](accountid.md): The account ID the balance belongs to.
- [available](available.md): The available balance, if present.
- [booked](booked.md): The booked balance, if present.
- [currentBalance](currentbalance.md): The balance at a particular moment in time.
- [id](id.md): A unique account balance ID.
