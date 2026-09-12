> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/revocationdate](https://developer.apple.com/documentation/appstoreserverapi/revocationdate)

# revocationDate

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The UNIX time, in milliseconds, that the App Store refunded the transaction or revoked it from Family Sharing.

## Declaration

```
timestamp revocationDate
```

## See Also

### Revocation

- [revocationReason](revocationreason.md): The reason for a refunded transaction.
- [revocationPercentage](revocationpercentage.md): The percentage, in milliunits, of the transaction that the App Store has refunded or revoked.
- [revocationType](revocationtype.md): The type of the refund or revocation that applies to the transaction.
