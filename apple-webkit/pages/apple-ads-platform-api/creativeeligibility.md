> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativeeligibility](https://developer.apple.com/documentation/apple-ads-platform-api/creativeeligibility)

# CreativeEligibility

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Eligibility state for an ad creative across supply sources and placements.

## Declaration

```
object CreativeEligibility
```

## Properties

- `status` — `string`: The overall eligibility status. Values: `ELIGIBLE`, `INELIGIBLE`. Read-only.
- `allowedGroups` — `CreativeEligibility.AllowedGroups`: The supply sources and placements where this ad creative is eligible to serve. Read-only.
- `blockedGroups` — `CreativeEligibility.BlockedGroups`: The supply sources and placements where this ad creative is not eligible to serve, along with the blocking reason. Read-only.

  - reason: Why the ad creative is blocked from serving in this group, for example `APP_NOT_ELIGIBLE`. Read-only.

<a id="Discussion"></a>

## Discussion

The `CreativeEligibility` object describes whether an ad creative is eligible to serve on specific supply sources and placements. It includes both allowed and blocked groups, providing granular visibility into where the ad creative can and cannot serve. To diagnose partial delivery restrictions without needing to check individual ad-level status fields, use this object.

<a id="Example"></a>

### Example

```json
{
  "status": "INELIGIBLE",
  "allowedGroups": [
    {
      "supplyPlacement": ["APPSTORE_SEARCH_TAB", "APPSTORE_TODAY_TAB"],
      "countryOrRegion": ["US", "GB"]
    }
  ],
  "blockedGroups": [
    {
      "supplyPlacement": ["APPSTORE_SEARCH_RESULTS"],
      "countryOrRegion": ["CN"],
      "reason": "APP_NOT_ELIGIBLE"
    }
  ]
}
```

## Topics

### Dictionaries

- [CreativeEligibility.AllowedGroups](creativeeligibility/allowedgroups-data.dictionary.md): The supply sources and placements where this ad creative is eligible to serve.
- [CreativeEligibility.BlockedGroups](creativeeligibility/blockedgroups-data.dictionary.md): The supply sources and placements where this ad creative is not eligible to serve.

## See Also

- [Creative](creative.md): Ad creative containing all data for visually rendering an ad.
- [CreativeCreate](creativecreate.md): The request body for creating a new Creative object.
- [CreativeUpdate](creativeupdate.md): The request body for updating an existing Creative object.
- [CreativeResponse](creativeresponse.md): The response object for an ad creative operation.
- [CreativeQueryResponse](creativequeryresponse.md): The response object for a Creative query, containing matched results and pagination metadata.
- [AssetReference](assetreference.md): A reference to an asset by its UUID.
- [AssetImage](assetimage.md): Image-specific asset detail fields.
- [Destination](destination.md): Post-tap destination entity embedded in a Creative.
- [DestinationCreate](destinationcreate.md): Request payload for specifying the post-tap destination when creating an ad creative.
- [DestinationParameter](destinationparameter.md): Destination-specific identifiers used when linking an ad creative to an App Store product page.
- [CreativeRejectionReason](creativerejectionreason.md): Detailed rejection reason for an ad creative that failed Apple review.
- [CreativeRejectionReasonQueryRequest](creativerejectionreasonqueryrequest.md): The request body for querying ad creative rejection reasons.
- [CreativeRejectionReasonQueryResponse](creativerejectionreasonqueryresponse.md): The response object for a creative rejection reason query, containing matched results and pagination metadata.
- [LocaleInfo](localeinfo.md): Represents a specific language and its corresponding language code.
