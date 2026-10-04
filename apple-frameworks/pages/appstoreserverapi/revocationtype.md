> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/revocationtype

# revocationType

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.19+

The type of the refund or revocation that applies to the transaction.

## Declaration

```
string revocationType
```

## Possible Values

- `REFUND_FULL`: The transaction has a full refund.
- `REFUND_PRORATED`: The transaction has a prorated refund.
- `FAMILY_REVOKE`: The transaction is revoked from Family Sharing.
- `ASSIGNMENT_REVOKE`: The organization or group purchaser removed the subscription from the customer.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="discussion"></a>

## Discussion

If the `revocationType` is `REFUND_PRORATED`, see the [revocationPercentage](revocationpercentage.md) for the prorated percentage.

A `revocationType` of `ASSIGNMENT_REVOKE` indicates that the organization or group purchaser removed the subscription from a customer. Revoke the customer’s access to the content the transaction provides. For more information about assignment, see [Get Customer Groups](get-customer-groups.md).

## See Also

### Revocation

- [revocationDate](revocationdate.md): The UNIX time, in milliseconds, that the App Store refunded the transaction or revoked it from Family Sharing.
- [revocationReason](revocationreason.md): The reason for a refunded transaction.
- [revocationPercentage](revocationpercentage.md): The percentage, in milliunits, of the transaction that the App Store has refunded or revoked.
