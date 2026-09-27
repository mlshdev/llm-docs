> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/ads

# Ads

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** API Collection

Assign an ad creative to an ad group.

<a id="overview"></a>

## Overview

> **Deprecated**

> The Apple Ads Campaign Management API is deprecated and will be sunset on January 26, 2027. Use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api) instead.

You use an [Ad](ad.md) object to assign an ad creative to an ad group. You can assign one active ad per ad group. See also [Ad Rejection Reasons](ad-rejection-reasons.md).

## Topics

### Ad Endpoints

- [Create an Ad](create-an-ad.md): Deprecated. Creates an ad in an ad group with a creative.
- [Find Ads](find-ads.md): Deprecated. Finds ads within a campaign by selector criteria.
- [Find Ads (org-level)](find-ads-%28org-level%29.md): Deprecated. Fetches ads within an organization by selector criteria.
- [Get an Ad](get-an-ad.md): Deprecated. Fetches an ad assigned to an ad group by identifier.
- [Get All Ads](get-all-ads.md): Deprecated. Fetches all ads assigned to an ad group.
- [Update an Ad](update-an-ad.md): Deprecated. Updates an ad in an ad group.
- [Delete an Ad](delete-an-ad.md): Deprecated. Deletes an ad from an ad group.

### Ad Request and Response Objects

- [Ad](ad.md): Deprecated. The assignment of a creative to an ad group.
- [AdCreate](adcreate.md): Deprecated. The request to create an ad, and assign a creative to an ad group.
- [AdUpdate](adupdate.md): Deprecated. The request to update an ad.
- [AdResponse](adresponse.md): Deprecated. The response to an ad request.
- [AdListResponse](adlistresponse.md): Deprecated. The response to a request that returns a list of ads.

### Data Types

- [AdServingStateReasons](adservingstatereasons.md): Deprecated. Reasons the system provides when an ad isn’t running.
- [AdStatus](adstatus.md): Deprecated. The user-controlled status of the ad.
- [AdServingStatus](adservingstatus.md): Deprecated. The status of whether the ad is serving.

## See Also

### Custom Product Page Ads

- [Ad Rejection Reasons](ad-rejection-reasons.md): Review reasons for an ad rejection.
- [Creatives](creatives.md): Create and manage ad creatives within your organization.
- [Custom Product Pages](custom-product-pages.md): View Custom Product Page details.
