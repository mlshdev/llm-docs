> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/revocationtype](https://developer.apple.com/documentation/appstoreservernotifications/revocationtype)

# revocationType

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.20+

The type of the refund or revocation that applies to the transaction.

## Declaration

```
string revocationType
```

## Possible Values

- `REFUND_FULL`: The transaction has a full refund.
- `REFUND_PRORATED`: The transaction has a prorated refund.
- `FAMILY_REVOKE`: The transaction is revoked from Family Sharing.

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)

<a id="discussion"></a>

## Discussion

If the `revocationType` is `REFUND_PRORATED`, see the [revocationPercentage](revocationpercentage.md) for the prorated percentage.

## See Also

### Revocations

- [revocationDate](revocationdate.md): The UNIX time, in milliseconds, that the App Store refunded the transaction or revoked it from Family Sharing.
- [revocationPercentage](revocationpercentage.md): The percentage, in milliunits, of the transaction that the App Store has refunded or revoked.
- [revocationReason](revocationreason.md): The reason for a revoked or refunded transaction.
