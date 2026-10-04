> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/targeting-keywords-and-negative-keywords

# Targeting Keywords and Negative Keywords

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** API Collection

Apply relevant words or phrases that make your campaigns findable.

<a id="overview"></a>

## Overview

> **Deprecated**

> The Apple Ads Campaign Management API is deprecated and will be sunset on January 26, 2027. Use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api) instead.

Ad groups use two keyword object types: `targeting` and `negative`. Use targeting keywords to show ads according to relevant search terms people might use to find your app. Use negative keywords with campaigns and ad groups to prevent ads from showing in App Store searches.

See the Enable and Disable Search Match section of [Ad Groups](ad-groups.md) for details about how to automatically show ads for search terms relevant to your app. You can use up to 5000 targeting keywords and negative keywords per ad group, and up to 1000 keywords per API call. Keywords are case-insensitive.

## Topics

### Ad Group Targeting Keywords Endpoints

- [Create Targeting Keywords](create-targeting-keywords.md): Deprecated. Creates targeting keywords in ad groups.
- [Find Targeting Keywords in a Campaign](find-targeting-keywords-in-a-campaign.md): Deprecated. Fetches targeting keywords in a campaign’s ad groups.
- [Get a Targeting Keyword in an Ad Group](get-a-targeting-keyword-in-an-ad-group.md): Deprecated. Fetches a specific targeting keyword in an ad group.
- [Get All Targeting Keywords in an Ad Group](get-all-targeting-keywords-in-an-ad-group.md): Deprecated. Fetches all targeting keywords in ad groups.
- [Update Targeting Keywords](update-targeting-keywords.md): Deprecated. Updates targeting keywords in ad groups.
- [Delete Targeting Keywords](delete-targeting-keywords.md): Deprecated. Deletes targeting keywords from ad groups.
- [Delete a Targeting Keyword](delete-a-targeting-keyword.md): Deprecated. Deletes a targeting keyword in an ad group.

### Campaign Negative Keywords Endpoints

- [Create Campaign Negative Keywords](create-campaign-negative-keywords.md): Deprecated. Creates negative keywords for a campaign.
- [Find Campaign Negative Keywords](find-campaign-negative-keywords.md): Deprecated. Fetches negative keywords for campaigns.
- [Get a Campaign Negative Keyword](get-a-campaign-negative-keyword.md): Deprecated. Fetches a specific negative keyword in a campaign.
- [Get All Campaign Negative Keywords](get-all-campaign-negative-keywords.md): Deprecated. Fetches all negative keywords in a campaign.
- [Update Campaign Negative Keywords](update-campaign-negative-keywords.md): Deprecated. Updates negative keywords in a campaign.
- [Delete Campaign Negative Keywords](delete-campaign-negative-keywords.md): Deprecated. Deletes negative keywords from a campaign.

### Ad Group Negative Keywords Endpoints

- [Create Ad Group Negative Keywords](create-ad-group-negative-keywords.md): Deprecated. Creates negative keywords in a specific ad group.
- [Find Ad Group Negative Keywords](find-ad-group-negative-keywords.md): Deprecated. Fetches negative keywords in a campaign’s ad groups.
- [Get an Ad Group Negative Keyword](get-an-ad-group-negative-keyword.md): Deprecated. Fetches a specific negative keyword in an ad group.
- [Get All Ad Group Negative Keywords](get-all-ad-group-negative-keywords.md): Deprecated. Fetches all negative keywords in ad groups.
- [Update Ad Group Negative Keywords](update-ad-group-negative-keywords.md): Deprecated. Updates negative keywords in an ad group.
- [Delete Ad Group Negative Keywords](delete-ad-group-negative-keywords.md): Deprecated. Deletes negative keywords from an ad group.

### Keywords Request and Response Objects

- [Keyword](keyword.md): Deprecated. Targeting keyword parameters to use in requests and responses.
- [NegativeKeyword](negativekeyword.md): Deprecated. Negative keyword parameters to use in requests and responses.
- [KeywordResponse](keywordresponse.md): Deprecated. A container for the targeting keywords response body.
- [KeywordListResponse](keywordlistresponse.md): Deprecated. The response details of targeting keyword requests.
- [KeywordUpdateRequest](keywordupdaterequest.md): Deprecated. Targeting keyword parameters to use in requests and responses.
- [NegativeKeywordResponse](negativekeywordresponse.md): Deprecated. A container for the negative keyword response body.
- [NegativeKeywordListResponse](negativekeywordlistresponse.md): Deprecated. The response details of negative keyword requests.

## See Also

### Campaigns

- [Campaigns](campaigns.md): Create and manage Apple Ads campaigns.
- [Budget Orders](budget-orders.md)
- [Ad Groups](ad-groups.md)
- [Search Geolocations](search-geolocations.md): Search for apps and geocriteria for your campaigns.
