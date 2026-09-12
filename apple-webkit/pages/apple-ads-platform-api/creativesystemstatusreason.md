> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativesystemstatusreason](https://developer.apple.com/documentation/apple-ads-platform-api/creativesystemstatusreason)

# CreativeSystemStatusReason

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

A reason code explaining why an ad creative isn’t valid or is pending review.

## Declaration

```
string CreativeSystemStatusReason
```

## Possible Values

- `NEEDS_REVIEW`: The ad creative is queued for Apple review and has not yet been evaluated.
- `POLICY_PROHIBITED`: The ad creative has been rejected due to a policy violation.
- `POLICY_UNDEFINED`: The ad creative could not be evaluated against a known policy.
- `PENDING_ASSET_CHECKS`: One or more assets attached to this ad creative are still undergoing validation.
- `MISSING_ASSET`: A required asset is missing from the ad creative.
- `ASSET_DELETED`: An asset referenced by this ad creative has been deleted.
- `FAILED_ASSET_RATIO_COMPATIBILITY`: An asset’s dimensions are incompatible with the required aspect ratio for this placement.
- `CREATIVE_ASSET_UNAVAILABLE`: A creative asset is not available for delivery.
- `CREATIVE_ASSET_PENDING_AVAILABILITY`: A creative asset is still being processed and is not yet available.
- `PRODUCT_PAGE_DELETED`: The App Store product page referenced in this ad creative was deleted.
- `PRODUCT_PAGE_HIDDEN`: The App Store product page is hidden and unavailable.
- `PRODUCT_PAGE_UNAVAILABLE`: The App Store product page is not available in the targeted storefront.
- `PAUSED_BY_USER`: The ad creative was paused by the advertiser.
- `DELETED_BY_USER`: The ad creative was deleted.

<a id="Discussion"></a>

## Discussion

One or more `CreativeSystemStatusReason` values appear in the `systemStatusReasons` array on a [Creative](creative.md) when `systemStatus` is `INVALID` or `PENDING`. These codes are read-only and system-applied. Use them to diagnose why an ad creative cannot serve and determine the appropriate corrective action.

## See Also

- [CreativeType](creativetype.md): Enum identifying the visual format and placement context of an ad creative.
- [CreativeSystemStatus](creativesystemstatus.md): System-evaluated validation state for an ad creative.
- [DestinationType](destinationtype.md): Specifies where an ad sends users after they tap it.
