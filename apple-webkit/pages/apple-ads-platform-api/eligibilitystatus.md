> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/eligibilitystatus](https://developer.apple.com/documentation/apple-ads-platform-api/eligibilitystatus)

# EligibilityStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Overall eligibility status for an entity’s policy evaluation.

## Declaration

```
string EligibilityStatus
```

## Possible Values

- `ELIGIBLE`: No policy constraints. The entity can serve in any applicable context.
- `INELIGIBLE`: The entity can’t serve in any context.
- `LIMITED`: The entity can serve in some placements or countries but is blocked in others. Inspect `blockedGroups` on the parent `Eligibility` for details.
- `PENDING`: The entity requires review before it can be used.
- `UNDEFINED`: Eligibility has not yet been determined.

<a id="Discussion"></a>

## Discussion

The `EligibilityStatus` is a string enumeration embedded within [Eligibility](eligibility.md). Use it to decide quickly whether to proceed before configuring campaigns.

## See Also

- [LocationGroupType](locationgrouptype.md): How a location group’s membership is composed: dynamically via rules, or as a static, explicit list.
