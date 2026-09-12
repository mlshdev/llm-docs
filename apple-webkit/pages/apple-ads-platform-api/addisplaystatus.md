> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/addisplaystatus](https://developer.apple.com/documentation/apple-ads-platform-api/addisplaystatus)

# AdDisplayStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Rolled-up delivery state for an ad, combining advertiser settings and system conditions into a single user-facing label.

## Declaration

```
string AdDisplayStatus
```

## Possible Values

- `RUNNING`: The ad is actively delivering.
- `PAUSED`: The advertiser paused the ad.
- `ON_HOLD`: A system or account condition stops delivery.
- `LIMITED`: The ad is serving but at reduced capacity.
- `PROCESSING`: The system is processing the ad after a recent creation or update.
- `DELETED`: The advertiser soft-deleted the ad.
- `AD_GROUP_ON_HOLD`: Delivery stops because the parent ad group is on hold.
- `CAMPAIGN_ON_HOLD`: Delivery stops because the parent campaign is on hold.

<a id="Discussion"></a>

## Discussion

The `AdDisplayStatus` is a read-only derived field on [Ad](ad.md) that summarizes the effective delivery state of the ad. It accounts for the ad’s own `AdStatus`, parent ad group status, and parent campaign status. When displaying ad health in a UI, use this field.

## See Also

- [AdStatus](adstatus.md): Enumeration of advertiser-configurable serving states for an ad.
- [AdSystemStatus](adsystemstatus.md): Enumeration of system-evaluated delivery states for an ad.
- [AdSystemStatusReason](adsystemstatusreason.md): A reason code explaining why an ad is not currently running.
- [AdSystemLimitedStatusReason](adsystemlimitedstatusreason.md): A reason code indicating that an ad is running but at reduced delivery capacity due to a policy condition.
