> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/transactioncommitmentinfo

# TransactionCommitmentInfo

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.21+

## Declaration

```
object TransactionCommitmentInfo
```

## Properties

- `billingPeriodNumber` — `billingPeriodNumber`: **Minimum:** `1`
  **Maximum:** `12`
- `commitmentExpiresDate` — `commitmentExpiresDate`:
- `commitmentPrice` — `commitmentPrice`:
- `totalBillingPeriods` — `totalBillingPeriods`:

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

## See Also

### Monthly subscriptions with 12-month commitments

- [billingPeriodNumber](billingperiodnumber.md)
- [commitmentExpiresDate](commitmentexpiresdate.md)
- [commitmentPrice](commitmentprice.md)
- [totalBillingPeriods](totalbillingperiods.md)
- [RenewalCommitmentInfo](renewalcommitmentinfo.md)
- [commitmentAutoRenewProductId](commitmentautorenewproductid.md)
- [commitmentAutoRenewStatus](commitmentautorenewstatus.md)
- [commitmentRenewalBillingPlanType](commitmentrenewalbillingplantype.md)
- [commitmentRenewalDate](commitmentrenewaldate.md)
- [commitmentRenewalPrice](commitmentrenewalprice.md)
