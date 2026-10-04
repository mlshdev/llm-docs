> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/campaigncountryorregionsservingstatereasons

# CampaignCountryOrRegionsServingStateReasons

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Type  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

Reasons that displays when a campaign can’t run.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
string CampaignCountryOrRegionsServingStateReasons
```

## Possible Values

- `APP_NOT_ELIGIBLE`: The app is not eligible in [App Store Connect](https://appstoreconnect.apple.com).
- `APP_NOT_ELIGIBLE_SEARCHADS`: The app is not eligible for Apple Ads.
- `APP_NOT_PUBLISHED_YET`: The app has not been published on the App Store.
- `SAPIN_LAW_AGENT_UNKNOWN`: An agency has not identified as an agency through their Apple Ads account.
- `SAPIN_LAW_FRENCH_BIZ_UNKNOWN`: An app is owned by a business that is headquartered or has a branch in France but has not self-identified as an agency in their Apple Ads account.
- `SAPIN_LAW_FRENCH_BIZ`: An app is owned by a business that is headquartered or has a branch in France and has self-identified as an agency in their Apple Ads account.
- `ACCOUNT_DOC_APPROVAL_EXPIRED`: The account’s business documents have expired.
- `ACCOUNT_DOC_APPROVAL_INFECTED`: The account’s business documents have been removed.
- `ACCOUNT_DOC_APPROVAL_NOT_SUBMITTED`: The account’s business documents have not been submitted.
- `ACCOUNT_DOC_APPROVAL_PENDING`: The account’s business documents approval is pending.
- `ACCOUNT_DOC_APPROVAL_REJECTED`: The account’s business documents approval has been rejected.
- `APP_CONTENT_REJECTED`: The app content approval has been rejected.
- `APP_CONTENT_REVIEW_PENDING`: The app’s content review is successful.
- `APP_DOC_APPROVAL_EXPIRED`: The app’s business documents expired.
- `APP_DOC_APPROVAL_INFECTED`: The app’s business documents have been removed.
- `APP_DOC_APPROVAL_NOT_SUBMITTED`: The app’s business documents require approval.
- `APP_DOC_APPROVAL_PENDING`: The app’s business documents approval is pending.
- `APP_DOC_APPROVAL_REJECTED`: The app’s business documents approval has been rejected.
- `APP_NOT_ELIGIBLE_SUPPLY_SOURCE`: The app is not eligible for promotion with the [SupplySource](supplysource.md).
- `FEATURE_NOT_AVAILABLE_IN_COUNTRY_OR_REGION`: A feature is not available in a [CountryOrRegion](countryorregion.md).

## See Also

### Data Types

- [AdChannelType](adchanneltype.md): Deprecated. The channel type of an ad in a campaign.
- [BillingEventType](billingeventtype.md): Deprecated. The type of billing event for a campaign.
- [CampaignDisplayStatus](campaigndisplaystatus.md): Deprecated. The status of the campaign.
- [CampaignServingStateReasons](campaignservingstatereasons.md): Deprecated. Reasons the system provides when a campaign can’t run.
- [CampaignServingStatus](campaignservingstatus.md): Deprecated. The status of the campaign.
- [CampaignStatus](campaignstatus.md): Deprecated. The status of the campaign.
- [PaymentModel](paymentmodel.md): Deprecated. The payment model that you set.
- [SupplySource](supplysource.md): Deprecated. The ad placements for a campaign.
