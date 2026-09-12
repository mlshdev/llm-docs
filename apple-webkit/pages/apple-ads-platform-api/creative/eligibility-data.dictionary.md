> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creative/eligibility-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/creative/eligibility-data.dictionary)

# Creative.Eligibility

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Eligibility data summarizing whether the ad creative meets requirements to serve ads.

## Declaration

```
object Creative.Eligibility
```

## Properties

- `status` — `string`: The overall eligibility status. Values: `ELIGIBLE`, `INELIGIBLE`. Read-only.
- `allowedGroups` — `CreativeEligibility.AllowedGroups`: The supply sources and placements where this ad creative is eligible to serve. Read-only.
- `blockedGroups` — `CreativeEligibility.BlockedGroups`: The supply sources and placements where this ad creative is not eligible to serve, along with the blocking reason. Read-only.

<a id="Discussion"></a>

## Discussion

Eligibility is read-only and reflects the platform’s current delivery checks for the ad creative across supply sources and placements. See [CreativeEligibility](../creativeeligibility.md) for the full field reference.
