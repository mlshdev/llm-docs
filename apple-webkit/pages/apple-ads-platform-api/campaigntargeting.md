> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigntargeting](https://developer.apple.com/documentation/apple-ads-platform-api/campaigntargeting)

# CampaignTargeting

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Defines where a campaign is eligible to serve ads, including supply source, placement, and geographic markets.

## Declaration

```
object CampaignTargeting
```

## Properties

- `supplySource` — `CampaignTargeting.SupplySource`: The supply source(s) where ads are eligible to appear. Possible values: `APPSTORE`, `MAPS`. See [TargetingData](targetingdata.md) for details. Mutable.
- `supplyPlacement` — `CampaignTargeting.SupplyPlacement`: The specific placements within a supply source. Possible values: `APPSTORE_SEARCH_RESULTS`, `APPSTORE_SEARCH_TAB`, `APPSTORE_TODAY_TAB`, `APPSTORE_PRODUCT_PAGES`, `MAPS_SEARCH_RESULTS`, `MAPS_SEARCH_HOME`. See [CampaignTargeting.SupplyPlacement](campaigntargeting/supplyplacement-data.dictionary.md) for the supply source each placement belongs to. See [TargetingData](targetingdata.md) for details. Mutable.
- `countryOrRegion` — `CampaignTargeting.CountryOrRegion`: The countries or regions where the campaign serves ads. Uses ISO 3166-1 alpha-2 country codes. See [TargetingData](targetingdata.md) for details. Mutable.

<a id="Discussion"></a>

## Discussion

The `CampaignTargeting` object defines where a campaign is eligible to serve ads, using three `TargetingData` fields: `supplySource`, `supplyPlacement`, and `countryOrRegion`.

The `supplySource`, `supplyPlacement`, and `countryOrRegion` fields are all include-only at the campaign level: the `exclude` array isn’t supported for any of the three dimensions. Use [CampaignTargetingCreate](campaigntargetingcreate.md) to supply these values when creating a new campaign. Once the campaign exists, all three dimensions remain mutable via [CampaignTargetingUpdate](campaigntargetingupdate.md). After campaign-level targeting is in place, [AdGroupTargeting](adgrouptargeting.md) provides further audience and delivery refinements at the ad group level.

<a id="Example"></a>

### Example

```json
{
  "supplySource": {
    "include": [
      "APPSTORE"
    ]
  },
  "supplyPlacement": {
    "include": [
      "APPSTORE_SEARCH_RESULTS",
      "APPSTORE_SEARCH_TAB"
    ]
  },
  "countryOrRegion": {
    "include": [
      "US",
      "CA"
    ]
  }
}
```

## Topics

### Dictionaries

- [CampaignTargeting.CountryOrRegion](campaigntargeting/countryorregion-data.dictionary.md): The countries or regions where a campaign’s ads are eligible to serve.
- [CampaignTargeting.SupplyPlacement](campaigntargeting/supplyplacement-data.dictionary.md): The specific placement within a supply source where a campaign’s ads are eligible to appear.
- [CampaignTargeting.SupplySource](campaigntargeting/supplysource-data.dictionary.md): The supply source where a campaign’s ads are eligible to appear.

## See Also

- [Campaign](campaign.md): The top-level container that defines a campaign’s promoted object, billing, scheduling, and targeting.
- [CampaignCreate](campaigncreate.md): The request body for creating a new campaign.
- [CampaignUpdate](campaignupdate.md): The request body for updating an existing Campaign object.
- [CampaignResponse](campaignresponse.md): The response object for a Campaign operation.
- [CampaignQueryResponse](campaignqueryresponse.md): The response object for a Campaign query, containing matched results and pagination metadata.
- [CampaignTargetingCreate](campaigntargetingcreate.md): Targeting configuration supplied when creating a campaign.
- [DailyBudget](dailybudget.md): Daily budget cap for a campaign.
- [DailyBudgetCreate](dailybudgetcreate.md): Request wrapper for setting a campaign’s daily budget at creation time.
- [Money](money.md): Monetary representation with currency.
- [InvoiceDetailCreate](invoicedetailcreate.md): Invoice billing contact details supplied when creating a campaign or budget order.
- [LegacyAppLimitedStatusReasonDetailsResponse](legacyapplimitedstatusreasondetailsresponse.md): Response wrapper returning per-country or per-region limited-status reasons for legacy app campaigns.
- [CampaignTargetingUpdate](campaigntargetingupdate.md): Targeting configuration for updating an existing campaign’s supply source, placement, and geographic markets.
- [DailyBudgetUpdate](dailybudgetupdate.md): Request wrapper for updating a campaign’s daily budget amount.
- [LegacyAppLimitedStatusReasonDetails](legacyapplimitedstatusreasondetails.md): Per-country or per-region limited-status reasons for legacy app campaigns.
- [ResponsePagination](responsepagination.md): Pagination metadata returned in Campaign list responses, supporting offset-based navigation.
