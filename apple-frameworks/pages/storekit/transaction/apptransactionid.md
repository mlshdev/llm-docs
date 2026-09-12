> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/apptransactionid](https://developer.apple.com/documentation/storekit/transaction/apptransactionid)

# appTransactionID

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The unique identifier of the app download transaction.

## Declaration

```swift
@backDeployed(before: iOS 18.4, macOS 15.4, tvOS 18.4, watchOS 11.4, visionOS 2.4)
var appTransactionID: String { get }
```

<a id="Discussion"></a>

## Discussion

The App Store server APIs and StoreKit provide this value in several APIs. For more information, see [appTransactionID](../apptransaction/apptransactionid.md) in [AppTransaction](../apptransaction.md).

## See Also

### Transaction properties

- [Transaction properties](../transaction-properties.md): The properties of a transaction, including identifiers, purchase and revocation dates and details, status, and offer details.
