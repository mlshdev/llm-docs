> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/revocationpercentage](https://developer.apple.com/documentation/appstoreserverapi/revocationpercentage)

# revocationPercentage

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.19+

The percentage, in milliunits, of the transaction that the App Store has refunded or revoked.

## Declaration

```
int32 revocationPercentage
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="discussion"></a>

## Discussion

The revocation percentage value is rounded to three decimal places of precision, and is expressed as an integer, in milliunits. This field is present in the [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md) for refunded transactions. This field doesn’t appear if the refund is reversed.

The following table shows several examples of revocation percentages, and their milliunit equivalents:

| Percentage | Integer equivalent, in milliunits |
| --- | --- |
| 67.932% | 67932 |
| 0.015% | 15 |
| 40% | 40000 |
| 100% | 100000 |

## See Also

### Revocation

- [revocationDate](revocationdate.md): The UNIX time, in milliseconds, that the App Store refunded the transaction or revoked it from Family Sharing.
- [revocationReason](revocationreason.md): The reason for a refunded transaction.
- [revocationType](revocationtype.md): The type of the refund or revocation that applies to the transaction.
