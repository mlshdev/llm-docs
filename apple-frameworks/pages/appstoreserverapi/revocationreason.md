> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/revocationreason](https://developer.apple.com/documentation/appstoreserverapi/revocationreason)

# revocationReason

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The reason for a refunded transaction.

## Declaration

```
int32 revocationReason
```

## Possible Values

- `0`: The App Store refunded the transaction on behalf of the customer for other reasons, for example, an accidental purchase.
- `1`: The App Store refunded the transaction on behalf of the customer due to an actual or perceived issue within your app.

<a id="Discussion"></a>

## Discussion

For Family Sharing transactions, the revocation reason value is `0` if the customer leaves the family group or the owner stops sharing. If the purchaser of a Family Sharing transaction receives a refund, the revocation reason for Family Sharing transactions matches the value of the purchaser’s revocation reason.

## See Also

### Revocation

- [revocationDate](revocationdate.md): The UNIX time, in milliseconds, that the App Store refunded the transaction or revoked it from Family Sharing.
- [revocationPercentage](revocationpercentage.md): The percentage, in milliunits, of the transaction that the App Store has refunded or revoked.
- [revocationType](revocationtype.md): The type of the refund or revocation that applies to the transaction.
