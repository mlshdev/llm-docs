> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/ad-rejection-reasons

# Ad Rejection Reasons

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** API Collection

Review reasons for an ad rejection.

<a id="overview"></a>

## Overview

> **Deprecated**

> The Apple Ads Campaign Management API is deprecated and will be sunset on January 26, 2027. Use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api) instead.

Ads require approval by Apple. While in review, your [Ad](ad.md) is on hold. After approval, the [AdServingStatus](adservingstatus.md) changes to `RUNNING` unless you schedule it to start on a specific date or [Update an Ad](update-an-ad.md) status to `PAUSED` while in review.

> **Note**

>  In [4.9](apple-search-ads-campaign-management-api-4.md#49) release, all previously rejected Today tab ad creatives were `PAUSED` and resubmitted for re-review. You need to update the status to `ENABLED` after the re-review. See [Update an Ad](update-an-ad.md).

Use [Find Ad Creative Rejection Reasons](find-ad-creative-rejection-reasons.md) or [Get Ad Creative Rejection Reasons](gets-a-product-page-reason.md) to look up rejection reasons. See [ProductPageReason](productpagereason.md) for rejection reason descriptions.

## Topics

### Ad Rejections

- [Find Ad Creative Rejection Reasons](find-ad-creative-rejection-reasons.md): Deprecated. Fetches ad creative rejection reasons.
- [Get Ad Creative Rejection Reasons](gets-a-product-page-reason.md): Deprecated. Fetches ad creative rejection reasons by custom product page ID.
- [Find App Assets](find-app-assets.md): Deprecated. Fetches app asset metadata by adam ID.

### Ad Rejection Reason Objects

- [AppAsset](appasset.md): Deprecated. The app assets associated with an adam ID.
- [AppAssetListResponse](appassetlistresponse.md): Deprecated. The response to a request that returns a list of app assets.
- [ProductPageReason](productpagereason.md): Deprecated. The ad creative rejection reason based on a product page.
- [ProductPageReasonListResponse](productpagereasonlistresponse.md): Deprecated. The response to a request that returns a list of product page rejection reasons.
- [ProductPageReasonResponse](productpagereasonresponse.md): Deprecated. A container for product page reasons.

### Data Types

- [ReasonLevel](reasonlevel.md): Deprecated. The level at which the system applies an ad rejection reason.

## See Also

### Custom Product Page Ads

- [Ads](ads.md): Assign an ad creative to an ad group.
- [Creatives](creatives.md): Create and manage ad creatives within your organization.
- [Custom Product Pages](custom-product-pages.md): View Custom Product Page details.
