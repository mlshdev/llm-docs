> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/asseteligibilitystatus](https://developer.apple.com/documentation/apple-ads-platform-api/asseteligibilitystatus)

# AssetEligibilityStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Overall eligibility status for an asset’s policy evaluation.

## Declaration

```
string AssetEligibilityStatus
```

## Possible Values

- `ELIGIBLE`: No policy constraints. The asset can serve in any applicable context.
- `INELIGIBLE`: The asset can’t serve in any context.
- `LIMITED`: The asset can serve in some placements or countries but is blocked in others. Inspect `blockedGroups` on the parent object for details.
- `PENDING`: The asset requires review before it can be used.
- `UNDEFINED`: Eligibility has not yet been determined.

<a id="Discussion"></a>

## Discussion

The `status` field on [AssetEligibility](asseteligibility.md) is always one of these values. Treat it as the first check before inspecting `blockedGroups` or `allowedGroups`.

The `INELIGIBLE` and `PENDING` statuses mean you should not use the asset in a creative, regardless of what the constraint groups contain. The `LIMITED` status is the only value where you need to consult those groups for placement- and market-specific detail.

## See Also

- [AssetType](assettype.md): The media type of an asset.
- [ImageType](imagetype.md): Image format type for an uploaded asset.
- [Orientation](orientation.md): Asset orientation and aspect ratio classification.
