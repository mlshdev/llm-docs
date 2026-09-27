> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/creatives

# Creatives

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** API Collection

Create and manage ad creatives within your organization.

<a id="overview"></a>

## Overview

> **Deprecated**

> The Apple Ads Campaign Management API is deprecated and will be sunset on January 26, 2027. Use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api) instead.

You assign [Creative](creative.md) objects to your [Custom Product Pages](custom-product-pages.md). You can assign one [Creative](creative.md) per custom product page per organization. After assigning your creative, the next step is to [Create an Ad](create-an-ad.md) object to assign to an ad group.

## Topics

### Creative Endpoints

- [Create a Creative](create-a-creative.md): Deprecated. Creates a creative object within an organization.
- [Find Creatives](find-creatives.md): Deprecated. Finds creatives within an organization.
- [Get a Creative](get-a-creative.md): Deprecated. Fetches a creative by identifier.
- [Get All Creatives](get-all-creatives.md): Deprecated. Fetches all creatives within an organization.

### Creative Request and Response Objects

- [AppPreviewDevicesMappingResponse](apppreviewdevicesmappingresponse.md): Deprecated. The app preview device mapping response to display name and size mapping requests.
- [Creative](creative.md): Deprecated. The creative object.
- [CreativeLocalization](creativelocalization.md): Deprecated. The localized creative metadata.
- [CreativeLocalizationWithAssets](creativelocalizationwithassets.md): Deprecated. The localized creative metadata with app preview.
- [CustomProductPageCreative](customproductpagecreative.md): Deprecated. The creative details of a product page.
- [CreativeResponse](creativeresponse.md): Deprecated. The response details of a creative request.
- [CreativeListResponse](creativelistresponse.md): Deprecated. A container for response details of a creative request.
- [DefaultProductPageCreative](defaultproductpagecreative.md): The default product page object.
- [MediaAppAsset](mediaappasset.md): Deprecated. The asset details of app preview or app screenshots.
- [MediaAppAssetsDetail](mediaappassetsdetail.md): Deprecated. The app asset details of a device.

### Data Types

- [CreativeType](creativetype.md): Deprecated. The type of creative.
- [CreativeState](creativestate.md): Deprecated. The system state of the creative.
- [CreativeStateReason](creativestatereason.md): Deprecated. Reasons the system provides when an ad isn’t running.

## See Also

### Custom Product Page Ads

- [Ads](ads.md): Assign an ad creative to an ad group.
- [Ad Rejection Reasons](ad-rejection-reasons.md): Review reasons for an ad rejection.
- [Custom Product Pages](custom-product-pages.md): View Custom Product Page details.
