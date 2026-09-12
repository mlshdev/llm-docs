> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/campaigns](https://developer.apple.com/documentation/apple_ads/campaigns)

# Campaigns

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** API Collection

Create and manage Apple Ads campaigns.

<a id="overview"></a>

## Overview

Use campaigns to promote your apps in the App Store. For an app to be eligible for Apple Ads in a particular market, it must be available for purchase, download, or preorder in the App Store, and Apple Ads must be available in the countries and regions you want to promote to. There may be some restrictions that make your app ineligible for Apple Ads advertising in some markets. Use [Find App Eligibility Records](find-app-eligibility-records.md) to determine your app eligibility to run in campaigns.

You must have an `adamId` for each app you’re promoting, a valid email address, and an Apple ID. Apple IDs that only use phone numbers aren’t acceptable. All advertisers must comply with [Apple Ads Advertising Content Policies](https://ads.apple.com/policies).

<a id="Maximize-Conversions"></a>

### Maximize Conversions

A Maximize Conversions bid strategy in campaigns is designed to help you maximize the number of tap-through conversions at or near your target CPA. A Maximize Conversions bid strategy in campaigns uses a cost-per-tap pricing model so you only pay when a user engages with your ad.

To create a campaign with a Maximize Conversions bid strategy, see the payload example in [Create a Campaign](create-a-campaign.md).

A Maximize Conversions bid strategy requires an automated ad group. To create an automated ad group, see the automated ad group payload example in [Create an Ad Group](create-an-ad-group.md).

For details switching between Max Conversions and manual campaigns, see the payload examples in [Update a Campaign](update-a-campaign.md).

For reports with a Maximize Conversions bidding strategy, see campaign and ad group [Get Campaign-Level Reports](get-campaign-level-reports.md) and [Get Ad Group-Level Reports](get-ad-group-level-reports.md).

## Topics

### Campaign Endpoints

- [Create a Campaign](create-a-campaign.md): Creates a campaign to promote an app.
- [Find Campaigns](find-campaigns.md): Fetches campaigns with selector operators.
- [Get a Campaign](get-a-campaign.md): Fetches a specific campaign by campaign identifier.
- [Get all Campaigns](get-all-campaigns.md): Fetches all of an organization’s assigned campaigns.
- [Update a Campaign](update-a-campaign.md): Updates a campaign with a campaign identifier.
- [Delete a Campaign](delete-a-campaign.md): Deletes a specific campaign by campaign identifier.

### Campaign Request and Response Objects

- [Campaign](campaign.md): The response to a request to create and fetch campaigns.
- [CampaignResponse](campaignresponse.md): A container for the campaign response body.
- [Campaign.CountryOrRegionServingStateReasons](campaign/countryorregionservingstatereasons-data.dictionary.md): Reasons why a campaign can’t run.
- [CampaignListResponse](campaignlistresponse.md): The response details of campaign requests.
- [CampaignUpdate](campaignupdate.md): The list of campaign fields that are updatable.
- [UpdateCampaignRequest](updatecampaignrequest.md): The payload properties to clear geotargeting from a campaign.

### Data Types

- [AdChannelType](adchanneltype.md): The channel type of an ad in a campaign.
- [BillingEventType](billingeventtype.md): The type of billing event for a campaign.
- [CampaignCountryOrRegionsServingStateReasons](campaigncountryorregionsservingstatereasons.md): Reasons that displays when a campaign can’t run.
- [CampaignDisplayStatus](campaigndisplaystatus.md): The status of the campaign.
- [CampaignServingStateReasons](campaignservingstatereasons.md): Reasons the system provides when a campaign can’t run.
- [CampaignServingStatus](campaignservingstatus.md): The status of the campaign.
- [CampaignStatus](campaignstatus.md): The status of the campaign.
- [PaymentModel](paymentmodel.md): The payment model that you set.
- [SupplySource](supplysource.md): The ad placements for a campaign.

## See Also

### Campaigns

- [Budget Orders](budget-orders.md): Manage your budgets.
- [Ad Groups](ad-groups.md): Create and manage ad groups.
- [Targeting Keywords and Negative Keywords](targeting-keywords-and-negative-keywords.md): Apply relevant words or phrases that make your campaigns findable.
- [Search Geolocations](search-geolocations.md): Search for apps and geocriteria for your campaigns.
